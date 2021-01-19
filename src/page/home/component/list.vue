<template>
  <div class="list-root">
    <div class="chat-list">
      <div class="chat-item">
        <img class="chat-item-icon" src="" alt="" />
        <div class="chat-item-info">
          <div class="name"></div>
          <div class="last"></div>
        </div>
        <div class="chat-item-status">
          <div class="time"></div>
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
  }
}
</style>
