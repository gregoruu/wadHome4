<template>
  <main>
  <div class="home">
    <div id="post-list">
    <h1>Main</h1>
     <div class="container">
     <!-- <button   @click="Logout" class="center">Logout</button> -->
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
  </main>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        posts: [],
      };
    },
    methods: {
      fetchPosts() {
        fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
      },
    },
    mounted() {
      this.fetchPosts();
      console.log("mounted");
    },
  };
</script>