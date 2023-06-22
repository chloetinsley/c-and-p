<template>
  <div class="service-container">
    <h3>{{this.header}}</h3>
    <p class="hide-content" v-html="subtext"></p>
    <p v-on:click="showMore($event)" class="more">show more</p>
  </div>
</template>

<script>
export default {
  name: "ServiceComponent",
  // props: ["header", "subtext"]
  props: {
    header: String,
    subtext: String
  },
  methods: {
    showMore(e) {
      var showMore = e.target.innerHTML === "show more";

      var element = e.target.parentElement.getElementsByTagName("p")[0];

      if (showMore) {
        element.classList.remove("hide-content");
        e.target.innerHTML = "show less";
      } else {
        element.classList.add("hide-content");
        e.target.innerHTML = "show more";
      }
      var head = e.target.parentElement.getElementsByTagName("h3")[0];
      head.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.service-container {
  border: 0.5px solid black;
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 10px;
}

/* .subtext {
  height: 20px;
  overflow: hidden;
} */

.hide-content {
  overflow: hidden;
  /* line-height: 1em; */
  height: 25px;
}

.show-content {
  /* line-height: 1em; */
  height: auto;
}

h3,
h4,
p {
  margin: 0;
}

.more {
  margin-top: 10px;
  text-decoration: underline;
}
</style>