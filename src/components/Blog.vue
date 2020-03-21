<template>
  <div>
    <!-- .section -->
    <section class="section is-paddingless-horizontal">
      <div class="container grid">
        <nav class="breadcrumb grid-xl" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">How to build a beautiful blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <section class="section is-paddingless-horizontal" style="padding-top: 0;">
      <div class="container grid">
        <article class="media center">
          <figure class="media-left">
            <figure class="image is-64x64">
              <img src="images/me.jpg">
            </figure>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Zaydek Michels-Gualtieri</strong>
                <a>@username_zaydek</a>
                <br>
                <span class="has-text-grey">Self-taught, inspired to learn
                  <br>
                  <time datetime="2018-04-20">Apr 20</time> · 20 min read
                </span>
              </p>
            </div>
          </div>
        </article>

        <div class="section is-paddingless-horizontal">
          <h1 class="title is-2">How to build a beautiful blog</h1>
          <h2 class="subtitle is-3">Learn from first-principles</h2>
        </div>

        <!-- /.section -->
        <!-- .columns -->
        <figure class="columns is-mobile is-variable is-0 grid-xl">
          <div class="column">
            <div class="image card">
              <img src="images/blog-1.png">
            </div>
          </div>
          <div class="column">
            <div class="image card">
              <img src="images/blog-2.png">
            </div>
          </div>
          <div class="column">
            <div class="image card">
              <img src="images/blog-3.png">
            </div>
          </div>
        </figure>
        <figcaption class="level">
          <small class="level-item has-text-gray">The blog we'll build. Click to continue on Scrimba</small>
        </figcaption>
        <!-- /.columns -->
        <div class="content is-medium">
          <p>
            If you’re like me, you’re interested in the web and its overwhelming reach, but you’re also inundated with the mess of information that is learning HTML and CSS.
            The thing is, these languages are unlike other domains, like Word Processors and Programming Languages.
            <strong>The web is another world</strong>, and it’s not the prettiest thing around.
          </p>
          <p>
            Having learned me some web, I’m here to give a gentle push of encouragement, because,
            <strong>with a little guidance</strong>, these domains can be a lot easier than you imagine.
            Continue reading, and we’ll build a beautiful blog from scratch.
            We’ll also learn some CSS Grid, Flexbox, and Responsive Design.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Blog"
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.is-paddingless-horizontal {
  padding-left: 0;
  padding-right: 0;
}

.grid {
  display: grid;
  grid-template-columns: [xl-start] 1fr 1.5rem [md-start] minmax(0, 624px) [md-end] 1.5rem 1fr [xl-end];
}

.grid * {
  grid-column: md;
}
.grid-xl {
  grid-column: xl;
}
@media (max-width: 672px) {
  :root {
    font-size: 70%;
  }
}
</style>

