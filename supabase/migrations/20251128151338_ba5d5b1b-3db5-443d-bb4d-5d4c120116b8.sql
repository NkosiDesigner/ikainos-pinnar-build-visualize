-- Create enum for booking status
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');

-- Create properties table for AR tours
CREATE TABLE public.properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  description TEXT,
  property_type TEXT NOT NULL,
  price DECIMAL(12, 2),
  image_url TEXT,
  manager_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create tour_time_slots table
CREATE TABLE public.tour_time_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  is_available BOOLEAN DEFAULT true,
  max_attendees INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  CONSTRAINT valid_time_range CHECK (end_time > start_time)
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  time_slot_id UUID REFERENCES public.tour_time_slots(id) ON DELETE CASCADE NOT NULL,
  tenant_name TEXT NOT NULL,
  tenant_email TEXT NOT NULL,
  tenant_phone TEXT,
  status booking_status DEFAULT 'pending',
  reminder_sent BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(time_slot_id)
);

-- Enable Row Level Security
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tour_time_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for properties (public read, managers can create/update)
CREATE POLICY "Properties are viewable by everyone"
  ON public.properties FOR SELECT
  USING (true);

CREATE POLICY "Property managers can create properties"
  ON public.properties FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Property managers can update their properties"
  ON public.properties FOR UPDATE
  USING (true);

-- RLS Policies for tour_time_slots (public read, managers can manage)
CREATE POLICY "Time slots are viewable by everyone"
  ON public.tour_time_slots FOR SELECT
  USING (true);

CREATE POLICY "Managers can create time slots"
  ON public.tour_time_slots FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Managers can update time slots"
  ON public.tour_time_slots FOR UPDATE
  USING (true);

-- RLS Policies for bookings (tenants can create, view their own)
CREATE POLICY "Tenants can create bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Tenants can view their own bookings"
  ON public.bookings FOR SELECT
  USING (true);

CREATE POLICY "Managers can view all bookings"
  ON public.bookings FOR SELECT
  USING (true);

CREATE POLICY "Managers can update bookings"
  ON public.bookings FOR UPDATE
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON public.properties
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tour_time_slots_updated_at
  BEFORE UPDATE ON public.tour_time_slots
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable realtime for bookings
ALTER PUBLICATION supabase_realtime ADD TABLE public.bookings;
ALTER PUBLICATION supabase_realtime ADD TABLE public.tour_time_slots;

-- Insert some sample properties and time slots for testing
INSERT INTO public.properties (name, address, description, property_type, price, image_url) VALUES
('Modern Villa', 'Harare, Zimbabwe', 'Stunning 4-bedroom villa with AR tour capabilities', 'House', 250000, '/placeholder.svg'),
('City Apartment', 'Bulawayo, Zimbabwe', 'Contemporary 2-bedroom apartment in prime location', 'Apartment', 120000, '/placeholder.svg'),
('Suburban Home', 'Mutare, Zimbabwe', 'Family-friendly 3-bedroom home with large garden', 'House', 180000, '/placeholder.svg');

-- Insert sample time slots for next 7 days
INSERT INTO public.tour_time_slots (property_id, start_time, end_time, is_available)
SELECT 
  p.id,
  (CURRENT_DATE + (d || ' days')::interval + (h || ' hours')::interval)::timestamp with time zone,
  (CURRENT_DATE + (d || ' days')::interval + (h || ' hours')::interval + '1 hour'::interval)::timestamp with time zone,
  true
FROM 
  public.properties p,
  generate_series(1, 7) as d,
  generate_series(9, 17, 2) as h;