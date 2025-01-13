<template xmlns:FooterHeader="http://www.w3.org/1999/html">
  <div class="footer-container">
<!--    监听表情框打开关闭  监听添加表情包事件 并且获取旋转的表情包 然后再追加到textarea 文本内容里面-->
    <FooterHeader :show="show" @openEmojiClick="openEmojiClick" @add-emoji="addEmoji"></FooterHeader>
<!--    获取textarea 的内容 绑定组件实例 暴露获取内容的方法-->
    <FooterContent ref="footerContent"></FooterContent>
<!--    监听按钮点击事件-->
    <FooterBootom @sendMessageBtnClick="sendMessageClick"></FooterBootom>
  </div>

</template>
<script setup lang="ts">
import FooterHeader from "@/components/chatwindow/footer/foot-header/FooterHeader.vue";
import FooterContent from "@/components/chatwindow/footer/footer-content/FooterContent.vue";
import FooterBootom from "@/components/chatwindow/footer/footer-bottom/FooterBootom.vue";
import {ref} from "vue";
import {ElMessage} from "element-plus";
// 表情包框关闭打开
const show = ref(false)
// 获取texarea组件实例
const footerContent =ref()

function openEmojiClick() {
  show.value = !show.value
}
// 添加表情包事件
// 获取表情包 然后把表情包关闭
// 把表情包的内容追加到textarea中
function addEmoji(data: any) {
  show.value = !show.value
  // console.log("footer", data.detail.unicode)
  footerContent.value.changeContent(data.detail.unicode)
}

// 发出按钮点击事件
const emit =defineEmits(['sendMessageClick'])
// 监听发送按钮点击事件
// 把textArea中的文本内容携带出去
// 并且清空textarea中的内容
function sendMessageClick(){
  let content = footerContent.value.getContent();
  if(content==null || content===""){
    ElMessage.error("发送消息不能为空")
    return
  }
  // 获取输入框的内容 然后发送事件 把数据传递出去
  footerContent.value.clearContent()
  emit('sendMessageClick',content)
}
</script>
<style scoped lang="less">
.footer-container {
  box-sizing: border-box;
  width: 100%;
  bottom: 0;
  height: 200px;
  padding: 0 5px;
  background: var(--chat-header-bg-color);
}

</style>