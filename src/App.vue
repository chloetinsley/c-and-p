<template>
  <main>
    <header>
      <nav>
        <!-- <ul>
        <li class="nav-item">-->
        <router-link :to="{ name:'Home'}">
          <img alt="logo" src="./assets/logo.jpeg" class="logo" />
        </router-link>
        <!-- </li>
        </ul>-->
        <li v-if="isContact" class="nav-item" style="float:right; margin-top:10px;">
          <router-link to="/contact">
            <button class="quote-button">Get a Quote</button>
          </router-link>
        </li>
      </nav>
    </header>
    <div class="content">
      <router-view />
    </div>
    <footer>
      <div class="footer">
        <div style=" align-self: left; display: flex;  justify-content: flex-start;">
          <p>© {{new Date().getFullYear()}} Chloe and Phebe</p>
        </div>
        <div class="footer-logos">
          <a
            href="https://www.facebook.com/chloetinskey/"
            target="blank"
            rel="noopener nofollow noreferrer"
          >
            <img
              class="social-media-logo"
              alt="Facebook Logo"
              src="./assets/footer-logos/facebook-logo.png"
            />
          </a>
          <a
            href="https://www.instagram.com/chloetinsleyxo/"
            target="blank"
            rel="noopener nofollow noreferrer"
          >
            <img
              class="social-media-logo"
              alt="Instagram Logo"
              src="./assets/footer-logos/instagram-logo.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/chloe-tinsley-a62a56131/"
            target="blank"
            rel="noopener nofollow noreferrer"
          >
            <img
              class="social-media-logo"
              alt="LinkedIn Logo"
              src="./assets/footer-logos/linkedin-logo.png"
            />
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  name: "App",
  computed: {
    isContact() {
      return this.$route.name !== "Contact";
      // return true;
    }
  }
};
</script>

<style>
header {
  background-color: #ebebe9;
}
body {
  margin: 0;
}
.content {
  margin: 0 auto;
  /* padding: 0 30px 30px 30px; */
}
.logo {
  margin-left: 30px;
  vertical-align: middle;
  height: 80px;
  mix-blend-mode: multiply;
  /* width: 150px; */
  /* border-radius: 50%; */
  /* object-fit: cover; */
  /* float: left; */
}

.quote-button {
  border: none;
  /* background-color: #e87a0c; */
  background-color: #3a6963;
  /* background-color: #c86f15; */
  padding: 0.5em 1.25em;
  color: #ebebe9;
  border-radius: 150px;
  font-size: 16px;
  /* float: right; */
}

ul,
li {
  padding: 0;
  margin: 0;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px 5px 0;
  font-size: 20px;
}

.nav-item a {
  text-decoration: none;
  color: #001f3d;
}

.nav-item a:hover {
  color: black;
}

.nav-item a:visited {
  /* color: inherit; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.footer {
  display: flex;
  /* mint */
  background-color: #3a6963;
  /* light blue */
  /* background-color: #045174;  */
  /* dark blue */
  /* background-color: #001f3d;  */
  padding: 5px 30px;
  /* color: #f8dcbb; */
  flex-direction: row;
  color: #ebebe9;
  align-content: stretch;
  flex-wrap: wrap;
  /* align-content: space-between; */
  font-size: 14px;
}

.footer-logos {
  /* float: right; */
  display: flex;
  /* border: 1px solid green; */
  /* vertical-align: middle; */
  height: auto;
  justify-content: flex-end;
  margin: 14px 0 14px auto;
  /* margin-left: auto; */

  align-self: right;
}
.social-media-logo {
  display: flex;
  height: 20px;
  vertical-align: middle;
  margin-left: 8px;

  /* display: inline-block; */
}
</style>
