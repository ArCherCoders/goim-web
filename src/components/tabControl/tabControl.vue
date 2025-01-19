<template>
  <div class="tab-control">
    <template v-for="(item,index) in props.tabs ">
      <div @click="tabClick(index)" :class="{'item':currentIndex==index}">
        <el-icon size="30">
          <component :is="item.cpn"/>
        </el-icon>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const currentIndex = ref(0)
const props = defineProps({
  tabs: {
    type: Array,
    default: () => ([])
  }
})
const emits = defineEmits(["tabClick"]);

function tabClick(index: any) {
  currentIndex.value = index
  emits("tabClick", index)
}
</script>
<style scoped lang="less">
.tab-control {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  .item {
    cursor: pointer;
    color: red;
    transition: color ease-in-out .15s;
  }
}


</style>