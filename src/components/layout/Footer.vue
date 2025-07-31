<!--
  Footer.vue
  - Modern footer for KHY Business website
  - Gray-600 background with white text following Navigation design system
  - Mobile-first design optimized for Ghana's network conditions
  - Features KHY branding with consistent styling
  - Follows Navigation.vue design patterns and animations
  - Includes business contact information and WhatsApp integration
-->

<template>
  <!-- ===== KHY BUSINESS FOOTER ===== -->
  <footer class="bg-gray-600 border-t border-gray-500 py-12">
    <div class="container mx-auto px-4">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <img 
              src="/Khylogo.webp" 
              alt="KHY Business Limited Logo"
              class="w-16 h-16 filter drop-shadow-lg transition-transform duration-300 hover:scale-110"
            />
            <div>
              <h3 class="text-xl font-bold text-white">KHY</h3>
              <p class="text-sm text-gray-300">Furniture Beyond Imagination</p>
            </div>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed mb-4">
            Creating beautiful, functional spaces through innovative furniture and joinery solutions across Ghana since 2019.
          </p>
          
          <!-- WhatsApp CTA -->
          <a 
            :href="whatsappLink" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-1 min-h-[48px]"
          >
            <!-- <span class="text-lg">📱</span> -->
            <span>WhatsApp Us</span>
            <svg class="w-4 h-4 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-1">
          <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <nav class="flex flex-col gap-3">
            <a 
              href="/" 
              class="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium relative group inline-block"
            >
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/about" 
              class="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium relative group inline-block"
            >
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/products" 
              class="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium relative group inline-block"
            >
              Products
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/projects" 
              class="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium relative group inline-block"
            >
              Projects
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/contact" 
              class="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium relative group inline-block"
            >
              Contact
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        <!-- Services -->
        <div class="lg:col-span-1">
          <h4 class="text-lg font-semibold text-white mb-4">Our Services</h4>
          <div class="flex flex-col gap-3">
            <span class="text-gray-300 text-sm flex items-center gap-2">
              <span class="text-red-500">🪑</span>
              Soft Seating Solutions
            </span>
            <span class="text-gray-300 text-sm flex items-center gap-2">
              <span class="text-red-500">💺</span>
              Executive Chairs
            </span>
            <span class="text-gray-300 text-sm flex items-center gap-2">
              <span class="text-red-500">🏢</span>
              Office Furniture
            </span>
            <span class="text-gray-300 text-sm flex items-center gap-2">
              <span class="text-red-500">🔨</span>
              Custom Joinery
            </span>
            <span class="text-gray-300 text-sm flex items-center gap-2">
              <span class="text-red-500">📋</span>
              Project Management
            </span>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="lg:col-span-1">
          <h4 class="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <div class="space-y-3">
            <!-- Email -->
            <div class="flex items-start gap-3">
              <span class="text-red-500 text-lg">📧</span>
              <div>
                <p class="text-sm font-medium text-white">Email</p>
                <a 
                  href="mailto:design@khyltd.com" 
                  class="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  design@khyltd.com
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-3">
              <span class="text-red-500 text-lg">📞</span>
              <div>
                <p class="text-sm font-medium text-white">Phone</p>
                <a 
                  :href="`tel:${businessInfo.whatsappNumber}`" 
                  class="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {{ businessInfo.whatsappNumber }}
                </a>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start gap-3">
              <span class="text-red-500 text-lg">📍</span>
              <div>
                <p class="text-sm font-medium text-white">Address</p>
                <p class="text-gray-300 text-sm">
                  {{ businessInfo.address }}
                </p>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="flex items-start gap-3">
              <span class="text-red-500 text-lg">🕒</span>
              <div>
                <p class="text-sm font-medium text-white">Hours</p>
                <p class="text-gray-300 text-sm">
                  Mon - Fri: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-gray-500 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <div class="text-center md:text-left">
            <p class="text-sm text-gray-300">
              © 2025 
              <span class="font-semibold text-white">KHY Business Limited</span>. 
              All rights reserved.
            </p>
            <p class="text-xs text-gray-400 mt-1">
              Powered by 
              <a 
                href="https://www.teklumin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-red-400 hover:text-red-300 transition-colors"
              >
                TekLumin
              </a>
            </p>
          </div>

          <!-- Social Links / Additional CTAs -->
          <div class="flex items-center gap-4">
            <a 
              href="/privacy" 
              class="text-gray-400 hover:text-gray-300 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <span class="text-gray-500">|</span>
            <a 
              href="/terms" 
              class="text-gray-400 hover:text-gray-300 transition-colors text-sm"
            >
              Terms of Service
            </a>
            <span class="text-gray-500">|</span>
            <button 
              @click="scrollToTop"
              class="group flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors text-sm"
            >
              <span>Back to Top</span>
              <svg class="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// ===== Imports =====
import { computed } from 'vue'

// ===== Business Configuration (Ghana-specific) =====
const businessInfo = {
  whatsappNumber: '+233244682728',
  email: 'design@khyltd.com',
  address: '5 Labone Crescent, Accra, Ghana',
  workingHours: '8:00 AM - 5:00 PM (Mon-Fri)',
  timezone: 'Africa/Accra'
}

// ===== Computed Properties =====
const whatsappLink = computed(() => {
  const message = `Hello KHY! I'm interested in your furniture solutions. Can we discuss my project requirements?`
  return `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
})

// ===== Helper Functions =====
/**
 * Smooth scroll to top functionality
 */
function scrollToTop(): void {
  try {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } catch (error) {
    // Fallback for older browsers
    window.scrollTo(0, 0)
  }
}

// ===== Performance & Accessibility Notes =====
/**
 * Footer optimizations following KHY design principles:
 * - Gray-600 background with white text matching Navigation
 * - Touch-optimized button sizes (48px minimum)
 * - Smooth animations consistent with Navigation patterns
 * - Red accent color for hover states matching brand
 * - Mobile-first responsive design
 * - Ghana-specific business information integration
 * - WhatsApp integration for immediate customer contact
 * 
 * Business Features:
 * - Complete contact information
 * - Service listings for SEO
 * - Quick navigation links
 * - Professional brand presentation
 * - Legal page links (privacy, terms)
 * - Scroll to top functionality for mobile users
 */
</script>

<style scoped>
/* ===== ENHANCED HOVER EFFECTS ===== */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-0.25rem);
}

/* ===== RED ACCENT ANIMATIONS ===== */
.group:hover span.absolute {
  width: 100%;
}

/* ===== MOBILE TOUCH OPTIMIZATIONS ===== */
@media (max-width: 768px) {
  /* Ensure touch targets are appropriately sized */
  .min-h-\[48px\] {
    min-height: 48px;
  }
  
  /* Stack footer sections on mobile */
  .grid {
    gap: 2rem;
  }
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-colors,
  .transition-transform {
    transition: none;
  }
  
  .group:hover .group-hover\:scale-110,
  .group:hover .group-hover\:-translate-y-1 {
    transform: none;
  }
}

/* ===== HIGH CONTRAST MODE ===== */
@media (prefers-contrast: high) {
  .bg-gray-600 {
    background-color: #374151;
  }
  
  .text-gray-300 {
    color: #ffffff;
  }
  
  .border-gray-500 {
    border-color: #ffffff;
  }
}

/* ===== FOCUS STATES FOR ACCESSIBILITY ===== */
a:focus,
button:focus {
  outline: 2px solid #ef4444;
  outline-offset: 2px;
}

/* ===== GHANA-SPECIFIC OPTIMIZATIONS ===== */
@media (max-width: 480px) {
  /* Extra small screens common in Ghana */
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  /* Larger touch targets for mobile */
  .min-h-\[48px\] {
    min-height: 52px;
  }
  
  /* Stack footer content more compactly */
  .grid-cols-1 {
    gap: 1.5rem;
  }
}

/* ===== PROFESSIONAL SHADOWS ===== */
.hover\:shadow-green-500\/25:hover {
  box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.25);
}

/* ===== SCROLL TO TOP ANIMATION ===== */
.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-0.25rem);
}
</style>

<!--
  ===== DESIGN NOTES =====
  
  COLOR SCHEME:
  - Background: Gray-600 matching Navigation design request
  - Text: White/Gray-300 for high contrast and readability
  - Accents: Red-500 for brand consistency with Navigation
  - Interactive: Green for WhatsApp, consistent with Navigation
  
  LAYOUT STRUCTURE:
  - 4-column grid on desktop (Brand, Links, Services, Contact)
  - Single column stack on mobile for readability
  - Bottom section with copyright and legal links
  - Scroll to top functionality for mobile UX
  
  BRAND CONSISTENCY:
  - Follows Navigation.vue design patterns exactly
  - Red accent color throughout hover states
  - Consistent animation timing and easing
  - Professional typography and spacing
  - Same WhatsApp integration as Navigation
  
  KHY BUSINESS INTEGRATION:
  - Complete contact information display
  - Service listings for SEO benefits
  - Professional business presentation
  - Ghana-specific business details
  - Legal compliance with privacy/terms links
  
  MOBILE OPTIMIZATION:
  - Touch-friendly 48px+ button sizes
  - Responsive grid layout
  - Easy thumb navigation
  - Optimized for Ghana's mobile-first market
-->