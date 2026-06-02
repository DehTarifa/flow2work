import { Hero } from '../components/Hero';
import { BenefitsCard } from '../components/BenefitsCard';
import { Benefits } from '../components/Benefits';
import { Integrations } from '../components/Integrations';
import { Pricing } from '../components/Pricing';

export function HomePage() {
    return (
        <>
            <Hero />
            <BenefitsCard />
            <Benefits />
            <Integrations />
            <Pricing />
        </>
    );
}
