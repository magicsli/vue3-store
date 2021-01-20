<template>
  <Navigation />
  <router-view v-slot="{ Component }">
    <transition name="van-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "/@/components/Navigation.vue";
export default defineComponent({
  name: "App",
  components: {
    Navigation,
  },
});
</script>
