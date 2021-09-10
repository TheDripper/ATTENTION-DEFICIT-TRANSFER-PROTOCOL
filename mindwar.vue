<template>
  <div id="root" class="flex">
    <div class="hidden p-8 text-center w-full uppercase"></div>
    <div id="tiles" data-push="test">
      <div
        :id="cell.title.rendered"
        v-for="cell in cells"
        :key="cell.id"
        class="cell"
        v-html="cell.content.rendered"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
export default {
  mounted() {
    // $("a").each(function () {
    //   $(this).attr("target", "_blank");
    // });
    $(".scroll a").on("click", function (e) {
      e.preventDefault();
      const hash = $(this).attr("href");
      console.log(hash);
      // const headerHeight = $header.outerHeight() + 500;
      const offset = $(hash).offset().top;
      $("html,body").animate({ scrollTop: offset }, 500);
    });
  },
  async asyncData({$axios}) {
      const cells = await $axios.$get('/wp-json/wp/v2/cell?tags=29');
      return {
          cells
      }
  }
};
</script>

<style lang="scss">
h1 {
  @apply text-5xl;
  color: black;
  text-shadow: 2px 2px 0 #00ffff, -2px -2px 0 #00ff00;
  border: 1px solid #ff00ff;
}
html,
body {
  background: black;
  color: #00ff00;
  font-family: "vcr";
  width: 100vw;
  height: 100vh;
  @apply text-lg;
}
.wp-block-columns {
  @apply flex flex-col;
  @screen sm {
    @apply flex-row;
    .wp-block-column {
      flex: 50%;
    }
  }
}
p {
  @apply mb-2;
}
a {
  color: #00ffff;
  border-bottom: 3px solid #ff00ff;
  padding-bottom: 2px;
  @apply inline-block;
}
.done {
  text-decoration: line-through;
}
.zoom {
  animation: 20s linear infinite reverse zoom;
  /* transform-origin: 30% 0; */
}
@keyframes zoom {
  0% {
    transform: scale(7);
    filter: blur(0);
  }
  100% {
    transform: scale(3);
  }
}
@keyframes double {
  0% {
    filter: blur(0);
    opacity: 1;
  }
  100% {
    filter: blur(10px);
    opacity: 0.5;
  }
}
.vert {
  max-width: 400px;
  @apply flex-col mx-auto;
}
blockquote {
  @apply text-xl p-6 mb-6 w-full;
  @screen lg {
    @apply text-3xl;
  }
  cite {
    @apply pt-4 pr-4 flex flex-wrap justify-end w-full;
  }
}
.logo {
  transform: translate(-70px, 75px);
}
li {
  @apply relative pl-8 text-2xl mb-2;
  text-shadow: 2px 2px 0 #ff00ff;
  color: #00ffff;
  &:before {
    content: url("/shebang.svg");
    @apply absolute left-0;
    top: 0;
    width: 25px;
    height: 25px;
  }
}
ul {
  @apply mb-4;
}
.blocks-gallery-grid {
  @apply flex max-w-xl mx-auto justify-center items-center;
  li {
    &:before {
      display: none !important;
    }
  }
}
.logos {
  img {
    width: 300px;
  }
}
h2 {
  text-shadow: 2px 2px 0 #ff00ff;
  // text-shadow: 2px 2px 0 #00ffff, -2px -2px 0 #00ff00;
  color: #00ffff;
  @apply text-4xl;
}
.nopurge {
  @apply p-8;
}
@keyframes flash {
  from {
    opacity: 0.5;
    transform: scale(1);
  }
  to {
    opacity: 1;
    transform: scale(1.2);
  }
}
.flash {
  animation: 5s flash infinite alternate linear;
}
.double {
  filter: blur(3px) hue-rotate(-55deg) saturate(500%);
  animation: double 1s infinite alternate linear;
}
.sidex-gif {
  img {
    width: 1200px;
    max-width: 100%;
    height: auto !important;
  }
}
.statement {
  border: 1px solid #00ffff;
}
@keyframes slide {
  to {
    margin-left: -900px;
  }
}
.slide {
  animation: 10s slide linear infinite;
}
.frame {
  @apply relative flex;
}
video {
  width: 800px;
  height: 800px;
  flex-shrink: 0;
  max-width: none;
}
.flex-group {
  .wp-block-group__inner-container {
    @apply flex;
  }
  &.items-center {
    .wp-block-group__inner-container {
      @apply items-center;
    }
  }
  &.items-end {
    .wp-block-group__inner-container {
      @apply items-end;
    }
  }
}
.logos {
  figure {
    @apply p-8;
  }
}
strong {
  color: #ff00ff;
}
</style>