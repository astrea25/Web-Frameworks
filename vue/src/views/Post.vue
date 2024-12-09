<template>
  <div class="container mx-auto p-6">
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-4xl font-semibold text-gray-800 mb-4">{{ post.title }}</h1>
      <p class="text-gray-700 leading-relaxed mb-6">{{ post.body }}</p>
      <router-link
        to="/posts"
        class="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium"
      >
        Back to Posts
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const post = ref('');
const route = useRoute();

onMounted(() => {
  const id = route.params.id;
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      post.value = res.data;
    })
    .catch((err) => {
      console.error('Error fetching post:', err);
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