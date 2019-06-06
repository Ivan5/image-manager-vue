<template>
  <div>
    <label for="title">Image Title:</label>
    <br>
    <input type="text" name="title" id="title">
    <br>
    <br>
    <label for="image">Upload Image:</label>
    <br>
    <input type="file" name="image" id="image">
    <br>
    <br>
    <button @click="this.uploadForm">Upload</button>
  </div>
</template>

<script>
export default {
  name: "image-uploader",
  props: ["api"],
  methods: {
    uploadForm() {
      const title = document.getElementById("title").value;
      const image = document.getElementById("image").files[0];

      let payload = new FormData();
      payload.append("title", title);
      payload.append("image", image);

      let headers = new Headers();
      headers.append("Content-Type", "multipart/form-data");
      fetch(this.api.upload, {
        method:'POST',
        body: payload
      }).then(response => {
        return response.json();
      }).then(data => {
        this.$emit('imageUploaded', data);
      })
    }
  }
};
</script>

<style>
</style>
