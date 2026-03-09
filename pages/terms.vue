<script setup lang="ts">
import { BookOpen, AlertCircle, HelpCircle } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 mt-8">Terms of Service</h1>
        
        <div class="prose dark:prose-invert max-w-none space-y-12">
          <section>
            <p class="text-xl text-muted-foreground leading-relaxed">
              By using HydroDash, you agree to comply with our terms of service, which ensure a fair and safe experience for business owners, riders, and customers alike. 
            </p>
          </section>

          <div class="grid md:grid-cols-2 gap-8 my-16">
            <div class="p-8 rounded-3xl border bg-card">
              <BookOpen class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Usage Rights</h3>
              <p class="text-sm text-muted-foreground">Authorized business owners can manage multiple riders and unlimited customers within their account.</p>
            </div>
            <div class="p-8 rounded-3xl border bg-card">
              <AlertCircle class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Account Responsibility</h3>
              <p class="text-sm text-muted-foreground">Owners are responsible for all activity under their store code and rider accounts.</p>
            </div>
          </div>

          <section class="space-y-6">
            <h2 class="text-2xl font-bold">1. Subscription and Fees</h2>
            <p class="text-muted-foreground">HydroDash offers both free and premium tiers for water refilling stores. Membership fees are non-refundable unless stated otherwise.</p>
            
            <h2 class="text-2xl font-bold">2. Service Modifications</h2>
            <p class="text-muted-foreground">We reserve the right to update or modify features of the platform to improve the user experience or comply with legal requirements.</p>

            <h2 class="text-2xl font-bold">3. Acceptable Use</h2>
            <p class="text-muted-foreground">HydroDash must only be used for legitimate water refill business operations. Any attempt to exploit, hack, or misrepresent data is grounds for immediate termination.</p>
          </section>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
