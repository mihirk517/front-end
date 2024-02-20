

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" @click="home()" >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="home()">Posts</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link" href="#" @click="CreatePost()">
            <i class="bi bi-plus-circle"></i>
            Create Post
          </a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-dark" type="submit" @click="login()" >Login</button>
        <button class="btn btn-outline-success" type="submit" @click="register()" >Register</button>
      </form>
    </div>
  </div>
</nav>
</template>



<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}


h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<script>
export default{
  name:"Navbar",
  methods: {
    async login() {
      await this.$router.push('/login');
    },
    async register() {
      await this.$router.push('/register');
    },
    async home() {
      await this.$router.push('/posts');
    },
    async CreatePost()
    {
      await this.$router.push('/createPost');
    }
  }
};
</script>
