<template>
  <main class="view-container">
    <div class="home">
      <div class="buttons-container">
        <button class="center morphButton" @click="Logout">Logout</button>
      </div>
      <ul id="post-list">
        <li v-for="post in posts" :key="post.id">
          <router-link :to="'/apost/' + post.id" class="post-link">
            <div class='post'>
              <div class='post-header'>
                <span class="post-date">{{ new Date(post.date).toLocaleString() }}</span>
              </div>
              <p>{{ post.body }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="buttons-container">
      <button class="center morphButton" @click='this.$router.push("/add")'>Add post</button>
      <button class="center morphButton" @click="DeleteAll">Delete all</button>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      posts: [],
      authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log('jwt removed');
            //console.log('jwt removed:' + auth.authenticated());
            this.$router.push("/login");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          });
    },

    async loadPosts() {
      try {
        const res = await fetch("http://localhost:3000/api/posts", {
          credentials: "include",
        });
        if (!res.ok) {
          throw new Error(`Failed to load posts: ${res.status}`);
        }
        this.posts = await res.json();
      } catch (err) {
        console.log(err.message);
        this.posts = [];
      }
    },

    DeleteAll() {
      fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
        credentials: "include"
      })
          .then(() => this.loadPosts())
          .catch((e) => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.loadPosts();
  }
};
</script>

<style scoped>
#post-list {
  margin: 2rem;
}

.post {
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  background: #ffffff;
  transition: box-shadow 0.2s ease;
}

.post > p {
  word-wrap: anywhere;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.post-date {
  color: #666;
  font-size: 0.9rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.post-link:hover .post {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}
</style>