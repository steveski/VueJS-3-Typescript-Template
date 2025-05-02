<script lang="ts" setup>
import { ref } from 'vue';

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleNav();
  }
};
</script>

<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <span class="brand-title">My App</span>
        <button
          class="hamburger"
          :class="{ open: isNavOpen }"
          @click="toggleNav"
          @keydown="handleKeyDown"
          aria-label="Toggle navigation menu"
          :aria-expanded="isNavOpen"
          aria-controls="main-nav-links"
        >
          <svg viewBox="0 0 100 100" width="30">
            <rect class="line top" width="80" height="10" x="10" y="25" rx="5" />
            <rect class="line middle" width="80" height="10" x="10" y="45" rx="5" />
            <rect class="line bottom" width="80" height="10" x="10" y="65" rx="5" />
          </svg>
        </button>
      </div>
      <div id="main-nav-links" class="nav-links" :class="{ open: isNavOpen }">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
    </nav>
    <main class="container">
      <slot />
    </main>
  </div>
</template>
