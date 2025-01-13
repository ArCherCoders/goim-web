<template>
  <div class="im-window-container" :style="[ cssVars]">
<!--    头部区域-->
    <Header :name="name" :avatar="avatar" ></Header>
<!--    中间内容区域-->
    <content :messages="messages" ref="contentRef"></content>
<!--  底部区域  -->
    <Footer @send-message-click="sendMessageClicke"></Footer>
  </div>
</template>
<script setup lang="ts">
import {cssThemeVars, defaultThemeStyles} from "@/themes/index.js"
import {type GoImMessage,} from "@/type/index"
import {computed, ref} from "vue";
import Header from "@/components/chatwindow/header/Header.vue";
import Footer from "@/components/chatwindow/footer/Footer.vue";
import Content from "@/components/chatwindow/content/Content.vue";
const height = ref("800px")
const cssVars = computed(() => {
  const defaultStyles = defaultThemeStyles['light']
  const customStyles: any = {}
  Object.keys(defaultStyles).map(key => {
    customStyles[key] = {
      ...defaultStyles[key]
    }
  })
  return cssThemeVars(customStyles)
})
// 获取content组件实例
const contentRef = ref()
const messages =ref<GoImMessage[]>([])

const name=ref("codery");
const avatar=ref("https://img2.baidu.com/it/u=1957919228,508545798&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800")


function sendMessageClicke(data: string) {
  console.log("发送的消息内容为", data)
  let message: GoImMessage = {
    avatar: "https://img2.baidu.com/it/u=1957919228,508545798&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
    name: "coder",
    uid: 789,
    messageId: 1234,
    content: data,
    topicId: 1234,// 可以是roomId
  }
  messages.value.push(message)
}


</script>
<style scoped lang="less">
.im-window-container {
  width: 900px;
  margin: 0 auto;
  color: var(--chat-color);
  background: var(--chat-content-bg-color);
  border: var(--chat-container-border);
  border-radius: var(--chat-container-border-radius);
  box-shadow: var(--chat-container-box-shadow);
}

</style>