<template>
    <div class="card" style="width:fit-content">
        <div class="card-body">

            

            <h5 class="card-title">{{ this.title }}</h5>
            <p class="card-text">{{ this.Text }}</p>
            <hr />
            <div class="d-inline-block mb-2">
                <p class="card-text">
                    <small class="text-muted">{{ this.owner }}</small>
                </p>
            </div>
            <div class="d-inline-block mb-2 position-absolute end-0">
                <ul class="list-inline text-end">
                    <li class="list-inline-item">
                        <a href="#" class="btn btn-outline-dark"><i class="bi bi-pen"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn btn-outline-dark"><i class="bi bi-hand-thumbs-up"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a @click="DeletePost()" class="btn btn-outline-dark"><i class="bi bi-trash"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Card",
    props:
    {
        title: String,
        Text: String,
        votes: String,
        owner: String,
        id: String

    },
    methods: {
        async Upvote() {
            const data = { 'post_id': this.id, 'dir': 1 }
            try {
                
                const response = await axios.post('vote', JSON.stringify(data),
                    { headers: { 'content-type': 'application/json' } })
                if (response.status == 201) {

                    this.$router.go(0)
                }

            } catch (error) {
                const log = error.toJSON()
                console.error(log)

            }
        },
        async DeletePost()
        {            
            const token = localStorage.getItem('token')
            try {
                const response = await axios.delete(`/${parseInt(this.id)}`,
                { headers: { 'content-type': 'application/json' } })
                if (response.status == 201) {

                   await this.$router.go(0)
                }

            } catch (error) {
                const log = error.toJSON()
                console.error(log)

            }
        }

    }

}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
</style>