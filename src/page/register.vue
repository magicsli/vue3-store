<template>
  <div class="root">
    这是register页面

    <div class="form-box">
      <van-form ref="userfrom" label-width="4em">
        <van-field
          v-model="user.username"
          label="用户名"
          name="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          type="password"
          label="密码"
          name="密码"
          right-icon="closed-eye"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="user.confirmPassword"
          type="password"
          label="确认密码"
          name="确认密码"
          right-icon="closed-eye"
          :rules="[
            {
              required: true,
              validator: handleConfirmPassword,
              message: '请确认密码',
            },
          ]"
        />
        <van-field name="radio" label="用户类型">
          <template #input>
            <van-radio-group v-model="user.type" direction="horizontal">
              <van-radio name="1">达人</van-radio>
              <van-radio name="2">老板</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </van-form>
      <van-button
        @click="onSubmit"
        round
        block
        native-type="submit"
        class="register"
        type="primary"
        >注册
      </van-button>
      <router-link class="login" to="/login">登录</router-link>
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

    const userfrom = ref(null);
    const user = reactive({
      username: "",
      password: "",
      confirmPassword: "",
      type: "1",
    });
    const onSubmit = () => {
      userfrom.value.validate().then((res) => {
        register(user).then((res) => {
          if (res && res.code === 0) {
            router.push("/tabbar");
          }
        });
      });
    };
    const handleConfirmPassword = (vlaue) => {
      return user.password && vlaue === user.password;
    };
    return {
      onSubmit,
      userfrom,
      user,
      handleConfirmPassword,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-box {
  padding: 40px;
}
.register {
  // transition: all 0.3s;
  margin: 20px auto 5px;
  width: 80%;
}
.login {
  color: #409eff;
  font-size: 12px;
  text-align: right;
}
</style>
