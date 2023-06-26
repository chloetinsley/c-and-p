<template>
  <div class="home">
    <!-- <h1>Phebe and Chloe web design</h1> -->
    <div>
      <div class="intro">
        <span id="letter-1" class="letter">c</span>
        <span id="letter-2" class="letter">&</span>
        <span id="letter-3" class="letter">p</span>

        <span id="letter-4" class="letter">c</span>
        <span id="letter-5" class="letter">&</span>
        <span id="letter-6" class="letter">p</span>

        <span id="letter-7" class="letter">c</span>
        <span id="letter-8" class="letter">p</span>
        <span id="letter-9" class="letter">&</span>

        <span id="letter-10" class="letter">c</span>
        <div class="banner">
          <img alt="logo" src="../assets/logo.jpeg" class="logo" />
          <p>
            Hi.
            <br />We are Chloe & Phebe, freelancers with
            <b>five</b> years of experience in the industry working with individuals, startups and small companies on projects big and small.
          </p>

          <router-link to="/contact">
            <button class="quote-button">Get a Quote</button>
          </router-link>

          <p
            v-on:click="viewServices()"
            style="  margin:10px; text-decoration: underline; text-decoration-style: wavy; text-decoration-thickness: 1.5px"
          >view our services</p>
        </div>
      </div>
      <div class="main">
        <h2>What we do</h2>
        <ServiceComponent
          header="Web Design / Development"
          subtext="This Service will offer you bla bla bla
          some more text to make this bigger some more text to make this bigger some more text to make this bigger "
        />
        <ServiceComponent header="Marketing" subtext="This Service will offer you bla bla bla" />
        <ServiceComponent
          header="Social Media Management"
          subtext="This Service will offer you bla bla bla 
          &lt;h4&gt;
            Bespoke
          &lt;/h4&gt;
            bespoke design
          &lt;h4&gt;
            Accessibility
          &lt;/h4&gt;
            accessible to everyonnee
          &lt;h4&gt;
            SEO
          &lt;/h4&gt;
    
            get you up high on them google rankz

          &lt;h4&gt;
            Performance
          &lt;/h4&gt;
            we use high end up to date technologies to ensure you got da best performance
          "
        />
        <ServiceComponent
          header="Content Creation"
          subtext="This Service will offer you bla bla bla need lots and lots of text so this gets bigger so I can test out the functionality of the show more button to make sure it doesn't show more for all oehfihiw ehwoifhwe"
        />
        <!-- <ul>
          <li v-for="v in services" v-bind:key="v">{{v}}</li>
        </ul>-->
      </div>
    </div>
  </div>
</template>

<script>
import ServiceComponent from "./ServiceComponent.vue";

export default {
  name: "HomePage",
  props: {
    msg: String
  },
  components: {
    ServiceComponent
  },
  methods: {
    viewServices() {
      var target = document.getElementsByTagName("h2")[0];
      target.scrollIntoView({ behavior: "smooth" });
    }
  },
  data() {
    return {
      services: ["Service 1", "Service 2", "Service 3"]
    };
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
} */
h1 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

.intro {
  background-color: #ebebe9;
  text-align: center;
  /* height: 300px; */
  height: 100vh;
  /* border-bottom-left-radius: 2%;
  border-bottom-right-radius: 50%; */
}

.letter {
  position: absolute;
  /* list-style: none; */
  display: block;
  font-size: 40px;
  /* width: 40px;
  height: 40px; */
  color: white;
  opacity: 85%;
  /* color: fade(white, 15%); */
  bottom: -160px;

  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;

  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
.banner {
  /* transform: translateY(50%); */
  /* position: absolute; */
  /* display: flex;
  flex-direction: column; */
  vertical-align: middle;
  justify-content: center;
  box-align: center;

  margin: 0 auto;
  /* top: 50%; */
  z-index: 2;
  height: 100%;
  padding-top: 25%;
  /* position: absolute;
  /* /* top: 25%;  */
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; */
}
.logo {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0;

  /* z-index: 2; */
  /* transform: translateY(50vh); */
}
#letter-1 {
  left: 10%;
}

#letter-2 {
  left: 20%;

  width: 80px;
  height: 80px;

  animation-delay: 2s;
  animation-duration: 17s;
}

#letter-3 {
  left: 25%;
  animation-delay: 4s;
}

#letter-4 {
  left: 40%;
  font-size: 60px;
  /* width: 60px;
  height: 60px; */

  animation-duration: 22s;
  opacity: 75%;
  /* background-color: fade(white, 25%); */
}

#letter-5 {
  left: 70%;
}

#letter-6 {
  left: 80%;
  font-size: 120px;
  /* width: 120px;
  height: 120px; */

  animation-delay: 3s;
  opacity: 80%;
  /* background-color: fade(white, 20%); */
}
#letter-7 {
  left: 32%;
  /* width: 160px;
      height: 160px; */
  font-size: 160px;
  animation-delay: 7s;
}

#letter-8 {
  left: 55%;
  /* width: 20px;
  height: 20px; */
  font-size: 20px;
  animation-delay: 15s;
  animation-duration: 40s;
}

#letter-9 {
  left: 25%;
  /* width: 10px;
  height: 10px; */
  font-size: 10px;
  animation-delay: 2s;
  animation-duration: 40s;
  opacity: 70%;
  /* background-color: fade(white, 30%); */
}

#letter-10 {
  left: 90%;
  /* width: 160px;
      height: 160px; */
  font-size: 160px;
  animation-delay: 11s;
}
@-webkit-keyframes square {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-130vh) rotate(600deg);
  }
}
@keyframes square {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-130vh) rotate(600deg);
  }
}

.intro p {
  margin: 0;
  padding: 0 30px 30px 30px;
  position: relative;
  /* z-index: 2; */
  /* transform: translateY(50vh); */
  text-align: center;
  /* bottom 50vh; */
}

.quote-button {
  position: relative;
  /* transform: translateY(50vh); */

  /* transform: translate(50vh); */
  /* margin: 0; */
  justify-self: center;
  margin: 0 auto;
}

.main {
  margin: 30px;
}

/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
