<script setup lang="ts">
import { ref } from 'vue'
import { Check, Shield, Zap, CheckCircle2, LayoutDashboard, Bike, Users } from 'lucide-vue-next'

const plans = [
  {
    name: 'Starter Plan',
    price: '799–999',
    period: 'month',
    description: 'Perfect for small stores with 1–5 riders.',
    features: ['Orders Management', 'Rider Tracking', 'Expected COD Tracking', 'Basic Sales Reports', 'Customer Loyalty', 'Promos & Discounts'],
    buttonText: 'Go Starter',
    popular: false,
    earlyAdopterPrice: '399'
  },
  {
    name: 'Growth Plan',
    price: '1,499–1,999',
    period: 'month',
    description: 'For growing businesses with larger fleets.',
    features: ['More Riders Support', 'Advanced Logistics Analytics', 'Priority Support', 'Multi-branch Dashboard (Soon)'],
    buttonText: 'Go Growth',
    popular: true,
    earlyAdopterPrice: '749'
  }
]
</script>

<template>
  <section id="pricing" class="py-24 bg-background relative overflow-hidden">
    <div class="container px-4">
      <div class="max-w-3xl mx-auto text-center mb-16 px-4">
        <Badge variant="secondary" class="mb-4">Special Launch Offer</Badge>
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Choose Your <span class="gradient-text">Success Plan</span></h2>
        
        <!-- Early Adopter Offer Banner -->
        <div class="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-2xl inline-block">
          <p class="text-primary font-bold flex items-center gap-2">
            <Zap class="w-4 h-4" /> Intro / Early Adopter Offer: First 3 months at 50% OFF!
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div 
          v-for="plan in plans" 
          :key="plan.name"
          :class="[
            'p-8 rounded-[2.5rem] border bg-card flex flex-col h-full relative group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10',
            plan.popular ? 'border-primary ring-2 ring-primary ring-offset-2 scale-105 z-10' : ''
          ]"
        >
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            RECOMMENDED
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-bold mb-2">{{ plan.name }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ plan.description }}</p>
          </div>

          <div class="mb-8">
            <div class="flex items-end gap-1 mb-1">
              <div class="text-4xl font-black tracking-tight">
                ₱{{ plan.price }}
              </div>
              <div class="text-muted-foreground font-bold mb-1 opacity-70">
                / {{ plan.period }}
              </div>
            </div>
            <div class="text-sm text-primary font-bold flex items-center gap-1">
              <CheckCircle2 class="w-4 h-4" /> ₱{{ plan.earlyAdopterPrice }} / mo for first 3 months
            </div>
          </div>

          <div class="space-y-4 mb-10 flex-1">
            <div v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
              <div class="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check class="w-3 h-3" stroke-width="3" />
              </div>
              <span class="text-sm font-medium">{{ feature }}</span>
            </div>
          </div>

          <Button 
            :variant="plan.popular ? 'default' : 'outline'" 
            class="w-full py-6 text-base font-bold rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
            as-child
          >
            <NuxtLink to="/get-started">
              {{ plan.buttonText }}
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
