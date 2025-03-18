import { supabase } from '../lib/supabase/client';
import { userService } from './user.service';
import type { UserData } from '../types/quiz';

export const quizService = {
  async saveQuizResults(
    userData: UserData,
    totalScore: number,
    personalityType: string,
    answers: number[]
  ): Promise<void> {
    try {
      // Create user first
      const user = await userService.createUser(userData);

      // Save quiz response
      const { data: response, error: responseError } = await supabase
        .from('quiz_responses')
        .insert({
          user_id: user.id,
          total_score: totalScore,
          personality_type: personalityType
        })
        .select('id')
        .single();

      if (responseError) throw responseError;

      // Save individual answers
      const { error: answersError } = await supabase
        .from('quiz_answers')
        .insert(
          answers.map((score, index) => ({
            response_id: response.id,
            question_id: index + 1,
            answer_score: score
          }))
        );

      if (answersError) throw answersError;
    } catch (error) {
      console.error('Failed to save quiz results:', error);
      throw new Error('Failed to save quiz results. Please try again.');
    }
  }
};