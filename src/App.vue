<script lang="ts">
import HeaderNav from "./components/HeaderNav.vue";
import PostsList from "./components/PostsList.vue";

export default {
  components: {
    HeaderNav,
    PostsList,
  },
};
</script>

<template>
  <header>
    <HeaderNav />
  </header>
  <main class="container">
    <PostsList />
  </main>
</template>

<style scoped></style>
