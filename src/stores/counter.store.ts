import { defineStore } from 'pinia';

export interface CounterState {
  count: number;
}

export const useCounterStore = defineStore('counter', {
  state: (): CounterState => ({
    count: 0,
  }),
  actions: {
    increment(amount = 1) {
      this.count += amount;
    },
  },
});
