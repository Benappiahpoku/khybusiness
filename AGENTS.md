# AGENTS.md - Khy Business Website Development Guide

## Dev Environment Setup

### Initial Setup

```bash
# Clone and setup the project
git clone [repository-url]
cd khybusiness

# Run the setup script to configure project name
node setup.js

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Setup Script

The `setup.js` script allows you to customize the project name across configuration files:

- Updates `package.json` with the new project name
- Updates `src/config.ts` with the project configuration
- Prompts for user input to set the project name
- Handles both package name and internal configuration updates

Run it during initial setup to personalize your project instance.

### Development Scripts

- `npm run dev` - Start development server with concurrent Vite and TypeScript checking
- `npm run dev:vite` - Start Vite development server only
- `npm run dev:typecheck` - Run TypeScript checking in watch mode
- `npm run build` - Generate icons and build for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run unit tests with Vitest
- `npm run coverage` - Generate test coverage report
- `npm run dev:slow` - Simulate slow network conditions for testing
- `npm run lighthouse` - Run Lighthouse performance audit
- `npm run analyze` - Analyze bundle size and dependencies
- `npm run size-check` - Check bundle size after build
- `npm run network-test` - Run network performance tests
- `npm run generate-icons` - Generate PWA icons from source images

### Key Development Tools

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety
- **Tailwind CSS** for styling (mobile-first approach)
- **Vite** for fast development and building
- **Vitest** for unit testing
- **Vue Router** for client-side routing
- **Pinia** for state management
- **PWA** capabilities with service workers
- **Workbox** for advanced caching strategies
- **Offline-first** architecture with background sync

## PWA and Offline Features

### Progressive Web App Setup

The project includes comprehensive PWA features optimized for Ghana's network conditions:

- **Service Worker**: Automatic updates and offline caching
- **Web App Manifest**: Native app-like experience on mobile devices
- **Background Sync**: Queue operations when offline, sync when online
- **Cache Strategies**: Network-first for API calls, cache-first for static assets

### Offline Capabilities

- **Offline Indicator**: Visual feedback when network is unavailable
- **Offline Storage**: Critical data persistence using IndexedDB
- **Network Monitoring**: Real-time connection quality detection
- **Graceful Degradation**: Core functionality works without internet

### Workbox Configuration

Advanced caching strategies implemented in `vite.config.ts`:

```typescript
workbox: {
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\./i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        networkTimeoutSeconds: 5,
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60
        },
        backgroundSync: {
          name: 'apiQueue'
        }
      }
    }
  ]
}
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run coverage

# Run specific test file
npm run test -- src/components/base/AppButton.test.ts

# Run tests in watch mode
npm run test -- --watch
```

### Testing Guidelines

- Write tests for all new components and composables
- Focus on user interactions and component behavior
- Test mobile responsiveness and offline functionality
- Use Vue Testing Library for component testing
- Mock network requests and external dependencies
- Test error states and loading conditions
- Ensure tests pass on both desktop and mobile viewports

### Performance Testing

```bash
# Test with slow network simulation
npm run dev:slow

# Run Lighthouse audit
npm run lighthouse

# Analyze bundle size
npm run analyze
```

## PR Instructions

### Branch Naming

- `feature/[description]` - New features
- `fix/[description]` - Bug fixes
- `docs/[description]` - Documentation updates
- `refactor/[description]` - Code refactoring

### Commit Message Format

```bash
[Khy] <type>: <description>

Examples:
feat: add mobile-first navigation component
fix: resolve offline indicator positioning
docs: update component usage examples
```

### Pre-commit Checklist

- [ ] Run `npm run build` to ensure production build passes
- [ ] Run `npm run test` to ensure all tests pass
- [ ] Test on mobile devices and slow networks
- [ ] Verify PWA functionality and offline capabilities
- [ ] Check for TypeScript errors
- [ ] Validate responsive design across breakpoints
- [ ] Test contact forms and WhatsApp integration

### Code Review Requirements

- Mobile-first design principles followed
- Ghana-specific optimizations included
- Performance considerations addressed
- Accessibility standards met
- SEO best practices implemented
- Component reusability maintained
- WhatsApp integration properly implemented
- Offline functionality tested

## Project-Specific Guidelines

### Mobile-First Development

- Design for mobile devices first (320px minimum width)
- Use responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Test on actual mobile devices, not just browser dev tools
- Consider touch interactions and gesture support
- Optimize for Ghana's mobile network conditions

### Component Development

- Use Vue 3 Composition API with `<script setup>`
- Follow the established component structure (see above)
- Implement proper TypeScript interfaces
- Add loading states and error handling
- Include offline fallbacks where appropriate
- Focus on mobile-first design with 48px minimum touch targets
- Prioritize WhatsApp integration for contact features
- Use simplified approaches for Ghana's market (direct contact vs complex forms)
- Include network status monitoring for offline-aware functionality

### Ghana-Specific Optimizations

- Optimize for intermittent connectivity
- Include offline indicators and fallbacks
- Support mobile money payment flows
- Consider local hosting and CDN options
- Use appropriate currency formatting (GHS)
- Include local contact methods (WhatsApp, local phone numbers)

### SEO and Performance

- Implement proper meta tags and Open Graph data
- Optimize images for mobile networks
- Use lazy loading for images and components
- Minimize bundle size and loading times
- Include structured data for local business
- Generate and maintain sitemap.xml and robots.txt

### Business Logic

- Business phone: `+233 24 412 3456`
- WhatsApp integration for contact forms and quote requests
- Email: Contact via WhatsApp or phone (primary communication channels)
- Support Ghanaian construction businesses and local market
- Focus on concrete products and construction materials
- Company: Naachiaa Estates (30+ years experience)
- Service areas: 16 regions across Ghana

### File Organization

- Keep components modular and reusable
- Use composables for shared logic (`src/composables/`)
- Store business configuration in `src/config.ts`
- Maintain consistent naming conventions
- Document component props and usage

### Deployment

- Deploy to Vercel for optimal performance
- Configure proper build settings with `vercel.json`
- Set up custom domain handling
- Enable PWA service worker
- Configure proper caching strategies
- Monitor Core Web Vitals

### Build Process

The project uses Vite with optimized build configuration for Ghana's network conditions:

- **Icon Generation**: Automatic PWA icon generation from source images
- **Bundle Optimization**: Code splitting with manual chunks for Vue core and utilities
- **Asset Optimization**: Optimized target browsers (Chrome 80+, Safari 14+)
- **Performance**: Terser minification with console/debugger removal
- **Caching**: Vite's built-in caching for faster rebuilds
- **Source Maps**: Enabled for production debugging

Build command automatically runs `generate-icons` before building for production.

## Common Issues & Solutions

### Network-Related Issues

- Test with `npm run dev:slow` to simulate poor connections
- Implement proper loading states
- Use offline storage for critical data
- Handle network errors gracefully

### Mobile Testing

- Use browser dev tools device emulation
- Test on actual mobile devices when possible
- Verify touch interactions work correctly
- Check font sizes and button sizes for mobile

### Build Issues

- Clear node_modules and reinstall if build fails
- Check TypeScript errors with `npm run dev:typecheck`
- Verify all imports are correct
- Ensure Tailwind classes are properly configured

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [PRD Document](./prd/prd.md) - Project requirements and specifications
