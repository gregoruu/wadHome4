<template>
  <div class="view-container">
    <div class="contact">
      <h1>Welcome to PostIt!</h1>
      <p>You can contact us on our <a href="https://github.com/gregoruu/wadHome4">GitHub repository</a>.</p>
      <p>University of Tartu, WAD 2025 group project.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.contact {
  background: var(--light-color);
  padding: 2rem;
  border-radius: 1rem;
}

.contact > h1 {
  margin-bottom: 1rem;
}

.contact {
  display: flex;
  flex-direction: column;
  margin: 2rem;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
