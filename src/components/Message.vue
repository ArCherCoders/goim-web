<template>
  <div class="message " :class="{item:isSelf}" >
    <div>
      <el-avatar class="avatar" size="small" :src="userPic"></el-avatar>
    </div>
    <div class="content " :class={item2:isSelf}>
      <div v-html="message">
      </div>
      <div class="content-time">{{time}}</div>
    </div>
  </div>
</template>


<script setup lang="ts">
defineProps({
  isSelf: {
    type: Boolean,
    default: false
  },
  userId: {
    type: String,
    default: 0
  },
  userName: {
    type: String,
    default: "jack"
  },
  userPic: {
    type: String,
    default: "jack"
  },
  messageId: {
    type: Number,
    default: 0
  },
  message: {
    type: String,
    default: "今天感觉怎么样啊1 今天感觉怎么样啊 今天感觉怎么样啊 今天感觉怎么样啊 "
  },
  time:{
    type: String,
    default: "2024-09-24 09:14:30"
  }

})

</script>

<style lang="less" scoped>
.message {
  display: flex;
  width: 100%;
  //background-color: #21aa93;
  margin-bottom: 20px;
}

.avatar {
  position: relative;
  top: calc(90% + 0px);
  margin-right: 10px;
}

.content {
  padding: 10px;
  border-radius: 5px;
  background-color: var(--border-color);
  word-break: break-word;
  max-width: 300px;
  min-width: 10px;
  //overflow-wrap:break-word;
  white-space: normal;
  .content-time {
    width: 100%;
    margin-top: 10px;
    text-align: right;
    font-size: 12px;
  }
}

.content p {
  padding: 0;
  margin: 0;
}

.item {
  flex-direction: row-reverse;

}
.item2{
  background-color: #ccf2cf;
}
</style>