<template>
    <div class="card" style="width:fit-content">
        <div class="card-body">
            <h5 class="card-title">{{ this.id }}.{{this.title}}</h5>
            <p class="card-text">{{this.Text}}</p>
            <p class="card-text">Votes: {{parseInt(this.votes)}}</p>
            <hr/>
            <div class="d-inline-block">
            <p class="card-text">
                <small class="text-muted">- Created by : {{ this.owner }}</small>
            </p>
        </div>
        <div class="d-inline-block" style="float:right;">
            <a type="button" @click="Upvote()" class="btn btn-primary btn-sm">Vote</a>
        </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name:"Card",   
    props:
    {        
        title:String,
        Text:String, 
        votes:String,
        owner:String,
        id:String

    },
    methods:{
        async Upvote()
        {
            const data = {'post_id':this.id,'dir':1}
            try {
                const response = await axios.post('vote',JSON.stringify(data),
                {headers: {'content-type': 'application/json'}})
                if (response.status == 201) {
                   
                    this.$router.go(0)
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