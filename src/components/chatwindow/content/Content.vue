<template>
  <div class="content-container">
<!--    <el-button type="primary" @click="add">添加</el-button>-->
    <el-scrollbar wrap-style="height: 600px">
      <transition-group tag="div" name="list" appear>
      <template v-for="(item,index) in messages" :key="index">
        <div class="message-box " :class="{'me-message':item.uid==456}">
          <div class="message-avatar">
            <el-avatar :src="item.avatar"></el-avatar>
            <span>{{ item.name }}</span>
          </div>
          <div class="message-wrapper">
            <div class="message-content">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </template>
      </transition-group>
    </el-scrollbar>

  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  message: {
    type: Array,
    default: [],
  }
})

const messages: any = ref([
  {
    avatar: "https://img2.baidu.com/it/u=1957919228,508545798&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
    name: "coder",
    uid: 456,
    messageId: 1234,
    content: "你好 那就百 度发生大法师卡德加 看深刻搭 街坊开始大幅 多看书看风景卢 卡斯的 ffdgd dsfdsfsdf",
    topicId: 1234,// 可以是roomId
  },
  {
    avatar: "https://img2.baidu.com/it/u=1957919228,508545798&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
    name: "coder",
    uid: 789,
    messageId: 1234,
    content: "你好 那就百 度发生大法师卡德加 看深刻搭 街坊开始大幅 多看书看风景卢 卡斯的 ffdgd dsfdsfsdf",
    topicId: 1234,// 可以是roomId
  },
])

function add(){
  console.log("添加")
  messages.value.push(
      {
        avatar: "https://img2.baidu.com/it/u=1957919228,508545798&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
        name: "coder",
        uid: 789,
        messageId: 1234,
        content: "你好 那就百 度发生大法师卡德加 看深刻搭 街坊开始大幅 多看书看风景卢 卡斯的 ffdgd dsfdsfsdf",
        topicId: 1234,// 可以是roomId
      }
  )
}

</script>
<style scoped lang="less">
.content-container {
  height: 600px;
  padding: 0px 10px;


  .message-box {
    display: flex;
    margin-bottom: 10px;

    .message-avatar {
      display: flex;
      padding: 5px;
      flex-direction: column;
      font-size: 10px;
      align-items: center;
    }

    .message-wrapper {
      min-height: 20px;
      color: var(--chat-message-color);
      background-color: var(--chat-message-bg-color-me);
      border-radius: 8px;
      box-shadow: 0 1px 1px -1px #0000001a, 0 1px 1px -1px #0000001c, 0 1px 2px -1px #0000001c;

      .message-content {
        max-width: 300px;
        padding: 6px 9px 3px;
        font-size: 14px;
        line-height: 16px;
        white-space: pre-line;
      }
    }


  }

  .me-message {
    display: flex;
    flex-direction: row-reverse;
  }

}

.list-enter-active, .list-leave-active {
  transition: all 0.6s ease-out;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-enter-to, .list-leave-from {
  opacity: 1;
}
</style>