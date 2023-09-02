<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Welcome</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!--<span class="navbar-text">{{this.Email}}</span>-->
        <li class="nav-item">
        <a class="nav-link" href="/createPost">Create New Post</a>
      </li>
      </ul>
  <form class="d-flex">        
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="button" >Search</button>
      </form>

    </div>
        </div>
  
</nav>

<div v-for="post in this.posts" class="container">    
    
        <div class=" col-lg-12 p-2">                 
            <Card :title= "post.Post.title" :Text="post.Post.content" :owner="post.Post.owner.email" :id="post.Post.id" :votes="post.votes" />            
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import Card from '../components/Card.vue'
export default{
    name:'Posts',
    components:{
        Card,
    },
    
    created(){
        this.getPosts()
    },
    data()
    {
        return{
            posts:[]

        }
    },
    methods:{
        async getPosts()
        {
            const response = await axios.get('/posts')
            
            console.log(response.data)
            console.log(response.data.length)
            console.log(response.data[0].Post)
            console.log(response.data[0].votes)
            this.posts = response.data 
                   

            for (let index = 0; index < this.posts.length; index++) {
                const element = this.posts[index].Post;
                console.log(this.posts[index].votes)
                console.log(element.id)
                console.log(element.title)
                console.log(element.content)   
                console.log(element.created_at)  
                console.log(element.owner.email)
                           
            }
            
        }
    }
}
</script>

<style scoped>
.header{
    margin-top: 0%;
}



</style>




