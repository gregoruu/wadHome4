<template>
  <div class="view-container">
    <main class="post-container">
      <div class="post" id="login-container">
        <h2>Add Post</h2>
          <div id="text-input-rows">
            <div class="input-row">
              <label>Body</label>
              <input type="text" placeholder="Body" v-model="body" name="body"/>
            </div>
          </div>
          <div class="buttons-container">
          <button @click="AddPost">Add</button> <!-- change @click to add post -->
          </div>
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
    AddPost() {
      const postData = { body: this.body };
      console.log(postData);

      fetch("http://localhost:3000/api/posts",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(postData)
      })
      .catch((err) => {
        console.error(err);
      });
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

#text-input-rows {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
}

.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}

.input-row {
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 1.5rem;
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

p {
  white-space: pre-line;
  line-height: 1.5rem;
  margin-bottom: 0;
}

</style>

