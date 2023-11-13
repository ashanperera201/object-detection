<template>
 <image-uploader></image-uploader>
</template>

<script lang="ts">
import UploadComponent from "./components/UploadComponent.vue";

export default {
  name: "App",
  components: {
    "image-uploader": UploadComponent,
  },
};
</script>

<style scoped></style>
