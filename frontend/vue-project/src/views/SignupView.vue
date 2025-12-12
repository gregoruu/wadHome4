<template>
  <div class="container">
    <main class="post-container">
      <div class="post" id="login-container">
        <form @submit.prevent="passwordIsValid">
          <div id="text-input-rows">
            <div class="input-row">
              <label>Email</label>
              <input type="email" placeholder="Email" name="email" required v-model="email"/>
            </div>
            <div class="input-row">
              <label for="password">Password</label>
              <input type="password" placeholder="Password" name="password" v-model="password" required/>
            </div>
          </div>
          <!--<p class="error" v-if="!passwordIsValid() && password !== ''">The password is not valid:<br>{{ missingRequirementsText }}</p> -->
          <div class="buttons-container">
          <button @click="SignUp">Signup</button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
name: "SignUp", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }
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

