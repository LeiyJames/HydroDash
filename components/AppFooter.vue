<script setup lang="ts">
import { Droplets, Instagram, Twitter, MessageCircle } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const footerLinks = [
  { 
    title: 'Product', 
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Why Us', href: '#why' },
      { name: 'Get Started', href: '/get-started' }
    ] 
  },
  { 
    title: 'Company', 
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' }
    ] 
  },
  { 
    title: 'Support', 
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Safety', href: '/safety' },
      { name: 'Status', href: '/status' }
    ] 
  },
]

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: MessageCircle, href: '#' },
]
</script>

<template>
  <footer class="pt-24 pb-12 border-t bg-background">
    <div class="container px-4">
      <!-- Top CTA -->
      <div id="cta" class="max-w-5xl mx-auto mb-24 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-2xl shadow-blue-500/20 text-center relative overflow-hidden group scroll-mt-24">
        <div class="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Ready to run your water refill business with <span class="text-white">less stress?</span>
          </h2>
          <p class="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join stores that use HydroDash to manage orders, protect revenue, and keep customers coming back.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink to="/get-started">
              <Button size="lg" variant="secondary" class="rounded-full px-12 text-primary font-bold shadow-xl hover:shadow-2xl transition-all">
                Get Started Now
              </Button>
            </NuxtLink>
            <Button size="lg" variant="ghost" class="text-white hover:bg-white/10 rounded-full px-12 border border-white/20">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
        <div class="col-span-2">
          <NuxtLink to="/" class="inline-flex items-center gap-2 mb-6 group">
            <div class="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-sm border border-slate-100 p-0">
              <img src="~/assets/css/images/logo.png" alt="HydroDash Logo" class="w-full h-full object-contain scale-[1.6]" />
            </div>
            <span class="text-xl font-bold tracking-tight">HydroDash</span>
          </NuxtLink>
          <p class="text-muted-foreground mb-8 text-sm leading-relaxed max-w-xs">
            One app for your store, your riders, and your customers. Your business, in your pocket.
          </p>
          <div class="flex gap-4">
            <a v-for="(s, i) in socialLinks" :key="i" :href="s.href" class="p-2 border rounded-xl text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <component :is="s.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div v-for="section in footerLinks" :key="section.title" class="space-y-4">
          <h4 class="font-bold text-sm tracking-wider uppercase text-muted-foreground">{{ section.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.name">
              <a :href="link.href" class="text-sm text-foreground/80 hover:text-primary transition-colors">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-6 text-sm text-muted-foreground">
        <p>&copy; {{ currentYear }} HydroDash. All rights reserved.</p>
        <div class="flex gap-8">
          <a href="/terms" class="hover:text-primary transition-colors">Terms of Service</a>
          <a href="/privacy" class="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="/cookie" class="hover:text-primary transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>
