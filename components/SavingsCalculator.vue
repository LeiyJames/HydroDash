<script setup lang="ts">
import { ref, computed } from 'vue'
import { Calculator, TrendingUp, Clock, Wallet } from 'lucide-vue-next'

const dailyOrders = ref(50)
const averageLossPerOrder = 5 // PHP lost due to errors, missed tracking, etc.
const adminMinutesPerOrder = 3 // Minutes spent on manual logging/calls

const monthlySavingsCash = computed(() => dailyOrders.value * averageLossPerOrder * 30)
const monthlySavingsTime = computed(() => Math.round((dailyOrders.value * adminMinutesPerOrder * 30) / 60))
</script>

<template>
  <section id="calculator" class="py-24 bg-primary/5 relative overflow-hidden">
    <div class="container px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Stop Losing Money to Chaos</h2>
        <p class="text-lg text-muted-foreground">
          See how much your business can save by switching from manual logs to HydroDash.
        </p>
      </div>

      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <!-- Input Side -->
        <div class="bg-background p-8 md:p-12 rounded-[2.5rem] border shadow-xl">
          <div class="space-y-10">
            <div>
              <div class="flex justify-between mb-4">
                <label class="font-bold text-lg">Daily Orders</label>
                <span class="text-primary font-black text-2xl">{{ dailyOrders }}</span>
              </div>
              <input 
                v-model.number="dailyOrders" 
                type="range" 
                min="10" 
                max="300" 
                step="5"
                class="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" 
              />
              <div class="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                <span>10 orders</span>
                <span>300 orders</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-2xl bg-muted/50 border border-transparent hover:border-primary/20 transition-all">
                <Wallet class="w-5 h-5 text-primary mb-2" />
                <div class="text-xs text-muted-foreground font-bold uppercase mb-1">Loss/Order</div>
                <div class="font-bold">₱5.00</div>
              </div>
              <div class="p-4 rounded-2xl bg-muted/50 border border-transparent hover:border-primary/20 transition-all">
                <Clock class="w-5 h-5 text-primary mb-2" />
                <div class="text-xs text-muted-foreground font-bold uppercase mb-1">Admin/Order</div>
                <div class="font-bold">3 mins</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Output Side -->
        <div class="space-y-6">
          <div class="p-8 rounded-[2rem] bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div class="relative z-10 flex items-center gap-6">
              <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl">
                ₱
              </div>
              <div>
                <div class="text-sm font-bold uppercase tracking-widest opacity-80">Monthly Revenue Recovered</div>
                <div class="text-4xl md:text-5xl font-black tabular-nums tracking-tighter">₱{{ monthlySavingsCash.toLocaleString() }}</div>
              </div>
            </div>
          </div>

          <div class="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border text-foreground shadow-xl relative overflow-hidden group">
            <div class="relative z-10 flex items-center gap-6">
              <div class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Clock class="w-8 h-8" />
              </div>
              <div>
                <div class="text-sm font-bold uppercase tracking-widest text-muted-foreground">Monthly Admin Hours Saved</div>
                <div class="text-4xl md:text-5xl font-black tabular-nums tracking-tighter text-primary">{{ monthlySavingsTime }} hrs</div>
              </div>
            </div>
          </div>

          <p class="text-sm text-center text-muted-foreground italic">
            *Estimates based on average industry data for manual errors and logging time.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: white;
  border: 4px solid hsl(var(--primary));
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
</style>
