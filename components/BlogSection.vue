<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, BookOpen, Clock, Users } from 'lucide-vue-next'

const articles = [
  {
    category: 'Business Tips',
    title: '5 Ways to Secure Your Water Store Revenue Today',
    excerpt: 'Stop manual errors and start tracking every peso with a better reconciliation system for your riders.',
    author: 'Leigh Presno',
    date: 'Mar 5, 2024',
    readTime: '4 min read'
  },
  {
    category: 'Guides',
    title: 'Setting Up Your First Delivery Route for Efficiency',
    excerpt: 'Distance-based sorting can save your riders 2 hours per day. Here is how to map it effectively.',
    author: 'HydroDash Team',
    date: 'Feb 28, 2024',
    readTime: '6 min read'
  },
  {
    category: 'Case Study',
    title: 'From 50 to 200 Orders Daily: The Scaling Blueprint',
    excerpt: 'Learn how "Fresh Blue Water" used automation to triple their subscriber base in 3 months.',
    author: 'Staff Writer',
    date: 'Feb 20, 2024',
    readTime: '8 min read'
  }
]
</script>

<template>
  <section id="blog" class="py-24 bg-background relative overflow-hidden">
    <!-- Design accents -->
    <div class="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-primary/50 to-transparent"></div>
    
    <div class="container px-4">
      <div class="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div class="max-w-2xl">
          <Badge variant="secondary" class="mb-4">Resources & Guides</Badge>
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Latest From The <span class="gradient-text">Blog</span></h2>
          <p class="text-lg text-muted-foreground leading-relaxed">
            Tips, industry insights, and success stories to help you run a more profitable water refilling business.
          </p>
        </div>
        <Button variant="outline" class="rounded-full px-8 font-bold flex gap-2">
            View All Articles <ArrowRight class="w-4 h-4" />
        </Button>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="article in articles" 
          :key="article.title"
          class="group cursor-pointer flex flex-col h-full bg-card border rounded-[2.5rem] p-8 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
        >
          <div class="mb-6 flex justify-between items-center">
            <Badge variant="outline" class="bg-primary/5 text-primary border-primary/20 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">
                {{ article.category }}
            </Badge>
          </div>

          <div class="flex-1 space-y-4">
            <h3 class="text-2xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                {{ article.title }}
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {{ article.excerpt }}
            </p>
          </div>

          <div class="pt-8 mt-8 border-t flex items-center justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <div class="flex items-center gap-2">
                <Clock class="w-3.5 h-3.5" />
                <span>{{ article.readTime }}</span>
            </div>
            <span>{{ article.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
