<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ArrowUp, Sun, Moon } from 'lucide-vue-next'
import { useUiStore } from '~/stores/ui'

const uiStore = useUiStore()

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  uiStore.updateScroll(scrollTop)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check for stored theme or system preference
  const isDark = localStorage.getItem('theme') === 'dark' || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))
  
  if (isDark) {
    uiStore.isDarkMode = true
    document.documentElement.classList.add('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleTheme = () => {
  uiStore.toggleDarkMode()
  localStorage.setItem('theme', uiStore.isDarkMode ? 'dark' : 'light')
}
</script>

<template>
  <div class="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
    <Button 
      v-if="uiStore.showScrollTop"
      @click="scrollToTop"
      variant="secondary" 
      size="icon" 
      class="rounded-full shadow-2xl animate-in fade-in zoom-in slide-in-from-bottom-5 duration-300 bg-background/80 backdrop-blur-sm border"
    >
      <ArrowUp class="w-5 h-5" />
    </Button>

    <Button 
      @click="toggleTheme" 
      variant="outline" 
      size="icon" 
      class="rounded-full bg-background border shadow-2xl transition-all duration-500 hover:rotate-12 active:scale-95"
    >
      <Moon v-if="!uiStore.isDarkMode" class="w-5 h-5" />
      <Sun v-else class="w-5 h-5" />
    </Button>
  </div>
</template>
