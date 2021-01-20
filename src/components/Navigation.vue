<template>
  <van-nav-bar
    v-show="nav.show"
    :title="nav.title"
    left-text="返回"
    left-arrow
    @click-left="handleBack"
  />
</template>
<script lang="ts">
import { defineComponent, reactive, watch, watchEffect } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { staticRouter } from "/@/route/route";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    // 过滤
    function filterNavgation(routeList) {
      let isShow = true;
      routeList.find((item) => {
        if (item.name === route.name) {
          isShow = false;
          return true;
        }
        if (item.children && item.children.length !== 0) {
          if (!filterNavgation(item.children)) {
            isShow = false;
          }
        }
      });
      return isShow;
    }

    const nav = reactive({
      show: false,
      title: "",
    });

    const handleBack = () => router.back();

    // nav.show = filterNavgation(staticRouter) && !route.meta.hiddenNavgation;
    // nav.title = route.meta.title;
    watchEffect((onInvalidate) => {
      nav.show = filterNavgation(staticRouter) && !route.meta.hiddenNavgation;
      nav.title = route.meta.title;
    });
    // console.log(nav, filterNavgation(staticRouter), route.meta);
    return {
      nav,
      handleBack,
    };
  },
});
</script>
