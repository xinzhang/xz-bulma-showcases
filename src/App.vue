<template>
  <div id="app">
    <nav
      class="navbar"
      style="border-bottom: solid 4px"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </div>
      <div class="navbar-start desktop">
        <router-link class="navbar-item" to="/main">Home</router-link>
        <router-link class="navbar-item" to="/blog">blog</router-link>
        <router-link class="navbar-item" to="/tesla">Tesla</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
