<template>
    <body class="text-center">        
    <main class="form-signin">
    <form>
        <img class="img-fluid" src="../assets/logo.svg" alt="" width="72" height="57">
        <br>
        <br>
        <h1 class="h3 mb-3 fw-normal text-center">Ceate a New Post</h1>



  <!-- Title input -->
  <div class="form-outline mb-4">
    <input class="form-control" placeholder="Title " v-model="Title" />
    
  </div>

  <!-- Content input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" placeholder="Content Here" rows="8"  v-model="Content"/>
    
  </div>



      <!-- Response -->
  <p class="mb-3 fw-bold">{{ response }}</p>
  <!-- Submit button -->
  <button type="button" class="w-100 btn btn-primary btn-lg" @click="CreatePost()">Create New Post</button>

  <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
  
</form>
</main>
</body>
</template>



<script>
import axios from 'axios'
import {routerKey, useRouter} from "vue-router";
export default {
    name:'CreatePost',
    props:{
        
    },
    data(){
        return{
            Title:null,
            Content:null,
            response:""
        }
    },
    methods:{
        
        async CreatePost()
        {
           this.response =""
           const detailsCheck = await this.CheckInput()

           if(detailsCheck == true )
           {
             this.response = "Trying to register"
            const data = {'title':this.Title,'content':this.Content}         
            try {
                const token = localStorage.getItem('token')
                const response = await axios.post('posts',JSON.stringify(data),
                {headers: {'content-type': 'application/json'}})
                console.log(response.data)

                if (response.status == 201) {
                    this.response = "User created sucessfully"
                    await this.$router.push('/posts')
                    
                }
                
            } catch (error) {
                const log = error.toJSON()
                console.error(log)
                this.response = `${log.message}`
                
            }
           }
        },
        async CheckInput()
        {
            
            if (this.Title == null || this.Content == null) {
                this.response += "Details missing"
                
                return false
            }
            else{
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