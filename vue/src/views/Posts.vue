<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-semibold mb-6 text-center">Post List</h1>
    <ul class="space-y-4">
      <li v-for="post in posts" :key="post.id" class="border border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition duration-200">
        <router-link
          :to="`/post/${post.id}`"
          class="text-xl font-medium text-blue-600 hover:text-blue-800 transition duration-300"
        >
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);

onMounted(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      posts.value = response.data;
    })
    .catch((error) => {
      console.error('Error fetching posts:', error);
    });
});
</script>
<style scoped>
@media (hover: hover) {
  a:hover {
    background-color: transparent;
  }
}
</style>
