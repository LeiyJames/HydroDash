<script setup lang="ts">
import { PlayCircle, ShieldCheck, Zap } from 'lucide-vue-next'

const features = [
  { icon: ShieldCheck, text: 'Secure Revenue' },
  { icon: Zap, text: 'Real-time Updates' },
]
</script>

<template>
  <section id="hero" class="relative pt-24 md:pt-32 pb-16 md:pb-32 overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
    <div class="absolute top-1/2 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl opacity-30 -z-10"></div>

    <div class="container relative z-10 px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <!-- Text Content -->
        <div class="flex-1 text-center md:text-left">
          <Badge variant="secondary" class="mb-6 px-4 py-1.5 text-sm font-medium animate-in slide-in-from-bottom-2 duration-700">
            Now Available – The modern app for water refill stores
          </Badge>
          
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] animate-in slide-in-from-bottom-4 duration-1000">
            Run your water refill business from <span class="gradient-text">one app</span>
          </h1>
          
          <p class="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-in slide-in-from-bottom-6 duration-1000 delay-100">
            HydroDash is the all-in-one app for water refilling stores: customers order and track delivery, you manage orders and pricing, and riders update status in real time.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            <NuxtLink to="/get-started" class="w-full sm:w-auto">
              <Button size="lg" class="w-full sm:w-auto px-10 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </NuxtLink>
            <Button variant="ghost" size="lg" class="w-full sm:w-auto gap-2 group border border-transparent hover:border-border rounded-full transition-all">
              <PlayCircle class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div class="mt-12 flex items-center gap-6 justify-center md:justify-start text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
            <div v-for="f in features" :key="f.text" class="flex items-center gap-2">
              <component :is="f.icon" class="w-4 h-4 text-primary" />
              {{ f.text }}
            </div>
          </div>
        </div>

        <!-- App Illustration/Image -->
        <div class="flex-1 w-full max-w-[320px] mx-auto md:mx-0 animate-in zoom-in-95 duration-1000 delay-300">
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-cyan-400/20 rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div class="relative bg-white dark:bg-slate-950 border-8 border-slate-100 dark:border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/18.5] flex items-center justify-center p-6 hover-lift transition-all">
              <div class="w-full h-full rounded-[2rem] bg-slate-50 dark:bg-slate-900 border flex flex-col p-4 overflow-hidden relative">
                <!-- App Mockup UI -->
                <div class="h-8 w-1/3 bg-slate-200 dark:bg-slate-800 rounded-full mb-6 mt-4"></div>
                <div class="flex-1 space-y-6">
                  <div class="grid grid-cols-2 gap-3">
                    <div v-for="i in 2" :key="i" class="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse"></div>
                  </div>
                  <div class="h-24 w-full bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse delay-150"></div>
                  <div class="h-24 w-full bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse delay-300"></div>
                  <div class="h-24 w-full bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse delay-450"></div>
                </div>
                
                <!-- Floating Card Notification -->
                <div class="absolute bottom-10 left-4 right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl animate-bounce duration-[2000ms]">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Droplets class="w-5 h-5" />
                    </div>
                    <div>
                      <div class="font-bold">New Order!</div>
                      <div class="text-xs opacity-90">1x 5 Gallon Mineral</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
