<template>
  <div class="main-container">
    <div class="main-left">
      <div class="avatar">
        <el-avatar></el-avatar>
      </div>
      <tab-control :tabs="tabs" @tab-click="tabClick"></tab-control>
    </div>
    <div class="main-center">
      <div v-if="tabName=='friend'">
      </div>
      <div v-else>
        <!--        好友列表-->
        <session-list :sessionMessageList="sessionMessageList"></session-list>
      </div>
    </div>
    <div class="main-right">
      <chat-window></chat-window>
    </div>
  </div>
</template>
<script setup lang="ts">
import TabControl from "@/components/tabControl/tabControl.vue";
import {ref} from "vue";
import ChatWindow from "@/components/chatwindow/ChatWindow.vue";
import SessionList from "@/components/session/SessionList.vue";

const tabName = ref("friend")
const tabs = ref([{
  tableName: "friend",
  cpn: "UserFilled"
}, {
  tableName: "message",
  cpn: "ChatDotSquare"
}])

const sessionMessageList = ref([{
  topicPic: "",
  topicName: "coderwhy",
  topicTime: "1223",
  topicText: "dfdsfsdf"
},
  {
    topicPic: "",
    topicName: "coderwhy",
    topicTime: "1223",
    topicText: "dfdsfsdf"
  },
  {
    topicPic: "",
    topicName: "coderwhy",
    topicTime: "1223",
    topicText: "dfdsfsdf"
  }




])

function tabClick(index: number) {
  const choseTab = tabs.value[index]
  tabName.value = choseTab.tableName
}
</script>

<style lang="less" scoped>
.main-container {
  display: flex;
  width: 1400px;
  margin: 0 auto;
  color: var(--chat-color);
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  .main-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    border-right: 1px solid #9ca6af;

    .avatar {
      margin-top: 100px;
      height: 200px;
    }
  }

  .main-center {
    width: 300px;
    padding: 10px;
  }

  .main-right {
    flex: 1;
    background-color: green;
  }

}
</style>