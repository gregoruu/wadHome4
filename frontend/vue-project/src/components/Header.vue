<template>
  <header class="header morphContainer">
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
  justify-content: center;
}

nav, h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>