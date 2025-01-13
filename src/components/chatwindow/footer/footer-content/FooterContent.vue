<template>
  <div class="footer-content-container">
    <div class="wrapper-textarea">
      <textarea ref="textarea" v-model="content"></textarea>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed, ref} from "vue";

const content = ref("")
const props = defineProps({
  textAreaMessage: {
    type: String,
    default: ""
  }
})
const textarea = ref()

// 对外暴露方法：添加内容 获取内容 清除内容
defineExpose({changeContent, getContent, clearContent})

//  添加内容
function changeContent(data: any) {
  textarea.value.focus()
  textarea.value.value += data
}

// 获取内容
function getContent() {
  return textarea.value.value
}

function clearContent() {
  textarea.value.value = ""
}


</script>
<style scoped lang="less">
.footer-content-container {
  .wrapper-textarea {
    box-sizing: border-box;
    height: 100px;
    padding: 0 8px;

    textarea {
      outline: none;
      width: 100%;
      height: 100px;
      line-height: 32px;
      padding: 0;
      resize: none;
      border: none;
      font-family: inherit;
      font-size: 16px;
      overflow-y: auto;
      box-sizing: content-box;
      background: var(--chat-bg-color-input);
      color: #666262;
    }
  }

}
</style>