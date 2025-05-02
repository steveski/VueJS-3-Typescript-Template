<script lang="ts" setup>
import { useFavicon } from '@vueuse/core';
import { useRoute } from 'vue-router';

useFavicon('/favicon.ico');
// const favicon = useFavicon('/favicon.ico');
// favicon.value = '/path to new icon';

const route = useRoute();
</script>

<template>
  <router-view />
</template>
