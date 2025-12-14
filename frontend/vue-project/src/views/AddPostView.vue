<template>
  <div class="view-container">
    <main class="post">
      <h2>Add Post</h2>
      <div id="body-input">
        <label for="body">Body</label>
        <textarea id="body" placeholder="Body" v-model="body" rows="4"></textarea>
      </div>
      <div class="buttons-container">
        <button class="morphButton" @click="AddPost">Add</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      body: ""
    };
  },
  methods: {
    async AddPost() {
      const postData = {body: this.body};
      try {
        const res = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: "include",
          body: JSON.stringify(postData),
        });

        if (res.status === 401) {
          this.$router.push("/login");
          return;
        }

        this.body = "";
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
main {
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}

#body-input {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.input-row > label, .input-row input {
  font-size: 1.2rem;
  text-align: center;
  border-radius: 20px;
  border: 0;
}

label {
  padding-right: 1rem;
}

input {
  padding: 0.25rem;
}

textarea {
  width: auto;
  border-radius: 0.5rem;
  border: 1px solid #cccccc;
  resize: vertical;
  padding: 0.25rem;
}

p {
  white-space: pre-line;
  line-height: 1.5rem;
  margin-bottom: 0;
}
</style>
