export interface AppFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface AppLink {
  type: 'playstore' | 'appstore' | 'website' | 'github';
  url: string;
  label?: string;
}

export interface AppData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  logo: string;
  icon: string;
  screenshots: string[];
  features: AppFeature[];
  links: AppLink[];
  status: 'active' | 'beta' | 'coming-soon';
  platforms: ('ios' | 'android' | 'web')[];
  primaryColor: string;
  secondaryColor: string;
  gradient: string;
  stats?: {
    users?: string;
    rating?: string;
    downloads?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const apps: AppData[] = [
  {
    slug: 'viona',
    name: 'Viona',
    tagline: 'Book your perfect appointment',
    description: 'A modern booking platform that connects you with the best local service providers. Find, book, and manage appointments effortlessly.',
    longDescription: `Viona transforms how you discover and book services. Whether it's a haircut, spa treatment, or any personal service, Viona brings the entire experience to your fingertips.

Our intelligent recommendation system learns your preferences and suggests the perfect providers for you. Real-time availability, instant booking confirmations, and seamless payment processing make Viona your go-to companion for self-care.`,
    logo: '/apps/viona/logo.png',
    icon: '/apps/viona/icon.png',
    screenshots: [
      '/apps/viona/screenshot-1.png',
      '/apps/viona/screenshot-2.png',
      '/apps/viona/screenshot-3.png',
    ],
    features: [
      {
        title: 'Smart Discovery',
        description: 'AI-powered recommendations based on your preferences and location',
      },
      {
        title: 'Real-time Booking',
        description: 'See live availability and book instantly with confirmation',
      },
      {
        title: 'Secure Payments',
        description: 'Pay securely through the app with multiple payment options',
      },
      {
        title: 'Reviews & Ratings',
        description: 'Make informed decisions with verified customer reviews',
      },
      {
        title: 'Reminders',
        description: 'Never miss an appointment with smart notifications',
      },
      {
        title: 'Favorites',
        description: 'Save your favorite providers for quick rebooking',
      },
    ],
    links: [],
    status: 'active',
    platforms: ['ios', 'android'],
    primaryColor: '#14B8A6',
    secondaryColor: '#0D9488',
    gradient: 'from-teal-500 to-cyan-500',
    stats: {
      users: '10K+',
      rating: '4.8',
    },
    testimonial: {
      quote: "Viona made booking my appointments so much easier. I love how I can see all available slots in real-time!",
      author: "Sarah M.",
      role: "Regular User",
    },
  },
  {
    slug: 'viona-partner',
    name: 'Viona Partner',
    tagline: 'Grow your service business',
    description: 'The complete business management solution for service providers. Manage bookings, track analytics, and grow your customer base.',
    longDescription: `Viona Partner empowers service providers with professional tools to manage and grow their business. From appointment management to customer insights, everything you need is in one place.

Track your performance with detailed analytics, manage your team's schedules, and build lasting relationships with your clients through our integrated CRM features.`,
    logo: '/apps/viona-partner/logo.png',
    icon: '/apps/viona-partner/icon.png',
    screenshots: [
      '/apps/viona-partner/screenshot-1.png',
      '/apps/viona-partner/screenshot-2.png',
      '/apps/viona-partner/screenshot-3.png',
    ],
    features: [
      {
        title: 'Calendar Management',
        description: 'Intuitive scheduling system with drag-and-drop functionality',
      },
      {
        title: 'Business Analytics',
        description: 'Comprehensive insights into revenue, bookings, and growth',
      },
      {
        title: 'Team Management',
        description: 'Manage staff schedules and permissions effortlessly',
      },
      {
        title: 'Customer CRM',
        description: 'Build customer profiles and track visit history',
      },
      {
        title: 'Push Notifications',
        description: 'Instant alerts for new bookings and changes',
      },
      {
        title: 'Photo Gallery',
        description: 'Showcase your work with a professional portfolio',
      },
    ],
    links: [],
    status: 'active',
    platforms: ['ios', 'android'],
    primaryColor: '#14B8A6',
    secondaryColor: '#0D9488',
    gradient: 'from-teal-500 to-emerald-500',
    stats: {
      users: '2K+',
      rating: '4.7',
    },
    testimonial: {
      quote: "Since switching to Viona Partner, our no-shows dropped by 60% and bookings increased significantly.",
      author: "Mike's Barbershop",
      role: "Business Owner",
    },
  },
  {
    slug: 'qr-sessions',
    name: 'QR Sessions',
    tagline: 'Sessions made simple',
    description: 'Create, share, and manage sessions with QR codes. Perfect for events, classes, meetings, and anywhere attendance matters.',
    longDescription: `QR Sessions revolutionizes how you manage attendance and sessions. Generate unique QR codes for any event, share them instantly, and track participation in real-time.

Whether you're running a workshop, managing a classroom, or organizing an event, QR Sessions provides the tools you need to streamline the check-in process and gather valuable attendance data.`,
    logo: '/apps/qr-sessions/logo.png',
    icon: '/apps/qr-sessions/icon.png',
    screenshots: [
      '/apps/qr-sessions/screenshot-1.png',
      '/apps/qr-sessions/screenshot-2.png',
      '/apps/qr-sessions/screenshot-3.png',
    ],
    features: [
      {
        title: 'Instant QR Generation',
        description: 'Create unique, secure QR codes for any session in seconds',
      },
      {
        title: 'Real-time Tracking',
        description: 'Monitor attendance as participants check in live',
      },
      {
        title: 'Session Management',
        description: 'Organize and schedule sessions with ease',
      },
      {
        title: 'Export Data',
        description: 'Download attendance reports in multiple formats',
      },
      {
        title: 'Offline Support',
        description: 'Works even without internet connection',
      },
      {
        title: 'Multi-session Events',
        description: 'Manage complex events with multiple sessions',
      },
    ],
    links: [],
    status: 'active',
    platforms: ['ios', 'android', 'web'],
    primaryColor: '#9333EA',
    secondaryColor: '#7C3AED',
    gradient: 'from-purple-500 to-violet-500',
    stats: {
      users: '5K+',
      rating: '4.9',
    },
    testimonial: {
      quote: "QR Sessions has transformed how we track attendance at our workshops. It's incredibly intuitive!",
      author: "Tech Academy",
      role: "Education Partner",
    },
  },
  {
    slug: 'posture-pal',
    name: 'PosturePal',
    tagline: 'Your friendly posture companion',
    description: 'AI-powered posture monitoring that helps you build healthier habits. Get real-time feedback and improve your posture naturally.',
    longDescription: `Meet PosturePal, your friendly giraffe companion on the journey to better posture! Using advanced ML-powered pose detection, PosturePal monitors your posture in real-time and provides gentle reminders to help you sit and stand better.

Our charming giraffe mascot makes improving your posture a delightful experience. Track your progress, set goals, and watch as your posture improves day by day.`,
    logo: '/apps/posture-pal/logo.png',
    icon: '/apps/posture-pal/icon.png',
    screenshots: [
      '/apps/posture-pal/screenshot-1.png',
      '/apps/posture-pal/screenshot-2.png',
      '/apps/posture-pal/screenshot-3.png',
    ],
    features: [
      {
        title: 'AI Posture Detection',
        description: 'Advanced ML Kit integration for accurate pose analysis',
      },
      {
        title: 'Real-time Feedback',
        description: 'Instant notifications when your posture needs correction',
      },
      {
        title: 'Progress Tracking',
        description: 'Visualize your improvement over time with detailed stats',
      },
      {
        title: 'Friendly Mascot',
        description: 'Your giraffe companion makes posture training fun',
      },
      {
        title: 'Haptic Feedback',
        description: 'Gentle vibrations remind you to straighten up',
      },
      {
        title: 'Privacy First',
        description: 'All processing happens on-device for complete privacy',
      },
    ],
    links: [],
    status: 'beta',
    platforms: ['ios', 'android'],
    primaryColor: '#F6EAD7',
    secondaryColor: '#E5D4C0',
    gradient: 'from-orange-400 to-amber-500',
    stats: {
      users: '1K+',
      rating: '4.6',
    },
    testimonial: {
      quote: "The giraffe mascot is adorable and the posture reminders have really helped my back pain!",
      author: "Jamie L.",
      role: "Remote Worker",
    },
  },
  {
    slug: 'ai-poster',
    name: 'AI Poster',
    tagline: 'Automate your social media',
    description: 'AI-powered social media automation that generates content and publishes across platforms on schedule. Connect, create, and grow your presence effortlessly.',
    longDescription: `AI Poster is your intelligent social media companion that takes the hassle out of content creation and publishing. Connect your Facebook, Instagram, and Pinterest accounts, and let AI do the heavy lifting.

Our advanced AI generates engaging captions and stunning images tailored to your brand. Schedule posts across multiple platforms, track performance analytics, and watch your social presence grow—all from one powerful dashboard.`,
    logo: '/apps/ai-poster/logo.png',
    icon: '/apps/ai-poster/icon.png',
    screenshots: [
      '/apps/ai-poster/screenshot-1.png',
      '/apps/ai-poster/screenshot-2.png',
      '/apps/ai-poster/screenshot-3.png',
    ],
    features: [
      {
        title: 'AI Content Generation',
        description: 'Generate engaging captions and hashtags with advanced AI models',
      },
      {
        title: 'AI Image Creation',
        description: 'Create stunning visuals with DALL-E 3 image generation',
      },
      {
        title: 'Multi-Platform Publishing',
        description: 'Post to Facebook, Instagram, and Pinterest from one place',
      },
      {
        title: 'Smart Scheduling',
        description: 'Schedule posts with timezone-aware automation',
      },
      {
        title: 'Analytics Dashboard',
        description: 'Track engagement metrics and optimize your strategy',
      },
      {
        title: 'Secure OAuth',
        description: 'Bank-grade encryption for all your connected accounts',
      },
    ],
    links: [],
    status: 'beta',
    platforms: ['web'],
    primaryColor: '#8B5CF6',
    secondaryColor: '#7C3AED',
    gradient: 'from-violet-500 to-purple-600',
    stats: {
      users: '500+',
      rating: '4.7',
    },
    testimonial: {
      quote: "AI Poster has transformed how I manage social media for my clients. The AI-generated content is impressive!",
      author: "Digital Agency",
      role: "Marketing Partner",
    },
  },
];

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}
