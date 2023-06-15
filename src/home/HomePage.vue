<template>
  <div class="home">
    <h1>Phebe and Chloe web design</h1>
    <div>
      <p>Our services</p>
      <ul>
        <li v-for="v in services" v-bind:key="v">{{v}}</li>
      </ul>
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
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
