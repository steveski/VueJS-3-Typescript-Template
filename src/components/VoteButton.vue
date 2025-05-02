<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

const { count, increment, double } = useCounter();
</script>

<template>
  <button @click="increment()">Votes: {{ count }}</button>
  <p>Double: {{ double() }}</p>
</template>
