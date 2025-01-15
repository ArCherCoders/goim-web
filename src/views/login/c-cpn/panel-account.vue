<template>
  <div class="panel-account">
    <el-form label-width="60" :rules="accountRules" :model="account" ref="formRef" status-icon>
      <el-form-item prop="name" label="帐号">
        <el-input v-model="account.userAccount" label="帐号" size="large"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password label="密码" size="large"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {type FormRules, type ElForm, ElMessage} from "element-plus";

import {localCache} from "@/utils/cache";
import type {IAccount} from "@/type";
import useLoginStore from "@/stores/login/lgoin";
import {useRouter} from "vue-router";

//  输入账号密码
const account = reactive<IAccount>({
  userAccount: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? "",
})
//  校验规则
// 2.定义校验规则
const accountRules: FormRules = {
  name: [
    {required: true, message: '必须输入帐号信息~', trigger: 'blur'},
    {
      pattern: /^[a-z0-9]{4,20}$/,
      message: '必须是6~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    {required: true, message: '必须输入密码信息~', trigger: 'blur'},
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
}
const loginStore = useLoginStore()
// 这里发送
const formRef = ref<InstanceType<typeof ElForm>>()
const router = useRouter();
const loginAction = () => {
  loginStore.loginAction(account.userAccount, account.password).then(res => {
    router.push("/main")
  }).catch(err => {
    ElMessage.error(err)
  })
}
defineExpose({loginAction})
</script>

<style scoped lang="less">

</style>
