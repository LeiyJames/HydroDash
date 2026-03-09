<script setup lang="ts">
import { ref } from 'vue'
import { Check, Shield, Zap, LayoutDashboard, Bike, Users } from 'lucide-vue-next'

const plans = [
  {
    name: 'Free Trial',
    price: '0',
    period: '7 days',
    description: 'Perfect for testing all pro features.',
    features: ['Up to 2 Riders', 'Unlimited Customers', 'Manual Reconciliation', 'Order History (7 Days)'],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '499',
    period: 'month',
    description: 'Everything you need to scale.',
    features: ['Unlimited Riders', 'Advance Reports & CSV Export', 'Automatic Reconciliation', 'Customer Loyalty Points', 'Priority Support'],
    buttonText: 'Try 7 Days Free',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For chains and large fleets.',
    features: ['Multi-Store Dashboard', 'API Access', 'Dedicated Account Manager', 'Custom Roles & Permissions'],
    buttonText: 'Contact Sales',
    popular: false
  }
]
</script>

<template>
  <section id="pricing" class="py-24 bg-background relative overflow-hidden">
    <div class="container px-4">
      <div class="max-w-3xl mx-auto text-center mb-16 px-4">
        <Badge variant="secondary" class="mb-4">Flexible Pricing</Badge>
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Choose Your <span class="gradient-text">Growth Plan</span></h2>
        <p class="text-lg text-muted-foreground">Start for free and scale as your business grows. No hidden fees.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="plan in plans" 
          :key="plan.name"
          :class="[
            'p-8 rounded-[2.5rem] border bg-card flex flex-col h-full relative group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10',
            plan.popular ? 'border-primary ring-2 ring-primary ring-offset-2 scale-105 z-10' : ''
          ]"
        >
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            MOST POPULAR
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-bold mb-2">{{ plan.name }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ plan.description }}</p>
          </div>

          <div class="mb-8 items-end gap-1 flex">
            <div class="text-5xl font-black tracking-tight" v-if="plan.price !== 'Custom'">
              ₱{{ plan.price }}
            </div>
            <div class="text-4xl font-black tracking-tight" v-else>
              {{ plan.price }}
            </div>
            <div v-if="plan.period" class="text-muted-foreground font-bold mb-1 opacity-70">
              / {{ plan.period }}
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
            <NuxtLink :to="plan.price === 'Custom' ? '/contact' : '/get-started'">
              {{ plan.buttonText }}
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
