<template>
  <form ref="form" @submit.prevent="submitForm()">
    <div class="contact">
      <div id="contactForm">
        <h2>Get in touch</h2>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" name="customer_name" placeholder=" " />
          <label class="did-floating-label">Name</label>
        </div>

        <div class="did-floating-label-content">
          <input class="did-floating-input" type="email" name="customer_email" placeholder=" " />
          <label class="did-floating-label">Email</label>
        </div>

        <div class="did-floating-label-content">
          <input
            class="did-floating-input"
            type="number"
            name="customer_phone_number"
            placeholder=" "
          />
          <label class="did-floating-label">Phone Number</label>
        </div>

        <div class="did-floating-label-content">
          <textarea
            class="did-floating-input"
            name="message"
            v-model.lazy.trim="query"
            placeholder=" "
          ></textarea>
          <!-- <input class="did-floating-input" type="text" placeholder=" " /> -->
          <label class="did-floating-label">Query</label>
        </div>

        <!-- <div class="input-item">
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
        </div>-->

        <button type="submit" class="submit">Submit</button>
      </div>

      <div id="confirmationContainer" class="confirmation hidden">
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
          <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
        <h3>Thank you!</h3>
        <p>Your message has been recieved and we will be in touch as soon as possible.</p>

        <!-- <div id="circleLoader" class="circle-loader">
          <div id="checkmark" class="checkmark draw hidden"></div>
        </div>-->
      </div>
    </div>
  </form>
</template>

<script>
// import emailjs from "@emailjs/browser";

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
      var contact = document.getElementById("contactForm");
      contact.classList.toggle("hidden");

      var spinner = document.getElementById("confirmationContainer");
      spinner.classList.toggle("hidden");

      setTimeout(function() {
        // var check = document.getElementById("checkmark");
        // check.classList.toggle("hidden");
        // var element = document.getElementById("circleLoader");
        // element.classList.toggle("load-complete");
      }, 500);

      //   emailjs
      //     .sendForm(
      //       "service_kqm07xm",
      //       "template_gf2boni",
      //       this.$refs.form,
      //       "HJmKkgF-p3H3PrzLe"
      //     )
      //     .then(
      //       result => {
      //         //   $(".circle-loader").toggleClass("load-complete");
      //         // $(".checkmark").toggle();
      //         var element = document.getElementById("circle-loader");
      //         element.classList.toggle("load-complete");

      //         console.log("SUCCESS!", result.text);
      //       },
      //       error => {
      //         console.log("FAILED...", error.text);
      //       }
      //     );

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
  /* width: 100%; */
  padding: 0 30px 30px 30px;
}
.input-item {
  width: 100%;
}
input {
  width: 100%;

  padding: 10px 0;
  margin: 5px 0;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  cursor: pointer;
  /* display: flex;

  align-self: right; */
  float: right;
}

.did-floating-label-content {
  position: relative;
  margin-bottom: 20px;
}
.did-floating-label {
  /* color: #3a6963; */
  font-size: 13px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 11px;
  padding: 0 5px;
  background: #fff;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.did-floating-input,
.did-floating-select {
  font-size: 12px;
  display: block;
  width: 100%;
  height: 36px;
  padding: 0 20px;
  background: #fff;
  /* color: green; */
  border: 1px solid #3a6963;
  border-radius: 4px;
  box-sizing: border-box;
}
.did-floating-input:focus,
.did-floating-select:focus {
  outline: none;
  border: 2px solid #3a6963;
}
.did-floating-input:focus ~ .did-floating-label,
.did-floating-select:focus ~ .did-floating-label {
  top: -8px;
  font-size: 13px;
}
select.did-floating-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select.did-floating-select::-ms-expand {
  display: none;
}

.did-floating-input:not(:placeholder-shown) ~ .did-floating-label {
  top: -8px;
  font-size: 13px;
}
.did-floating-select:not([value=""]):valid ~ .did-floating-label {
  top: -8px;
  font-size: 13px;
}
.did-floating-select[value=""]:focus ~ .did-floating-label {
  top: 11px;
  font-size: 13px;
}
.did-floating-select:not([multiple]):not([size]) {
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6'%3E%3Cpath id='Path_1' data-name='Path 1' d='M371,294l4,6,4-6Z' transform='translate(-371 -294)' fill='%23003d71'/%3E%3C/svg%3E%0A"); */
  background-position: right 15px top 50%;
  background-repeat: no-repeat;
}

.did-error-input .did-floating-input,
.did-floating-select {
  border: 2px solid #9d3b3b;
  color: #9d3b3b;
}
.did-error-input .did-floating-label {
  font-weight: 600;
  color: #9d3b3b;
}
.did-error-input .did-floating-select:not([multiple]):not([size]) {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6'%3E%3Cpath id='Path_1' data-name='Path 1' d='M371,294l4,6,4-6Z' transform='translate(-371 -294)' fill='%239d3b3b'/%3E%3C/svg%3E%0A");
}

.input-group {
  display: flex;
}

.input-group .did-floating-input {
  border-radius: 0 4px 4px 0;
  border-left: 0;
  padding-left: 0;
}
.input-group-append {
  display: flex;
  align-items: center;
  /*   margin-left:-1px; */
}
.input-group-text {
  display: flex;
  align-items: center;
  font-weight: 400;
  height: 34px;
  /* color: #323840; */
  padding: 0 5px 0 20px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #045174;
  border-radius: 4px 0 0 4px;
  border-right: none;
}

.confirmation {
  text-align: center;
}

.circle-loader {
  margin-bottom: 3.5em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left-color: #5cb85c;
  animation: loader-spin 1.2s infinite linear;
  position: relative;
  display: inline-block;
  vertical-align: top;
  border-radius: 50%;
  width: 7em;
  height: 7em;
}
.load-complete {
  -webkit-animation: none;
  animation: none;
  border-color: #5cb85c;
  transition: border 500ms ease-out;
}
.hidden {
  display: none;
}
.checkmark.draw:after {
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-name: checkmark;
  transform: scaleX(-1) rotate(135deg);
}
.checkmark:after {
  opacity: 1;
  height: 3.5em;
  width: 1.75em;
  transform-origin: left top;
  border-right: 3px solid #5cb85c;
  border-top: 3px solid #5cb85c;
  content: "";
  left: 1.75em;
  top: 3.5em;
  position: absolute;
}
@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 1.75em;
    opacity: 1;
  }
  40% {
    height: 3.5em;
    width: 1.75em;
    opacity: 1;
  }
  100% {
    height: 3.5em;
    width: 1.75em;
    opacity: 1;
  }
}

/* new stuff
 */

.checkmark__circle {
  stroke-dasharray: 216; /* ORIGINALLY 166px */
  stroke-dashoffset: 216; /* ORIGINALLY 166px */
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 40px; /* ORIGINALLY 56px */
  height: 40px; /* ORIGINALLY 56px */
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #7ac142;
  stroke-miterlimit: 10;
  margin: 10px auto;
  margin-top: 30px;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 98; /* ORIGINALLY 48px */
  stroke-dashoffset: 98; /* ORIGINALLY 48px*/
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    /* box-shadow: inset 0px 0px 0px 80px #7ac142; */
  }
}
</style>