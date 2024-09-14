<template>
  <div class="message " :class={item:isSelf}>
    <div>
      <el-avatar class="avatar" size="small" :src="userPic"></el-avatar>
    </div>
    <div class="content">
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
    default: "jack"
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
  width: 400px;
  //background-color: #21aa93;
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
  max-width: 60%;
  min-width: 10px;

  .content-time {
    width: 100%;
    text-align: right;
  }
}

.content p {
  padding: 0;
  margin: 0;
}

.item {
  flex-direction: row-reverse;
}
</style>