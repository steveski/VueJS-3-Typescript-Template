import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter.store';

export function useCounter() {
  const store = useCounterStore();
  const { count } = storeToRefs(store);
  const double = () => store.count * 2;
  return { count, increment: store.increment, double };
}
