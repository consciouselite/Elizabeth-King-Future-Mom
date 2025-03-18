/*
  # Update RLS policies for quiz app

  1. Changes
    - Allow public access for inserting quiz data
    - Maintain secure read access
    - Enable anonymous submissions

  2. Security
    - Public write access for quiz submissions
    - Authenticated read access for own data
*/

-- Update users table policies
DROP POLICY IF EXISTS "Users can insert own data" ON users;
CREATE POLICY "Anyone can insert data"
  ON users
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Update quiz_responses table policies
DROP POLICY IF EXISTS "Users can insert own quiz responses" ON quiz_responses;
CREATE POLICY "Anyone can insert quiz responses"
  ON quiz_responses
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Update quiz_answers table policies
DROP POLICY IF EXISTS "Users can insert own quiz answers" ON quiz_answers;
CREATE POLICY "Anyone can insert quiz answers"
  ON quiz_answers
  FOR INSERT
  TO public
  WITH CHECK (true);