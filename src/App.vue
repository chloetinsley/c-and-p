<template>
  <main>
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{ name:'Home'}">
              <img alt="logo" src="./assets/logo.jpeg" class="logo" />
              home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view />
    <footer></footer>
  </main>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
main {
  margin: 0 auto;
  padding: 30px;
}

.logo {
  vertical-align: middle;
  height: 80px;
  /* width: 150px; */
  /* border-radius: 50%; */
  /* object-fit: cover; */
  /* float: left; */
}

ul,
li {
  padding: 0;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px 5px 0;
  font-size: 22px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
