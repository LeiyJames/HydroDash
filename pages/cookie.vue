<script setup lang="ts">
import { Cookie, CheckCircle, HelpCircle } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 mt-8">Cookie Policy</h1>
        
        <div class="prose dark:prose-invert max-w-none space-y-12">
          <section>
            <p class="text-xl text-muted-foreground leading-relaxed">
              We use cookies to enhance your experience and ensure the platform runs smoothly and securely. 
            </p>
          </section>

          <div class="grid md:grid-cols-2 gap-8 my-16">
            <div class="p-8 rounded-3xl border bg-card">
              <CheckCircle class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Essential Cookies</h3>
              <p class="text-sm text-muted-foreground">Required for core functionality, such as keeping you logged in and securing your session.</p>
            </div>
            <div class="p-8 rounded-3xl border bg-card">
              <Cookie class="w-10 h-10 text-primary mb-4" />
              <h3 class="font-bold mb-2">Efficiency Cookies</h3>
              <p class="text-sm text-muted-foreground">Helps us remember your preferences, like theme settings and recent searches.</p>
            </div>
          </div>

          <section class="space-y-6">
            <h2 class="text-2xl font-bold">1. Why We Use Cookies</h2>
            <p class="text-muted-foreground">HydroDash uses cookies to understand how users interact with our features, helping us optimize performance and deliver a more personalized experience.</p>
            
            <h2 class="text-2xl font-bold">2. Managing Preferences</h2>
            <p class="text-muted-foreground">You can manage your cookie preferences through your browser settings. Note that disabling essential cookies may impact certain app functionalities.</p>

            <h2 class="text-2xl font-bold">3. Third-Party Analytics</h2>
            <p class="text-muted-foreground">We may use anonymized third-party cookies (like Google Analytics) to improve our service offerings based on session data and traffic patterns.</p>
          </section>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
