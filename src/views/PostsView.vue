<template>
    <div v-for="post in this.posts" class="container">
        <div class="col-lg-12 p-2">
            <Card :title="post.title" :Text="post.content" :owner="post.userOut.username" :id="post.id" :votes=1 />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Card from '../components/Card.vue'
export default {
    name: 'Posts',
    components: {
        Card,
    },

    created() {
        this.getPosts()
    },
    data() {
        return {
            posts: []

        }
    },
    methods: {
        async getPosts() {
            const response = await axios.get('posts')

            console.log(response.data)
            console.log(response.data.length)
            console.log(response.data[0].title)
            console.log(response.data[0].content)
            console.log(response.data[0].userId)
            console.log(response.data[0].userOut.username)
            //console.log(response.data[0].votes)
            this.posts = response.data


            for (let index = 0; index < this.posts.length; index++) {
                console.log(this.posts[index])
                /*const element = this.posts[index].Post;
                //console.log(this.posts[index].votes)
                console.log(element.id)
                console.log(element.title)
                console.log(element.content)   */
                //console.log(element.created_at)  
                //console.log(element.owner.email)

            }

        }
    }
}
</script>

<style scoped>
.header {
    margin-top: 0%;
}
</style>




