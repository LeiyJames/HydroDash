<script setup lang="ts">
import { Droplets, Target, Users, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 mt-8">About <span class="gradient-text">HydroDash</span></h1>
        
        <div class="prose dark:prose-invert max-w-none space-y-12">
          <section>
            <p class="text-xl text-muted-foreground leading-relaxed">
              HydroDash was born from a simple observation: while the water refilling industry is essential for millions of households, the tools used to manage it were stuck in the past. 
            </p>
          </section>

          <div class="grid md:grid-cols-3 gap-8 my-16">
            <div class="p-6 rounded-3xl border bg-card">
              <Target class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Our Mission</h3>
              <p class="text-sm text-muted-foreground">To empower local water businesses with technology that protects revenue and builds customer trust.</p>
            </div>
            <div class="p-6 rounded-3xl border bg-card">
              <Users class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Our Community</h3>
              <p class="text-sm text-muted-foreground">Building a unified platform where owners, riders, and customers can interact seamlessly.</p>
            </div>
            <div class="p-6 rounded-3xl border bg-card">
              <ShieldCheck class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Our Promise</h3>
              <p class="text-sm text-muted-foreground">Complete transparency through immutable activity logs and real-time status updates.</p>
            </div>
          </div>

          <section class="space-y-6">
            <h2 class="text-3xl font-bold">Bridging the Gap</h2>
            <p class="text-muted-foreground">
              We understand the "chaos" of scattered orders via text and calls, the risk of missing revenue from field deliveries, and the frustration of manual bookkeeping. HydroDash is more than just an app; it's a partner in your business growth. 
            </p>
            <p class="text-muted-foreground">
              By bringing every role—Owner, Rider, and Customer—into a single digital ecosystem, we eliminate the friction that holds water refilling stores back from scaling.
            </p>
          </section>
        </div>
      </div>
    </main>

    <AppFooter />
    <FloatingActions />
  </div>
</template>
