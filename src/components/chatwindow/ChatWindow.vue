<template>
  <div class="im-window-container" :style="[ cssVars]">
    <Header></Header>
    <content></content>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import {cssThemeVars, defaultThemeStyles} from "@/themes/index.js"
import {computed, ref} from "vue";
import Header from "@/components/chatwindow/header/Header.vue";
import Footer from "@/components/chatwindow/footer/Footer.vue";
import Content from "@/components/chatwindow/content/Content.vue";
const height = ref("800px")
const cssVars = computed(() => {
  const defaultStyles = defaultThemeStyles['light']
  const customStyles: any = {}
  Object.keys(defaultStyles).map(key => {
    customStyles[key] = {
      ...defaultStyles[key]
    }
  })
  return cssThemeVars(customStyles)
})

</script>
<style scoped lang="less">
.im-window-container {
  width: 900px;
  margin: 0 auto;
  color: var(--chat-color);
  background: var(--chat-content-bg-color);
  border: var(--chat-container-border);
  border-radius: var(--chat-container-border-radius);
  box-shadow: var(--chat-container-box-shadow);
}

</style>