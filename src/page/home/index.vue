<template>
  <div class="root">
    <router-view :active="active" v-slot="{ Component }">
      <transition name="list">
        <component :is="Component" />
      </transition>
    </router-view>

    <van-tabbar v-model="active" @change="handleTab">
      <van-tabbar-item name="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="/list" icon="search">列表</van-tabbar-item>
      <van-tabbar-item name="/cart" icon="shopping-cart-o"
        >购物车
      </van-tabbar-item>
      <van-tabbar-item name="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const active = ref(route.path);

    const handleTab = (e) => {
      router.replace(e);
    };
    return {
      active,
      handleTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.6s ease;
}

.list-enter-from {
  position: fixed;
  width: 100%;
  opacity: 0;
  transform: translateX(-100%);
}

.list-leave-to {
  position: fixed;
  width: 100%;
  opacity: 0;
  transform: translateX(100%);
}
</style>
