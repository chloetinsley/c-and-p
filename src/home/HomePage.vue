<template>
  <div class="home">
    <!-- <h1>Phebe and Chloe web design</h1> -->
    <div>
      <div class="intro">
        <p>
          Hi.
          <br />We are Chloe & Phebe, freelancers with
          <b>five</b> years of experience in the industry working with individuals, startups and small companies on projects big and small.
        </p>
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
  /* background-color: #ebebe9; */
  /* background-image: radial-gradient(
    120% 120px at 50% -30px,
    #ebebe9 75%,
    transparent 75%
  ); */
  background-color: #ebebe9;
  /* width: 500px; */
  /* height: 50px; */
  border-bottom-left-radius: 2%;
  border-bottom-right-radius: 50%;
}

.intro p {
  margin: 0;
  padding: 0 30px 30px 30px;
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
