<script setup lang="ts">
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 mt-8">Contact Us</h1>
        
        <div class="grid md:grid-cols-2 gap-12 mt-16">
          <div class="space-y-8">
            <p class="text-xl text-muted-foreground">
              Questions or need a guided setup for your store? Our team is ready to help you transition from chaos to control.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Mail class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-xs uppercase tracking-wider text-muted-foreground font-bold">Email</div>
                  <div class="font-bold">leighpresno114@gmail.com</div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <Phone class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-xs uppercase tracking-wider text-muted-foreground font-bold">Phone Support</div>
                  <div class="font-bold">+63 961 145 4129</div>
                </div>
              </div>
            </div>
          </div>

          <Card class="p-8">
            <form @submit.prevent class="space-y-4">
              <div class="space-y-2">
                <label class="text-sm font-bold">Full Name</label>
                <input type="text" placeholder="John Doe" class="w-full p-3 rounded-xl border bg-background" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold">Email Address</label>
                <input type="email" placeholder="john@example.com" class="w-full p-3 rounded-xl border bg-background" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold">Message</label>
                <textarea placeholder="How can we help your business?" rows="4" class="w-full p-3 rounded-xl border bg-background"></textarea>
              </div>
              <Button class="w-full py-6 text-base font-bold rounded-xl mt-4 shadow-lg shadow-primary/25">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
