<script setup lang="ts">
import { CheckCircle2, ArrowRight, ExternalLink, Mail } from 'lucide-vue-next'

// We define basic metadata for SEO
useHead({
  title: 'Email Confirmed - HydroDash',
  meta: [
    { name: 'description', content: 'Your HydroDash account has been successfully verified. Welcome to the future of water refill management.' }
  ]
})

// Define the branding colors if needed (using Tailwind)
const primaryColor = 'text-primary'
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Abstract background decorations -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl delay-1000 animate-pulse"></div>
    </div>

    <div class="max-w-xs w-full relative z-10 transition-all duration-500 animate-in fade-in zoom-in slide-in-from-bottom-8">
      <div class="text-center mb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 animate-bounce">
          <Mail class="w-3 h-3" />
          Mail Verified
        </div>
      </div>

      <Card class="border-none shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] overflow-hidden">
        <div class="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400"></div>
        
        <CardHeader class="pt-8 pb-4 text-center">
          <div class="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6 rotate-3 hover:rotate-0 transition-transform duration-300">
            <CheckCircle2 class="w-12 h-12 text-white" />
          </div>
          <CardTitle class="text-2xl font-black tracking-tight mb-1">
            You're All <span class="gradient-text">Set!</span>
          </CardTitle>
          <CardDescription class="text-sm px-2 leading-relaxed">
            Your email has been successfully verified.
          </CardDescription>
        </CardHeader>

        <CardContent class="pb-8 px-6 flex flex-col gap-6">
          <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex justify-center">
            <div class="flex items-center gap-2.5 text-center">
              <div class="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              </div>
              <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Account activated successfully</p>
            </div>
          </div>

          <div class="pt-2 text-center">
            <p class="text-sm font-black text-primary animate-pulse">
              Login on HydroDash App now
            </p>
            
            <p class="mt-8 text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-50">
              Powered by HydroDash
            </p>
          </div>
        </CardContent>
      </Card>

      <!-- Decorative Footer (Simplified) -->
      <div class="mt-8 text-center text-xs opacity-60 hover:opacity-100 transition-opacity">
          <NuxtLink to="/" class="underline text-muted-foreground hover:text-primary transition-colors">Return to Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500;
}

.dark .gradient-text {
  @apply from-blue-400 to-cyan-300;
}
</style>
