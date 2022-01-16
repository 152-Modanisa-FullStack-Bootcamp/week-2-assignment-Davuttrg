<template>
  <div class="content">
    <Video
      :key="video.id"
      v-for="video in videos"
      :video="video"
      :diplayMode="'horizontal'"
    ></Video>
  </div>
</template>

<script>
import axios from "axios";
import Video from "../components/video.vue";
export default {
  name: "Favorites",
  components: { Video },
  data() {
    return {
      videos: [],
    };
  },
  async created() {
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"
    );
    this.videos = data;
  },
};
</script>

<style scoped>
.content {
  display: flex;
  gap: 20px;
  margin-top: 3rem;
  flex-direction: column;
   align-items: center;
}
</style>
