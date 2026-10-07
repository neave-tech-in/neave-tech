import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Space_Mono, Bricolage_Grotesque, DM_Sans, Poppins } from 'next/font/google';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import WhatsAppButton from '@/components/WhatsAppButton';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// Clash Display stand-in — swap with self-hosted Fontshare files later.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

// Satoshi stand-in — swap with self-hosted Fontshare files later.
const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.neave.tech'),
  title: {
    default: 'NeaveTech — Enterprise & Government IT Solutions',
    template: '%s · NeaveTech',
  },
  description:
    'NeaveTech builds scalable IT systems for government and enterprise. Custom ERP, IoT, blockchain, cloud, and digital infrastructure engineered in Nagpur, India.',
  keywords: [
    'NeaveTech',
    'Government IT',
    'Enterprise ERP',
    'IoT Solutions',
    'Nagpur software company',
    'Custom ERP',
    'Blockchain',
    'Digital transformation',
  ],
  authors: [{ name: 'NeaveTech' }],
  openGraph: {
    title: 'NeaveTech — Enterprise & Government IT Solutions',
    description:
      'Scalable IT systems for government & enterprise. ERP, IoT, Cloud, AI, Blockchain.',
    url: 'https://www.neave.tech',
    siteName: 'NeaveTech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeaveTech — Enterprise & Government IT Solutions',
    description:
      'Scalable IT systems for government & enterprise. ERP, IoT, Cloud, AI, Blockchain.',
  },
  robots: { index: true, follow: true },
  /*alternates: {
    canonical: 'https://www.neave.tech',
  }, */
  verification: {
    google: 'Gro9HqXImrkjUVAwBA3uHYuwfrPxV74RxaZeD1mhaW4',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F9F7' },
    { media: '(prefers-color-scheme: dark)', color: '#090C0A' },
  ],
};

// Runs before paint to apply the saved/system theme and avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.neave.tech/#organization",
        "name": "NeaveTech",
        "alternateName": ["Neave Tech", "Neave Corporation Pvt. Ltd."],
        "url": "https://www.neave.tech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.neave.tech/logo.png"
        },
        "email": "mail@neave.tech",
        "telephone": "+91-9284755883",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nagpur",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "description": "NeaveTech builds scalable IT systems for government and enterprise. Custom ERP, IoT, blockchain, cloud, and digital infrastructure engineered in Nagpur, India.",
        "foundingDate": "2023",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "knowsAbout": [
          "Custom ERP Development",
          "IoT Solutions",
          "Government IT Systems",
          "Cloud Solutions",
          "Blockchain",
          "AI & Automation",
          "Digital Transformation"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.neave.tech/#localbusiness",
        "name": "NeaveTech",
        "image": "https://www.neave.tech/logo.png",
        "url": "https://www.neave.tech",
        "telephone": "+91-9284755883",
        "email": "mail@neave.tech",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nagpur",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:30",
            "closes": "18:30"
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "ISO Certification"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "MSME Registration"
          },
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${spaceMono.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="google-site-verification"
          content="Gro9HqXImrkjUVAwBA3uHYuwfrPxV74RxaZeD1mhaW4"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5352NS8R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5352NS8R');
          `}
        </Script>

        {/* Apollo Website Tracker */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){
              var n=Math.random().toString(36).substring(7),
              o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
              o.async=!0,
              o.defer=!0,
              o.onload=function(){
                window.trackingFunctions.onLoad({appId:"6a7ad137974f74000c611cb7"})
              },
              document.head.appendChild(o)
            }
            initApollo();
          `}
        </Script>

        {/* Apollo Form Enrichment */}
        <Script id="apollo-form-enrichment" strategy="afterInteractive">
          {`
            (function initApolloInbound(){
              var TIMEOUT_MS=15000;
              var timeoutId;
              var style=document.createElement('style');
              style.id='apollo-form-prehide-css';
              style.textContent='form:has(input[type="email" i]),form:has(input[name="email" i]),.hs-form-iframe{position:relative!important}form:has(input[type="email" i])::before,form:has(input[name="email" i])::before,.hs-form-iframe::before{content:"";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;width:50px;height:50px;margin:auto;border:2.5px solid #e1e1e1;border-top:2.5px solid #9ea3a6;border-radius:50%;animation:spin 1s linear infinite;background-color:transparent;pointer-events:auto;z-index:999999;opacity:1}form:has(input[type="email" i]) *,form:has(input[name="email" i]) *,.hs-form-iframe *{opacity:0!important;user-select:none!important;pointer-events:none!important}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';
              (document.head || document.documentElement).appendChild(style);
              function cleanup(){
                var styleEl=document.getElementById('apollo-form-prehide-css');
                if(styleEl)styleEl.remove();
                if(timeoutId)clearTimeout(timeoutId);
              }
              timeoutId=setTimeout(function(){
                console.warn('[Apollo] Form enrichment timeout after 5s - revealing forms. Check network and console for errors.');
                cleanup();
              },TIMEOUT_MS);
              var nocache=Math.random().toString(36).substring(7);
              var script=document.createElement('script');
              script.src='https://assets.apollo.io/js/apollo-inbound.js?nocache=' + nocache;
              script.defer=true;
              script.onerror=function(){
                console.error('[Apollo] Failed to load form enrichment script');
                cleanup();
              };
              script.onload=function(){
                try{
                  window.ApolloInbound.formEnrichment.init({
                    appId: '6ac4a347292c53001c8bd170',
                    onReady: function(){cleanup();},
                    onError: function(err){
                      console.error('[Apollo] Form enrichment init error:',err);
                      cleanup();
                    }
                  });
                }catch(err){
                  console.error('[Apollo] Error initializing form enrichment:',err);
                  cleanup();
                }
              };
              document.head.appendChild(script);
            })();
          `}
        </Script>

        {/* Meta Pixel base code — fires PageView on every page */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            if (!window.__neaveMetaPageViewTracked) {
              fbq('init', '1396716755074216');
              fbq('track', 'PageView');
              window.__neaveMetaPageViewTracked = true;
            }
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1396716755074216&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}