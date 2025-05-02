<script lang="ts" setup></script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="about">About</router-link>
      <router-link to="blog">Blog</router-link>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>
