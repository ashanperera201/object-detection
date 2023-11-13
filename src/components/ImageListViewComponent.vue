<template>
  <draggable v-model="list" class="d-flex">
    <template v-slot:item="{ item }">
      <div class="btn-delete pa-5">
        <v-btn
          class="ma-2"
          variant="text"
          icon="mdi-delete"
          color="red-lighten-1"
          @click="onImageDelete(item.id)"
        ></v-btn>
      </div>
      <v-img
        class="ma-5"
        :width="300"
        cover
        :src="item.imageAddress"
        aspect-ratio="1"
      ></v-img>
    </template>
  </draggable>
</template>

<script lang="ts">
import Draggable from "vue3-draggable";

export default {
  components: {
    Draggable,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          imageAddress:
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 2,
          imageAddress:
            "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 3,
          imageAddress:
            "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
        },
        {
          id: 4,
          imageAddress:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKkgcLKg4UYvV147tJ0ezJNSMd9ans53sWYrQ-8s2&s",
        },
      ],
    };
  },
  methods: {
    onImageDelete(id) {
      this.list = this.list.filter((_, i) => i !== id);
    },
  },
};
</script>

<style scoped>
.draggable-item {
  margin: 8px;
  padding: 16px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  cursor: grab;
}

.image-container {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.image-container.div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-delete {
  position: absolute;
  z-index: 1000;
}
</style>
