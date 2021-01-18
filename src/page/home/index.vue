<template>
  <div class="root">
    <router-view :active="active"></router-view>
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
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const store = useStore();
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

<style lang="scss" scoped></style>
