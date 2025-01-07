<template xmlns:FooterHeader="http://www.w3.org/1999/html">
  <div class="footer-container">
    <FooterHeader
        :show="show"
        @openEmojiClick="openEmojiClick"
        @add-emoji="addEmoji"></FooterHeader>
    <FooterContent  ref="footerContent"></FooterContent>
    <FooterBootom></FooterBootom>
  </div>

</template>
<script setup lang="ts">
import FooterHeader from "@/components/chatwindow/footer/foot-header/FooterHeader.vue";
import FooterContent from "@/components/chatwindow/footer/footer-content/FooterContent.vue";
import FooterBootom from "@/components/chatwindow/footer/footer-bottom/FooterBootom.vue";
import {ref} from "vue";

const show = ref(false)
const message =ref("")
const footerContent =ref()
function addEmoji(data: any) {
  show.value = !show.value
  console.log("footer", data.detail.unicode)
  footerContent.value.changeContent(data.detail.unicode)
}

function openEmojiClick() {
  show.value = !show.value
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