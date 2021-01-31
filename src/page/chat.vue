<template>

  <div class="chat-root flex fdc">
      <van-nav-bar
        :title="opposite.username || '...'"
        left-text="返回"
        left-arrow
        @click-left="router.back()"
      />
    <div class="chat-list f1" ref="listContainer">
      <van-list
        direction="up"
        finished-text="没有更多了"
      >
        <transition-group name="list">
          <van-cell v-for="item in msgList.list" :key="item.create_time">
            <div
              v-if="item.from !== userInfo._id"
              class="chat-item chat-item-left"
            >
              <img
                :src="userInfo.avatar || '/@/assets/img/test.jpg'"
                alt="avatar"
              />
              <div class="chat-content">{{ item.content }}</div>
            </div>
            <div v-else class="chat-item chat-item-right">
              <div class="chat-content">{{ item.content }}</div>
              <img
                :src="opposite.avatar || '/@/assets/img/test.jpg'"
                alt="avatar"
              />
            </div>
          </van-cell>
        </transition-group>
      </van-list>
    </div>
    <van-search
      v-model="sms"
      shape="round"
      show-action
      left-icon=""
      background="rgb(242, 243, 245)"
      placeholder="请输入"
    >
      <template #action>
        <van-button
          round
          class="send"
          @click="send"
          type="primary"
          size="normal"
          >发送</van-button
        >
      </template>
    </van-search>
  </div>
</template>

<script lang="ts">
import { getMsgAimlist } from "/@/api/user";
import { addSocketListener, addSocketSend } from "/@/api/socket";
import { defineComponent, nextTick, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup(props) {
    const sms = ref("");
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const listContainer = ref(null);
    const userInfo = store.getters.userInfo;

    const msgList = reactive({
      list: [],
      total: "",
      loading: false,
    });

    const opposite = ref({
      id: "",
      username: "",
      avatar: "",
    });

    onMounted(() => {
      msgList.loading = true;
      console.log(route.meta.title);

      getMsgAimlist({
        to: route.query.to,
      })
        .then((res) => {
          route.meta.title = res.data.opposite.username;
          console.log(route.meta.title);
          opposite.value = res.data.opposite;
          msgList.list = res.data.chatMsgs;
          addSocketListener("receiveMsg", (res) => {
            if (
              res.from === opposite.value.id ||
              res.to === opposite.value.id
            ) {
              msgList.list.push(res);
              nextTick(() => {
                listContainer.value.scrollTop =
                  listContainer.value.scrollHeight;
              });
            }
          });

          nextTick(() => {
            listContainer.value.scrollTop = listContainer.value.scrollHeight;
          });
        })
        .finally(() => {
          msgList.loading = false;
        });
    });

    const send = async () => {
      if (!sms.value) return;
      await addSocketSend("sendMsg", {
        from: userInfo._id,
        to: opposite.value.id,
        content: sms.value,
      });

      sms.value = "";
    };
    return {
      sms,
      send,
      route,
      router,
      msgList,
      userInfo,
      opposite,
      listContainer,
    };
  },
});
</script>

<style lang="scss" scoped>
.chat-root {
  height: calc(100vh);
  overflow: hidden;

  .chat-list {
    height: 100%;
    overflow-y: scroll;
    transition: all 1s;
    .van-cell::after {
      display: none;
    }
    .chat-item {
      display: flex;
      // color: #666;
      font-size: 12px;
      &.chat-item-left {
        justify-content: flex-start;
        .chat-content::after {
          content: "";
          position: absolute;
          right: 100%;
          top: 20%;
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-right: 6px solid rgba(197, 99, 42, 0.377);
          border-bottom: 4px solid transparent;
        }
      }
      &.chat-item-right {
        justify-content: flex-end;
        .chat-content::after {
          content: "";
          position: absolute;
          left: 100%;
          top: 20%;
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-left: 6px solid rgba(197, 99, 42, 0.377);
          border-bottom: 4px solid transparent;
        }
      }
      .chat-content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.5;
        box-sizing: border-box;
        min-height: 35px;
        max-width: 65%;
        padding: 10px;
        border-radius: 4px;
        background-color: rgba(197, 99, 42, 0.377);
      }
      img {
        width: 40px;
        height: 40px;
        margin: 0 10px;
        border-radius: 10%;
      }
    }
  }
  ::v-deep(.van-search__content) {
    background-color: #fff;
  }

  .send {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 80px;
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
