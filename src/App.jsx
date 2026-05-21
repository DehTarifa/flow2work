import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsCard } from './components/BenefitsCard';
import { Benefits } from './components/Benefits';
import { Integrations } from './components/Integrations';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        {/*<Tutorial />*/}
        <BenefitsCard />
        {/*<Clients />*/}
        <Benefits />
        {/*<InterfacePreview />*/}
        <Integrations />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
