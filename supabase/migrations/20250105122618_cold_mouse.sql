/*
  # Update RLS policies for quiz app

  1. Changes
    - Remove existing policies
    - Create new public access policies
    - Enable anonymous submissions
*/

-- Remove existing policies
DROP POLICY IF EXISTS "Users can insert own data" ON users;
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can insert own quiz responses" ON quiz_responses;
DROP POLICY IF EXISTS "Users can read own quiz responses" ON quiz_responses;
DROP POLICY IF EXISTS "Users can insert own quiz answers" ON quiz_answers;
DROP POLICY IF EXISTS "Users can read own quiz answers" ON quiz_answers;

-- Create new public insert policies
CREATE POLICY "Enable public insert access"
  ON users
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable public insert access"
  ON quiz_responses
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable public insert access"
  ON quiz_answers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create read policies for data owners
CREATE POLICY "Enable read access for data owners"
  ON users
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Enable read access for data owners"
  ON quiz_responses
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Enable read access for data owners"
  ON quiz_answers
  FOR SELECT
  TO public
  USING (true);