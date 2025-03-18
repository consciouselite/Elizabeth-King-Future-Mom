/*
  # Quiz Application Schema

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text, unique)
      - `phone` (text)
      - `gender` (text)
      - `age_group` (text)
      - `created_at` (timestamp)

    - `quiz_responses`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references users)
      - `total_score` (integer)
      - `personality_type` (text)
      - `created_at` (timestamp)

    - `quiz_answers`
      - `id` (uuid, primary key)
      - `response_id` (uuid, references quiz_responses)
      - `question_id` (integer)
      - `answer_score` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  gender text NOT NULL,
  age_group text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create quiz_responses table
CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  total_score integer NOT NULL,
  personality_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create quiz_answers table
CREATE TABLE IF NOT EXISTS quiz_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  response_id uuid REFERENCES quiz_responses(id) NOT NULL,
  question_id integer NOT NULL,
  answer_score integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read own quiz responses"
  ON quiz_responses
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own quiz responses"
  ON quiz_responses
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can read own quiz answers"
  ON quiz_answers
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM quiz_responses
    WHERE quiz_responses.id = quiz_answers.response_id
    AND quiz_responses.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own quiz answers"
  ON quiz_answers
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM quiz_responses
    WHERE quiz_responses.id = quiz_answers.response_id
    AND quiz_responses.user_id = auth.uid()
  ));