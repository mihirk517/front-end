<template>
  <body>
    <div class="container-sm my-5">
      <form class="mx-auto">
        <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
        <div class="row d-flex justify-content-center">
          <div class="col-lg-4 col-lg-offset-4">
            <div class="form-group">
              <div class="form mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                  v-model="email">
              </div>
              <div class="form mb-3">
                <label for="floatingPassword">Password</label>
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  v-model="password">
              </div>
              <div>
                <label>
                  <input class="text-center" type="checkbox" value="remember-me"> Remember me
                </label>
              </div>
              <div>
                <p class="mb-3 fw-bold">{{ text }}</p>
                <br>
                <button class="w-100 btn btn-lg btn-primary mb-5" type="button" @click="login()">Sign in</button>
              </div>
              <div class="text-center">
                <p>Not a Member ?<a href="/Register" class="link-primary"> Register </a></p>
                <p class="mt-5 mb-3 text-muted">&copy; 2024</p>
              </div>              
            </div>
          </div>
        </div>
      </form>
    </div>
  </body>
</template>

<script>
import axios from 'axios'
import { routerKey, useRouter } from "vue-router";
import PostsView from './postsView.vue';
export default {

  props: {},
  data() {
    return {
      email: null,
      password: null,
      text: ""
    };
  },
  methods: {
    async login() {
      this.text = "";
      let obj;
      const params = new URLSearchParams();
      params.append('username', this.email);
      params.append('password', this.password);
      try {
        const res = await axios.post('user/login', params, { headers: { 'content-type': 'application/x-www-form-urlencoded' } }, { config: { withCredentials: true } });
        console.log(res.status);
        console.log(res.data);
        if (res.status == 200) {
          this.text = "Login Successful";
          axios.defaults.headers.common['Authorization'] = `Bearer ${res.data}`;
          console.log(res.data);
          localStorage.setItem('token', res.data);
          await this.$router.push('/posts');
        }
      }
      catch (error) {
        console.log(error);
        if (error.status == 403) {
          this.response = "Error while logging in.\n Please verify username and password";
        }
        if (error.status == 401) {
          this.response = "Access Token Expired. Login Again";
        }
        if (error.status == null) {
          this.response = "Could not reach server.\n check connection";
        }
      }
    }
  },

}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 150px;
  padding-top: 10%;

}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.input-width {
  max-width: 300px;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
  