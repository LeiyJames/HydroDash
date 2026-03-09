import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isDarkMode: false,
    showScrollTop: false,
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', this.isDarkMode)
      }
    },
    updateScroll(y: number) {
      this.showScrollTop = y > 500
    }
  }
})
