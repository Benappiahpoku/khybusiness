<!--
  ProductsView.vue
  - Products showcase page for KHY Business website
  - Follows HomeView.vue design patterns and animations
  - Ghana-specific business optimizations with WhatsApp integration
  - Professional product catalog display with categories
  - Mobile-first design optimized for Ghana's network conditions
-->

<template>
  <!-- ===== KHY PRODUCTS PAGE START ===== -->
  <main class="min-h-screen bg-white">

    <!-- ===== HERO SECTION ===== -->
    <section class="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ef4444 2px, transparent 2px); background-size: 48px 48px;"></div>
      </div>

      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center animate-on-scroll">
          <!-- Page title -->
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafted Solutions for
            <span class="text-red-600">Every Space</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            From soft seating to executive chairs, KHY offers a curated range of products to meet the demands of modern workspaces, hospitality settings, and public institutions
          </p>

          <!-- Quick contact buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="openWhatsApp"
              class="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-1 min-h-[48px]"
            >
              <span class="flex items-center justify-center gap-2">
                📱 Get Product Quote
                <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
            </button>
            
            <button 
              @click="scrollToProducts"
              class="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]"
            >
              <span class="flex items-center justify-center gap-2">
                Explore Products
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRODUCT CATEGORIES FILTER ===== -->
    <section class="py-12 px-4 bg-white top-0 z-40 border-b border-gray-200" id="products-section">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-wrap justify-center gap-4 animate-on-scroll">
          <button 
            v-for="category in productCategories" 
            :key="category.id"
            @click="setActiveCategory(category.id)"
            class="px-6 py-3 font-medium transition-all duration-300 min-h-[48px]"
            :class="activeCategory === category.id 
              ? 'bg-red-600 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ category.icon }} {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- ===== PRODUCT SHOWCASE SECTIONS ===== -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl space-y-20">
        
        <!-- Soft Seating Section -->
        <div v-show="activeCategory === 'all' || activeCategory === 'soft-seating'" class="animate-on-scroll">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span class="text-red-600">Soft</span> Seating
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Elegant lounges and comfortable seating to elevate any reception or relaxation area
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="product in softSeatingProducts" 
              :key="product.id"
              class="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              @click="contactForProduct(product)"
            >
              <!-- Product Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  Soft Seating
                </div>
              </div>

              <!-- Product Info -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {{ product.name }}
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed text-sm">
                  {{ product.description }}
                </p>

                <!-- Features -->
                <div class="space-y-2 mb-4">
                  <div v-for="feature in product.features" :key="feature" class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </div>
                </div>

                <!-- CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span class="text-sm text-gray-500">Get Quote</span>
                  <svg class="w-5 h-5 text-red-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chairs Section -->
        <div v-show="activeCategory === 'all' || activeCategory === 'chairs'" class="animate-on-scroll">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Executive & Task
              <span class="text-red-600">Chairs</span>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Ergonomic, stylish, and built to last — task chairs, executive chairs, and visitor seating
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="product in chairProducts" 
              :key="product.id"
              class="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              @click="contactForProduct(product)"
            >
              <!-- Product Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  Chairs
                </div>
              </div>

              <!-- Product Info -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {{ product.name }}
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed text-sm">
                  {{ product.description }}
                </p>

                <!-- Features -->
                <div class="space-y-2 mb-4">
                  <div v-for="feature in product.features" :key="feature" class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </div>
                </div>

                <!-- CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span class="text-sm text-gray-500">Get Quote</span>
                  <svg class="w-5 h-5 text-red-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tables Section -->
        <div v-show="activeCategory === 'all' || activeCategory === 'tables'" class="animate-on-scroll">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meeting & Work
              <span class="text-red-600">Tables</span>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Functional and aesthetic solutions for meetings, dining, workstations, and collaboration
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="product in tableProducts" 
              :key="product.id"
              class="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              @click="contactForProduct(product)"
            >
              <!-- Product Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  Tables
                </div>
              </div>

              <!-- Product Info -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {{ product.name }}
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed text-sm">
                  {{ product.description }}
                </p>

                <!-- Features -->
                <div class="space-y-2 mb-4">
                  <div v-for="feature in product.features" :key="feature" class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </div>
                </div>

                <!-- CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span class="text-sm text-gray-500">Get Quote</span>
                  <svg class="w-5 h-5 text-red-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Storage Section -->
        <div v-show="activeCategory === 'all' || activeCategory === 'storage'" class="animate-on-scroll">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart
              <span class="text-red-600">Storage</span>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart storage units designed for space optimization and office efficiency
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="product in storageProducts" 
              :key="product.id"
              class="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              @click="contactForProduct(product)"
            >
              <!-- Product Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  Storage
                </div>
              </div>

              <!-- Product Info -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {{ product.name }}
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed text-sm">
                  {{ product.description }}
                </p>

                <!-- Features -->
                <div class="space-y-2 mb-4">
                  <div v-for="feature in product.features" :key="feature" class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </div>
                </div>

                <!-- CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span class="text-sm text-gray-500">Get Quote</span>
                  <svg class="w-5 h-5 text-red-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accessories Section -->
        <div v-show="activeCategory === 'all' || activeCategory === 'accessories'" class="animate-on-scroll">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Finishing
              <span class="text-red-600">Accessories</span>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              The finishing touches — lighting, partitions, coat racks, and more to complete your setup
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="product in accessoryProducts" 
              :key="product.id"
              class="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              @click="contactForProduct(product)"
            >
              <!-- Product Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  Accessories
                </div>
              </div>

              <!-- Product Info -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {{ product.name }}
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed text-sm">
                  {{ product.description }}
                </p>

                <!-- Features -->
                <div class="space-y-2 mb-4">
                  <div v-for="feature in product.features" :key="feature" class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </div>
                </div>

                <!-- CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span class="text-sm text-gray-500">Get Quote</span>
                  <svg class="w-5 h-5 text-red-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CALL TO ACTION ===== -->
    <section class="py-20 px-4 bg-gray-600 text-white">
      <div class="container mx-auto max-w-4xl text-center">
        <div class="animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform
            <span class="text-red-500">Your Space?</span>
          </h2>
          
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your furniture requirements and create a customized solution for your project.
          </p>

          <!-- CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="navigateToPage('/contact')"
              class="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-1 min-h-[48px]"
            >
              <span class="flex items-center justify-center gap-2">
                Request Custom Quote
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
            
            <button 
              @click="openWhatsApp"
              class="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]"
            >
              <span class="flex items-center justify-center gap-2">
                📱 WhatsApp Us
                <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
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
  image: string
  features: string[]
}

interface ProductCategory {
  id: string
  name: string
  icon: string
}

// ===== Business Information (Ghana-specific) =====
const businessInfo = {
  whatsappNumber: '+233244682728',
  email: 'design@khyltd.com',
  address: '5 Labone Crescent, Accra, Ghana',
  workingHours: '8:00 AM - 5:00 PM (Mon-Fri)',
  timezone: 'Africa/Accra'
}

// ===== Component State =====
const activeCategory = ref('all')

// ===== Product Categories =====
const productCategories: ProductCategory[] = [
  { id: 'all', name: 'All Products', icon: '🏢' },
  { id: 'soft-seating', name: 'Soft Seating', icon: '🛋️' },
  { id: 'chairs', name: 'Chairs', icon: '🪑' },
  { id: 'tables', name: 'Tables', icon: '🪑' },
  { id: 'storage', name: 'Storage', icon: '🗃️' },
  { id: 'accessories', name: 'Accessories', icon: '💡' }
]

// ===== Product Data =====
const softSeatingProducts: Product[] = [
  {
    id: 'lounge-seating',
    name: 'Executive Lounge Seating',
    description: 'Premium leather lounge furniture perfect for reception areas and executive spaces.',
    image: '/softseating.webp',
    features: ['Premium leather upholstery', 'Steel frame construction', 'Available in multiple colors', 'Easy maintenance']
  },
  {
    id: 'reception-sofa',
    name: 'Reception Area Sofas',
    description: 'Comfortable and stylish sofas designed for high-traffic reception areas.',
    image: '/softseating.webp',
    features: ['Commercial-grade fabric', 'High-density foam', 'Modular design', 'Stain-resistant']
  },
  {
    id: 'waiting-chairs',
    name: 'Waiting Area Chairs',
    description: 'Durable and comfortable seating solutions for waiting areas and lobbies.',
    image: '/softseating.webp',
    features: ['Ergonomic design', 'Easy-clean surfaces', 'Linking capability', 'Various configurations']
  }
]

const chairProducts: Product[] = [
  {
    id: 'executive-chair',
    name: 'Executive Office Chairs',
    description: 'Premium ergonomic chairs designed for executive offices and boardrooms.',
    image: '/executivechairs.webp',
    features: ['Lumbar support system', 'Height adjustable', 'Premium leather finish', 'Swivel base with casters']
  },
  {
    id: 'task-chair',
    name: 'Task & Operator Chairs',
    description: 'Comfortable task chairs built for daily use in modern workspaces.',
    image: '/executivechairs.webp',
    features: ['Breathable mesh back', 'Adjustable armrests', 'Synchronous mechanism', 'Multiple color options']
  },
  {
    id: 'visitor-chair',
    name: 'Visitor & Conference Chairs',
    description: 'Stylish visitor chairs perfect for meeting rooms and conference areas.',
    image: '/executivechairs.webp',
    features: ['Stackable design', 'Chrome frame', 'Upholstered seat & back', 'Linking brackets available']
  }
]

const tableProducts: Product[] = [
  {
    id: 'meeting-table',
    name: 'Conference & Meeting Tables',
    description: 'Professional meeting tables with integrated cable management and modern design.',
    image: '/meetingtables.webp',
    features: ['Built-in cable management', 'Modular sizes available', 'Scratch-resistant surface', 'Modern leg design']
  },
  {
    id: 'workstation-table',
    name: 'Workstation Desks',
    description: 'Efficient workstation solutions for open office environments.',
    image: '/meetingtables.webp',
    features: ['Space-efficient design', 'Storage integration', 'Wire management', 'Multiple configurations']
  },
  {
    id: 'canteen-table',
    name: 'Canteen & Dining Tables',
    description: 'Durable dining tables perfect for staff canteens and break areas.',
    image: '/meetingtables.webp',
    features: ['Easy-clean surface', 'Commercial grade', 'Various seating capacities', 'Folding options available']
  }
]

const storageProducts: Product[] = [
  {
    id: 'filing-cabinet',
    name: 'Filing Cabinets',
    description: 'Secure storage solutions for documents and office supplies.',
    image: '/storage.webp',
    features: ['Locking mechanism', 'Full extension drawers', 'Anti-tip safety', 'Various sizes available']
  },
  {
    id: 'office-cupboard',
    name: 'Office Cupboards',
    description: 'Versatile storage cupboards for office organization and display.',
    image: '/storage.webp',
    features: ['Adjustable shelving', 'Lockable doors', 'Glass door options', 'Custom configurations']
  },
  {
    id: 'mobile-pedestal',
    name: 'Mobile Pedestals',
    description: 'Portable storage units that fit under desks for personal storage.',
    image: '/storage.webp',
    features: ['Mobility casters', 'Personal file storage', 'Stationary drawer', 'Key lock system']
  }
]

const accessoryProducts: Product[] = [
  {
    id: 'coat-rack',
    name: 'Coat Racks & Stands',
    description: 'Stylish coat storage solutions for offices and reception areas.',
    image: '/accessories.webp',
    features: ['Stable base design', 'Multiple hook options', 'Chrome finish', 'Space-saving design']
  },
  {
    id: 'office-lighting',
    name: 'Task Lighting',
    description: 'Professional lighting solutions for workstations and reading areas.',
    image: '/accessories.webp',
    features: ['LED technology', 'Adjustable positioning', 'Energy efficient', 'Eye-care design']
  },
  {
    id: 'office-partition',
    name: 'Office Partitions',
    description: 'Flexible space division solutions for modern open offices.',
    image: '/accessories.webp',
    features: ['Sound absorption', 'Easy installation', 'Various heights', 'Custom graphics available']
  }
]

// ===== Core Functions =====
/**
 * Set active product category filter
 */
function setActiveCategory(categoryId: string): void {
  activeCategory.value = categoryId
  
  // Track category selection for analytics (Ghana-specific)
  console.log('Product category selected:', {
    category: categoryId,
    page: 'products',
    country: 'Ghana',
    timestamp: new Date().toISOString()
  })
}

/**
 * Opens WhatsApp with predefined message for business inquiry
 * Optimized for Ghana market with fallback support
 */
function openWhatsApp(): void {
  try {
    const message = `Hello KHY! I'm interested in your furniture products. Can we discuss my requirements?`
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
 * Contact for specific product via WhatsApp
 */
function contactForProduct(product: Product): void {
  try {
    const message = `Hello KHY! I'm interested in your "${product.name}". Can you provide more details and pricing?`
    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    // Track product interest for analytics
    console.log('Product inquiry:', {
      productId: product.id,
      productName: product.name,
      country: 'Ghana',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Failed to contact for product:', error)
    alert(`Contact failed. Please call us at: ${businessInfo.whatsappNumber}`)
  }
}

/**
 * Navigate to specified page/route
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
 * Smooth scroll to products section
 */
function scrollToProducts(): void {
  try {
    const element = document.getElementById('products-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } catch (error) {
    console.error('Scroll failed:', error)
  }
}

/**
 * Intersection Observer for scroll animations
 * Optimized for mobile performance following KHY guidelines
 */
function setupScrollAnimations(): void {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
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
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  nextTick(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => observer.observe(el))
  })
}

// ===== Lifecycle Hooks =====
onMounted(() => {
  setupScrollAnimations()
  
  // Track products page view for analytics (Ghana-specific)
  console.log('KHY Products Page loaded:', {
    page: 'products',
    company: 'KHY Business Limited',
    country: 'Ghana',
    timestamp: new Date().toISOString(),
    timezone: businessInfo.timezone
  })
})
</script>

<style scoped>
/* ===== ANIMATION CLASSES (Same as HomeView) ===== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.animate-on-scroll.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== ENHANCED HOVER EFFECTS ===== */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    animation: none;
    transition: none;
    opacity: 1;
    transform: none;
  }
  
  .group:hover .group-hover\:scale-110,
  .group:hover .group-hover\:translate-x-1 {
    transform: none;
  }
}

/* ===== TOUCH-FRIENDLY SIZING (48px minimum) ===== */
button {
  min-height: 48px;
  min-width: 48px;
}

/* ===== GHANA-SPECIFIC OPTIMIZATIONS ===== */
@media (max-width: 480px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-6xl {
    font-size: 3rem;
  }
}

/* ===== RED SHADOW EFFECTS ===== */
.hover\:shadow-red-500\/25:hover {
  box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.25);
}

.hover\:shadow-green-500\/25:hover {
  box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.25);
}

/* ===== STICKY CATEGORY FILTER ===== */
.sticky {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
}
</style>