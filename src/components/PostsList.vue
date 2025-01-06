<script setup lang="ts">
  import PostTab from './PostTab.vue';
</script>

<template>
  <div className="tile is-parent">
    <div className="tile is-child box is-success">
      <div className="block">
        <div className="block is-flex is-justify-content-space-between">
          <p className="title">Posts</p>
          <button type="button" className="button is-link">Add New Post</button>
        </div>

        <table className="table is-fullwidth is-striped is-hoverable is-narrow">
          <thead>
            <tr className="has-background-link-light">
              <th>ID</th>
              <th>Title</th>
              <th className="has-text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <PostTab />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
