<script setup lang="ts"></script>

<template>
  <div className="tile is-parent is-8-desktop Sidebar Sidebar--open">
    <div className="tile is-child box is-success ">
      <div className="tile is-child box is-success ">
        <div className="content">
          <!-- Content here -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Sidebar {
  overflow: hidden;
  opacity: 0;
  transition-property: max-width, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  @media (min-width: 769px) {
    max-width: 0;
  }
}

.Sidebar--open {
  opacity: 1;

  @media (min-width: 769px) {
    max-width: 50%;
  }
}
</style>
