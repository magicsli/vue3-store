<template>
  <div class="chat-root">
    <van-field v-model="sms" center clearable label="输入" />
    <van-button size="small" @click="send" type="primary">发送</van-button>
  </div>
</template>

<script lang="ts">
import { io } from "socket.io-client";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(props) {
    const sms = ref("");
    const socket = io("ws://localhost:4000");


    const send = () => {
      console.log(socket);
      socket.emit("sendMsg", "world");
    };
    return {
      sms,
      send,
    };
  },
});
</script>
