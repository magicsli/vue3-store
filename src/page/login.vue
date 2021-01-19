<template>
  <div class="root tac">
    这是login页面

    <div class="form-box">
      <van-form ref="userfrom" @submit="onSubmit">
        <van-field
          label-width="4em"
          v-model="user.username"
          label="用户名"
          name="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          label-width="4em"
          v-model="user.password"
          :type="look ? 'password' : 'text'"
          label="密码"
          name="密码"
          :right-icon="look ? 'closed-eye' : 'eye-o'"
          :rules="[{ required: true, message: '请填写密码' }]"
          @click-right-icon.stop="look = !look"
        />
      </van-form>
      <van-button
        @click="onSubmit"
        round
        block
        native-type="submit"
        class="login"
        type="primary"
        >登录
      </van-button>
      <router-link class="register" to="/register">注册</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { login, register, getUser } from "/@/api/user";
export default defineComponent({
  setup(props, ctx) {
    const router = useRouter();
    const route = useRoute();

    const look = ref(true);
    const userfrom = ref(null);
    const user = reactive({
      username: "",
      password: "",
    });
    const onSubmit = () => {
      userfrom.value.validate().then((res) => {
        login(user).then((res) => {
          const jump: string = decodeURIComponent(route.query.jump + "");
          router.push(route.query.jump ? jump : "/");
        });
      });
    };
    onMounted(() => {});
    return {
      onSubmit,
      userfrom,
      user,
      look,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-box {
  padding: 40px;
}
.login {
  // transition: all 0.3s;
  margin: 20px auto 5px;
  width: 80%;
}
.register {
  color: #409eff;
  font-size: 12px;
  text-align: right;
}
</style>
