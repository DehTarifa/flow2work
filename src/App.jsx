import clsx from 'clsx';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Tutorial } from './components/Tutorial';
import { BenefitsCard } from './components/BenefitsCard';
import { Clients } from './components/Clients';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { InterfacePreview } from './components/InterfacePreview';
import { Integrations } from './components/Integrations';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

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
    </div>
  );
}

export default App;
