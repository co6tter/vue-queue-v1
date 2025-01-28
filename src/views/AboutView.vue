<script setup lang="ts">
import asyncQueue from "@/utils/asyncQueue";

asyncQueue.enqueue(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("setTimeout 3");
});

asyncQueue.enqueue(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  console.log("posts 3", response);
});
</script>

<template>
  <h1>This is an about page.</h1>
</template>
