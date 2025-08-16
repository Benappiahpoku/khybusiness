<!--
  ContactView.vue
  - Contact page for KHY Business website
  - Follows HomeView.vue design patterns and animations
  - Ghana-specific business optimizations with WhatsApp integration
  - Professional contact form and business information display
  - Mobile-first design optimized for Ghana's network conditions
-->

<template>
  <!-- ===== KHY CONTACT PAGE START ===== -->
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
            Let's Work
            <span class="text-red-600">Together</span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Whether you're designing a new office, renovating a branch, or furnishing a workspace — we're ready to
            collaborate
          </p>

          <!-- Quick contact buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="openWhatsApp"
              class="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-1 min-h-[48px]">
              <span class="flex items-center justify-center gap-2">
                📱 WhatsApp Us Now
                <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
            </button>

            <!-- <button 
              @click="scrollToForm"
              class="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[48px]"
            >
              <span class="flex items-center justify-center gap-2">
                Send Message
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </button> -->
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CONTACT INFORMATION SECTION ===== -->
    <section class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-3 gap-8">

          <!-- Email Contact -->
          <div
            class="group bg-gray-50 hover:bg-red-50 p-8 transition-all duration-500 animate-on-scroll hover:shadow-xl">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-red-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">📧</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p class="text-gray-600 mb-4">
                Get detailed information about our services and request quotes
              </p>
              <a href="mailto:design@khyltd.com"
                class="text-red-600 hover:text-red-700 font-semibold text-lg transition-colors">
                design@khyltd.com
              </a>
            </div>
          </div>

          <!-- Phone Contact -->
          <div
            class="group bg-gray-50 hover:bg-red-50 p-8 transition-all duration-500 animate-on-scroll hover:shadow-xl"
            style="animation-delay: 0.1s">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-red-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">📞</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p class="text-gray-600 mb-4">
                Speak directly with our team for immediate assistance
              </p>
              <a :href="`tel:${businessInfo.whatsappNumber}`"
                class="text-red-600 hover:text-red-700 font-semibold text-lg transition-colors">
                {{ businessInfo.whatsappNumber }}
              </a>
            </div>
          </div>

          <!-- Visit Us -->
          <div
            class="group bg-gray-50 hover:bg-red-50 p-8 transition-all duration-500 animate-on-scroll hover:shadow-xl"
            style="animation-delay: 0.2s">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-red-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">📍</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <p class="text-gray-600 mb-4">
                Come see our showroom and discuss your project in person
              </p>
              <p class="text-red-600 font-semibold text-lg">
                {{ businessInfo.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MAP & BUSINESS INFO SECTION ===== -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-12">

          <!-- Google Map -->
          <div class="bg-white shadow-lg animate-on-scroll">
            <div class="p-6 border-b border-gray-200">
              <h3 class="text-xl font-bold text-gray-900">Find Us</h3>
              <p class="text-gray-600">Visit our showroom in Labone, Accra</p>
            </div>
            <div class="relative h-64 bg-gray-200">
              <!-- Google Maps Embed for 5 Labone Crescent, Accra -->
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7234419594447!2d-0.1738015!3d5.5892916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x72f7a1a8b7a1a8b7!2sLabone%20Crescent%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1635123456789!5m2!1sen!2sus"
                width="100%" height="100%" style="border:0;" :allowfullscreen="true" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" class="absolute inset-0"></iframe>
            </div>
          </div>

          <!-- Business Information -->
          <div class="space-y-8 animate-on-scroll" style="animation-delay: 0.1s">

            <!-- Business Hours -->
            <div class="bg-white p-6 shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-700">Monday - Friday</span>
                  <span class="text-gray-600">8:00 AM - 5:00 PM</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-700">Saturday</span>
                  <span class="text-gray-600">9:00 AM - 1:00 PM</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-700">Sunday</span>
                  <span class="text-gray-600">Closed</span>
                </div>
                <div class="pt-3 border-t border-gray-200">
                  <p class="text-sm text-gray-500">
                    <span class="font-medium">Note:</span> Appointment recommended for showroom visits
                  </p>
                </div>
              </div>
            </div>

            <!-- Quick Contact Actions -->
            <div class="bg-gray-800 text-white p-6">
              <h3 class="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <div class="space-y-4">
                <button @click="openWhatsApp"
                  class="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 transition-colors duration-300 flex items-center justify-center gap-2 min-h-[48px]">
                  📱 Chat on WhatsApp
                </button>
                <a :href="`tel:${businessInfo.whatsappNumber}`"
                  class="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 transition-colors duration-300 flex items-center justify-center gap-2 min-h-[48px]">
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FAQ SECTION ===== -->
    <section class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span class="text-red-600">Questions</span>
          </h2>
          <p class="text-xl text-gray-600">
            Quick answers to common questions about our services
          </p>
        </div>

        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index"
            class="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 animate-on-scroll"
            :style="{ animationDelay: index * 0.1 + 's' }">
            <button @click="toggleFAQ(index)"
              class="w-full p-6 text-left flex items-center justify-between min-h-[48px]">
              <h3 class="text-lg font-semibold text-gray-900 pr-4">{{ faq.question }}</h3>
              <svg class="w-5 h-5 text-red-600 transform transition-transform duration-300"
                :class="{ 'rotate-180': faq.isOpen }" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <div v-if="faq.isOpen" class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SUCCESS/ERROR MESSAGES ===== -->
    <div v-if="showMessage" class="fixed top-4 right-4 z-50 max-w-sm w-full">
      <div class="p-4 shadow-lg"
        :class="messageType === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'">
        <div class="flex items-center justify-between">
          <span class="font-medium">{{ message }}</span>
          <button @click="hideMessage" class="ml-4 text-white hover:text-gray-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

// ===== Business Information (Ghana-specific) =====
const businessInfo = {
  whatsappNumber: '+233244682728',
  email: 'design@khyltd.com',
  address: '5 Labone Crescent, Accra, Ghana',
  workingHours: '8:00 AM - 5:00 PM (Mon-Fri)',
  timezone: 'Africa/Accra'
}




const showMessage = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

// ===== FAQ Data =====
const faqs = ref([
  {
    question: "What types of furniture projects do you handle?",
    answer: "We specialize in office furniture, custom joinery, seating solutions, complete fit-outs, and consultation services. Our projects range from single items to complete office transformations for banks, NGOs, and corporate clients.",
    isOpen: false
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Simple furniture supply can take 2-4 weeks, while complex fit-outs typically require 6-12 months. We provide detailed timelines during our initial consultation.",
    isOpen: false
  },
  {
    question: "Do you provide furniture installation services?",
    answer: "Yes, we provide complete installation services with our experienced team. All installations come with quality assurance and post-installation support to ensure everything meets your expectations.",
    isOpen: false
  },
  {
    question: "Can you work within specific budgets?",
    answer: "Absolutely! We believe beauty doesn't have to be expensive. We work with various budgets and can provide options that deliver value for money without compromising on quality and aesthetics.",
    isOpen: false
  },
  {
    question: "Do you offer custom furniture design?",
    answer: "Yes, we offer bespoke furniture solutions and custom joinery. Our team includes space planners and 3D visualizers who can bring your unique vision to life with innovative design solutions.",
    isOpen: false
  }
])

// ===== Core Functions =====
/**
 * Opens WhatsApp with predefined message for business inquiry
 * Optimized for Ghana market with fallback support
 */
function openWhatsApp(): void {
  try {
    const message = `Hello KHY! I'm interested in discussing a furniture project. Can we connect?`
    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    showToast('WhatsApp failed to open. Please call us directly.', 'error')
  }
}

/**
 * Smooth scroll to contact form
 */
// function scrollToForm(): void {
//   try {
//     const element = document.getElementById('contact-form')
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   } catch (error) {
//     console.error('Scroll failed:', error)
//   }
// }

/**
 * Handle form submission with Ghana-specific optimizations
 */




/**
 * Toggle FAQ visibility
 */
function toggleFAQ(index: number): void {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

/**
 * Show toast message
 */
function showToast(msg: string, type: 'success' | 'error'): void {
  message.value = msg
  messageType.value = type
  showMessage.value = true
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    hideMessage()
  }, 5000)
}

/**
 * Hide message
 */
function hideMessage(): void {
  showMessage.value = false
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
  
  // Track contact page view for analytics (Ghana-specific)
  console.log('KHY Contact Page loaded:', {
    page: 'contact',
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

/* ===== FORM STYLING ===== */
input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.5);
  border-color: transparent;
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
button,
input,
select,
textarea {
  min-height: 48px;
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

/* ===== LOADING ANIMATION ===== */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* ===== RED SHADOW EFFECTS ===== */
.hover\:shadow-red-500\/25:hover {
  box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.25);
}

.hover\:shadow-green-500\/25:hover {
  box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.25);
}
</style>