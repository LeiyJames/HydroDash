<script setup lang="ts">
import { CheckCircle2, Clock, Terminal, Activity } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 mt-8">System Status</h1>
        
        <div class="space-y-8 mt-16">
          <div class="p-8 rounded-[2rem] bg-green-500/10 border border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/20">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              <div class="text-center md:text-left">
                <h2 class="text-2xl font-bold">All Systems Operational</h2>
                <p class="text-green-600 dark:text-green-400 font-medium">Updated 5 minutes ago</p>
              </div>
            </div>
            <div class="px-6 py-2 rounded-full border border-green-500/20 text-green-600 font-bold text-sm bg-white dark:bg-slate-900">
              100% Uptime
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-bold px-4">Individual Services</h3>
            <div class="grid gap-4">
              <div v-for="s in ['Admin Dashboard', 'Rider App (iOS/Android)', 'Customer Portal', 'Push Notifications', 'Payment APIs']" 
                   :key="s" 
                   class="p-6 rounded-2xl border bg-card flex items-center justify-between"
              >
                <div class="flex items-center gap-4">
                  <Activity class="w-5 h-5 text-primary" />
                  <span class="font-bold">{{ s }}</span>
                </div>
                <Badge variant="secondary" class="bg-green-500/10 text-green-600 border-none px-4">Operational</Badge>
              </div>
            </div>
          </div>

          <div class="mt-16 p-8 border rounded-3xl bg-muted/30">
            <div class="flex items-center gap-3 mb-6">
                <Terminal class="w-6 h-6 text-primary" />
                <h3 class="text-xl font-bold">Past Incidents</h3>
            </div>
            <div class="space-y-6">
              <div class="relative pl-8 border-l-2 border-muted">
                 <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted"></div>
                 <div class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">March 1, 2024</div>
                 <div class="text-sm font-bold mb-2">Extended API latency observed</div>
                 <p class="text-sm text-muted-foreground">Issue resolved in 45 minutes. No data loss reported.</p>
              </div>
              <div class="relative pl-8 border-l-2 border-muted">
                 <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted"></div>
                 <div class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Feb 12, 2024</div>
                 <div class="text-sm font-bold mb-2">Service Maintenance</div>
                 <p class="text-sm text-muted-foreground">Completed as scheduled. System stayed operational throughout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
