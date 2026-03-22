<script setup lang="ts">
import { Building2, Check, Sparkles, Users, Zap } from 'lucide-vue-next'

interface Plan {
  name: string
  priceMonthly: number
  storesLabel: string
  stores: number
  riders: number
  buttonText: string
  popular: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    priceMonthly: 499,
    storesLabel: 'Stores (branches)',
    stores: 1,
    riders: 2,
    buttonText: 'Go Starter',
    popular: false,
  },
  {
    name: 'Standard',
    priceMonthly: 999,
    storesLabel: 'Stores',
    stores: 2,
    riders: 5,
    buttonText: 'Go Standard',
    popular: true,
  },
  {
    name: 'Premium',
    priceMonthly: 1999,
    storesLabel: 'Stores',
    stores: 3,
    riders: 10,
    buttonText: 'Go Premium',
    popular: false,
  },
]

function formatPeso(n: number) {
  return n.toLocaleString('en-PH')
}

function firstMonthPrice(monthly: number) {
  return Math.round(monthly / 2)
}
</script>

<template>
  <section id="pricing" class="relative overflow-hidden py-24 md:py-28">
    <!-- background -->
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-background to-background"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/5"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/5"
      aria-hidden="true"
    />

    <div class="container relative px-4">
      <div class="mx-auto mb-14 max-w-3xl px-4 text-center md:mb-16">
        <Badge variant="secondary" class="mb-4 border-primary/15 bg-primary/5 text-primary">
          <Zap class="mr-1.5 h-3.5 w-3.5" />
          Simple pricing
        </Badge>
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">
          Choose Your <span class="gradient-text">Success Plan</span>
        </h2>
        <p class="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
          Pick the tier that fits your branches and rider team. All plans include the full HydroDash experience.
        </p>

        <!-- First-time offer -->
        <div
          class="mx-auto flex max-w-2xl gap-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-5 py-4 text-left shadow-sm md:px-8"
        >
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles class="h-5 w-5" />
          </div>
          <div class="min-w-0 text-sm leading-relaxed md:text-base">
            <p class="font-semibold text-foreground">
              <span class="text-primary">First-time subscribers:</span>
              50% off your first month
            </p>
            <p class="mt-1 text-xs text-muted-foreground md:text-sm">
              Applies to your first billing month · New accounts only
            </p>
          </div>
        </div>
      </div>

      <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-card/90 shadow-lg backdrop-blur-sm transition-all duration-300',
            'hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10',
            plan.popular
              ? 'z-10 border-primary/40 shadow-xl shadow-primary/15 ring-2 ring-primary/25 md:scale-[1.02]'
              : 'border-border/80 hover:border-primary/25',
          ]"
        >
          <!-- top accent -->
          <div
            class="h-1.5 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-90 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />

          <div v-if="plan.popular" class="absolute right-4 top-6">
            <span
              class="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md"
            >
              Popular
            </span>
          </div>

          <div class="flex flex-1 flex-col p-7 pt-8 md:p-8">
            <div class="mb-6">
              <h3 class="text-xl font-bold tracking-tight">{{ plan.name }}</h3>
            </div>

            <!-- pricing -->
            <div class="mb-8 rounded-2xl border border-primary/10 bg-muted/30 p-5 dark:bg-muted/20">
              <p class="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary">First month (new)</p>
              <div class="flex flex-wrap items-baseline gap-2">
                <span class="text-4xl font-black tracking-tight text-foreground">
                  ₱{{ formatPeso(firstMonthPrice(plan.priceMonthly)) }}
                </span>
                <span class="text-lg font-medium text-muted-foreground line-through decoration-muted-foreground/60">
                  ₱{{ formatPeso(plan.priceMonthly) }}
                </span>
              </div>
              <p class="mt-3 text-sm text-muted-foreground">
                Then
                <span class="font-semibold text-foreground">₱{{ formatPeso(plan.priceMonthly) }}</span>
                /month
              </p>
            </div>

            <div class="mb-10 flex flex-1 flex-col gap-3">
              <div class="flex items-start gap-3 rounded-xl bg-background/50 px-1 py-0.5">
                <div
                  class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                  <Building2 class="h-4 w-4" />
                </div>
                <div class="min-w-0 pt-0.5">
                  <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">{{ plan.storesLabel }}</p>
                  <p class="text-sm font-semibold">{{ plan.stores }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3 rounded-xl bg-background/50 px-1 py-0.5">
                <div
                  class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                  <Users class="h-4 w-4" />
                </div>
                <div class="min-w-0 pt-0.5">
                  <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">Riders</p>
                  <p class="text-sm font-semibold">{{ plan.riders }}</p>
                </div>
              </div>
              <div class="flex items-start gap-2 pt-1 text-xs text-muted-foreground">
                <Check class="mt-0.5 h-4 w-4 shrink-0 text-primary" stroke-width="2.5" />
                <span>Orders, COD tracking, promos & loyalty included</span>
              </div>
            </div>

            <Button
              :variant="plan.popular ? 'default' : 'outline'"
              class="w-full rounded-2xl py-6 text-base font-bold shadow-lg transition-transform hover:scale-[1.02]"
              as-child
            >
              <NuxtLink to="/get-started">
                {{ plan.buttonText }}
              </NuxtLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
