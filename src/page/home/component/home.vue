<template>
  <div>
<van-list
  v-model="loading"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { getUserlist } from "/@/api/user";
export default defineComponent({
  setup() {
    const userList = reactive({
      loading: false,
      onLoad() {
        getUserlist({ type: "1" }).then((res) => {
          console.log(res);
        });
      }
    })

    return {};
  },
});
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
