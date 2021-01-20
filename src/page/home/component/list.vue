<template>
  <div class="list-root">
    <div class="chat-list">
      <div class="chat-item">
        <van-image class="chat-item-icon" src="/@/assets/img/test.jpg" />
        <div class="chat-item-info">
          <div class="name">浙江大佬</div>
          <div class="last">你说尼玛呢1</div>
        </div>
        <div class="chat-item-status">
          <div class="time">19:20</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.chat-list {
  padding: 20px;
  .chat-item {
    display: flex;
    align-items: center;
    padding: 14px;
    border-bottom: 1px solid #eee;
    .chat-item-icon {
      width: 50px;
      height: 50px;
      border-radius: 6px;
      overflow: hidden;
    }
  }
}
</style>
