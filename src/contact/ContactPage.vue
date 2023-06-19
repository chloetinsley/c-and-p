<template>
  <form action="#" method="POST">
    <div class="contact">
      <h2>Get in touch</h2>
      <div class="input-item">
        <input type="text" v-model.lazy.trim="name" v-on:keyup.enter="test" placeholder="name" />
      </div>
      <div class="input-item">
        <input type="email" v-model.lazy.trim="email" placeholder="email" />
      </div>
      <div class="input-item">
        <input type="number" v-model.lazy.number="number" placeholder="number" />
      </div>
      <div class="input-item">
        <textarea v-model.lazy.trim="query" placeholder="query"></textarea>
      </div>
      <button type="submit" class="submit" v-on:click.prevent="submitForm()">Submit</button>
    </div>
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
.contact {
  /* border: 1px solid red; */
  width: 100%;
}
.input-item {
  width: 100%;
}
input {
  width: 100%;

  padding: 10px 0;
  margin: 5px 0;
}

.submit {
  border: none;
  /* orange (to bright imo) */
  /* background-color: #e87a0c; */
  /* mint  */
  /* background-color: #3a6963;*/
  /* diff orange */
  background-color: #c86f15;
  padding: 6px 15px;
  color: #ebebe9;
  border-radius: 3px;
  font-size: 14px;
}
</style>