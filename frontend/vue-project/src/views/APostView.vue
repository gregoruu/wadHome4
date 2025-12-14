<template>
  <div class="view-container">
    <main class="post-container">
      <div class="post">
        <h2>A Post</h2>
        <div id="body-input">
          <label for="body">Body</label>
          <textarea id="body" placeholder="Body" v-model="body" rows="4"></textarea>
        </div>
        <div class="buttons-container">
          <button class="morphButton" @click="updatePost">Update</button>
          <button class="morphButton" @click="deletePost">Delete</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'APost',
  data() {
    return {
      postId: null,
      body: ''
    };
  },
  methods: {
    async loadPost() {
      const id = this.postId;
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
          credentials: 'include'
        });
        if (res.status === 401) {
          this.$router.push('/login');
          return;
        }
        const post = await res.json();
        this.body = post.body;
      } catch (e) {
        console.error('Failed to load post', e);
      }
    },
    async updatePost() {
      const id = this.postId;
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({body: this.body})
        });
        if (res.status === 401) {
          this.$router.push('/login');
          return;
        }
        this.$router.push('/');
      } catch (e) {
        console.error('Failed to update post', e);
      }
    },
    async deletePost() {
      const id = this.postId;
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        });
        if (res.status === 401) {
          this.$router.push('/login');
          return;
        }
        this.$router.push('/');
      } catch (e) {
        console.error('Failed to delete post', e);
      }
    }
  },
  mounted() {
    this.postId = this.$route.params.id;
    this.loadPost();
  }
};
</script>

<style scoped>
#body-input {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

textarea {
  width: auto;
  border-radius: 0.5rem;
  border: 1px solid #cccccc;
  resize: vertical;
  padding: 0.25rem;
}
</style>
