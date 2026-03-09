<script setup lang="ts">
import { ShieldCheck, Heart, Truck, Lock } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 mt-8">Safety & Security</h1>
        
        <div class="prose dark:prose-invert max-w-none space-y-12">
          <section>
            <p class="text-xl text-muted-foreground leading-relaxed">
              HydroDash is built on a foundation of safety for riders and trust for customers. Our security measures ensure every delivery is a positive experience. 
            </p>
          </section>

          <div class="grid md:grid-cols-2 gap-8 my-16">
            <div class="p-8 rounded-3xl border bg-card">
              <Truck class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Verified Delivery</h3>
              <p class="text-sm text-muted-foreground">Riders are only authorized through store-specific codes and verified store logins.</p>
            </div>
            <div class="p-8 rounded-3xl border bg-card">
              <ShieldCheck class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Immutable Logs</h3>
              <p class="text-sm text-muted-foreground">Every delivery status change is logged with a timestamp and the responder's ID for accountability.</p>
            </div>
          </div>

          <section class="space-y-6">
            <h2 class="text-2xl font-bold">1. Delivery Safety</h2>
            <p class="text-muted-foreground">Customers receive real-time status updates and delivery completion receipts. If a rider marks a job as "Delivered," owners can verify the timestamp and customer's confirmation.</p>
            
            <h2 class="text-2xl font-bold">2. Payment Security</h2>
            <p class="text-muted-foreground">With explicit payment method tracking (GCash vs COD), HydroDash ensures that both riders and owners are aligned on expected remittance for the day.</p>

            <h2 class="text-2xl font-bold">3. Emergency Protocols</h2>
            <p class="text-muted-foreground">In case of delivery issues or business disruptions, owners can instantly update order statuses and notify customers via the app.</p>
          </section>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
