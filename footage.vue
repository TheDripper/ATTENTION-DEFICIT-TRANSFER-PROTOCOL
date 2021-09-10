<template>
<div id="videos">
<video v-for="(video, index) in videos" :key="index" controls>
    <source :src="video " />
</video>
    </div>
</template>
<script>
export default {
  computed: {
    videos() {
      return this.$store.state.videos;
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "og:description",
          name: "og:description",
          content: "UPPFRI Footage",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://deadcustomer.s3-us-west-1.amazonaws.com/footage-meta.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
html, body {
    background: black;
}
#videos {
  display: flex;
  flex-wrap: wrap;
  background: black;
}
video {
  width: 25%;
}
</style>