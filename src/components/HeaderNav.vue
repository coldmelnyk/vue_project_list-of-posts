<script setup lang="ts"></script>

<template>
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-item">
      <h2 className="is-size-4">Vue List Of Posts</h2>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <div className="mr-5 mb-2">
            <p>User: {user.name}</p>
          </div>

          <a className="button is-light"> Logout </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
