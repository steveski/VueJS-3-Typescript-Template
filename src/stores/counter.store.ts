import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  function increment(amount = 1) {
    count.value += amount;
  }

  return {
    count,
    increment,
  };
});
