<template>
  <div class="content-container">
    <!--    <el-button type="primary" @click="add">添加</el-button>-->
    <el-scrollbar wrap-style="height: 600px" always ref="scrollbarRef">

      <div ref="innerRef">
        <!--        消息列表开始-->
        <transition-group tag="div" name="list" appear ref="innerRef">
          <template v-for="(item,index) in props.messages" :key="index">
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
      </div>
    </el-scrollbar>

  </div>
</template>
<script setup lang="ts">
import {defineProps, nextTick, watch,ref} from 'vue';
import {type GoImMessage} from "@/type/index"
import {ElScrollbar} from "element-plus";

interface Props {
  messages: GoImMessage[]
}

const props = defineProps<Props>()
// 对外暴露实例方法暴露实例方法 供外部调用 添加消息列表
defineExpose({addMessage})

function addMessage(content: GoImMessage) {

}

//  设置滚动条开始 当出现滚动条时 没发送一条消息 滚动条始终再底部
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const innerRef = ref()
const scrollToBottom = () => {
  if (scrollbarRef.value && innerRef.value) {
    scrollbarRef.value.setScrollTop(innerRef.value.clientHeight)
  }
}
watch(props.messages, () => {
  nextTick(() => {
    scrollToBottom()
  })
})
//  设置滚动条结束当出现滚动条时 没发送一条消息 滚动条始终再底部

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

        p {
          white-space: pre-line;
          word-break: break-all;
        }

      }
    }


  }

  .me-message {
    display: flex;
    flex-direction: row-reverse;
  }

}

.list-enter-active, .list-leave-active {
  transition: all 0.6s ease-in-out;
}

.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

.list-enter-to, .list-leave-from {
  opacity: 1;
}
</style>