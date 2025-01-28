<script setup lang="ts">
import asyncQueue from "@/utils/asyncQueue";
import errorCallback from "@/utils/errorCallback";

asyncQueue.enqueue(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("setTimeout 1");
});

asyncQueue.enqueue(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log("posts 1", response);
});

asyncQueue.enqueue(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("setTimeout 2");
});

asyncQueue.enqueue(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  console.log("posts 2", response);
});

const errorHandler = (error: unknown) => {
  console.log(errorCallback.isRunning);
  console.log(error);
};
errorCallback.addErrorHandler(errorHandler);
console.log(errorCallback.isRunning);
errorCallback.run();
</script>

<template>
  <h1>This is a home page.</h1>
</template>
