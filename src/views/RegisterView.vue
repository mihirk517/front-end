<template>
  <body class="text-center">
    <main class="form-signin">
      <div class="container">
        <form>
          <h1 class="h3 mb-3 fw-normal text-center">Please Register</h1>
          <!-- 2 column grid layout with text inputs for the first and last names -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-floating">
                <input type="text" class="form-control" placeholder="First Name" v-model="FirstName" />
                <label for="floatingInput">First name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating">
                <input type="text" class="form-control" placeholder="Last Name" v-model="LastName" />
                <label class="floatingInput">Last name</label>
              </div>
            </div>
          </div>

          <!-- Email input -->
          <div class="form-floating mb-4">
            <input id="Email" class="form-control" placeholder="name@example.com" v-model="email" />
            <label class="form-label">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-floating mb-4">
            <input type="password" id="password" class="form-control" placeholder="password" v-model="password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <!-- Password input -->
          <div class="form-floating mb-4">
            <input type="password" id="Repassword" class="form-control" placeholder="Re-Type password"
              v-model="RePassword" />
            <label class="form-label" for="form3Example4">Re-Type Password</label>
          </div>

          <!-- Response -->
          <p class="mb-3 fw-bold">{{ response }}</p>
          <!-- Submit button -->
          <button type="button" class="w-100 btn btn-primary btn-lg" @click="register()">Register</button>

          <p class="mt-5 mb-3 text-muted">&copy; 2023</p>

        </form>
      </div>
    </main>
  </body>
</template>



<script>
import axios from 'axios'
import { routerKey, useRouter } from "vue-router";
export default {
  name: 'Register',
  props: {

  },
  data() {
    return {
      FirstName: null,
      LastName: null,
      email: null,
      password: null,
      RePassword: null,
      response: ""
    }
  },
  methods: {

    async register() {
      this.response = ""
      const detailsCheck = await this.CheckInput()
      const passwordCheck = await this.CheckSamePassword(this.password, this.RePassword)
      if (detailsCheck == true && passwordCheck == true) {
        this.response = "Trying to register"
        const data = { 'email': this.email, 'password': this.password }
        try {

          const response = await axios.post('user/register', JSON.stringify(data),
            { headers: { 'content-type': 'application/json' } })
          console.log(response.data)

          if (response.status == 201) {
            this.response = "User created sucessfully"
            await this.$router.push('/')

          }

        } catch (error) {
          const log = error.toJSON()
          console.error(log)
          this.response = `${log.message}`

        }
      }
    },
    async CheckSamePassword(password1, password2) {

      if (password1 == password2) {
        return true
      }
      else {
        this.response += "Passwords do not match"

        return false
      }
    },
    async CheckInput() {

      if (this.FirstName == null || this.LastName == null || this.email == null || this.password == null) {
        this.response += "Details missing"

        return false
      }
      else {
        return true
      }
    }

  }

}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 500px;
  padding-top: 10%;

  margin: auto;
}
</style>