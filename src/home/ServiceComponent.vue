<template>
  <div class="service-container">
    <h3>{{this.header}}</h3>
    <p ref="hi" class="hide-content" v-html="subtext"></p>
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

  mounted: function() {
    // const reqObject = JSON.parse(JSON.stringify(this));
    // console.log(reqObject);
    // console.log(this.$refs.hi);

    var el = this.$el.getElementsByTagName("p")[0];
    if (el.offsetWidth === el.scrollWidth) {
      console.log("testing");
      var el2 = this.$el.getElementsByTagName("p")[1];
      el2.classList.add("hidden");
    }

    // console.log(this.proxy);
  },
  // computed: {
  //   overflown: function() {
  //     console.log(this.target);
  //     // var ele = this.parentElement.getElementsByTagName("p")[0];
  //     return true;
  //     // return ele.offsetWidth === ele.scrollWidth;
  //   }
  // },
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

      if (element.offsetWidth === element.scrollWidth) {
        console.log("testing");
      }
      // console.log(e.target.parentElement);
      // var head = e.target.parentElement.getElementsByTagName("h3")[0];
      e.target.parentElement.scrollIntoView({ behavior: "smooth" });
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
.hidden {
  display: none;
}
.hide-content {
  overflow: hidden;
  /* line-height: 1em; */
  height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
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