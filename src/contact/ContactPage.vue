<template>
  <form ref="form" @submit.once="submitForm(this)">
    <div class="contact">
      <h2>Get in touch</h2>
      <div class="input-item">
        <input
          name="customer_name"
          type="text"
          v-model.lazy.trim="name"
          v-on:keyup.enter="test"
          placeholder="name"
        />
      </div>
      <div class="input-item">
        <input name="customer_email" type="email" v-model.lazy.trim="email" placeholder="email" />
      </div>
      <div class="input-item">
        <input
          name="customer_phone_number"
          type="number"
          v-model.lazy.number="number"
          placeholder="number"
        />
      </div>
      <div class="input-item">
        <textarea name="message" v-model.lazy.trim="query" placeholder="query"></textarea>
      </div>
      <button type="submit" class="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

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
      var boole = false;
      if (boole) {
        emailjs
          .sendForm(
            "service_kqm07xm",
            "template_gf2boni",
            this.$refs.form,
            "HJmKkgF-p3H3PrzLe"
          )
          .then(
            result => {
              console.log("SUCCESS!", result.text);
            },
            error => {
              console.log("FAILED...", error.text);
            }
          );
      }

      //   if (this.query) {
      //     alert(this.query);
      //   } else {
      //     alert("enter summin then");
      //   }
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