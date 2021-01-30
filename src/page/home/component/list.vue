<template>
  <div class="list-root">
    <div class="chat-list">
      <van-list
        v-model:loading="msgState.loading"
        v-model:error="msgState.error"
        :finished="msgState.finishe"
        error-text="请求失败，点击重新加载"
        @load="msgState.onLoad"
      >
        <van-cell v-for="item in msgState.list" :key="item">
          <div class="chat-item" @click="goAim(item.opposite.id)">
            <van-image
              class="chat-item-icon"
              fit="cover"
              src="/@/assets/img/test.jpg"
            />
            <div class="chat-item-info h100 flex f1 fdc jcsb">
              <div class="name f14">{{ item.opposite.username }}</div>
              <div class="last f12 c-gray">{{ item.content }}</div>
            </div>
            <div class="chat-item-status">
              <div class="time c-gray f12">
                {{ parseTime(item.create_time, "{h}:{i}") }}
              </div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { parseTime } from "/@/utils";
import { getMsgList } from "/@/api/user";
export default defineComponent({
  setup() {
    const msgState = reactive({
      loading: false,
      error: false,
      finishe: false,
      list: [],
      onLoad: async (e) => {
        const result = await getMsgList();
        msgState.list = result.data.chatMsgs;
        msgState.loading = false;
        msgState.finishe = true;
      },
    });

    const router = useRouter();
    // 跳转到
    const goAim = (id: string) => router.push(`/chat?to=${id}`);

    return {
      msgState,
      parseTime,
      goAim,
    };
  },
});
</script>

<style lang="scss" scoped>
.chat-list {
  padding: 20px 0;
  .chat-item {
    display: flex;
    align-items: center;
    padding: 5px 0;
    // border-bottom: 1px solid #eee;
    line-height: 1.5;
    .chat-item-icon {
      width: 45px;
      height: 45px;
      margin-right: 10px;
      border-radius: 6px;
      overflow: hidden;
    }
    .chat-item-info {
      flex: 1;
    }
  }
}
</style>
