import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderServer from "./components/Header/HeaderServer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajat Chaturvedi | FullStack Developer",
  description: "A master was once a beginner ...",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderServer />
        {children}

        {/* WhatsApp Floating Widget */}
        <Script id="whatsapp-widget" strategy="afterInteractive">
          {`
(function () {
  'use strict';

  // Remove old widget if exists
  document.querySelector('.whatsapp-widget')?.remove();
  document.querySelector('#whatsapp-widget-styles')?.remove();

  const config = {
    phoneNumber: '918979966510',
    defaultMessage: 'Hello! I want to connect regarding fulltime opportunity / freelance.',
    buttonText: 'Chat on WhatsApp',
    buttonColor: '#25D366',
    hoverColor: '#20BA5A',
  };

  const whatsappUrl =
    'https://wa.me/' +
    config.phoneNumber +
    '?text=' +
    encodeURIComponent(config.defaultMessage);

  // Inject CSS
  const style = document.createElement('style');
  style.id = 'whatsapp-widget-styles';
  style.textContent = \`
    .whatsapp-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 99999;
    }

    .whatsapp-button {
      background: \${config.buttonColor};
      color: #fff;
      height: 56px;
      min-width: 56px;
      padding: 0 20px;
      border-radius: 9999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 15px;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      white-space: nowrap;
      box-shadow: 0 6px 16px rgba(37, 211, 102, 0.45);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      animation: whatsappPulse 2.5s infinite;
    }

    .whatsapp-button:hover {
      background: \${config.hoverColor};
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 10px 24px rgba(37, 211, 102, 0.6);
    }

    .whatsapp-icon {
      width: 26px;
      height: 26px;
      display: block;
      flex-shrink: 0;
    }

    .whatsapp-text {
      display: inline-block;
    }

    @keyframes whatsappPulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
      70% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }

    /* Mobile FAB */
    @media (max-width: 768px) {
      .whatsapp-button {
        width: 60px;
        height: 60px;
        padding: 0;
        border-radius: 50%;
      }

      .whatsapp-text {
        display: none;
      }

      .whatsapp-icon {
        width: 30px;
        height: 30px;
      }
    }
  \`;
  document.head.appendChild(style);

  // Widget HTML
  const widget = document.createElement('div');
  widget.className = 'whatsapp-widget';

  widget.innerHTML = \`
    <a
      href="\${whatsappUrl}"
      class="whatsapp-button"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg class="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="white" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0012.05 0z"/>
      </svg>
      <span class="whatsapp-text">\${config.buttonText}</span>
    </a>
  \`;

  document.body.appendChild(widget);
})();
            `}
        </Script>
      </body>
    </html>
  );
}
