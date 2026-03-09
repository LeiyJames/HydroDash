<script setup lang="ts">
import { AlertTriangle, CheckCircle2, MessageSquareOff, Wallet2, LayoutDashboard, Clock } from 'lucide-vue-next'

const problems = [
  { icon: MessageSquareOff, text: 'Scattered orders via text/calls' },
  { icon: Wallet2, text: 'Revenue at risk – missing cash' },
  { icon: LayoutDashboard, text: 'Manual tracking in spreadsheets' },
  { icon: Clock, text: 'Unclear delivery status' },
]

const solutions = [
  { 
    title: 'One App for All', 
    desc: 'Orders, customers, riders, and money live in one place.',
    icon: CheckCircle2
  },
  { 
    title: 'Revenue Protection', 
    desc: 'See expected COD from riders and reconcile instantly.',
    icon: CheckCircle2
  },
  { 
    title: 'Real-time Updates', 
    desc: 'Riders update status; customers track delivery.',
    icon: CheckCircle2
  },
]
</script>

<template>
  <section id="why" class="py-24 bg-slate-50 dark:bg-slate-950/50">
    <div class="container px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <Badge variant="secondary" class="mb-4 text-red-600 bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/30">The Challenge</Badge>
        <h2 class="text-3xl font-extrabold mb-4 tracking-tight">The problem solved</h2>
        <p class="text-lg text-muted-foreground">
          Running a water refill store shouldn't be chaos. We've transformed the process into a streamlined digital experience.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Problem Identification -->
        <div class="space-y-6">
          <div class="bg-red-50 dark:bg-red-950/20 p-8 rounded-3xl border border-red-100 dark:border-red-900/30">
            <div class="flex items-center gap-3 text-red-600 dark:text-red-400 font-bold mb-6">
              <AlertTriangle class="w-6 h-6" />
              Before HydroDash
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="p in problems" :key="p.text" class="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border shadow-sm group hover:scale-[1.02] transition-transform">
                <component :is="p.icon" class="w-5 h-5 text-red-500 mt-0.5" />
                <span class="text-sm font-medium">{{ p.text }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Solution Identification -->
        <div class="space-y-8">
          <div class="flex items-center gap-3 text-primary font-bold">
            <CheckCircle2 class="w-6 h-6" />
            The Solution
          </div>
          <p class="text-xl font-medium leading-relaxed">
            HydroDash puts <span class="text-primary font-bold">orders, customers, riders, and money in one app.</span> Everything is recorded so you can run your business with confidence.
          </p>
          
          <div class="grid gap-4">
            <Card v-for="s in solutions" :key="s.title" class="border-none shadow-none bg-transparent group">
              <CardHeader class="flex-row items-center gap-4 p-0 space-y-0">
                <div class="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <component :is="s.icon" class="w-6 h-6" />
                </div>
                <div>
                  <CardTitle class="text-lg">{{ s.title }}</CardTitle>
                  <p class="text-sm text-muted-foreground mt-1">{{ s.desc }}</p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
