<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Say hi!</h1>
        <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>
      <form name="contact" class="contact-form">
        <div class="sender-info">
          <div><label for="name" class="label">Your name</label><input type="text" name="name" v-model="form.name"></div>
          <div><label for="email" class="label">Your email</label><input type="email" name="email" v-model="form.email"></div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea name="message" v-model="form.message"></textarea>
        </div>
        <button class="button" @click.prevent="onSubmit">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Cantact',
  data(){
    return{
      form:{
        name:'',
        email:'',
        message:''
      }
    }
  },
  methods:{
    async onSubmit(){
       const {data} = await axios({
         method:'POST',
         url:'http://localhost:1337/contacts',
         data: this.form
       })
       console.log(data)
    }
  }
}
</script>

<style>
</style>