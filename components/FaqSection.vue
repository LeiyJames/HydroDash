<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Minus, HelpCircle } from 'lucide-vue-next'

const faqs = [
  { 
    q: 'What is HydroDash?', 
    a: 'HydroDash is a mobile app for water refilling businesses. Customers order and track delivery; store owners manage orders, pricing, and promos; riders update delivery status — all in one place.' 
  },
  { 
    q: 'Do I need separate apps for customers and my team?', 
    a: 'No. One app with three roles: Customer, Admin, and Rider. Everyone downloads the same app and signs in; the app shows the right dashboard for their role.' 
  },
  { 
    q: 'How does HydroDash help prevent rider theft or lost cash?', 
    a: 'Every order has a fixed total and payment method. You can filter "Delivered by Rider" and see "Expected COD from rider" — the amount they should remit today. An activity log records who did what.' 
  },
  { 
    q: 'Can customers pay online?', 
    a: 'Yes. The app supports payment methods like GCash and Cash on Delivery (COD). You control what you accept; the app records it for each order.' 
  },
  { 
    q: 'Can I run promos and loyalty?', 
    a: 'Yes. Create promo codes with discount and expiry; customers see and apply them at checkout. Loyalty points are earned on deliveries.' 
  },
]

const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="py-24 bg-slate-50 dark:bg-slate-950/50">
    <div class="container px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <HelpCircle class="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 class="text-3xl font-extrabold mb-4 tracking-tight">Frequently Asked Questions</h2>
        <p class="text-lg text-muted-foreground">
          Got questions? We've got answers. If you need more help, contact our support team.
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div 
          v-for="(faq, i) in faqs" 
          :key="i" 
          class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 shadow-sm"
        >
          <button 
            @click="toggleFaq(i)"
            class="flex items-center justify-between w-full p-6 text-left"
          >
            <span class="font-bold text-lg leading-tight">{{ faq.q }}</span>
            <div class="p-2 rounded-lg bg-primary/5 text-primary">
              <Minus v-if="openFaq === i" class="w-5 h-5" />
              <Plus v-else class="w-5 h-5" />
            </div>
          </button>
          
          <div 
            v-if="openFaq === i" 
            class="px-6 pb-6 text-muted-foreground leading-relaxed animate-in slide-in-from-top-2 duration-300"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
