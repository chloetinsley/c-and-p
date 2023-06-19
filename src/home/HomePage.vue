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
        <ul>
          <li v-for="v in services" v-bind:key="v">{{v}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  },
  components: {},
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
