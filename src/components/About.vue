<template>
  <h1 class="msg">{{ showMsg }}</h1>
    <van-button @click="handleRouterToHelloWord" type="primary">跳转至HelloWord页面</van-button>
</template>
<script lang="ts">
import { defineComponent, onMounted, Ref, ref, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser } from "/@/api/user";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  setup(props, ctx) {
    const $route = useRoute();
    const $router = useRouter();

    const { msg } = toRefs(props);
    const showMsg: Ref<string> = ref(msg.value);

    const handleRouterToHelloWord = () => {
        $router.push('/hello')
    }

    return {
      showMsg,
      handleRouterToHelloWord
    };
  },
});
</script>
<style lang="scss" scoped>
.msg {
  color: red;
}
</style>
