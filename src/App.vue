<template>
  <div class="app">
    <Navigation />
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
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

<style lang="scss" scoped>
.app {
  min-height: 100%;
}
.page-enter-active {
  height: 100%;
  transition: all 0.6s ease;
}

.page-enter-from {
  opacity: 0;
}
</style>
