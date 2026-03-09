<script setup lang="ts">
import { ref } from 'vue'
import { LayoutDashboard, Bike, Users, ShieldCheck, Zap, Droplets } from 'lucide-vue-next'

const activeTab = ref<'admin' | 'rider' | 'customer'>('admin')

const mockups = {
  admin: {
    title: 'Admin Dashboard',
    subtitle: 'Full visibility on every order and rider activity.',
    features: ['Real-time Order Tracking', 'Rider Remittance Logs', 'Inventory Alerts'],
    accent: 'bg-primary'
  },
  rider: {
    title: 'Rider App',
    subtitle: 'Simplified task management for delivery teams.',
    features: ['Distance-Sorted Delivery List', 'One-Tap Status Update', 'Digital Receipts'],
    accent: 'bg-blue-500'
  },
  customer: {
    title: 'Customer Portal',
    subtitle: 'Zero friction for repeat ordering and status checks.',
    features: ['1-Click Instant Reorder', 'Loyalty Point Tracking', 'Push Notification Alerts'],
    accent: 'bg-cyan-400'
  }
}
</script>

<template>
  <section id="mockups" class="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
    <div class="container px-4">
      <div class="max-w-4xl mx-auto flex flex-col items-center mb-16 text-center">
        <Badge variant="secondary" class="mb-4">Unified Ecosystem</Badge>
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Complete Control For <span class="gradient-text">Everyone</span></h2>
        
        <div class="flex p-1.5 bg-muted rounded-full mt-8 border">
          <button 
            v-for="(data, key) in mockups" 
            :key="key"
            @click="activeTab = key"
            :class="[
                'px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2',
                activeTab === key ? 'bg-background shadow-md text-primary' : 'text-muted-foreground hover:text-foreground'
            ]"
          >
            <LayoutDashboard v-if="key === 'admin'" class="w-4 h-4" />
            <Bike v-if="key === 'rider'" class="w-4 h-4" />
            <Users v-if="key === 'customer'" class="w-4 h-4" />
            <span class="capitalize">{{ key }}</span>
          </button>
        </div>
      </div>

      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <!-- Visual Column -->
        <div class="relative order-2 lg:order-1 transition-all duration-500 transform lg:scale-110">
          <div :class="['absolute -inset-10 rounded-[3rem] blur-3xl opacity-20 transition-all duration-700', mockups[activeTab].accent]"></div>
          
          <div class="relative max-w-[320px] mx-auto bg-white dark:bg-slate-950 border-8 border-slate-100 dark:border-slate-800 rounded-[3.5rem] shadow-2xl overflow-hidden aspect-[9/18.5] p-6 hover-lift">
              <div class="w-full h-full rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border flex flex-col p-5 overflow-hidden relative">
                <!-- Inner UI Mockup -->
                <div class="flex items-center justify-between mb-8 px-2">
                    <div class="h-6 w-24 bg-muted rounded-full animate-pulse"></div>
                    <div class="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center p-0 bg-white">
                        <img src="~/assets/css/images/logo.png" alt="HydroDash" class="w-full h-full object-contain scale-[1.6]" />
                    </div>
                </div>

                <div v-if="activeTab === 'admin'" class="space-y-6">
                    <div class="p-4 bg-primary text-primary-foreground rounded-2xl shadow-lg">
                        <div class="text-[10px] opacity-70 mb-1">Total Revenue Today</div>
                        <div class="text-xl font-bold">₱14,240</div>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div v-for="i in 2" :key="i" class="h-16 bg-muted rounded-2xl"></div>
                    </div>
                    <div v-for="i in 3" :key="i" class="h-12 bg-muted rounded-2xl border-l-4 border-primary"></div>
                </div>

                <div v-if="activeTab === 'rider'" class="space-y-5">
                    <div class="p-4 bg-muted border-l-4 border-blue-500 rounded-xl relative overflow-hidden group">
                        <div class="text-xs font-bold mb-1">Order #8831</div>
                        <div class="text-[10px] text-muted-foreground">San Lorenzo Vill, Makati</div>
                        <div class="mt-3 flex gap-2">
                            <div class="h-5 px-2 bg-blue-500 text-white rounded text-[8px] flex items-center">Delivering</div>
                        </div>
                    </div>
                    <div v-for="i in 3" :key="i" class="p-4 bg-muted rounded-xl opacity-60">
                         <div class="h-3 w-2/3 bg-slate-300 rounded mb-2"></div>
                         <div class="h-2 w-1/3 bg-slate-300 rounded"></div>
                    </div>
                </div>

                <div v-if="activeTab === 'customer'" class="space-y-6">
                    <div class="aspect-square bg-muted rounded-3xl flex items-center justify-center mb-4">
                        <Zap class="w-12 h-12 text-primary opacity-20" />
                    </div>
                    <div class="h-12 w-full bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs uppercase shadow-lg">
                        Quick Reorder Now
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <div v-for="i in 3" :key="i" class="h-8 bg-muted rounded-lg"></div>
                    </div>
                </div>
              </div>
          </div>
        </div>

        <!-- Info Column -->
        <div class="order-1 lg:order-2 space-y-8 lg:pl-12">
            <div class="space-y-4">
                <h3 class="text-3xl md:text-5xl font-black tracking-tighter leading-none">{{ mockups[activeTab].title }}</h3>
                <p class="text-xl text-muted-foreground leading-relaxed">{{ mockups[activeTab].subtitle }}</p>
            </div>

            <div class="space-y-4 pt-4">
                <div v-for="f in mockups[activeTab].features" :key="f" class="flex items-center gap-4 group">
                    <div class="w-10 h-10 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:text-white group-hover:scale-110 shadow-lg shadow-primary/5">
                        <ShieldCheck class="w-5 h-5" />
                    </div>
                    <span class="font-bold text-lg md:text-xl tracking-tight opacity-90">{{ f }}</span>
                </div>
            </div>

            <div class="pt-8">
                <Button size="lg" class="rounded-full px-12 py-7 font-bold text-base shadow-xl shadow-primary/20 hover:scale-[1.05] transition-transform">
                   See Multi-App Demo
                </Button>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hover-lift:hover {
  transform: translateY(-8px);
}
</style>
