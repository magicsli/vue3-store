<template>
  <h1 class="msg">{{ showMsg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code @click="setMsg">components/HelloWorld.vue</code> to test hot
    module replacement.
  </p>
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
    const setMsg = (): void => {
      showMsg.value = "？？？？？？？？？？？？？？？";
    };
    onMounted(() => {
      console.log($route.path);
      getUser("xxx");
    });
    return {
      showMsg,
      setMsg,
    };
  },
});
</script>
<style lang="scss" scoped>
.msg {
  color: red;
}
</style>
