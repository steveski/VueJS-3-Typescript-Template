import { useCounter } from '../src/composables/useCounter';

test('increments the count', () => {
  const { count, increment } = useCounter();
  expect(count.value).toBe(0);
  increment();
  expect(count.value).toBe(1);
});
