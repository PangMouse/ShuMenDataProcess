<template>
  <div class="login">
    <div class="login-header">
      <img src="../assets/images/loginicon.png" /> 蜀门数据快速处理
    </div>
    <a-form
      ref="loginForm"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    ></a-form>
  </div>
</template>

<script lang="ts" scoped></script>

<style lang="less" scoped>
.login {
  position: absolute;
  right: 10vw;
  height: 32vw;
  width: 28vw;
  border-radius: 16px;
  color: var(--color-text-1);
  box-shadow: 1px 1px 2px var(--color-gray-1);
  background-color: var(--color-bg-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  &-header {
    width: 72%;
    font-size: 28px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 2vw;
    padding: 2vw;
    border-bottom: 1px solid var(--color-border-2);
    img {
      width: 2vw;
      height: 2vw;
    }
  }
}
</style>
