<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Droplets, Menu, X } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})

const navLinks = [
  { name: 'Why HydroDash', href: '/#why' },
  { name: 'Features', href: '/#features' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
</script>

<template>
  <header
    :class="cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm py-2' : 'bg-transparent'
    )"
  >
    <div class="container flex items-center justify-between">
      <NuxtLink to="/#hero" class="flex items-center gap-2 group" @click="isMobileMenuOpen = false">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white p-1 shadow-sm">
          <img src="~/assets/css/images/logosvg.svg" alt="HydroDash" class="h-full w-full object-contain object-center" />
        </div>
        <span class="text-xl font-bold tracking-tight">HydroDash</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          class="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink to="/get-started">
          <Button size="sm">Get Started</Button>
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button 
        class="md:hidden p-2 text-muted-foreground"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-in fade-in slide-in-from-top-1 duration-200"
    >
      <nav class="flex flex-col p-4 gap-4 text-sm font-medium border-t">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          class="py-2 text-muted-foreground hover:text-primary cursor-pointer border-b md:border-none"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink to="/get-started" @click="isMobileMenuOpen = false">
          <Button class="w-full">Get Started</Button>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
