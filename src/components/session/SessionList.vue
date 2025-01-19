<template>
  <div class="session-container">
    <el-scrollbar height="600">

      <transition-group tag="div" name="list" appear>
        <template v-for="(item,index) in props.sessionMessageList" :key="index">
          <div class="session-item" @click="sessionItemClick(index)" :class="{'item':currentIndex==index}">
            <div class="session-avatar">
              <el-avatar :src="item.topicPic"></el-avatar>
            </div>
            <div class="session-info">
              <div class="top">
                <div class="top-name">{{ item.topicName }}</div>
                <div class="top-time">{{ item.topicTime }}</div>
              </div>
              <div class="bottom">
                <span>{{ item.topicText }}</span>
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
  sessionMessageList: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(-1)

const emits = defineEmits(['sessionItemClick'])

function sessionItemClick(index: number) {
  currentIndex.value = index
}

</script>
<style scoped lang="less">
.session-container {
  .session-item {
    margin-top: 10px;
    padding: 5px;
    display: flex;
    align-items: center;

    .session-avatar {
      padding-right: 5px;
    }

    .session-info {
      flex: 1;
      min-width: 0;

      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .top-name {
          font-size: 14px;
        }

        .top-time {
          color: #a2aeb8;
          font-size: 11px;
        }
      }

      .bottom {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #a2aeb8;
        font-size: 12px;
        line-height: 19px;
      }


    }

    &:not(.item):hover {
      border-radius: 8px;
      background-color: #f6f6f6;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }
  }


}

.list-enter-active, .list-leave-active {
  transition: all 0.6s ease-in-out;
}

.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.list-enter-to, .list-leave-from {
  opacity: 1;
}

.item{
  background-color: #e5effa;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
}


</style>