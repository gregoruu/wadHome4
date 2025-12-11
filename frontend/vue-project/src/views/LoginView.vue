<template>
  <div class="login">
    <main class="post-container">
      <div class="post" id="login-container">
        <form @submit.prevent="passwordIsValid">
          <div id="text-input-rows">
            <div class="input-row">
              <label>Email</label>
              <input type="email" placeholder="Email" name="email" required/>
            </div>
            <div class="input-row">
              <label for="password">Password</label>
              <input type="password" placeholder="Password" name="password" v-model="password" required/>
            </div>
          </div>
          <p class="error" v-if="!passwordIsValid() && password !== ''">The password is not valid:<br>{{ missingRequirementsText }}</p>
          <input id="sign-up-button" class="morph-button-small" type="submit" value="Sign Up"/>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
    export default {
    name: 'login',
    components: {
    },
    data: () => {
        return {
        password: "",
        };
    },
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
    methods: {
        passwordIsValid() {
        if (this.missingRequirements.length === 0) {
            return true;
        }
        }
    },
    }
</script>