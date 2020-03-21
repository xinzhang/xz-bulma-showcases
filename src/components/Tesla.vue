<template>
  <div>
    <section class="hero tesla-hero" style="width: 100vw; height: 94vh;">
      <nav class="hero-head">
        <div class="columns is-mobile is-marginless heading has-text-weight-bold">
          <div class="column left">
            <figure class="navbar-item image">
              <img src="images/tesla.svg" style="width: 6.25rem; height: 1rem;">
            </figure>
          </div>
          <div class="column center desktop">
            <p class="navbar-item has-text-black">MODEL X</p>
            <p class="navbar-item has-text-black">MODEL 3</p>
            <p class="navbar-item has-text-black">MODEL S</p>
            <p class="navbar-item has-text-white">ROADSTER</p>
            <p class="navbar-item has-text-black">ENERGY</p>
          </div>
          <div class="column right">
            <p class="navbar-item desktop has-text-black">SHOP</p>
            <p class="navbar-item desktop has-text-black">SIGN IN</p>
            <p class="navbar-item">
              <figure class="navbar-item image has-text-black center">
                <i class="fas fa-bars" style="width: 1rem; height: 1rem;"></i>
              </figure>
            </p>
          </div>
        </div>
      </nav>

      <header class="hero-body">
        <div class="is-overlay has-text-centered single-spaced" style="top: 160px">
          <h1 class="subtitle is-4 has-text-weight-light has-text-black">Tesla</h1>
          <h2 class="title is-1 has-text-black has-text-weight-bold">Roadster</h2>
        </div>
      </header>

      <!-- .hero-foot -->
      <main class="hero-foot center" style="padding: 2rem;">
        <div class="footer-grid" style="width: 768px;">
          <div class="a center-column">
            <p
              class="has-text-centered has-text-white"
            >​The quickest car in the world, with record-setting
              <br>acceleration, range and performance.
            </p>
          </div>
          <div class="b center-column">
            <p class="title has-text-white">
              <i
                class="fas fa-tachometer-alt has-text-grey-light"
                style="width: 0.75em; height: 0.75em;"
              ></i>
              1.9
              <span class="is-size-5">s</span>
            </p>
            <p class="subtitle has-text-white is-7">0-60 mph</p>
          </div>
          <div class="c center-column" style="border-left: 1px solid gray;">
            <p class="title has-text-white">
              <span class="is-size-5">+</span>250
              <span class="is-size-5">mph</span>
            </p>
            <p class="subtitle is-7 has-text-white">Top Speed</p>
          </div>
          <div class="d center-column" style="border-left: 1px solid gray;">
            <p class="title has-text-white">
              <span>620</span>
              <span class="is-size-5">mi</span>
            </p>
            <p class="subtitle is-7 has-text-white">Mile Range</p>
          </div>
          <div class="e center-column">
            <a
              class="button is-danger is-inverted is-rounded is-outlined has-text-weight-bold"
              style="width: 100%; border: 0.15em solid white;"
            >Reserve Now</a>
          </div>
        </div>
      </main>
      <!-- /.hero-foot -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Tesla"
};
</script>

<style>
@import "../assets/helper.css";
@import "../assets/grid.css";

.tesla-hero {
  background: black url(images/hero-1.jpg)center/cover;
}

@media (max-width: 1024px) {
  .tesla-hero {
    background: black url(images/hero-2.jpg)center/cover;
  }
}
@media (max-width: 768px) {
  .tesla-hero {
    background: black url(images/hero-3.jpg)center/cover;
  }
}
</style>
