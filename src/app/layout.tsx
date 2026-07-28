import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CustomCursor from "../components/ui/CustomCursor";
import ParticleBackground from "../components/ui/ParticleBackground";

export const metadata: Metadata = {
  title: "REAIM 2027 | Nairobi, Republic of Kenya",
  description: "The 4th Responsible AI in the Military Domain Summit - April 2027",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParticleBackground />
        <CustomCursor />
        <Header />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
              );
            }
          `}
        </Script>
        <Script 
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}

