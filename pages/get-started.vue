<script setup lang="ts">
import { Store, UserPlus, Download, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const steps = [
  {
    title: 'Create Your Store Profile',
    desc: 'Register your business name, location, and water types in seconds.',
    icon: Store,
    color: 'bg-blue-500',
    action: 'Create Account'
  },
  {
    title: 'Invite Your Riders',
    desc: 'Generate unique codes for your delivery team to sync with your dashboard.',
    icon: UserPlus,
    color: 'bg-primary',
    action: 'Add Riders'
  },
  {
    title: 'Download & Launch',
    desc: 'Get the HydroDash app on your phone and start taking orders.',
    icon: Download,
    color: 'bg-cyan-500',
    action: 'Download App'
  }
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-5xl mx-auto">
        <div class="text-center mb-16 px-4">
          <Badge variant="secondary" class="mb-4">Launchpad</Badge>
          <h1 class="text-4xl md:text-6xl font-black tracking-tighter mb-6">Let's Get Your Business <span class="gradient-text">Live</span></h1>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Setting up HydroDash is simple. Follow these three steps to transition from manual chaos to total digital control.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 relative mb-20">
            <!-- Connector Line (Desktop) -->
            <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10 -translate-y-1/2"></div>
            
            <div 
                v-for="(step, index) in steps" 
                :key="step.title"
                class="bg-card border rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group"
            >
                <div class="mb-6 relative">
                    <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg animate-in zoom-in duration-500 ', step.color]">
                        <component :is="step.icon" class="w-8 h-8" />
                    </div>
                    <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-black shadow-sm">
                        {{ index + 1 }}
                    </div>
                </div>

                <h3 class="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {{ step.title }}
                </h3>
                <p class="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                    {{ step.desc }}
                </p>

                <Button class="w-full rounded-2xl py-6 font-bold group-hover:scale-[1.05] transition-transform">
                    {{ step.action }} <ArrowRight class="ml-2 w-4 h-4" />
                </Button>
            </div>
        </div>

        <!-- Help Section -->
        <div class="p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
            <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div class="max-w-xl text-center md:text-left">
                    <div class="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <MessageSquare class="w-3 h-3 text-primary" />
                        Guided Setup
                    </div>
                    <h2 class="text-3xl md:text-4xl font-black mb-4 tracking-tight">Need a Hand? We’ll Set It Up for You.</h2>
                    <p class="text-slate-400 text-lg leading-relaxed">
                        Too busy running the shop? Our team can hop on a 10-minute call to set up your store, add your riders, and train your staff. **Completely free.**
                    </p>
                </div>
                
                <div class="flex flex-col gap-4 w-full md:w-auto">
                    <Button variant="default" size="lg" class="bg-primary text-primary-foreground font-black text-lg py-8 px-12 rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                        Book Free Setup
                    </Button>
                    <p class="text-center text-slate-500 text-sm font-medium">Or message us at leighpresno114@gmail.com</p>
                </div>
            </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
