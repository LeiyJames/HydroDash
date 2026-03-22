<script setup lang="ts">
// No extra logic needed here as it's moved to FloatingActions.vue
</script>

<template>
  <div class="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main>
      <HeroSection />
    <WhyHydroDash />
    <GallerySection />
    <PricingSection />
    <BlogSection />
    
    <!-- CTA Section -->
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- Action Buttons (Floating) -->
    <FloatingActions />
  </div>
</template>

