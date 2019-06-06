<template>
  <div id="app">
    <ImageUploader :api="api" v-on:imageUploaded="this.newImage"/>
  </div>
</template>

<script>
import ImageUploader from "./components/ImageUploader.vue";
export default {
  name: "app",
  components: { ImageUploader },
  data() {
    return {
      api: {
        upload: "http://localhost:3000/upload"
      },
      images: []
    };
  },
  methods: {
    newImage(image) {
      this.images.push(image);
    }
  }
};
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
