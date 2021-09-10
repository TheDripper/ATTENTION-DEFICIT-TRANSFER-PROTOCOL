import pages from "~/static/pages.json";
import videos from "~/static/videos.json";
export const state = () => ({
  posts: [],
  videos: []  
});

export const mutations = {
  posts(state, posts) {
    state.posts = posts;
  },
  videos(state, videos) {
    state.videos = videos;
  }
};
export const actions = {
  // async getPage(context, id) {
  //   const posts = await this.$axios.$get('/wp-json/wp/v2/product');
  //   commit('posts',posts);
  // },
  async nuxtServerInit({ commit }) {
    commit("videos", videos);
  //   if (process.env.NODE_ENV == "development") {
  //     const posts = await this.$axios.$get("/api/wp-json/wp/v2/pages/5");
  //     console.log(posts);
  //     commit("posts", posts);
  //   } else {
  //     commit("posts", pages);
  //   }
  }
};
