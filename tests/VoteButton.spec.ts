import { render, fireEvent } from '@testing-library/vue';
import VoteButton from '../src/components/VoteButton.vue';

test('increments vote count on click', async () => {
  const { getByText } = render(VoteButton);
  const button = getByText(/Votes: 0/i);
  await fireEvent.click(button);
  getByText(/Votes: 1/);
});
