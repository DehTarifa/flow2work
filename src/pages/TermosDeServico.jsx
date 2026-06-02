import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Mail, ChevronRight } from 'lucide-react';
import { Container } from '../components/ui/Container';

const COMERCIAL_EMAIL = 'comercial@consultorialevelup.com.br';
const DPO_EMAIL = 'dpo@consultorialevelup.com.br';

const COMPANY = {
    nomeFantasia: 'Level UP',
    razaoSocial: 'LEVEL UP REPRESENTAÇÕES LTDA',
    cnpj: '48.792.515/0001-06',
    endereco: 'R. Dr. Ricardo Vilela, 965 - Centro, Mogi das Cruzes - SP, CEP 08780-060',
    foro: 'Mogi das Cruzes - SP',
    produto: 'Flow2Work',
};

const sections = [
    {
        id: 'definicoes',
        roman: 'I',
        title: 'Definições',
        content: (
            <>
                <p>
                    Para os fins destes Termos de Serviço, os termos abaixo terão os seguintes significados, sempre
                    que iniciados com letra maiúscula:
                </p>
                <dl className="mt-4 space-y-5">
                    <div>
                        <dt className="text-white font-semibold mb-1">Level UP / Contratada</dt>
                        <dd>
                            {COMPANY.razaoSocial}, pessoa jurídica de direito privado, inscrita no CNPJ sob nº{' '}
                            {COMPANY.cnpj}, com sede em {COMPANY.endereco}, doravante referida como{' '}
                            <strong className="text-white">Level UP</strong>.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-white font-semibold mb-1">Flow2Work / Plataforma</dt>
                        <dd>
                            Software como serviço (SaaS) de titularidade da Level UP, que centraliza CRM e atendimento
                            via WhatsApp em uma única plataforma web, incluindo funcionalidades de chatbot, fluxos de
                            atendimento, agendamento de mensagens, dashboards e integrações.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-white font-semibold mb-1">Cliente / Contratante</dt>
                        <dd>
                            Pessoa física ou jurídica que adere a estes Termos e contrata o uso do Flow2Work mediante
                            proposta comercial firmada com a Level UP.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-white font-semibold mb-1">Usuário</dt>
                        <dd>
                            Pessoa física autorizada pelo Cliente a acessar o Flow2Work por meio de credenciais
                            individuais (login e senha), conforme limite previsto no plano contratado.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-white font-semibold mb-1">Cliente Final</dt>
                        <dd>
                            Pessoa física com a qual o Cliente se relaciona por meio do Flow2Work (ex.: contato,
                            lead, consumidor final). A Level UP não mantém relação direta com o Cliente Final.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-white font-semibold mb-1">Proposta Comercial</dt>
                        <dd>
                            Documento individualizado que define plano, escopo, prazo, valores, condições de
                            pagamento e demais termos comerciais firmados entre Level UP e Cliente. Integra estes
                            Termos para todos os fins.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-white font-semibold mb-1">API Oficial do WhatsApp</dt>
                        <dd>
                            WhatsApp Business Platform (WABA) fornecida pela Meta Platforms, Inc., única interface
                            oficialmente suportada pelo Flow2Work para integração com o WhatsApp.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-white font-semibold mb-1">LGPD</dt>
                        <dd>Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais.</dd>
                    </div>
                </dl>
            </>
        ),
    },
    {
        id: 'aceitacao',
        roman: 'II',
        title: 'Aceitação e Vinculação',
        content: (
            <>
                <p>
                    A contratação do Flow2Work implica a aceitação integral, livre e inequívoca destes Termos de
                    Serviço, da{' '}
                    <Link
                        to="/politica-de-privacidade"
                        className="text-primary hover:text-primary-hover underline underline-offset-4"
                    >
                        Política de Privacidade
                    </Link>{' '}
                    e dos termos específicos pactuados na respectiva Proposta Comercial.
                </p>
                <p>
                    Em caso de divergência entre a Proposta Comercial e estes Termos, prevalecerá o que estiver
                    expressamente disposto na Proposta Comercial para o ponto controvertido, permanecendo este
                    documento aplicável no que com ela não conflitar.
                </p>
                <p>
                    A Level UP poderá atualizar estes Termos a qualquer tempo, em razão de alterações legais,
                    regulatórias, operacionais ou de melhores práticas. A versão vigente estará sempre disponível
                    nesta URL, com a respectiva data de atualização. Alterações materiais serão comunicadas ao
                    Cliente com antecedência razoável pelo e-mail de cadastro.
                </p>
            </>
        ),
    },
    {
        id: 'objeto',
        roman: 'III',
        title: 'Objeto e Licença de Uso',
        content: (
            <>
                <p>
                    A Level UP concede ao Cliente, mediante adimplemento e pelo prazo previsto na Proposta Comercial,
                    licença <strong className="text-white">não-exclusiva, intransferível, não-sublicenciável e
                    revogável</strong> para acessar e utilizar o Flow2Work, exclusivamente em sua atividade interna
                    de relacionamento com clientes finais, observados o plano contratado e os limites de usuários,
                    números de WhatsApp e demais quotas aplicáveis.
                </p>
                <p>O Cliente <strong className="text-white">não poderá</strong>:</p>
                <ul className="space-y-2 mt-3">
                    {[
                        'Sublicenciar, revender, alugar, ceder, distribuir ou disponibilizar o Flow2Work a terceiros, no todo ou em parte;',
                        'Realizar engenharia reversa, descompilação, decompilação ou tentar acessar o código-fonte da Plataforma;',
                        'Utilizar a Plataforma para atividades ilícitas, fraudulentas, abusivas, de envio de spam, phishing, ou em violação às políticas da Meta/WhatsApp;',
                        'Compartilhar credenciais de acesso entre diferentes usuários físicos ou contornar os limites de usuários do plano contratado;',
                        'Carregar conteúdo que viole direitos de terceiros, normas legais ou que constitua dado pessoal sensível sem base legal adequada.',
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4">
                    O Flow2Work é fornecido como Software como Serviço (SaaS), hospedado em infraestrutura
                    administrada pela Level UP, acessível via internet. Não há entrega de cópia instalável da
                    Plataforma ao Cliente.
                </p>
            </>
        ),
    },
    {
        id: 'cadastro',
        roman: 'IV',
        title: 'Cadastro, Acesso e Segurança',
        content: (
            <>
                <p>
                    O acesso ao Flow2Work é realizado mediante credenciais individuais (login e senha) criadas após a
                    formalização da Proposta Comercial. Não há período de teste gratuito ou autoatendimento de
                    cadastro: o provisionamento é feito pela Level UP após a contratação.
                </p>
                <p>O Cliente é responsável por:</p>
                <ul className="space-y-2 mt-3">
                    {[
                        'Fornecer informações cadastrais verdadeiras, completas e atualizadas;',
                        'Manter a confidencialidade das credenciais e a guarda diligente dos dispositivos de acesso;',
                        'Designar os Usuários autorizados e revogar acessos quando colaboradores deixarem a empresa;',
                        'Comunicar imediatamente a Level UP em caso de suspeita de comprometimento de credenciais ou acesso não autorizado;',
                        'Responder pelos atos praticados por seus Usuários no Flow2Work.',
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        ),
    },
    {
        id: 'cobranca',
        roman: 'V',
        title: 'Planos, Cobrança e Cancelamento',
        content: (
            <>
                <p>
                    Os planos do Flow2Work (Basic, Pro, Premium e Enterprise) são comercializados sob medida, e os
                    valores, ciclo de cobrança, índice de reajuste, prazo de vigência e regras de renovação e
                    cancelamento estão definidos integralmente na <strong className="text-white">Proposta
                    Comercial</strong> firmada com o Cliente.
                </p>
                <p>
                    O atraso ou inadimplemento de qualquer parcela acarreta, independentemente de prévia notificação:
                </p>
                <ul className="space-y-2 mt-3">
                    {[
                        'Correção pelos índices e encargos previstos na Proposta Comercial ou, na sua ausência, atualização monetária pelo IPCA, juros de mora de 1% (um por cento) ao mês e multa de 2% (dois por cento) sobre o valor em atraso;',
                        'Possibilidade de suspensão do acesso à Plataforma após notificação por e-mail e decurso do prazo de regularização indicado;',
                        'Possibilidade de rescisão contratual nos termos da Proposta Comercial, sem prejuízo da cobrança dos valores devidos.',
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4">
                    Tributos incidentes sobre a contratação (ex.: ISS) correm por conta da parte legalmente
                    responsável, conforme a legislação aplicável.
                </p>
            </>
        ),
    },
    {
        id: 'suporte',
        roman: 'VI',
        title: 'Suporte Técnico',
        content: (
            <>
                <p>
                    A Level UP oferece suporte técnico aos Clientes ativos para esclarecimento de dúvidas operacionais
                    e tratativa de incidentes relativos ao funcionamento do Flow2Work, em horário comercial, pelos
                    canais oficiais informados na Proposta Comercial e/ou no painel da Plataforma.
                </p>
                <p>O suporte técnico <strong className="text-white">não abrange</strong>:</p>
                <ul className="space-y-2 mt-3">
                    {[
                        'Configuração ou manutenção de equipamentos, redes ou softwares de terceiros utilizados pelo Cliente;',
                        'Treinamento de Usuários além do material e onboarding previstos na Proposta Comercial;',
                        'Recuperação de dados perdidos por culpa exclusiva do Cliente ou por ato de terceiros;',
                        'Indisponibilidades causadas por serviços de terceiros (Meta/WhatsApp, OpenAI, provedores de e-mail, internet do Cliente etc.);',
                        'Desenvolvimentos sob demanda e integrações personalizadas não previstas no plano contratado.',
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4">
                    Eventuais SLAs (Service Level Agreements) específicos de disponibilidade e tempo de resposta,
                    quando aplicáveis, serão tratados expressamente na Proposta Comercial.
                </p>
            </>
        ),
    },
    {
        id: 'obrigacoes',
        roman: 'VII',
        title: 'Obrigações e Limitações de Responsabilidade',
        content: (
            <>
                <p className="text-white font-semibold">Obrigações do Cliente</p>
                <ul className="space-y-2 mt-3">
                    {[
                        'Utilizar o Flow2Work em conformidade com a legislação aplicável, em especial a LGPD, o Marco Civil da Internet e as políticas da Meta/WhatsApp Business;',
                        'Obter, manter válidos e custodiar adequadamente os consentimentos e bases legais necessários ao tratamento dos dados dos Clientes Finais;',
                        'Não enviar mensagens não solicitadas (spam), conteúdo enganoso, ofensivo, discriminatório, ilícito ou que viole direitos de terceiros;',
                        'Cumprir as opt-out e bloqueios solicitados pelos destinatários das mensagens;',
                        'Manter cópia de segurança própria dos dados que considerar críticos, sem prejuízo dos procedimentos de backup adotados pela Level UP.',
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <p className="text-white font-semibold mt-6">Limitações de Responsabilidade</p>
                <p className="mt-2">
                    O Flow2Work integra-se exclusivamente à <strong className="text-white">API Oficial do WhatsApp
                    (WhatsApp Business Platform – WABA)</strong> da Meta. Integrações não oficiais (ex.: bibliotecas
                    de terceiros não suportadas) não são oferecidas, suportadas ou autorizadas pela Level UP.
                </p>
                <p>A Level UP <strong className="text-white">não se responsabiliza</strong> por:</p>
                <ul className="space-y-2 mt-3">
                    {[
                        'Indisponibilidades, bloqueios, restrições ou alterações unilaterais promovidas pela Meta, OpenAI ou outros provedores de serviços de terceiros utilizados pelo Cliente;',
                        'Perdas e danos decorrentes do uso indevido da Plataforma pelos Usuários do Cliente ou por terceiros que tiverem acesso às credenciais sob guarda do Cliente;',
                        'Conteúdo das mensagens enviadas, contatos importados e dados inseridos pelo Cliente na Plataforma;',
                        'Falhas, indisponibilidades ou perdas de dados causadas por força maior, caso fortuito, ataques cibernéticos não imputáveis à Level UP, falhas de internet ou de infraestrutura de terceiros.',
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4">
                    Em qualquer hipótese, e na máxima extensão permitida pela legislação aplicável, a
                    responsabilidade total da Level UP perante o Cliente, por qualquer causa, ficará limitada ao
                    valor efetivamente pago pelo Cliente nos <strong className="text-white">12 (doze) meses</strong>{' '}
                    imediatamente anteriores ao evento que deu origem à responsabilidade. A Level UP não responde por
                    lucros cessantes, perda de chance, danos indiretos, reflexos ou consequenciais.
                </p>
            </>
        ),
    },
    {
        id: 'propriedade',
        roman: 'VIII',
        title: 'Propriedade Intelectual',
        content: (
            <>
                <p>
                    O Flow2Work, incluindo seu código-fonte, código-objeto, arquitetura, design, marcas, logotipos,
                    layouts, telas, documentação, fluxos, conteúdos, materiais de treinamento e quaisquer melhorias,
                    correções, atualizações e novas versões, é de titularidade exclusiva da Level UP e protegido pelas
                    leis brasileiras de propriedade intelectual, em especial pela{' '}
                    <strong className="text-white">Lei nº 9.609/1998</strong> (Lei do Software) e pela{' '}
                    <strong className="text-white">Lei nº 9.610/1998</strong> (Lei de Direitos Autorais).
                </p>
                <p>
                    A licença concedida nestes Termos não importa em qualquer transferência de titularidade. Nenhuma
                    disposição destes Termos autoriza o Cliente a utilizar as marcas, nomes comerciais, logotipos ou
                    sinais distintivos da Level UP, salvo mediante autorização prévia, expressa e por escrito.
                </p>
                <p>
                    Os <strong className="text-white">dados inseridos pelo Cliente</strong> na Plataforma (cadastros,
                    contatos, conversas, mídias) permanecem de titularidade do Cliente, que concede à Level UP licença
                    limitada e não-exclusiva para tratá-los exclusivamente na medida necessária à prestação dos
                    serviços contratados, em estrita observância à LGPD e à Política de Privacidade.
                </p>
            </>
        ),
    },
    {
        id: 'privacidade',
        roman: 'IX',
        title: 'Privacidade e Proteção de Dados (LGPD)',
        content: (
            <>
                <p>
                    O tratamento de dados pessoais no âmbito do Flow2Work observa a{' '}
                    <strong className="text-white">Lei nº 13.709/2018 (LGPD)</strong> e está detalhado na{' '}
                    <Link
                        to="/politica-de-privacidade"
                        className="text-primary hover:text-primary-hover underline underline-offset-4"
                    >
                        Política de Privacidade
                    </Link>
                    , que integra estes Termos para todos os fins.
                </p>
                <p>Para fins de LGPD, e sem prejuízo das demais previsões aplicáveis:</p>
                <ul className="space-y-3 mt-3">
                    <li className="flex gap-3">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>
                            <strong className="text-white">Dados cadastrais do Cliente</strong> (CNPJ, razão social,
                            representantes, contatos comerciais e financeiros): a Level UP atua como{' '}
                            <strong className="text-white">Controladora</strong>, pelas finalidades de prestação dos
                            serviços, faturamento e cumprimento de obrigações legais.
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>
                            <strong className="text-white">Dados dos Clientes Finais</strong> inseridos pelo Cliente na
                            Plataforma: o Cliente é <strong className="text-white">Controlador</strong> desses dados
                            e a Level UP atua como <strong className="text-white">Operadora</strong>, tratando-os
                            apenas conforme as instruções legítimas do Cliente e na medida necessária à prestação dos
                            serviços.
                        </span>
                    </li>
                </ul>
                <p className="mt-4">
                    Comunicações relacionadas a dados pessoais, incidentes de segurança ou exercício de direitos de
                    titulares devem ser direcionadas à Encarregada de Dados (DPO) pelo e-mail{' '}
                    <a
                        href={`mailto:${DPO_EMAIL}`}
                        className="text-primary hover:text-primary-hover underline underline-offset-4"
                    >
                        {DPO_EMAIL}
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        id: 'disposicoes',
        roman: 'X',
        title: 'Disposições Gerais e Foro',
        content: (
            <>
                <p>
                    A tolerância de qualquer das partes quanto ao descumprimento de obrigações da outra não constitui
                    novação, renúncia ou alteração das condições aqui pactuadas, podendo a parte tolerante exigir o
                    cumprimento a qualquer tempo.
                </p>
                <p>
                    Caso qualquer disposição destes Termos seja considerada nula, ilegal ou inexequível, as demais
                    disposições permanecerão em pleno vigor, devendo a cláusula afetada ser interpretada de modo a
                    preservar, na máxima extensão possível, a intenção original das partes.
                </p>
                <p>
                    O Cliente <strong className="text-white">não poderá ceder ou transferir</strong> a terceiros os
                    direitos e obrigações decorrentes destes Termos sem prévia anuência expressa e por escrito da
                    Level UP. A Level UP poderá ceder estes Termos a sociedade integrante do mesmo grupo econômico
                    ou em caso de reorganização societária, mediante simples comunicação ao Cliente.
                </p>
                <p>
                    Comunicações formais entre as partes serão consideradas válidas quando enviadas para os e-mails
                    indicados na Proposta Comercial ou, em sua ausência, para o e-mail{' '}
                    <a
                        href={`mailto:${COMERCIAL_EMAIL}`}
                        className="text-primary hover:text-primary-hover underline underline-offset-4"
                    >
                        {COMERCIAL_EMAIL}
                    </a>
                    .
                </p>
                <p>
                    Estes Termos são regidos pelas leis da <strong className="text-white">República Federativa do
                    Brasil</strong>. As partes elegem o <strong className="text-white">Foro da Comarca de{' '}
                    {COMPANY.foro}</strong> como o único competente para dirimir quaisquer controvérsias decorrentes
                    destes Termos, renunciando a qualquer outro, por mais privilegiado que seja.
                </p>
            </>
        ),
    },
];

export function TermosDeServico() {
    useEffect(() => {
        document.title = 'Termos de Serviço · Flow2Work';
    }, []);

    return (
        <div className="relative isolate overflow-hidden pt-32 pb-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
            <div
                className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 opacity-10 blur-3xl"
                style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
            />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
                        <FileText className="w-3.5 h-3.5" />
                        Termos de Serviço · Flow2Work
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Termos de Serviço
                    </h1>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        Condições gerais de uso e licenciamento da plataforma <strong className="text-white">
                        {COMPANY.produto}</strong>, fornecida pela {COMPANY.nomeFantasia} ({COMPANY.razaoSocial} –
                        CNPJ {COMPANY.cnpj}).
                    </p>

                    <a
                        href={`mailto:${COMERCIAL_EMAIL}`}
                        className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        {COMERCIAL_EMAIL}
                    </a>

                    <div className="mt-16 space-y-14">
                        {sections.map((section, index) => (
                            <motion.section
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.03 }}
                                viewport={{ once: true, margin: '-80px' }}
                                className="scroll-mt-28"
                            >
                                <div className="flex items-baseline gap-3 mb-5">
                                    <span className="text-primary font-bold text-sm tracking-widest">
                                        {section.roman}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="space-y-4 text-gray-300 leading-relaxed text-[15px] md:text-base">
                                    {section.content}
                                </div>
                            </motion.section>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 text-xs text-gray-500">
                        <p>
                            <strong className="text-gray-300">{COMPANY.razaoSocial}</strong> · CNPJ {COMPANY.cnpj} ·{' '}
                            {COMPANY.endereco}
                        </p>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
