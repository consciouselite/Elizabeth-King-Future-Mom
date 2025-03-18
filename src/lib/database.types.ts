export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          gender: string
          age_group: string
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          gender: string
          age_group: string
          created_at?: string
        }
      }
      quiz_responses: {
        Row: {
          id: string
          user_id: string
          total_score: number
          personality_type: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          total_score: number
          personality_type: string
          created_at?: string
        }
      }
      quiz_answers: {
        Row: {
          id: string
          response_id: string
          question_id: number
          answer_score: number
          created_at: string
        }
        Insert: {
          id?: string
          response_id: string
          question_id: number
          answer_score: number
          created_at?: string
        }
      }
    }
  }
}