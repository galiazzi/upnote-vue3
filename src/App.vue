<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="20%" />
    <h3>Version: {{ version }}</h3>

    <Todo title="Lista" />
  </div>
</template>

<script>
import { version } from "vue";
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
  data() {
    return {
      version,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
