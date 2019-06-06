<template>
  <div id="app">
    <ImageUploader :api="api" v-on:imageUploaded="this.newImage"/>
    <ImageGallery
      server="http://localhost:3000"
      v-bind:images="images"
      v-on:removeImage="this.removeImage"
    />
  </div>
</template>

<script>
import ImageUploader from "./components/ImageUploader.vue";
import ImageGallery from "./components/ImageGallery.vue";
export default {
  name: "app",
  components: { ImageUploader, ImageGallery },
  data() {
    return {
      api: {
        upload: "http://localhost:3000/upload",
        retrive: "http://localhost:3000/retrive"
      },
      images: []
    };
  },
  methods: {
    newImage(image) {
      this.images.push(image);
    },
    removeImage(image) {
      let index = this.images.indexOf(image);
      this.images.splice(index, 1);
    }
  },
  beforeMount() {
    fetch(this.api.retrive)
      .then(response => {
        return response.json();
      })
      .then(images => {
        this.images = images;
      });
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
