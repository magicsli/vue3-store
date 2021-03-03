<template>
  <div>
    <van-list
      v-model="userList.loading"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in userList.list"
        :key="item._id"
        :title="item.username"
        @click="handleChat(item._id)"
      >
      </van-cell>
    </van-list>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, reactive } from "vue";
import { getUserlist } from "/@/api/user";
export default defineComponent({
  setup() {
    const router = useRouter();
    const userList = reactive({
      loading: false,
      list: [],
    });
    const onLoad = () => {
      getUserlist({ type: "1" }).then((res) => {
        userList.list = res.data;
        console.log(res.data);
      });
    };

    const handleChat = (_id) => {
      router.push(`/chat?to=${_id}`);
    };
    return {
      userList,
      onLoad,
      handleChat,
    };
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
