<template>
  <main class="view-container">
    <div class="home">
      <div class="buttons-container">
        <button class="center morphButton" @click="Logout">Logout</button>
      </div>
      <div id="post-list">
        <div class="container">
        </div>
        <ul>
          <div class="item" v-for="post in posts" :key="post.id">
            <a class='singlepost' :href="'/apost/' + post.id">
              <span class="title"> <b>Title:</b> {{ post.title }}  </span><br/>
              <span class="body"> <b>Body:</b> {{ post.body }} </span> <br/>
              <span class="url"> <b>Url:</b> {{ post.urllink }} </span> <br/>
            </a>
          </div>
        </ul>
      </div>
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

    DeleteAll() {
      fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
        credentials: "include"
      })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
  }
};
</script>

<style scoped>

</style>