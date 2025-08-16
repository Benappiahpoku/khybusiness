<!--
  ProjectsView.vue
  - Projects showcase page for KHY Business website
  - Follows HomeView.vue design patterns and animations
  - Ghana-specific business optimizations with WhatsApp integration
  - Professional project portfolio display with detailed case studies
  - Mobile-first design optimized for Ghana's network conditions
-->

<template>
  <!-- ===== KHY PROJECTS PAGE START ===== -->
  <main class="min-h-screen bg-white">

    <!-- ===== HERO SECTION ===== -->
    <section class="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="w-full h-full"
          style="background-image: radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ef4444 2px, transparent 2px); background-size: 48px 48px;">
        </div>
      </div>

      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center animate-on-scroll">
          <!-- Page title -->
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by
            <span class="text-red-600">Industry Leaders</span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We've delivered projects for banks, multinational companies, NGOs, and local enterprises across Ghana
          </p>

          <!-- Quick contact buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="openWhatsApp"
              class="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-1 min-h-[48px]">
              <span class="flex items-center justify-center gap-2">
                📱 Discuss Your Project
                <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
            </button>

            <!-- <button @click="scrollToProjects"
              class="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              <span class="flex items-center justify-center gap-2">
                View Projects
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button> -->
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PROJECT STATS SECTION ===== -->
    <section class="py-16 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
          <div class="text-center p-6 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer">
            <div class="text-4xl font-bold text-red-600 mb-2 counter" data-target="87">0</div>
            <div class="text-sm text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div class="text-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
            <div class="text-4xl font-bold text-gray-800 mb-2 counter" data-target="16">0</div>
            <div class="text-sm text-gray-600 font-medium">Regions Served</div>
          </div>
          <div class="text-center p-6 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer">
            <div class="text-4xl font-bold text-red-600 mb-2 counter" data-target="117">0</div>
            <div class="text-sm text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div class="text-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
            <div class="text-4xl font-bold text-gray-800 mb-2 counter" data-target="15">0</div>
            <div class="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PROJECT CATEGORIES FILTER =====
    <section class="py-12 px-4 bg-gray-50 top-0 z-40 border-b border-gray-200" id="projects-section">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-wrap justify-center gap-4 animate-on-scroll">
          <button v-for="category in projectCategories" :key="category.id" @click="setActiveCategory(category.id)"
            class="px-6 py-3 font-medium transition-all duration-300 min-h-[48px]" :class="activeCategory === category.id
              ? 'bg-red-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'">
            {{ category.icon }} {{ category.name }}
          </button>
        </div>
      </div>
    </section> -->

    <!-- ===== PROJECTS SHOWCASE ===== -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <!-- Featured Projects Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div v-for="(project, index) in filteredProjects" :key="project.id"
            class="group project-card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-on-scroll cursor-pointer"
            :style="{ animationDelay: index * 0.1 + 's' }" @click="contactForProject(project)">
            <!-- Optimized logo container -->
            <div class="relative h-48 bg-white flex items-center justify-center p-8 overflow-hidden">
              <!-- Background pattern for visual interest -->
              <div class="absolute inset-0 opacity-5">
                <div class="w-full h-full"
                  style="background-image: radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ef4444 2px, transparent 2px); background-size: 24px 24px;">
                </div>
              </div>

              <!-- Logo with proper aspect ratio preservation -->
              <div class="relative z-10 max-w-full max-h-full flex items-center justify-center">
                <img :src="project.image" :alt="`${project.client} Logo`"
                  class="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                  style="max-height: 120px; max-width: 200px;" loading="lazy" />
              </div>

              <!-- Subtle hover overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

              <!-- Project status badge -->
              <div class="absolute top-4 right-4 px-3 py-1 text-xs font-medium shadow-lg" :class="project.status === 'Completed'
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 text-white'">
                {{ project.status }}
              </div>
            </div>

            <!-- Project info with enhanced spacing -->
            <div class="p-6">
              <!-- Client name prominently displayed -->
              <div class="flex items-center gap-3 mb-4">
                <div class="flex items-center gap-2 text-gray-800">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z"
                      clip-rule="evenodd" />
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
                {{ project.description }}
              </p>

              <!-- Project details grid -->
              <div class="space-y-3 mb-4">
                <!-- Location -->
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">{{ project.location }}</span>
                </div>

                <!-- Category -->
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">{{ project.category }}</span>
                </div>

                <!-- Role Type -->
                <div class="flex items-center gap-2 text-gray-500">
                  <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">{{ project.role }}</span>
                </div>
              </div>

              <!-- Call to action -->
              <div class="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                <span class="text-xs text-gray-400 uppercase tracking-wide font-medium">Project Details</span>
                <div class="flex items-center gap-2 text-red-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button (if needed) -->
        <!-- <div v-if="hasMoreProjects" class="text-center animate-on-scroll">
          <button @click="loadMoreProjects"
            class="group bg-gray-900 hover:bg-red-600 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
            <span class="flex items-center justify-center gap-2">
              Load More Projects
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor"
                viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>
        </div> -->
      </div>
    </section>

    <!-- ===== CAPABILITIES SECTION ===== -->
    <section class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our
            <span class="text-red-600">Capabilities</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we handle every aspect of your furniture project
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Main Contractor -->
          <div
            class="group text-center bg-gray-50 p-6 hover:bg-red-50 transition-all duration-500 animate-on-scroll hover:shadow-xl">
            <div
              class="w-16 h-16 bg-red-600 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🏗️</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Main Contractor</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Complete project management from design to installation and post-project support.
            </p>
          </div>

          <!-- Subcontractor -->
          <div
            class="group text-center bg-gray-50 p-6 hover:bg-red-50 transition-all duration-500 animate-on-scroll hover:shadow-xl"
            style="animation-delay: 0.1s">
            <div
              class="w-16 h-16 bg-red-600 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🤝</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Subcontractor</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Specialized furniture supply and installation as part of larger construction projects.
            </p>
          </div>

          <!-- Custom Joinery -->
          <div
            class="group text-center bg-gray-50 p-6 hover:bg-red-50 transition-all duration-500 animate-on-scroll hover:shadow-xl"
            style="animation-delay: 0.2s">
            <div
              class="w-16 h-16 bg-red-600 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🔨</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Custom Joinery</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Bespoke storage solutions and custom-built furniture tailored to your space.
            </p>
          </div>

          <!-- Consultation -->
          <div
            class="group text-center bg-gray-50 p-6 hover:bg-red-50 transition-all duration-500 animate-on-scroll hover:shadow-xl"
            style="animation-delay: 0.3s">
            <div
              class="w-16 h-16 bg-red-600 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">💡</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Space planning, 3D visualization, and expert advice for optimal furniture solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CALL TO ACTION ===== -->
    <section class="py-20 px-4 bg-gray-600 text-white">
      <div class="container mx-auto max-w-4xl text-center">
        <div class="animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start
            <span class="text-red-500">Your Project?</span>
          </h2>

          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the industry leaders who trust KHY for their furniture and joinery solutions.
          </p>

          <!-- CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="navigateToPage('/contact')"
              class="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-1 min-h-[48px]">
              <span class="flex items-center justify-center gap-2">
                Start Your Project
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
                📱 WhatsApp Us
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
import { ref, computed, onMounted, nextTick } from 'vue'

// ===== Types & Interfaces =====
interface Project {
  id: string
  title: string
  client: string
  description: string
  role: string
  location: string
  year: number
  status: string
  category: string
  image: string
}

// interface ProjectCategory {
//   id: string
//   name: string
//   icon: string
// }

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
const displayLimit = ref(8)

// ===== Project Categories =====
// const projectCategories: ProjectCategory[] = [
//   { id: 'all', name: 'All Projects', icon: '🏢' },
//   { id: 'banking', name: 'Banking', icon: '🏦' },
//   { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
//   { id: 'technology', name: 'Technology', icon: '💻' },
//   { id: 'ngo', name: 'NGO/Government', icon: '🏛️' },
//   { id: 'corporate', name: 'Corporate', icon: '🏢' }
// ]

// ===== Complete Projects Data =====
const allProjects: Project[] = [
  {
    id: 'glico-healthcare',
    title: 'Glico Healthcare Ltd HQ',
    client: 'Glico Healthcare Limited',
    description: 'Main contractor for the supply of workstations, task chairs, meeting room tables and chairs, canteen chairs and tables, outdoor furniture, soft seating, waiting area chairs and training room chairs.',
    role: 'Main Contractor',
    location: 'Accra, Greater Accra',
    year: 2023,
    status: 'Completed',
    category: 'healthcare',
    image: '/glicologo.png'
  },
  {
    id: 'stanbic-bank',
    title: 'Stanbic Bank Labone & East Legon',
    client: 'Stanbic Bank Ghana',
    description: 'Subcontractor for the supply of workstations, task chairs, meeting room tables and chairs, canteen chairs and tables, outdoor furniture, soft seating and waiting area chairs.',
    role: 'Subcontractor',
    location: 'Labone & East Legon, Accra',
    year: 2023,
    status: 'Completed',
    category: 'banking',
    image: '/stanbiclogo.webp'
  },
  {
    id: 'norfund-ghana',
    title: 'Norfund Ghana Office Furniture & Joinery',
    client: 'Norfund Ghana',
    description: 'Main contractor for the supply and installation of furniture and bespoke office storage units.',
    role: 'Main Contractor',
    location: 'Airport Residential Area, Accra',
    year: 2022,
    status: 'Completed',
    category: 'ngo',
    image: '/norfundlogo.png'
  },
  {
    id: 'development-bank',
    title: 'Development Bank Ghana HQ',
    client: 'Development Bank Ghana',
    description: 'Main contractor for the supply of workstations, task chairs, meeting room tables and chairs, canteen chairs and tables, soft seating and waiting area chairs.',
    role: 'Main Contractor',
    location: 'Ridge, Accra',
    year: 2023,
    status: 'Ongoing',
    category: 'banking',
    image: '/DBGlogo.png'
  },
  {
    id: 'ericsson-ghana',
    title: 'Ericsson Ghana Office Furniture',
    client: 'Ericsson Ghana',
    description: 'Subcontractor responsible for the supply and installation of workstations, task chairs and soft seating.',
    role: 'Subcontractor',
    location: 'Accra, Greater Accra',
    year: 2022,
    status: 'Completed',
    category: 'technology',
    image: '/ericssonlogo.png'
  },
  {
    id: 'latter-day-saints',
    title: 'Latter Day Saints Office',
    client: 'Latter Day Saints',
    description: 'Subcontractor responsible for the supply and installation of customised workstations, task chairs, collaboration area furniture and storage units.',
    role: 'Subcontractor',
    location: 'Accra, Greater Accra',
    year: 2022,
    status: 'Completed',
    category: 'ngo',
    image: '/latterlogo.webp'
  },
  {
    id: 'google-ghana',
    title: 'Google Ghana Office Phase 2',
    client: 'Google Ghana',
    description: 'Subcontractor for the supply of multipurpose chairs.',
    role: 'Subcontractor',
    location: 'Accra, Greater Accra',
    year: 2021,
    status: 'Completed',
    category: 'technology',
    image: '/googlelogo.webp'
  },
  {
    id: 'gra-training',
    title: 'GRA IT Training Centre',
    client: 'Ghana Revenue Authority',
    description: 'Main contractor for the supply and installation of work stations, task chairs, training room tables and chairs, soft seating and collaboration area furniture solutions.',
    role: 'Main Contractor',
    location: 'Accra, Greater Accra',
    year: 2023,
    status: 'Completed',
    category: 'ngo',
    image: '/gralogo.webp'
  },
  {
    id: 'fnb-community',
    title: 'FNB Community 18 Branch',
    client: 'First National Bank Ghana',
    description: 'Subcontractor responsible for the supply and installation of workstations, task chairs, waiting area chairs and soft seating.',
    role: 'Subcontractor',
    location: 'Accra, Greater Accra',
    year: 2022,
    status: 'Completed',
    category: 'banking',
    image: '/fnblogo.png'
  },
  {
    id: 'nestle-ghana',
    title: 'Nestle LMI Holding & Nestle Ghana Ltd',
    client: 'Nestle Ghana',
    description: 'Subcontractor responsible for the supply and installation of task chairs and visitors chairs.',
    role: 'Subcontractor',
    location: 'Tema, Greater Accra',
    year: 2021,
    status: 'Completed',
    category: 'corporate',
    image: '/nestlelogo.png'
  }
]

// ===== Computed Properties =====
const filteredProjects = computed(() => {
  const projects = activeCategory.value === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory.value)

  return projects.slice(0, displayLimit.value)
})

// const hasMoreProjects = computed(() => {
//   const totalFilteredProjects = activeCategory.value === 'all'
//     ? allProjects.length
//     : allProjects.filter(project => project.category === activeCategory.value).length

//   return displayLimit.value < totalFilteredProjects
// })

// ===== Core Functions =====
/**
 * Set active project category filter
 */
// function setActiveCategory(categoryId: string): void {
//   activeCategory.value = categoryId
//   displayLimit.value = 8 // Reset display limit when changing categories

//   // Track category selection for analytics (Ghana-specific)
//   console.log('Project category selected:', {
//     category: categoryId,
//     page: 'projects',
//     country: 'Ghana',
//     timestamp: new Date().toISOString()
//   })
// }

/**
 * Load more projects
 */
// function loadMoreProjects(): void {
//   displayLimit.value += 6
// }

/**
 * Opens WhatsApp with predefined message for business inquiry
 * Optimized for Ghana market with fallback support
 */
function openWhatsApp(): void {
  try {
    const message = `Hello KHY! I'm interested in discussing a furniture project similar to your industry work. Can we connect?`
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
 * Contact for specific project via WhatsApp
 */
function contactForProject(project: Project): void {
  try {
    const message = `Hello KHY! I saw your work with ${project.client} and I'm interested in a similar project. Can you provide more details about your services?`
    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    // Track project interest for analytics
    console.log('Project inquiry:', {
      projectId: project.id,
      projectClient: project.client,
      country: 'Ghana',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Failed to contact for project:', error)
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
 * Smooth scroll to projects section
 */
// function scrollToProjects(): void {
//   try {
//     const element = document.getElementById('projects-section')
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   } catch (error) {
//     console.error('Scroll failed:', error)
//   }
// }

/**
 * Animated counter for statistics
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

        // Trigger counter animation when stats section is visible
        if (entry.target.querySelector('.counter')) {
          setTimeout(animateCounters, 500)
        }
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

  // Track projects page view for analytics (Ghana-specific)
  console.log('KHY Projects Page loaded:', {
    page: 'projects',
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

/* ===== PROJECT CARD ANIMATIONS ===== */
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

  .project-card:hover {
    transform: translateY(-4px);
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

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 10px 25px -5px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(239, 68, 68, 0.05),
      0 0 15px rgba(239, 68, 68, 0.1);
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
  background-color: rgba(249, 250, 251, 0.9);
}

/* ===== COUNTER ANIMATION ===== */
.counter {
  font-variant-numeric: tabular-nums;
}

/* ===== LOADING STATES ===== */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}
</style>