/*
  # Create leads and course_registrations tables

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `message` (text, not null)
      - `created_at` (timestamp with time zone, default: now())
    - `course_registrations`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `phone` (text, not null)
      - `email` (text, not null)
      - `course_mode` (text, not null)
      - `created_at` (timestamp with time zone, default: now())
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read and insert
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS for leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to read the leads
CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to allow authenticated users to insert into leads
CREATE POLICY "Authenticated users can insert into leads"
  ON leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create course_registrations table
CREATE TABLE IF NOT EXISTS course_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  course_mode text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS for course_registrations
ALTER TABLE course_registrations ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to read the course_registrations
CREATE POLICY "Authenticated users can read course_registrations"
  ON course_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to allow authenticated users to insert into course_registrations
CREATE POLICY "Authenticated users can insert into course_registrations"
  ON course_registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);