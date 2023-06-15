<template>
  <form action="#" method="POST">
    <h2>Get in touch</h2>
    <div>
      <input type="text" v-model.lazy.trim="name" v-on:keyup.enter="test" placeholder="name" />
    </div>
    <div>
      <input type="email" v-model.lazy.trim="email" placeholder="email" />
    </div>
    <div>
      <input type="number" v-model.lazy.number="number" placeholder="number" />
    </div>
    <div>
      <textarea v-model.lazy.trim="query" placeholder="query"></textarea>
    </div>
    <button type="submit" v-on:click.prevent="submitForm()">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      number: "",
      query: ""
    };
  },
  methods: {
    submitForm() {
      if (this.query) {
        alert(this.query);
      } else {
        alert("enter summin then");
      }
    }
  }
};
</script>

<style scoped>
</style>