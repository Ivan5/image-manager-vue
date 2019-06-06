<template>
  <div class="gallery">
    <div class="image" v-for="image in images" :key="image._id">
      <img :src="server + '/images/' + image.filename">
      <button class="remove" @click="$emit('removeImage', image)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  props: ["server", "images"]
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}

.image {
  max-width: 50%;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
}

img {
  width: 100%;
  display: block;
  filter: grayscale(50%);
}

img:hover {
  filter: none;
}

.remove {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 28px;
  font-weight: 700;

  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  background: transparent;
  color: crimson;
  margin: 0;
  padding: 0;
}
</style>
