
'use server';
import { personalizedEventSuggestions, type PersonalizedEventSuggestionsInput, type PersonalizedEventSuggestionsOutput } from '@/ai/flows/personalized-event-suggestions';

export async function getPersonalizedEventSuggestions(
  input: PersonalizedEventSuggestionsInput
): Promise<PersonalizedEventSuggestionsOutput | { error: string }> {
  try {
    const result = await personalizedEventSuggestions(input);
    return result;
  } catch (error) {
    console.error("Error in getPersonalizedEventSuggestions:", error);
    return { error: "Failed to get event suggestions. Please try again." };
  }
}
