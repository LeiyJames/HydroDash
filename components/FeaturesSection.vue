<script setup lang="ts">
import { ref } from 'vue'
import { LayoutDashboard, Users, Receipt, Settings, Smartphone, MapPin, Gift, CreditCard, ClipboardList, TrendingUp, ShieldCheck, Bike } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

const activeRole = ref<'admin' | 'customer' | 'rider'>('admin')

const roles = [
  { id: 'admin', name: 'For Admins', icon: LayoutDashboard },
  { id: 'customer', name: 'For Customers', icon: Smartphone },
  { id: 'rider', name: 'For Riders', icon: Bike },
] as const

const features: Record<string, any[]> = {
  admin: [
    { title: 'Dashboard that makes sense', icon: TrendingUp, desc: 'See total revenue, delivered orders, and pending orders at a glance.' },
    { title: 'Expected COD from rider', icon: CreditCard, desc: 'One number shows how much cash the rider should remit today.' },
    { title: 'Pricing & Promos', icon: Settings, desc: 'Set water prices and create promo codes with expiry dates.' },
    { title: 'Activity log you can trust', icon: Receipt, desc: 'See who changed what and when — full audit trail.' },
  ],
  customer: [
    { title: 'Order in a few taps', icon: Smartphone, desc: 'Choose water type, quantity, and delivery time instantly.' },
    { title: 'Track every order', icon: MapPin, desc: 'Status updates from "Preparing" to "Delivered".' },
    { title: 'Loyalty that pays off', icon: Gift, desc: 'Earn points on deliveries and redeem them for free orders.' },
    { title: 'GCash or COD', icon: CreditCard, desc: 'Pay online or cash on delivery. Your choice.' },
  ],
  rider: [
    { title: 'One place for today’s work', icon: ClipboardList, desc: 'See pending orders and update status from the field.' },
    { title: 'My Deliveries', icon: TrendingUp, desc: 'Know what was completed and when with the day filter.' },
    { title: 'Customer details', icon: Users, desc: 'Name, address, and notes to deliver with ease.' },
    { title: 'Clear accountability', icon: ShieldCheck, desc: 'When you mark "Delivered", it is recorded with your identity.' }, // ShieldCheck added via import later if needed, use users for now
  ]
}

const comparisonGoals = [
  { title: 'Protect Revenue', manual: 'Manual tallying, errors common', hydrodash: 'Automatic reconciliation' },
  { title: 'Increase Repeat Orders', manual: 'Wait for customer call', hydrodash: 'Quick reorder, loyalty & promos' },
  { title: 'Save Admin Time', manual: '4-5 hours/week log entries', hydrodash: 'Real-time automation' },
  { title: 'Build Trust', manual: '"Where\'s my order?" calls', hydrodash: 'Real-time status & receipts' },
  { title: 'Scale Without Chaos', manual: 'Juggling calls & paper logs', hydrodash: 'Unified app for everyone' },
]

// Ensure ShieldCheck is available if needed, or use MapPin / Users
</script>

<template>
  <section id="features" class="py-24 relative overflow-hidden">
    <div class="container px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <Badge variant="secondary" class="mb-4">Full Control</Badge>
        <h2 class="text-3xl font-extrabold mb-4 tracking-tight">Features That Improve Your Business</h2>
        <p class="text-lg text-muted-foreground">
          Three roles, one app. Every person see only what they need to get the job done.
        </p>
      </div>

      <!-- Role Toggles -->
      <div class="flex justify-center mb-16">
        <div class="bg-muted p-1 rounded-2xl flex gap-1">
          <button 
            v-for="role in roles" 
            :key="role.id"
            @click="activeRole = role.id"
            :class="cn(
              'px-6 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2',
              activeRole === role.id ? 'bg-background shadow-md text-primary scale-105' : 'text-muted-foreground hover:bg-background/50'
            )"
          >
            <component :is="role.icon" class="w-4 h-4" />
            {{ role.name }}
          </button>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-500">
        <Card v-for="f in features[activeRole]" :key="f.title" class="group hover-lift border-primary/5 hover:border-primary/20 bg-background/50 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <component :is="f.icon" class="w-6 h-6" />
            </div>
            <CardTitle class="text-xl leading-tight">{{ f.title }}</CardTitle>
            <CardDescription class="mt-2 text-sm leading-relaxed">
              {{ f.desc }}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <!-- Comparison Section -->
      <div class="mt-24">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="secondary" class="mb-4 text-primary bg-primary/5 border-primary/20">Business Impact</Badge>
          <h2 class="text-3xl font-extrabold mb-4 tracking-tight">How HydroDash Helps Your Business Grow</h2>
          <p class="text-lg text-muted-foreground">
            Stop wasting hours on manual work. Transition from chaos to a system that works for you.
          </p>
        </div>

        <!-- Comparison Table (Desktop) -->
        <div class="hidden md:block overflow-hidden rounded-[2rem] border bg-background/50 backdrop-blur-sm shadow-xl">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-muted/50 border-b">
                <th class="p-6 text-sm font-extrabold uppercase tracking-wider text-foreground">Business Goal</th>
                <th class="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Manual Method</th>
                <th class="p-6 text-sm font-bold uppercase tracking-wider text-primary">With HydroDash</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="goal in comparisonGoals" :key="goal.title" class="group hover:bg-primary/5 transition-colors text-sm">
                <td class="p-6 font-bold">{{ goal.title }}</td>
                <td class="p-6 text-muted-foreground">{{ goal.manual }}</td>
                <td class="p-6 text-primary font-bold">{{ goal.hydrodash }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Comparison Cards (Mobile) -->
        <div class="md:hidden space-y-4">
          <div 
            v-for="goal in comparisonGoals" 
            :key="goal.title"
            class="p-6 border rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm"
          >
            <h4 class="font-extrabold text-foreground mb-4 flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
              {{ goal.title }}
            </h4>
            <div class="grid gap-3">
              <div class="p-3 bg-muted/40 rounded-xl">
                <span class="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Manual Method</span>
                <p class="text-sm text-muted-foreground">{{ goal.manual }}</p>
              </div>
              <div class="p-3 bg-primary/5 border border-primary/10 rounded-xl">
                <span class="block text-[10px] font-bold uppercase tracking-wider text-primary mb-1">With HydroDash</span>
                <p class="text-sm text-primary font-bold">{{ goal.hydrodash }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
