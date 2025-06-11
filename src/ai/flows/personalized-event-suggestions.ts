'use server';

/**
 * @fileOverview Personalized event suggestions AI agent.
 *
 * - personalizedEventSuggestions - A function that provides personalized event suggestions.
 * - PersonalizedEventSuggestionsInput - The input type for the personalizedEventSuggestions function.
 * - PersonalizedEventSuggestionsOutput - The return type for the personalizedEventSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedEventSuggestionsInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma-separated list of the visitor\'s interests.'),
  season: z.string().describe('The current season (e.g., Spring, Summer, Autumn, Winter).'),
});
export type PersonalizedEventSuggestionsInput = z.infer<
  typeof PersonalizedEventSuggestionsInputSchema
>;

const PersonalizedEventSuggestionsOutputSchema = z.object({
  eventSuggestions: z
    .array(z.string())
    .describe('A list of personalized event suggestions based on the visitor\'s interests and the current season.'),
});
export type PersonalizedEventSuggestionsOutput = z.infer<
  typeof PersonalizedEventSuggestionsOutputSchema
>;

export async function personalizedEventSuggestions(
  input: PersonalizedEventSuggestionsInput
): Promise<PersonalizedEventSuggestionsOutput> {
  return personalizedEventSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedEventSuggestionsPrompt',
  input: {schema: PersonalizedEventSuggestionsInputSchema},
  output: {schema: PersonalizedEventSuggestionsOutputSchema},
  prompt: `You are a temple event planner. A visitor to the temple has the following interests: {{{interests}}}. The current season is {{{season}}}. Suggest a few upcoming temple events that would be of interest to this visitor. Return the event suggestions as a list of strings, with a short description of each event.`,
});

const personalizedEventSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedEventSuggestionsFlow',
    inputSchema: PersonalizedEventSuggestionsInputSchema,
    outputSchema: PersonalizedEventSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
