<!--
  AboutView.vue
  - About page for KHY Business website
  - Follows HomeView.vue design patterns and animations
  - Ghana-specific business optimizations
  - Professional presentation of company story and team
-->

<template>
  <!-- ===== KHY ABOUT PAGE START ===== -->
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
            About
            <span class="text-red-600">KHY</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in 2019, KHY specializes in premium furniture supply and joinery installations across Ghana
          </p>
        </div>
      </div>
    </section>

    <!-- ===== MANAGING DIRECTOR MESSAGE ===== -->
    <section class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- MD Photo -->
          <div class="relative animate-on-scroll">
            <div class="relative overflow-hidden group">
              <img 
                src="/Hanettapic.jpg" 
                alt="Hanetta Hayford - Managing Director, KHY Business Limited"
                class="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-red-500/10 backdrop-blur-sm animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900/10 backdrop-blur-sm animate-pulse" style="animation-delay: 1s"></div>
          </div>

          <!-- MD Message -->
          <div class="space-y-6 animate-on-scroll" style="animation-delay: 0.2s">
            <div class="mb-8">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome Message
              </h2>
              <div class="w-20 h-1 bg-red-600"></div>
            </div>

            <div class="bg-gray-50 p-6 border-l-4 border-red-600">
              <p class="text-lg text-gray-700 leading-relaxed italic mb-6">
                "It is with great pleasure that I extend a warm welcome to you on behalf of KHY. As the Managing Director, I am honored to lead a team of dedicated professionals as we work together to redefine the artistry of furniture and create spaces that inspire users."
              </p>

              <p class="text-gray-600 leading-relaxed mb-6">
                "At KHY, we believe in the transformative power of well-crafted furniture solutions in enhancing environments, elevating experiences, and reflecting distinct lifestyles. Our passion for furniture extends beyond mere functionality; it is about curating a narrative, a story of timeless elegance and modern utility."
              </p>

              <p class="text-gray-600 leading-relaxed mb-6">
                "Thank you for choosing KHY as your trusted partner. We look forward to beautiful design moments through exciting collaborations and creative endeavors."
              </p>

              <div class="border-t border-gray-200 pt-4">
                <p class="font-semibold text-gray-900">Hanetta Hayford</p>
                <p class="text-sm text-gray-600">Managing Director | KHY Business Limited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== COMPANY INTRODUCTION ===== -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-6 animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Who We
              <span class="text-red-600">Are</span>
            </h2>

            <p class="text-lg text-gray-600 leading-relaxed">
              KHY Business Limited was established on 18th June 2019 and specializes in the supply and installation of furniture and joinery solutions.
            </p>

            <p class="text-gray-600 leading-relaxed">
              Our multi-skilled team is dedicated to understanding each project in an integral way that allows us to meet the unique needs of our clients. Our focus is to bring each design to life through the implementation of innovative furniture and joinery solutions.
            </p>

            <p class="text-gray-600 leading-relaxed">
              We believe beauty does not always have to be expensive and we are inspired by this. We use a wide range of furniture solutions to create beautiful functional spaces that provide value for money without sacrificing quality, aesthetics, and customer satisfaction.
            </p>

            <!-- Key achievements -->
            <div class="grid grid-cols-2 gap-6 py-6">
              <div class="text-center p-4 bg-white hover:bg-red-50 transition-colors cursor-pointer border border-gray-200">
                <div class="text-3xl font-bold text-red-600 mb-2">6+</div>
                <div class="text-sm text-gray-600">Years Experience</div>
              </div>
              <div class="text-center p-4 bg-white hover:bg-red-50 transition-colors cursor-pointer border border-gray-200">
                <div class="text-3xl font-bold text-gray-800 mb-2">87+</div>
                <div class="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          <!-- Image/Visual element -->
          <div class="relative animate-on-scroll" style="animation-delay: 0.2s">
            <div class="bg-gradient-to-br from-red-50 to-gray-100 p-8 h-96 flex items-center justify-center">
              <div class="text-center">
                <div class="text-6xl mb-4">🏢</div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Since 2019</h3>
                <p class="text-gray-600">Transforming spaces across Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== VISION & MISSION ===== -->
    <section class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Vision &
            <span class="text-red-600">Mission</span>
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Vision -->
          <div class="group bg-gray-50 p-8 hover:bg-red-50 transition-all duration-500 animate-on-scroll">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">👁️</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            </div>
            
            <p class="text-lg text-gray-700 leading-relaxed text-center">
              To create beautiful, functional spaces that inspire and enrich everyday living.
            </p>
          </div>

          <!-- Mission -->
          <div class="group bg-gray-50 p-8 hover:bg-red-50 transition-all duration-500 animate-on-scroll" style="animation-delay: 0.2s">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            </div>
            
            <p class="text-lg text-gray-700 leading-relaxed text-center">
              To provide innovative furniture solutions that transform ordinary spaces into extraordinary environments.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== VALUES SECTION ===== -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our
            <span class="text-red-600">Values</span>
          </h2>
          <p class="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Respect -->
          <div class="group text-center bg-white p-6 hover:shadow-2xl transition-all duration-500 animate-on-scroll hover:bg-red-50">
            <div class="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🤝</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Respect</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              We treat each other and everyone with dignity. We strive to make sure every individual feels valued and heard.
            </p>
          </div>

          <!-- Integrity -->
          <div class="group text-center bg-white p-6 hover:shadow-2xl transition-all duration-500 animate-on-scroll hover:bg-red-50" style="animation-delay: 0.1s">
            <div class="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">✨</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              In all our dealings we strive to be transparent and ethically responsible by staying true to our commitments.
            </p>
          </div>

          <!-- Simplicity -->
          <div class="group text-center bg-white p-6 hover:shadow-2xl transition-all duration-500 animate-on-scroll hover:bg-red-50" style="animation-delay: 0.2s">
            <div class="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">💡</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Simplicity</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              We value clarity and efficiency, creating solutions that are easy to understand and use.
            </p>
          </div>

          <!-- Excellence -->
          <div class="group text-center bg-white p-6 hover:shadow-2xl transition-all duration-500 animate-on-scroll hover:bg-red-50" style="animation-delay: 0.3s">
            <div class="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🏆</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              We are committed to consistently delivering exceptional results that exceed expectations every time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TEAM SECTION ===== -->
    <section class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our
            <span class="text-red-600">Team</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strength lies in our people — visionary leaders, talented specialists, and hands-on experts who make each project possible.
          </p>
        </div>

        <!-- Team Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Managing Director -->
          <div class="group text-center bg-gray-50 p-6 hover:bg-red-50 transition-all duration-500 animate-on-scroll hover:shadow-xl">
            <div class="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">👨‍💼</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Hanetta Hayford</h3>
            <p class="text-red-600 font-medium text-sm mb-2">Managing Director</p>
            <p class="text-gray-600 text-xs">Strategic leadership and business development</p>
          </div>

          <!-- Marketing -->
          <div class="group text-center bg-gray-50 p-6 hover:bg-red-50 transition-all duration-500 animate-on-scroll hover:shadow-xl" style="animation-delay: 0.1s">
            <div class="w-20 h-20 bg-gray-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">📢</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Daniel Gallego</h3>
            <p class="text-red-600 font-medium text-sm mb-2">Marketing</p>
            <p class="text-gray-600 text-xs">Brand development and client relations</p>
          </div>

          <!-- Finance -->
          <div class="group text-center bg-gray-50 p-6 hover:bg-red-50 transition-all duration-500 animate-on-scroll hover:shadow-xl" style="animation-delay: 0.2s">
            <div class="w-20 h-20 bg-gray-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">💰</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Neil Tran</h3>
            <p class="text-red-600 font-medium text-sm mb-2">Finance</p>
            <p class="text-gray-600 text-xs">Financial planning and analysis</p>
          </div>

          <!-- Admin -->
          <div class="group text-center bg-gray-50 p-6 hover:bg-red-50 transition-all duration-500 animate-on-scroll hover:shadow-xl" style="animation-delay: 0.3s">
            <div class="w-20 h-20 bg-gray-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">⚙️</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Chidi Eze</h3>
            <p class="text-red-600 font-medium text-sm mb-2">Admin</p>
            <p class="text-gray-600 text-xs">Operations and administrative support</p>
          </div>
        </div>

        <!-- Team Structure Note -->
        <div class="mt-12 text-center animate-on-scroll">
          <div class="bg-gray-50 p-6 inline-block">
            <h4 class="font-semibold text-gray-900 mb-2">Complete Team Structure</h4>
            <p class="text-sm text-gray-600 max-w-2xl">
              Our team includes specialized roles: Space Planner & 3D Visualizer, Lead Installer, 
              Inventory & Warehouse Manager, and Business Development Associates working together 
              to deliver exceptional results.
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
            Ready to Work
            <span class="text-red-500">Together?</span>
          </h2>
          
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's transform your space with innovative furniture solutions that inspire.
          </p>

          <!-- CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="navigateToPage('/contact')"
              class="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-1 min-h-[48px]"
            >
              <span class="flex items-center justify-center gap-2">
                Start Your Project
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
import { onMounted, nextTick } from 'vue'

// ===== Business Information (Ghana-specific) =====
const businessInfo = {
  whatsappNumber: '+233244682728',
  email: 'design@khyltd.com',
  address: '5 Labone Crescent, Accra, Ghana',
  workingHours: '8:00 AM - 5:00 PM (Mon-Fri)',
  timezone: 'Africa/Accra'
}

// ===== Core Functions =====
/**
 * Opens WhatsApp with predefined message for business inquiry
 * Optimized for Ghana market with fallback support
 */
function openWhatsApp(): void {
  try {
    const message = `Hello KHY! I learned about your company story and would like to discuss a furniture project. Can we connect?`
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
 * Intersection Observer for scroll animations
 * Optimized for mobile performance following KHY guidelines
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
  
  // Track about page view for analytics (Ghana-specific)
  console.log('KHY About Page loaded:', {
    page: 'about',
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
</style>