<template>
  <div class="hello">
    <h1>Phebe and Chloe web design</h1>
    <div>
      <p>Our services</p>
      <ul>
        <li v-for="v in services" v-bind:key="v">{{v}}</li>
      </ul>
    </div>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    msg: String
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
