import { Container } from './ui/Container';

const clients = [
    'TechCorp', 'InovaSys', 'FutureScale', 'DataFlow', 'SmartSolutions', 'WebWorks',
    'TechCorp', 'InovaSys', 'FutureScale', 'DataFlow', 'SmartSolutions', 'WebWorks',
];

export function Clients() {
    return (
        <div className="bg-white py-12 sm:py-16">
            <Container>
                <p className="text-center text-base font-semibold leading-8 text-gray-900 mb-8">
                    Confiado por empresas inovadoras
                </p>
                <div className="relative flex overflow-hidden mask-gradient">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                        {clients.map((client, index) => (
                            <div key={index} className="text-2xl font-bold text-gray-400 uppercase tracking-wider">
                                {client}
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
                        {clients.map((client, index) => (
                            <div key={`dup-${index}`} className="text-2xl font-bold text-gray-400 uppercase tracking-wider">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
        </div>
    );
}
