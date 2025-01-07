<template>
  <div class="footer-header-container vac-app-border-t">
    <div class="footer-header-icon">
      <div class="footer-header-icon-item">
        <div @click="openEmoji">
          <svg-icon name="emoji"/>
        </div>
        <transition name="vac-fade-spinner" appear>
          <div class="footer-header-picker" v-show="props.show">
            <emoji-picker ref="refemoji"
                          data-source="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@%5E1/en/emojibase/data.json"/>
          </div>
        </transition>
      </div>
      <div class="footer-header-icon-item">
        <svg-icon name="file"/>
      </div>
      <div class="footer-header-icon-item">
        <el-icon size="25">
          <VideoCamera/>
        </el-icon>
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import {ref, watch} from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["addEmoji", "openEmojiClick"])
const refemoji = ref(null)


function openEmoji() {
  emit("openEmojiClick")
}

function emojiClick(data: any) {
  emit("addEmoji", data)
}

watch(() => props.show, value => {
  if (props) {
    refemoji?.value?.shadowRoot?.addEventListener('emoji-click', emojiClick)
  }
})


</script>
<style scoped lang="less">
.footer-header-container {
  .footer-header-icon {
    display: flex;
    align-items: center;

    .footer-header-icon-item {
      position: relative;
      padding: 8px;
      cursor: pointer;

      .footer-header-picker {
        position: absolute;
        top: -300px;
        height: 300px;
        width: 300px;
        z-index: 100;


        emoji-picker {
          height: 100%;
          width: 100%;
          --emoji-size: 1.2rem;
          --background: var(--chat-emoji-bg-color);
          --emoji-padding: 0.4rem;
          --border-color: var(--chat-sidemenu-border-color-search);
          --button-hover-background: var(--chat-sidemenu-bg-color-hover);
          --button-active-background: var(--chat-sidemenu-bg-color-hover);
        }


      }
    }
  }

}

.vac-fade-spinner-enter-from {
  opacity: 0;
}

.vac-fade-spinner-enter-active {
  transition: opacity 0.8s;
}

.vac-fade-spinner-leave-active {
  transition: opacity 0.2s;
  opacity: 0;
}

</style>