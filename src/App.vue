<script lang="ts">
import HeaderNav from './components/HeaderNav.vue';
import PostsList from './components/PostsList.vue';
import Login from './components/Login.vue';
import type { Post, User } from './types';
import { client } from './utils';

export default {
  mounted() {
    let userId: number;

    client
      .get<User[]>('/users')
      .then(users => {
        const myUser = users.filter(
          (user: User) => user.email === 'rpm.steel@gmail.com'
        );

        console.log(myUser);
        userId = myUser[0].id;
      })
      .then(() => {
        client
          .get<Post[]>(`/posts?userId=${userId}`)
          .then(posts => console.log(posts));
      });
  },
  components: {
    HeaderNav,
    PostsList,
    Login
  }
};
</script>

<template>
  <template v-if="false">
    <Login />
  </template>

  <template v-else>
    <header>
      <HeaderNav />
    </header>
    <main class="section">
      <Login />
      <PostsList />
    </main>
  </template>
</template>

<style scoped></style>
