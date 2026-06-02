import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, ChevronRight } from 'lucide-react';
import { Container } from '../components/ui/Container';

const DPO_EMAIL = 'dpo@consultorialevelup.com.br';

const sections = [
    {
        id: 'objetivo',
        roman: 'I',
        title: 'Objetivo',
        content: (
            <>
                <p>
                    Sejam bem-vindos! Nós da <strong className="text-white">Level Up</strong> estamos constantemente
                    empenhados em promover a proteção, privacidade e segurança dos dados pessoais de todos aqueles com
                    quem interagimos, além de cumprir com as legislações aplicáveis. Para atingirmos esse objetivo,
                    atuamos com comprometimento, ética, assertividade, transparência e respeito buscando a manutenção e
                    o fortalecimento de uma relação de confiança.
                </p>
                <p>
                    Este aviso de privacidade foi elaborado de acordo com as leis de privacidade e proteção de dados
                    pessoais aplicáveis, em especial a <strong className="text-white">Lei nº 13.709/2018 (Lei Geral de
                    Proteção de Dados – LGPD)</strong>, e detalha nosso compromisso com a proteção dos dados pessoais
                    que acessamos, tratamos ou utilizamos durante nossas atividades.
                </p>
                <p>
                    Em caso de dúvidas entre em contato conosco através do e-mail:{' '}
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
        id: 'glossario',
        roman: 'II',
        title: 'Glossário',
        content: (
            <dl className="space-y-5">
                <div>
                    <dt className="text-white font-semibold mb-1">Dados Pessoais</dt>
                    <dd>Toda e qualquer informação que diga respeito à pessoa natural identificada ou identificável.</dd>
                </div>
                <div>
                    <dt className="text-white font-semibold mb-1">Dados Pessoais Sensíveis</dt>
                    <dd>
                        Dados pessoais de origem racial ou étnica, convicção religiosa, opinião política, filiação a
                        sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde
                        ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.
                    </dd>
                </div>
                <div>
                    <dt className="text-white font-semibold mb-1">Titular de Dados</dt>
                    <dd>
                        Pessoas físicas a quem se referem os dados pessoais e os dados pessoais sensíveis que são
                        objeto de tratamento.
                    </dd>
                </div>
                <div>
                    <dt className="text-white font-semibold mb-1">Tratamento</dt>
                    <dd>
                        Toda operação realizada com dados pessoais, como as que se referem à coleta, produção, recepção,
                        classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento,
                        arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação,
                        comunicação, transferência, difusão ou extração.
                    </dd>
                </div>
                <div>
                    <dt className="text-white font-semibold mb-1">Controlador</dt>
                    <dd>
                        Pessoa física ou jurídica, de direito público ou privado, a quem compete as decisões referentes
                        ao tratamento de dados pessoais. Para os fins deste aviso, a Level Up será considerada o
                        Controlador de Dados dos Titulares.
                    </dd>
                </div>
                <div>
                    <dt className="text-white font-semibold mb-1">Operador</dt>
                    <dd>
                        Pessoa física ou jurídica, de direito público ou privado, que realiza o tratamento de dados
                        pessoais em nome do controlador.
                    </dd>
                </div>
            </dl>
        ),
    },
    {
        id: 'coleta',
        roman: 'III',
        title: 'Coleta de Dados Pessoais',
        content: (
            <>
                <p>
                    Os dados pessoais tratados pela Level Up são fornecidos de forma direta e voluntária pelo próprio
                    titular, por meio de formulários de contato, mensagens eletrônicas, aplicativos de comunicação,
                    redes sociais corporativas e demais canais oficiais disponibilizados pela Level Up.
                </p>
                <p>
                    Durante esse processo, não realizamos coleta automática ou indireta de informações pessoais, sendo
                    todas as interações baseadas em manifestação espontânea de interesse do titular. Os dados coletados
                    têm por objetivo possibilitar o atendimento eficiente às solicitações recebidas, a manutenção de
                    comunicações legítimas e a execução de eventuais procedimentos preliminares relacionados à
                    prestação de nossos serviços.
                </p>
                <p>
                    Os dados pessoais que tratamos são fornecidos diretamente pelo titular, por meio de formulários,
                    mensagens ou contatos voluntários em nossos canais oficiais:
                </p>
                <ul className="space-y-2 mt-4">
                    {[
                        'Nome completo;',
                        'E-mail;',
                        'Telefone ou WhatsApp comercial;',
                        'Empresa e cargo (quando aplicável);',
                        'Mensagem ou solicitação enviada.',
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4">
                    <strong className="text-white">Não coletamos dados sensíveis</strong>, como informações sobre origem
                    racial, convicções religiosas, opiniões políticas, saúde, ou dados biométricos.
                </p>
            </>
        ),
    },
    {
        id: 'consentimento',
        roman: 'IV',
        title: 'Consentimento',
        content: (
            <>
                <p>
                    O tratamento dos dados pessoais é fundamentado na manifestação livre, informada e inequívoca do
                    consentimento do titular, nos termos do{' '}
                    <strong className="text-white">artigo 7º, inciso I, da Lei nº 13.709/2018 (LGPD)</strong>.
                </p>
                <p>
                    Tal consentimento é obtido no momento em que o titular, de forma voluntária, entra em contato com a
                    Level Up por meio de nossos canais oficiais, demonstrando interesse em nossos serviços e fornecendo
                    seus dados pessoais para fins de comunicação e atendimento.
                </p>
                <p>
                    Reforçamos que o consentimento poderá ser revogado a qualquer tempo, mediante manifestação expressa
                    do titular, sem prejuízo da licitude do tratamento realizado até o momento da revogação, conforme
                    dispõe o <strong className="text-white">artigo 8º, §5º, da LGPD</strong>, no e-mail oficial do
                    Encarregado de Dados,{' '}
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
        id: 'tratamento',
        roman: 'V',
        title: 'Tratamento de Dados',
        content: (
            <>
                <p>
                    A Level Up adota rígidos padrões de governança e segurança da informação, com o objetivo de
                    garantir a <strong className="text-white">integridade, confidencialidade e disponibilidade</strong>{' '}
                    dos dados pessoais sob sua guarda.
                </p>
                <p>
                    Todos os dados coletados são armazenados em ambientes controlados e de acesso restrito, utilizando
                    medidas técnicas e organizacionais adequadas para prevenir acessos não autorizados, destruição
                    acidental ou ilícita, perda, alteração, comunicação ou qualquer forma de tratamento indevido.
                </p>
                <p>
                    O compartilhamento de dados pessoais é realizado somente quando estritamente necessário, observando
                    os princípios da <strong className="text-white">necessidade, finalidade e minimização</strong>{' '}
                    previstos na LGPD. Assim, o compartilhamento poderá ocorrer:
                </p>
                <ul className="space-y-3 mt-4">
                    {[
                        'Com fornecedores e parceiros contratualmente vinculados, responsáveis pelo suporte técnico, hospedagem de dados ou execução de atividades essenciais à prestação de nossos serviços, sempre mediante acordos de confidencialidade e cláusulas de proteção de dados;',
                        'Com autoridades públicas e órgãos reguladores, quando houver obrigação legal, determinação judicial ou administrativa;',
                        'Quando indispensável à proteção de direitos da Level Up, de seus clientes ou de terceiros, em conformidade com a legislação vigente.',
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4">
                    Os dados pessoais são mantidos apenas pelo período necessário ao cumprimento das finalidades
                    informadas, observando os prazos legais e regulatórios aplicáveis. Findo o prazo ou a finalidade,
                    os dados são eliminados de forma segura ou anonimizados, conforme o{' '}
                    <strong className="text-white">artigo 15 da LGPD</strong>.
                </p>
            </>
        ),
    },
    {
        id: 'direitos',
        roman: 'VI',
        title: 'Direitos dos Titulares',
        content: (
            <>
                <p>
                    Como titular de dados, você possui diversos direitos previstos em lei, que podem ser exercidos a
                    qualquer tempo e mediante requisição direta direcionada à{' '}
                    <strong className="text-white">Bruna Magalhães Pinto Nagoshi</strong>, Encarregada de Dados da Level
                    Up, através do endereço de e-mail:{' '}
                    <a
                        href={`mailto:${DPO_EMAIL}`}
                        className="text-primary hover:text-primary-hover underline underline-offset-4"
                    >
                        {DPO_EMAIL}
                    </a>
                    .
                </p>
                <p>
                    Relembramos que os direitos dos titulares não são absolutos, mas a Level Up está empenhada em
                    atendê-los sempre que possível. Além disso, poderemos solicitar a confirmação de sua identidade
                    para atender a solicitação, justamente para evitar o compartilhamento de dados pessoais com outra
                    pessoa que não seja o próprio titular e/ou seu representante legal.
                </p>
                <p>Os direitos garantidos pela Lei nº 13.709/2018 aos titulares são:</p>
                <div className="mt-4 space-y-4">
                    {[
                        {
                            title: 'Confirmação e acesso',
                            body: 'Você pode solicitar a confirmação de que os seus dados pessoais estão sendo tratados, bem como ter acesso a esses dados.',
                        },
                        {
                            title: 'Correção',
                            body: 'Você pode pedir a correção de dados pessoais incompletos, inexatos ou desatualizados.',
                        },
                        {
                            title: 'Anonimização, bloqueio ou eliminação',
                            body: 'Você pode solicitar a revogação do consentimento conferido anteriormente, bem como pedir a eliminação dos dados pessoais. Observação: poderemos manter determinados dados apenas para obrigações legais/regulatórias.',
                        },
                        {
                            title: 'Compartilhamento',
                            body: 'Você pode solicitar a lista com as entidades públicas e/ou privadas com as quais houve compartilhamento dos seus dados pessoais.',
                        },
                        {
                            title: 'Não fornecer o consentimento',
                            body: 'Você pode receber informações sobre a possibilidade de não fornecer o consentimento para o tratamento de dados pessoais, bem como as consequências desta negativa.',
                        },
                    ].map((right) => (
                        <div
                            key={right.title}
                            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-primary/30 transition-colors"
                        >
                            <h4 className="text-white font-semibold mb-2 uppercase tracking-wide text-sm">
                                {right.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{right.body}</p>
                        </div>
                    ))}
                </div>
            </>
        ),
    },
    {
        id: 'atualizacao',
        roman: 'VII',
        title: 'Atualização do Aviso',
        content: (
            <p>
                A presente Política de Privacidade será objeto de revisão periódica, com frequência mínima anual, ou
                sempre que a Level Up identificar a necessidade de atualização em razão de alterações legais,
                regulatórias, operacionais ou de melhores práticas de governança e segurança da informação. A versão
                mais recente desta norma estará disponível para consulta pública, em nossas Redes Sociais, a qualquer
                tempo.
            </p>
        ),
    },
    {
        id: 'conclusao',
        roman: 'VIII',
        title: 'Conclusão',
        content: (
            <>
                <p>
                    Este aviso será regido e interpretado de acordo com as leis da República Federativa do Brasil,
                    principalmente a <strong className="text-white">Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>.
                    A Level Up está empenhada com o tema e está à disposição para resolver qualquer questão relacionada
                    à proteção de dados pessoais.
                </p>
                <p>
                    Caso tenha alguma dúvida adicional sobre este aviso ou alguma solicitação relacionada aos seus
                    dados pessoais basta entrar em contato com a{' '}
                    <strong className="text-white">Bruna Magalhães Pinto Nagoshi</strong>, encarregada de dados da
                    Level Up, através do nosso endereço de e-mail{' '}
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
];

export function PoliticaDePrivacidade() {
    useEffect(() => {
        document.title = 'Política de Privacidade · Flow2Work';
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
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Versão 1.0 · Atualizado em 05/11/2025 · Público
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Política de Privacidade
                    </h1>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        Compromisso da Level Up com a proteção, privacidade e segurança dos dados pessoais, em
                        conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
                    </p>

                    <a
                        href={`mailto:${DPO_EMAIL}`}
                        className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        {DPO_EMAIL}
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
                </motion.div>
            </Container>
        </div>
    );
}
