"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={40}
        buttonText="Start Free"
        onButtonClick={() => { /* handle click */ }}
        className="sticky top-0 z-10"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to NovaDesk"
          subtitle="Your all-in-one solution for productivity"
          contractAddress="0x123456"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="At NovaDesk, we streamline your workflows with innovative tools that empower your productivity."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: 'Step 1', description: 'Install our app', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Create an account', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Start maximizing your productivity', image: '/images/placeholder3.avif', position: 'right', isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Understand the economic model behind our product"
          kpiItems={[
            { value: '1M+', description: 'Users onboarded', icon: 'Users' },
            { value: '$500K', description: 'Investment raised', icon: 'DollarSign' },
            { value: '10X', description: 'ROI over 2 years', icon: 'GraphRise' },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="NovaDesk"
          logoText="NovaDesk"
          className="footer"
        />
      </div>
    </SiteThemeProvider>
  );
}