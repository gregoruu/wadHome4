<template>
  <div class="view-container">
    <main class="post-container">
      <div class="post" id="login-container">
        <form> <!-- @submit.prevent="passwordIsValid">-->
          <div id="body-input">
            <div class="input-row">
              <label>Email</label>
              <input type="email" placeholder="Email" v-model="email" name="email" required/>
            </div>
            <div class="input-row">
              <label for="password">Password</label>
              <input type="password" placeholder="Password" name="password" v-model="password" required/>
            </div>
          </div>
          <!-- <p class="error" v-if="!passwordIsValid() && password !== ''">The password is not valid:<br>{{ missingRequirementsText }}</p> -->
          <div class="buttons-container">
            <button type="button" class="morphButton" @click="LogIn">Login</button>
            <p class="center">Or</p>
            <button type="button" class="morphButton" @click='this.$router.push("/signup")'>Signup</button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  components: {},
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {

    /*
        passwordIsValid() {
        if (this.missingRequirements.length === 0) {
            return true;
        }
        },
      */

    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
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
            //this.$router.push("/");
            location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
  /* 
    computed: {
        missingRequirements: function () {
        const reqs = [];

        if (this.password.length < 8 || this.password.length > 14)
            reqs.push("The password should be 8-14 character long.");

        if (this.password.toLowerCase() === this.password)
            reqs.push("The password should include at least one uppercase letter.");

        let lowercaseCount = 0;
        for (const letter of this.password) {
            if (letter.match(/[a-z]/))
            lowercaseCount += 1;
        }
        if (lowercaseCount < 2)
            reqs.push("The password should include at least two lowercase letters.");

        if (!/\d/.test(this.password))
            reqs.push("The password should include at least one numeric value.");

        if (this.password.length > 0 && !(/[A-Z]/.test(this.password.charAt(0))))
            reqs.push("The password should start with an uppercase letter.");

        if (!this.password.includes("_"))
            reqs.push("The password should include the character \"_\".");

        return reqs;
        },
        missingRequirementsText: function () {
        let result = "";
        for (const requirement of this.missingRequirements) {
            result = result + "- " + requirement + "\n";
        }
        return result;
        }
    },
      */
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

#body-input {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
}


.input-row {
  display: flex;
  text-align: center;
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