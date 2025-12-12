<template>
  <header class="header">
    <nav>
      <h1>
        <router-link to="/">Home</router-link>
        <router-link to="/contacts">Contacts</router-link>
<!--        <router-link to="/add">Add</router-link> | -->
<!--     <router-link to="/signup">SignUp</router-link> | -->
<!--     <router-link to="/login">LogIn</router-link> | -->
      </h1>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  min-width: 100%;
}

nav {
    margin-top: 2%;
  display: flex;
  justify-content: center;
}
</style>