<script setup lang="ts">
import { ShieldCheck, Lock, EyeOff } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 mt-8">Privacy Policy</h1>
        
        <div class="prose dark:prose-invert max-w-none space-y-12">
          <section>
            <p class="text-xl text-muted-foreground leading-relaxed">
              At HydroDash, your business data and personal information are treated with the highest level of security. We believe in transparency and want you to know how we collect, use, and protect your information. 
            </p>
          </section>

          <div class="grid md:grid-cols-2 gap-8 my-16">
            <div class="p-8 rounded-3xl border bg-card">
              <Lock class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Secure Storage</h3>
              <p class="text-sm text-muted-foreground">Encryption at rest and in transit for all order details, customer addresses, and payment logs.</p>
            </div>
            <div class="p-8 rounded-3xl border bg-card">
              <EyeOff class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Limited Access</h3>
              <p class="text-sm text-muted-foreground">Only authorized individuals—business owners and their designated riders—can access your data.</p>
            </div>
          </div>

          <section class="space-y-6">
            <h2 class="text-2xl font-bold">1. Information Collection</h2>
            <p class="text-muted-foreground">We collect information necessary to process water orders, including customer names, delivery addresses, and order history. We also record rider activity for accountability.</p>
            
            <h2 class="text-2xl font-bold">2. Data Usage</h2>
            <p class="text-muted-foreground">Collected data is used solely to provide and improve our service, track delivery stats, and manage loyalty points. We never sell your data to third parties.</p>

            <h2 class="text-2xl font-bold">3. Your Rights</h2>
            <p class="text-muted-foreground">Business owners can request a full export or deletion of their account data at any time. We respond to all such requests within 48 hours for verified owners.</p>
          </section>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
