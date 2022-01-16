<template>
  <div class="card" :class="diplayMode">
    <img
      :src="showedImage"
      @mouseover="showedImage = video.hoverImage"
      @mouseleave="showedImage = video.coverImage"
      @click="routingWatch"
      alt="Video Image"
    />
    <div class="info">
      <div v-if="diplayMode == 'vertical'">
        <img :src="video.ownerImage" alt="" />
        <span class="material-icons add-favorites"> favorite_border </span>
        <div class="texts">
          <div class="title">{{ video.title }}</div>
          <div class="owner">{{ video.ownerName }}</div>
          <div class="counts">
            <span> {{ video.viewCount }} viewed </span>
            <span>•</span>
            <span> {{ video.publishDateInMonth }} mont ago </span>
          </div>
        </div>
      </div>
      <div v-else>
        <span class="material-icons add-favorites"> favorite_border </span>
        <div class="texts">
          <div class="title">{{ video.title }}</div>
          <div class="counts">
            <span> {{ video.viewCount }} viewed </span>
            <span>•</span>
            <span> {{ video.publishDateInMonth }} mont ago </span>
          </div>
          <div class="owner">
            <img :src="video.ownerImage" alt="" />
            <span> {{ video.ownerName }}</span>
          </div>
          <div class="description">
            {{ video.description }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- // coverImage: "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp"
// description: "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
// hoverImage: "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp"
// id: 1
// ownerImage: "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj"
// ownerName: "freeCodeCamp.org"
// publishDateInMonth: 4
// title: "Vue.js Course for Beginners [2021 Tutorial]"
// videoAddress: "https://www.youtube.com/watch?v=FXpIoQ_rT_c"
// viewCount: 254 -->
</template>

<script>
export default {
  name: "Video",
  props: ["video", "diplayMode"],
  data() {
    return {
      showedImage: this.video.coverImage,
    };
  },
  methods: {
    routingWatch() {
      this.$router.push(`/watch?videoId=${this.video.id}`);
    },
  },
};
</script>

<style scoped>
.vertical {
  width: 360px;
  background: rgba(0, 0, 0, 0.03);
  position: relative;
}
.vertical > img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.horizontal {
  background: rgba(0, 0, 0, 0.03);
  position: relative;
  display: flex;
  width: 800px;
  font-size: 20px;
  gap: 10px;
}
.horizontal > img {
  width: 360px;
  height: 200px;
  object-fit: cover;
}

.horizontal > .info > div > .texts > .owner {
  display: flex;
  align-items: center;
  gap: 10px;
}
.horizontal > .info > div > .texts > .owner > img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.vertical > .info > div > img {
  width: 36px;
  height: 36px;
}

.card > .info > div {
  display: flex;
  margin-top: 1em;
  gap: 20px;
  padding: 0 5px;
}
.card > .info > div > .add-favorites {
  position: absolute;
  top: 10px;
  right: 10px;
  color: darkorange;
  cursor: pointer;
}

.card > .info > div > img {
  align-self: flex-start;
  border-radius: 50%;
}
.card > .info > div > .texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 10px;
  gap: 10px;
}
.card > .info > div > .texts > div {
  text-align: start;
}
.card > .info > div > .texts > .title {
  font-size: 0.9em;
  font-weight: 600;
}
.card > .info > div > .texts > .owner {
  font-size: 0.8em;
  font-weight: 500;
}
.card > .info > div > .texts > .counts {
  display: flex;
  gap: 10px;
  font-size: 0.7em;
}
.card > .info > div > .texts > .description {
  font-size: 0.9rem;
}
</style>
