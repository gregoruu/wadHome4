<template>
  <main>
  <div class="home">
    <h1>Main</h1>
    <div class="buttons-container">
      <button class="center"  @click="Logout">Logout</button>
    </div>
    <div id="post-list">
     <div class="container">
    </div>
      <ul>
        <div class="item" v-for="post in posts" :key="post.id">
            <a class= 'singlepost' :href="'/apost/' + post.id">
            <span class="title"> <b>Title:</b> {{ post.title }}  </span><br />
            <span class="body"> <b>Body:</b> {{ post.body }} </span> <br />
            <span class="url"> <b>Url:</b> {{ post.urllink }} </span> <br />
          </a>
        </div>
      </ul>
    </div>
  </div>
  <div class="buttons-container">
    <button class="center" @click='this.$router.push("/add")'>Add post</button>
    <button class="center" @click="DeleteAll">Delete all</button>
  </div>
  </main>
</template>

<script>
  // @ is an alias to /src
import auth from "../auth";
import Footer from '../components/Footer.vue';
  export default {
    name: "Home",
  components: {
    Footer
  },
   data: function() {
    return {
    posts:[ ],
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
      .catch((e) =>{
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