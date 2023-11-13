<template lang="html">
  <div v-if="showImages">
    <div class="image-list-container mb-4">
      <image-list-view />
    </div>
  </div>
  <div class="upload-container text-center ma-4">
    <div class="text-h5 pa-2">Select File here</div>
    <div class="text-body-2">Files Supported: PNG, JPG</div>
    <input type="file" hidden ref="fileRef" @change="uploadOnChange" />
    <v-btn
      class="ma-2"
      color="indigo"
      icon="mdi-cloud-upload"
      @click="openFileUpload()"
    ></v-btn>
  </div>
</template>

<script lang="ts">
import ImageListViewComponent from "./ImageListViewComponent.vue";

import { sendFileToThreatDetect } from "../shared/services/file-upload.service";

export default {
  name: "image-uploader",
  components: {
    "image-list-view": ImageListViewComponent,
  },
  data() {
    return {
      uploadedFile: null,
      fileRef: {},
      showImages: false,
    };
  },
  methods: {
    openFileUpload() {
      const fileInputElement: any = this.$refs.fileRef;
      fileInputElement.click();
    },
    uploadOnChange() {
      const fileInputElement: any = this.$refs.fileRef;
      this.uploadedFile = fileInputElement.files[0];

      const payload = new FormData();
      payload.append("image", this.uploadedFile);

      sendFileToThreatDetect(payload)
        .then((serviceResult) => {
          if (serviceResult) {
            this.showImages = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.image-list-container {
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.upload-container {
  width: 30%;
  height: 200px;
  border: dotted 2px black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
