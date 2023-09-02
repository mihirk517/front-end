<template>
    <body class="text-center">
    <main class="form-signin">

      <form >
        <img class="img-fluid" src="../assets/logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
    
        <div class="form-floating">
          <input class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input  type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
          <label for="floatingPassword">Password</label>
        </div>
    
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>

        <p class="mb-3 fw-bold">{{ response }}</p>
        <br>
        <button class="w-100 btn btn-lg btn-primary" type="button" @click="login()">Sign in</button>
        <br><br>
        <p>Not a Member ?<a href="/Register" class="link-primary"> Register </a></p>
        
        <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
      </form>        
    </main>
    </body>
</template>

<script>
import axios from 'axios'
import {routerKey, useRouter} from "vue-router";
import PostsView from './PostsView.vue';
export default {
    
    props:{
        
    },
    data(){
        return{
          email:null,
          password:null,
          response:""
        }
    },
    methods:{
        async login()
        {
          
          this.response =""    
          const params = new URLSearchParams();
          params.append('username',this.email)
          params.append('password',this.password)      
          try {

          const response = await axios.post('login',params,
          {headers: {'content-type': 'application/x-www-form-urlencoded'}},
          {config:{ withCredentials: true }})      
          console.log(response.data.access_token)

          if(response.status == 200)
          {
            this.response = "Login Successful"
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`  
            
            localStorage.setItem('token',response.data.access_token)
            await this.$router.push('/posts')
            
          }
            
          } catch (error) {
            const log = error.toJSON()
            if(log.status == 403)
            {
              this.response = "Error while logging in.\n Please verify username and password"            
            }

            if(log.status == 401)
            {
              this.response ="Access Token Expired. Login Again"
            }
            if(log.status == null)
            {
              this.response ="Could not reach server.\n check connection"
            }
            
          }           
        }
          }

 }
</script>

<style scoped>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding-top: 10%;

  margin: auto;
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

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
} 
</style>
  