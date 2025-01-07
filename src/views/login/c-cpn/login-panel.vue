<template>
	<div class="login-panel">
		<h1 class="title">GOIM</h1>
<!--    tab-->
		<div class="tabs">
			<el-tabs type="border-card" stretch v-model="activeName">
				<el-tab-pane label="账号登录" name="account">
					<panel-account ref="accountRef" ></panel-account>
					<template #label>
						<div class="label">
							<el-icon>
								<User/>
							</el-icon>
							<span class="text">账号登录</span>
						</div>
					</template>
				</el-tab-pane>

				<el-tab-pane label="手机登录" name="phone">
						<panel-phone></panel-phone>
					<template #label>
						<div class="label">
							<el-icon>
								<Iphone/>
							</el-icon>
							<span class="text">手机登录</span>
						</div>
					</template>
				</el-tab-pane>
			</el-tabs>
		</div>
<!--记住密码 忘记密码 登录-->
		<div class="controls">
			<el-checkbox v-model="isRemPwd" label="记住密码" size="large"/>
			<el-link type="primary" :underline="false">忘记密码</el-link>
		</div>
		<el-button class="login-btn" type="primary" size="large" @click="handleLoginBtnClick">立即登录</el-button>
	</div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {localCache} from "@/utils/cache";
import  PanelAccount from "@/views/login/c-cpn/panel-account.vue";
import PanelPhone from "@/views/login/c-cpn/panel-phone.vue";

const isRemPwd = ref<boolean>(localCache.getCache("isRemPwd") ?? false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PanelAccount>>()
//  记住密码功能的
watch(isRemPwd,newValue=>{
	localCache.setCache("isRemPwd",newValue)
})
const handleLoginBtnClick = () => {
	if (activeName.value === "account") {
		console.log("点击的是", activeName.value)
    accountRef.value?.loginAction()// 登录
	} else {
		console.log("点击的是", activeName.value)
	}
}

</script>

<style scoped lang="less">

.login-panel {
	width: 330px;
	margin-top: -100px;

	.title {
		text-align: center;
	}

	.controls {
		display: flex;
		justify-content: space-between;
	}

	.tabs {
		margin-top: 20px;
		width: 100%;
		height: 200px;

		.label {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.text {
			margin-left: 5px;
		}

	}


	.login-btn {
		width: 100%;
		margin-top: 15px;
		--el-button-size: 50px;
	}

}

</style>
