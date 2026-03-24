<script setup lang="ts">
import { Store, Download, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Settings2, Smartphone } from 'lucide-vue-next'

const setupFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdUFq5IN492a37RDcfi0pqZvbDNbc_vjXLxVBF6tV_Ia-O_EA/viewform'

const steps = [
  {
    title: 'Create Your Store Profile',
    desc: 'Register your business name, location, and water types in seconds.',
    icon: Store,
    color: 'bg-blue-500',
    action: 'Setup Account',
    link: setupFormUrl,
    external: true,
  },
  {
    title: 'Download & Launch',
    desc: 'Get the HydroDash app on your phone and start taking orders.',
    icon: Download,
    color: 'bg-cyan-500',
    action: 'Download App',
    link: '/app/HydroDash-1.2.1.apk',
    download: true
  }
]

const installGuide = [
  {
    title: 'Download the APK',
    desc: 'Click the "Download App" button above to start the download.',
    icon: Download
  },
  {
    title: 'Enable "Unknown Sources"',
    desc: 'If prompted, go to Settings and allow "Install from unknown sources" for your browser.',
    icon: Settings2
  },
  {
    title: 'Install & Open',
    desc: 'Tap the downloaded file and select "Install". Open the app and log in!',
    icon: Smartphone
  }
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    
    <main class="pt-32 pb-24">
      <div class="container px-4 max-w-5xl mx-auto">
        <div class="text-center mb-16 px-4">
          <Badge variant="secondary" class="mb-4">Launchpad</Badge>
          <h1 class="text-4xl md:text-6xl font-black tracking-tighter mb-6">Let's Get Your Business <span class="gradient-text">Live</span></h1>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Setting up HydroDash is simple. Follow these two steps to transition from manual chaos to total digital control.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 relative mb-20 max-w-3xl mx-auto">
            <!-- Connector Line (Desktop) -->
            <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10 -translate-y-1/2"></div>
            
            <div 
                v-for="(step, index) in steps" 
                :key="step.title"
                class="bg-card border rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group"
            >
                <div class="mb-6 relative">
                    <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg animate-in zoom-in duration-500 ', step.color]">
                        <component :is="step.icon" class="w-8 h-8" />
                    </div>
                    <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-black shadow-sm">
                        {{ index + 1 }}
                    </div>
                </div>

                <h3 class="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {{ step.title }}
                </h3>
                <p class="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                    {{ step.desc }}
                </p>

                <a
                  v-if="step.download || step.external"
                  :href="step.link"
                  :download="step.download ? '' : undefined"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full"
                >
                  <Button class="w-full rounded-2xl py-6 font-bold group-hover:scale-[1.05] transition-transform">
                    {{ step.action }} <ArrowRight class="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <NuxtLink v-else :to="step.link" class="w-full">
                  <Button class="w-full rounded-2xl py-6 font-bold group-hover:scale-[1.05] transition-transform">
                    {{ step.action }} <ArrowRight class="ml-2 w-4 h-4" />
                  </Button>
                </NuxtLink>
            </div>
        </div>

        <!-- Installation Guide Section -->
        <div class="mb-20">
            <div class="text-center mb-10">
                <div class="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
                    <ShieldCheck class="w-3 h-3" />
                    Android Setup Guide
                </div>
                <h2 class="text-3xl font-black mb-4">How to Install</h2>
                <p class="text-muted-foreground">Follow these simple steps to get HydroDash running on your Android device.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <div 
                    v-for="(guide, index) in installGuide" 
                    :key="guide.title"
                    class="bg-card/50 border border-dashed rounded-3xl p-6 relative group hover:border-primary/50 transition-colors"
                >
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <component :is="guide.icon" class="w-5 h-5" />
                        </div>
                        <div>
                            <h4 class="font-bold mb-1 text-sm uppercase tracking-tight text-primary">Step {{ index + 1 }}</h4>
                            <h3 class="font-bold mb-2">{{ guide.title }}</h3>
                            <p class="text-sm text-muted-foreground leading-relaxed">{{ guide.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 p-4 bg-muted/50 rounded-2xl border flex items-start gap-4">
                <ShieldCheck class="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <p class="text-xs text-muted-foreground leading-relaxed">
                    <strong>Note:</strong> Since HydroDash is not yet on the Play Store, Android will show a standard "File might be harmful" warning. Don't worry, this is normal for APKs. Click <strong>"Download anyway"</strong> to proceed.
                </p>
            </div>
        </div>

        <!-- Help Section -->
        <div class="p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
            <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div class="max-w-xl text-center md:text-left">
                    <div class="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <MessageSquare class="w-3 h-3 text-primary" />
                        Guided Setup
                    </div>
                    <h2 class="text-3xl md:text-4xl font-black mb-4 tracking-tight">Need a Hand? We’ll Set It Up for You.</h2>
                    <p class="text-slate-400 text-lg leading-relaxed">
                        Too busy running the shop? Our team can hop on a 10-minute call to set up your store, add your riders, and train your staff. **Completely free.**
                    </p>
                </div>
                
                <div class="flex flex-col gap-4 w-full md:w-auto">
                    <Button variant="default" size="lg" class="bg-primary text-primary-foreground font-black text-lg py-8 px-12 rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                        Book Free Setup
                    </Button>
                    <p class="text-center text-slate-500 text-sm font-medium">Or message us at leighpresno114@gmail.com</p>
                </div>
            </div>
        </div>
      </div>
    </main>

    <AppFooter />
    <FloatingActions />
  </div>
</template>
