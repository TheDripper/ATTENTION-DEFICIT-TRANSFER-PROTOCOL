<template>
  <div id="root" class="flex items-center justify-center">
    <div class="hidden p-8 text-center w-full">
    </div>
    <div id="tiles" class="text-center">
      <h2>Thank you! We'll get back to you at the submitted email within 48 hours.</h2>
      <h3>Feel free to follow up at admin@tylerhillweb.dev</h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
export default {
  mounted() {
    $("a").each(function () {
      $(this).attr("target", "_blank");
    });
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
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
.vert {
  max-width: 400px;
  @apply flex-col mx-auto;
}
blockquote {
  @apply text-3xl p-6 mb-6;
  cite {
    @apply pt-4 pr-4 flex justify-end w-full;
  }
}
.logo {
  transform: translateY(75px);
}
li {
  @apply relative pl-8 text-2xl mb-2;
  text-shadow: 2px 2px 0 #ff00ff;
  color: #00ffff;
  &:before {
    content: url('/shebang.svg');
    @apply absolute left-0;
    top: 0;
    width: 25px;
    height: 25px;
  }
}
ul {
  @apply mb-4;
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
</style>