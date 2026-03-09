<script setup lang="ts">
import { LifeBuoy, BookOpen, MessageCircle, FileText } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 mt-8">Help Center</h1>
        
        <div class="grid md:grid-cols-2 gap-8 mt-16 pb-16">
          <div class="p-8 rounded-3xl border bg-card hover:border-primary transition-all group">
            <BookOpen class="w-10 h-10 text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Getting Started Guide</h3>
            <p class="text-muted-foreground mb-4">Learn how to set up your store, add riders, and invite customers in minutes.</p>
            <Button variant="outline" class="group-hover:bg-primary group-hover:text-primary-foreground">Read Guide</Button>
          </div>
          
          <div class="p-8 rounded-3xl border bg-card hover:border-primary transition-all group">
            <FileText class="w-10 h-10 text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">API Documentation</h3>
            <p class="text-muted-foreground mb-4">Advanced developer tools for integrating HydroDash into your existing ERP.</p>
            <Button variant="outline" class="group-hover:bg-primary group-hover:text-primary-foreground">View Docs</Button>
          </div>
        </div>

        <section class="p-12 rounded-[2.5rem] bg-muted/50 border text-center">
          <LifeBuoy class="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 class="text-2xl font-bold mb-4">Still need help?</h2>
          <p class="text-muted-foreground max-w-lg mx-auto mb-8">
            Our expert support team is available from 9 AM to 6 PM (PHT) to assist with any business-critical inquiries.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="rounded-full px-12 font-bold">Live Chat</Button>
            <Button size="lg" variant="outline" class="rounded-full px-12 font-bold">Email Support</Button>
          </div>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
