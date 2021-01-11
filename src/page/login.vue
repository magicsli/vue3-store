<template>
  <div class="root">
    这是login/register页面
    <div>
      <van-button @click="handleGoTabbar" type="primary"
        >登录至tabbar</van-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { login, register, getUser } from "/@/api/user";
export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const handleGoTabbar = () => {
      router.push("/tabbar");
    };
    onMounted(() => {
      login({
        username: "aaa",
        password: "a1234567",
        type: "1",
        id: "5ffbbdad53204b197c34bfe3",
      }).then((res) => {
        if (res && res.token) {
          localStorage.setItem("token", res.token);
        }
      });
    });
    return {
      handleGoTabbar,
    };
  },
});
</script>
