<template>
  <!-- ===== KHY BUSINESS HOMEPAGE START ===== --> 
  <main class="min-h-screen bg-white">

    <!-- ===== HERO SECTION ===== -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden"
      :style="{ backgroundImage: `url('/KhyHeroBackground.webp')` }">
      <!-- Background overlay with gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

      <!-- Floating geometric elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div v-for="i in 6" :key="i" class="absolute w-2 h-2 bg-red-500/20 animate-float" :style="{ 
            left: Math.random() * 100 + '%', 
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's'
          }"></div>
      </div>

      <!-- Main hero content -->
      <div class="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <!-- Logo with animation -->
        <div class="mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
          <!-- Updated logo implementation using the webp file -->
          <!-- <img src="/Khylogo.webp" alt="KHY Business Limited Logo"
            class="w-20 h-20 mx-auto mb-4 filter drop-shadow-2xl" /> -->
        </div>

        <!-- Main headline with staggered animation -->
        <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style="animation-delay: 0.4s">
          Furniture Beyond
          <span class="text-red-500 relative">
            Imagination
            <div class="absolute -bottom-2 left-0 w-full h-1 bg-red-500 animate-expand-width"></div>
          </span>
        </h1>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style="animation-delay: 0.6s">
          Creating beautiful, functional spaces through innovative furniture and joinery solutions across Ghana
        </p>

        <!-- CTA buttons with hover animations -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style="animation-delay: 0.8s">
          <button @click="scrollToSection('projects')"
            class="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 hover:-translate-y-1 min-h-[48px]">
            <span class="flex items-center justify-center gap-2">
              Explore Our Work
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor"
                viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>

          <button @click="openWhatsApp"
            class="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
            <span class="flex items-center justify-center gap-2">
              WhatsApp Us
              <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Scroll indicator -->
        <!-- <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div> -->
      </div>
    </section>

    <!-- ===== ABOUT SECTION PREVIEW ===== -->
    <section class="py-20 px-4 bg-white" ref="aboutSection">
      <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-6 animate-on-scroll">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              About
              <span class="text-red-600">KHY</span>
            </h2>

            <p class="text-lg text-gray-600 leading-relaxed">
              At KHY, we believe furniture is more than form — it's a story of elegance and utility.
              Since 2019, we've helped top companies across Ghana transform their spaces with bespoke furniture
              solutions.
            </p>

            <!-- Stats with animated counters -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              <div class="text-center p-4 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer">
                <div class="text-3xl font-bold text-red-600 counter" data-target="87">0</div>
                <div class="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div class="text-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <div class="text-3xl font-bold text-gray-800 counter" data-target="16">0</div>
                <div class="text-sm text-gray-600">Regions Served</div>
              </div>
              <div class="text-center p-4 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer">
                <div class="text-3xl font-bold text-red-600 counter" data-target="117">0</div>
                <div class="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div class="text-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <div class="text-3xl font-bold text-gray-800 counter" data-target="15">0</div>
                <div class="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <button @click="navigateToPage('/about')"
              class="group bg-gray-900 hover:bg-red-600 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              <span class="flex items-center gap-2">
                Learn More About Us
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div>

          <!-- Image with parallax effect -->
          <div class="relative animate-on-scroll" style="animation-delay: 0.2s">
            <div class="relative overflow-hidden group">
              <img src="/Aboutus.webp" alt="KHY furnished office space"
                class="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>

            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-red-500/10 backdrop-blur-sm animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900/10 backdrop-blur-sm animate-pulse"
              style="animation-delay: 1s"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRODUCTS SECTION PREVIEW ===== -->
    <section class="py-20 px-4 bg-gray-50" ref="productsSection">
      <div class="container mx-auto max-w-6xl">
        <!-- Section header -->
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafted Solutions for
            <span class="text-red-600">Every Space</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From soft seating to executive chairs, KHY offers a curated range of products for modern workspaces
          </p>
        </div>

        <!-- Products grid with card animations -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div v-for="(product, index) in featuredProducts" :key="product.id"
            class="group product-card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-on-scroll overflow-hidden"
            :style="{ animationDelay: index * 0.1 + 's' }" @click="navigateToPage('/products')">
            <!-- Product image -->
            <div class="relative h-64 overflow-hidden">
              <img :src="product.image" :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" />
              <!-- Red shadow overlay on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

              <!-- Category badge -->
              <div class="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                {{ product.category }}
              </div>
            </div>

            <!-- Product info -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ product.description }}
              </p>

              <!-- Features list -->
              <div class="space-y-2 mb-4">
                <div v-for="feature in product.features" :key="feature" class="flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  {{ feature }}
                </div>
              </div>

              <!-- Hover action -->
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">View Details</span>
                <svg class="w-5 h-5 text-red-600 transform group-hover:translate-x-1 transition-transform"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- View all products CTA -->
        <div class="text-center animate-on-scroll">
          <button @click="navigateToPage('/products')"
            class="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-1 min-h-[48px]">
            <span class="flex items-center justify-center gap-2">
              View Full Product Catalog
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor"
                viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>

       <!-- ===== PROJECTS SECTION PREVIEW ===== -->
    <section class="py-20 px-4 bg-white" ref="projectsSection" id="projects">
      <div class="container mx-auto max-w-6xl">
        <!-- Section header -->
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by
            <span class="text-red-600">Industry Leaders</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We've delivered projects for banks, multinational companies, NGOs, and local enterprises across Ghana
          </p>
        </div>
    
        <!-- Featured projects grid with optimized logo display -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div 
            v-for="(project, index) in featuredProjects" 
            :key="project.id"
            class="group project-card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-on-scroll cursor-pointer"
            :style="{ animationDelay: index * 0.2 + 's' }" 
            @click="navigateToPage('/projects')"
          >
            <!-- Optimized logo container -->
            <div class="relative h-48 bg-white flex items-center justify-center p-8 overflow-hidden">
              <!-- Background pattern for visual interest -->
              <div class="absolute inset-0 opacity-5">
                <div class="w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ef4444 2px, transparent 2px); background-size: 24px 24px;"></div>
              </div>
              
              <!-- Logo with proper aspect ratio preservation -->
              <div class="relative z-10 max-w-full max-h-full flex items-center justify-center">
                <img 
                  :src="project.image" 
                  :alt="`${project.client} Logo`"
                  class="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                  style="max-height: 120px; max-width: 200px;"
                  loading="lazy"
                />
              </div>
    
              <!-- Subtle hover overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Project status badge -->
              <div class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
                {{ project.status }}
              </div>
    
             
            </div>
    
            <!-- Project info with enhanced spacing -->
            <div class="p-6">
              <!-- Client name prominently displayed -->
              <div class="flex items-center gap-3 mb-4">
                <div class="flex items-center gap-2 text-gray-800">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold text-lg group-hover:text-red-600 transition-colors">{{ project.client }}</span>
                </div>
                <span class="text-sm text-gray-500 ml-auto">{{ project.year }}</span>
              </div>
    
              <!-- Project title -->
              <h3 class="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {{ project.title }}
              </h3>
    
              <!-- Role description -->
              <p class="text-gray-600 mb-4 leading-relaxed text-sm">
                {{ project.role }}
              </p>
    
              <!-- Project details grid -->
              <div class="space-y-3">
                <!-- Location -->
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">{{ project.location }}</span>
                </div>
    
                <!-- Duration -->
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">{{ project.duration }} project</span>
                </div>
              </div>
    
              <!-- Call to action -->
              <div class="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                <span class="text-xs text-gray-400 uppercase tracking-wide font-medium">Project Details</span>
                <div class="flex items-center gap-2 text-red-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- View all projects CTA -->
        <div class="text-center animate-on-scroll">
          <button 
            @click="navigateToPage('/projects')"
            class="group bg-gray-900 hover:bg-red-600 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]"
          >
            <span class="flex items-center justify-center gap-2">
              See All Projects
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- ===== CONTACT SECTION PREVIEW ===== -->
    <section class="py-20 px-4 bg-gray-600 text-white">
      <div class="container mx-auto max-w-4xl text-center">
        <div class="animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Let's Work
            <span class="text-red-500">Together</span>
          </h2>

          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to furnish your vision? Let's talk about transforming your space.
          </p>

          <!-- Contact info grid -->
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Email -->
            <div class="group bg-gray-800 hover:bg-gray-700 p-6 transition-colors duration-300 cursor-pointer">
              <div class="text-red-500 text-2xl mb-2">📧</div>
              <h3 class="font-semibold mb-2">Email Us</h3>
              <a href="mailto:design@khyltd.com" class="text-gray-300 hover:text-white transition-colors">
                design@khyltd.com
              </a>
            </div>

            <!-- Location -->
            <div class="group bg-gray-800 hover:bg-gray-700 p-6 transition-colors duration-300 cursor-pointer">
              <div class="text-red-500 text-2xl mb-2">📍</div>
              <h3 class="font-semibold mb-2">Visit Us</h3>
              <p class="text-gray-300">5 Labone Crescent, Accra, Ghana</p>
            </div>
          </div>

          <!-- CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="navigateToPage('/contact')"
              class="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-1 min-h-[48px]">
              <span class="flex items-center justify-center gap-2">
                Contact Us
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>

            <button @click="openWhatsApp"
              class="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              <span class="flex items-center justify-center gap-2">
                WhatsApp Us
                <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

// ===== Types & Interfaces =====
interface Product {
  id: string
  name: string
  description: string
  category: string
  image: string
  features: string[]
}

interface Project {
  id: string
  title: string
  client: string
  role: string
  location: string
  duration: string
  year: number
  status: string
  image: string
}

// ===== Component Data =====
const aboutSection = ref<HTMLElement>()
const productsSection = ref<HTMLElement>()
const projectsSection = ref<HTMLElement>()

// ===== Business Information (Ghana-specific) =====
const businessInfo = {
  whatsappNumber: '+233244682728',
  email: 'design@khyltd.com',
  address: '5 Labone Crescent, Accra, Ghana',
  workingHours: '8:00 AM - 5:00 PM (Mon-Fri)',
  timezone: 'Africa/Accra'
}

// ===== Featured Products Data =====
const featuredProducts: Product[] = [
  {
    id: 'soft-seating',
    name: 'Soft Seating',
    description: 'Elegant lounges and comfortable seating to elevate any reception or relaxation area.',
    category: 'Seating',
    image: 'softseating.webp',
    features: ['Premium materials', 'Ergonomic design', 'Custom colors']
  },
  {
    id: 'executive-chairs',
    name: 'Executive Chairs',
    description: 'Ergonomic, stylish, and built to last — executive chairs for modern workspaces.',
    category: 'Chairs',
    image: '/executivechairs.webp',
    features: ['Ergonomic support', 'Premium leather', 'Adjustable height']
  },
  {
    id: 'meeting-tables',
    name: 'Meeting Tables',
    description: 'Functional and aesthetic solutions for meetings, collaboration, and workstations.',
    category: 'Tables',
    image: '/meetingtables.webp',
    features: ['Cable management', 'Durable surface', 'Modern design']
  }
]

// ===== Featured Projects Data =====
const featuredProjects: Project[] = [
  {
    id: 'stanbic-bank',
    title: 'Stanbic Bank Labone & East Legon',
    client: 'Stanbic Bank Ghana',
    role: 'Subcontractor for the supply of workstations, task chairs, meeting room tables and chairs, canteen furniture, outdoor furniture, and soft seating.',
    location: 'Labone & East Legon, Accra',
    duration: '8 months',
    year: 2023,
    status: 'Completed',
    image: '/stanbiclogo.png'
  },
  {
    id: 'glico-healthcare',
    title: 'Glico Healthcare Ltd HQ',
    client: 'Glico Healthcare Limited',
    role: 'Main contractor for workstations, task chairs, meeting tables, canteen furniture, outdoor & soft seating solutions.',
    location: 'Accra, Greater Accra',
    duration: '12 months',
    year: 2023,
    status: 'Completed',
    image: '/glicologo.png'
  },
  {
    id: 'norfund-ghana',
    title: 'Norfund Ghana Office',
    client: 'Norfund Ghana',
    role: 'Main contractor for furniture supply and installation of bespoke office storage units and workspace solutions.',
    location: 'Airport Residential Area, Accra',
    duration: '6 months',
    year: 2022,
    status: 'Completed',
    image: '/norfundlogo.png'
  },
  {
    id: 'development-bank',
    title: 'Development Bank Ghana HQ',
    client: 'Development Bank Ghana',
    role: 'Main contractor for the supply of workstations, task chairs, meeting room tables and chairs, canteen furniture, soft seating and waiting area chairs.',
    location: 'Ridge, Accra',
    duration: '10 months',
    year: 2023,
    status: 'Ongoing',
    image: '/DBGlogo.png'
  }
]

// ===== Core Functions =====
/**
 * Opens WhatsApp with predefined message for business inquiry
 * Optimized for Ghana market with fallback support
 */
function openWhatsApp(): void {
  try {
    const message = `Hello KHY! I'm interested in your furniture solutions. Can we discuss my project requirements?`
    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    // Fallback: Copy number to clipboard
    navigator.clipboard?.writeText(businessInfo.whatsappNumber)
    alert(`WhatsApp failed to open. Our number is: ${businessInfo.whatsappNumber}`)
  }
}

/**
 * Navigates to specified page/route
 * With error handling for offline scenarios
 */
function navigateToPage(path: string): void {
  try {
    window.location.href = path
  } catch (error) {
    console.error('Navigation failed:', error)
    alert('Navigation failed. Please check your connection and try again.')
  }
}

/**
 * Smooth scroll to section with fallback
 */
function scrollToSection(sectionId: string): void {
  try {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } catch (error) {
    console.error('Scroll failed:', error)
    // Fallback to simple jump
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView()
    }
  }
}

/**
 * Animated counter for statistics
 * Fixed TypeScript errors with proper type casting
 */
function animateCounters(): void {
  const counters = document.querySelectorAll('.counter')
  const speed = 50

  counters.forEach(counter => {
    const htmlElement = counter as HTMLElement
    const target = parseInt(htmlElement.getAttribute('data-target') || '0')
    const count = parseInt(htmlElement.textContent || '0')

    const increment = target / speed

    if (count < target) {
      htmlElement.textContent = Math.ceil(count + increment).toString()
      setTimeout(() => animateCounters(), 50)
    } else {
      htmlElement.textContent = target.toString()
    }
  })
}

/**
 * Intersection Observer for scroll animations
 * Optimized for mobile performance
 */
function setupScrollAnimations(): void {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    // Skip animations for accessibility
    return
  }

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible')
        
        // Trigger counter animation when about section is visible
        if (entry.target === aboutSection.value) {
          setTimeout(animateCounters, 500)
        }
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  nextTick(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => observer.observe(el))

    // Observe section refs
    if (aboutSection.value) observer.observe(aboutSection.value)
    if (productsSection.value) observer.observe(productsSection.value)
    if (projectsSection.value) observer.observe(projectsSection.value)
  })
}

// ===== Lifecycle Hooks =====
onMounted(() => {
  setupScrollAnimations()
  
  // Track homepage view for analytics (Ghana-specific)
  console.log('KHY Homepage loaded:', {
    page: 'home',
    company: 'KHY Business Limited',
    country: 'Ghana',
    timestamp: new Date().toISOString(),
    timezone: businessInfo.timezone
  })
})
</script>

<style scoped>
/* ===== CUSTOM ANIMATIONS ===== */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expand-width {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* ===== ANIMATION CLASSES ===== */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-expand-width {
  animation: expand-width 1.2s ease-out 1.2s forwards;
  width: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.animate-on-scroll.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== CARD ANIMATIONS WITH RED SHADOWS ===== */
.product-card {
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.product-card:hover {
  transform: translateY(-8px) rotateY(5deg);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(239, 68, 68, 0.1),
    0 0 30px rgba(239, 68, 68, 0.2);
}

.project-card {
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.project-card:hover {
  transform: translateY(-8px) rotateX(2deg);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(239, 68, 68, 0.1),
    0 0 30px rgba(239, 68, 68, 0.15);
}

/* ===== MOBILE-FIRST RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .product-card:hover,
  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 10px 25px -5px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(239, 68, 68, 0.05),
      0 0 15px rgba(239, 68, 68, 0.1);
  }
}

/* ===== ENHANCED HOVER EFFECTS ===== */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* ===== RED SHADOW EFFECTS ===== */
.hover\:shadow-red-500\/25:hover {
  box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.25);
}

.hover\:shadow-red-500\/15:hover {
  box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.15);
}

/* ===== LOADING STATES ===== */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-expand-width,
  .animate-float,
  .animate-on-scroll {
    animation: none;
    transition: none;
    opacity: 1;
    transform: none;
  }
  
  .product-card:hover,
  .project-card:hover {
    transform: none;
  }
}

/* ===== HIGH CONTRAST MODE ===== */
@media (prefers-contrast: high) {
  .product-card,
  .project-card {
    border: 2px solid;
  }
  
  .text-red-600,
  .text-red-500 {
    color: #dc2626;
  }
  
  .bg-red-600 {
    background-color: #dc2626;
  }
}

/* ===== TOUCH-FRIENDLY SIZING (48px minimum) ===== */
button,
.cursor-pointer {
  min-height: 48px;
  min-width: 48px;
}

/* ===== GHANA-SPECIFIC OPTIMIZATIONS ===== */
@media (max-width: 480px) {
  /* Extra small screens - common in Ghana */
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .text-7xl {
    font-size: 3rem;
  }
}
</style>