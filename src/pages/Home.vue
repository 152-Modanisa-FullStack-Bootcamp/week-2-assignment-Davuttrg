<template>
  <div class="content">
    <Video
      :key="video.id"
      v-for="video in videos"
      :video="video"
      :diplayMode="'vertical'"
    ></Video>
  </div>
</template>

<script>
import axios from "axios";
import Video from "../components/Video";
export default {
  name: "Home",
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
}
</style>
