'use client';

import { useState } from 'react';

const WHATSAPP_NUMBER = '5519988303000';

const STEPS = [
  { number: '01', title: 'Conversa', text: 'Sem pitch. Sem apresentação comercial. Apenas uma conversa honesta para entender seu momento, seus objetivos e seus valores.' },
  { number: '02', title: 'Alinhamento', text: 'Verificamos se há compatibilidade real — de visão, de horizonte de tempo e de princípios. Sem pressão. Se não fizer sentido, encerramos ali.' },
  { number: '03', title: 'Parceria', text: 'Se fizer sentido para os dois lados, construímos juntos. Com transparência, decisões conscientes e alinhamento constante.' },
];

const FIT_LIST = [
  'Empresários que pensam no patrimônio, não no próximo produto.',
  'Investidores que colocam alinhamento antes de rentabilidade.',
  'Profissionais que querem parceiros, não vendedores.',
  'Pessoas que entendem que confiança se constrói no tempo.',
];

const NOT_FIT_LIST = [
  'Quem busca retorno garantido ou resultado rápido.',
  'Quem quer delegar sem entender o que está construindo.',
  'Quem procura o produto do momento, não uma estratégia.',
  'Quem não valoriza o relacionamento de longo prazo.',
];

const COMO_CONHECEU = ['Instagram', 'Indicação', 'YouTube', 'Evento', 'Outro'];
const PRAZO = ['Curto prazo', 'Médio prazo', 'Longo prazo'];
const FAIXA = ['Até R$ 5 mil', 'R$ 5 mil a R$ 10 mil', 'R$ 10 mil a R$ 20 mil', 'Acima de R$ 20 mil'];
const JA_INVESTE = ['Imóveis', 'Consórcio', 'Renda Fixa', 'Bolsa de Valores', 'Empresas', 'Outros', 'Ainda não invisto'];
const DISPONIBILIDADE = ['Presencial', 'Online', 'Ambos'];

function OptionBox({ label, selected, onClick, kind }) {
  return (
    <div className={`option-box${selected ? ' selected' : ''}`} onClick={onClick}>
      {kind === 'check' ? (
        <div className="check-box"><div className="check-inner" /></div>
      ) : (
        <div className="radio-dot"><div className="radio-dot-inner" /></div>
      )}
      <div className="option-label">{label}</div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0e0e0c">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.29-1.39a9.87 9.87 0 0 0 4.7 1.2h.01c5.46 0 9.9-4.45 9.9-9.9C22 6.45 17.5 2 12.04 2zm5.8 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.98s.75-2.11 1.02-2.4c.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.45.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

export default function HomePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '', whatsapp: '', email: '', cidade: '', instagram: '',
    comoConheceu: '', prazo: '', faixa: '', jaInveste: [], disponibilidade: '', motivo: '',
  });

  const setField = (key) => (e) => setFormData((f) => ({ ...f, [key]: e.target.value }));
  const selectSingle = (key, val) => setFormData((f) => ({ ...f, [key]: val }));
  const toggleMulti = (key, val) =>
    setFormData((f) => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter((v) => v !== val) : [...f[key], val],
    }));

  const step1Valid = formData.nome.trim() && formData.whatsapp.trim() && formData.email.trim() && formData.cidade.trim();
  const step2Valid = formData.comoConheceu && formData.prazo && formData.faixa && formData.disponibilidade;

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = formData;
    const msg =
      'Olá Kayo! Preenchi o formulário de Primeira Conversa.\n\n' +
      `Nome: ${f.nome}\n` +
      `WhatsApp: ${f.whatsapp}\n` +
      `E-mail: ${f.email}\n` +
      `Cidade/Estado: ${f.cidade}\n` +
      (f.instagram ? `Instagram: ${f.instagram}\n` : '') +
      `Como conheceu: ${f.comoConheceu}\n` +
      `Busca relação de: ${f.prazo}\n` +
      `Faixa de investimento: ${f.faixa}\n` +
      (f.jaInveste.length ? `Já investe em: ${f.jaInveste.join(', ')}\n` : '') +
      `Disponibilidade: ${f.disponibilidade}\n` +
      (f.motivo ? `Motivo: ${f.motivo}\n` : '');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <header className="header">
        <div className="logo-group">
          <div className="logo-badge">
            <span><span className="i">K</span><span className="b">Z</span></span>
          </div>
          <div className="logo-divider" />
          <div className="logo-method">
            <span className="m1">Método</span>
            <span className="m2">CO-INVESTIMENTO</span>
          </div>
        </div>
        <a href="#form" className="nav-link">PRIMEIRA CONVERSA</a>
      </header>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <WhatsAppIcon />
        FALAR NO WHATSAPP
      </a>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div>KAYO ZUZARTE</div>
            <div>ASSESSOR DE INVESTIMENTOS COM CONSÓRCIO</div>
          </div>
          <h1 className="hero-h1-italic">Eu não vendo investimentos.</h1>
          <p className="hero-h1-bold">Eu invisto junto.</p>
          <div className="hero-note">Do meu próprio bolso.</div>
          <div className="hero-sub">
            <div>Não procuro clientes.</div>
            <div>Procuro parceiros.</div>
          </div>
          <a href="#form" className="cta-btn">QUERO MINHA PRIMEIRA CONVERSA <span>→</span></a>
        </div>
        <div className="hero-right">
          <div className="img-placeholder"><span>FOTO: retrato profissional de Kayo Zuzarte</span></div>
          <div className="hero-fade" />
        </div>
      </section>

      {/* Confiança / Método */}
      <section className="section">
        <div className="dash" />
        <h2 className="conf-headline">Confiança antes de qualquer proposta.</h2>
        <p className="conf-text">
          Patrimônio não se constrói com promessas. Se constrói com alinhamento de interesses,
          visão de longo prazo e uma relação onde os dois lados ganham ou os dois lados perdem juntos.
        </p>

        <div className="method-row">
          <div>
            <div className="method-eyebrow">COMO FUNCIONA</div>
            <div className="method-title">Método Co-Investimento</div>
          </div>
          <div className="method-caption">UMA RELAÇÃO CONSTRUÍDA ANTES DE QUALQUER TRANSAÇÃO</div>
        </div>

        <div className="steps-grid">
          {STEPS.map((s) => (
            <div key={s.number}>
              <div className="step-num">{s.number}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-text">{s.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section className="section-light">
        <div className="fit-grid">
          <div>
            <div className="fit-col-title">PARA QUEM FAZ SENTIDO</div>
            {FIT_LIST.map((item) => (
              <div className="fit-item" key={item}>
                <div className="fit-dash">—</div>
                <div className="fit-text">{item}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="fit-col-title">PARA QUEM NÃO FAZ SENTIDO</div>
            {NOT_FIT_LIST.map((item) => (
              <div className="fit-item" key={item}>
                <div className="fit-dash">—</div>
                <div className="fit-text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Kayo */}
      <section className="section">
        <div className="sobre-grid">
          <div className="sobre-photo-wrap">
            <div className="sobre-photo-frame" />
            <div className="sobre-photo-box">
              <div className="img-placeholder"><span>FOTO: Kayo Zuzarte à mesa</span></div>
            </div>
          </div>
          <div>
            <div className="sobre-eyebrow">SOBRE KAYO</div>
            <h2 className="sobre-h2">Uma pessoa antes de ser um assessor.</h2>
            <p className="sobre-p">
              Kayo Zuzarte construiu sua trajetória no mercado financeiro com uma premissa simples:
              só recomenda o que faria com o próprio patrimônio.
            </p>
            <p className="sobre-p">
              Ao longo dos anos, trabalhou com empresários, investidores e profissionais que buscavam
              algo que o mercado raramente oferece — um parceiro que pensa junto, que está comprometido
              com o resultado e que coloca a relação acima da comissão.
            </p>
            <p className="sobre-p">
              Não atende todo mundo. Escolhe com quem trabalha, da mesma forma que os melhores parceiros
              escolhem com quem se associam.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="section">
        <div className="dash" />
        <div className="method-eyebrow">PRIMEIRA CONVERSA</div>
        <h2 className="form-headline">O começo de toda boa parceria é uma conversa honesta.</h2>
        <p className="form-lead">Cerca de 3 minutos. Sem compromisso.</p>

        {submitted ? (
          <div className="confirm-box">
            <div className="confirm-title">Recebemos sua mensagem.</div>
            <div className="confirm-text">Vamos analisar com cuidado e entrar em contato pelo WhatsApp em breve.</div>
          </div>
        ) : (
          <div style={{ maxWidth: 900 }}>
            <div className="progress-row">
              {['VOCÊ', 'PERFIL', 'ENVIAR'].map((label, i) => {
                const n = i + 1;
                const active = step === n;
                const done = step > n;
                return (
                  <div className="progress-step" key={label}>
                    <div className={`progress-circle${active ? ' active' : ''}${done ? ' done' : ''}`}>{n}</div>
                    <div className={`progress-label${active ? ' active' : ''}`}>{label}</div>
                    {n < 3 && <div className="progress-line" />}
                  </div>
                );
              })}
            </div>

            {step === 1 && (
              <div>
                <div className="group-label">SOBRE VOCÊ</div>
                <div className="field">
                  <div className="field-label">NOME COMPLETO</div>
                  <input className="field-input" type="text" placeholder="Seu nome" value={formData.nome} onChange={setField('nome')} />
                </div>
                <div className="field">
                  <div className="field-label">WHATSAPP</div>
                  <input className="field-input" type="tel" placeholder="(11) 99999-9999" value={formData.whatsapp} onChange={setField('whatsapp')} />
                </div>
                <div className="field">
                  <div className="field-label">E-MAIL</div>
                  <input className="field-input" type="email" placeholder="seu@email.com" value={formData.email} onChange={setField('email')} />
                </div>
                <div className="field">
                  <div className="field-label">CIDADE / ESTADO</div>
                  <input className="field-input" type="text" placeholder="São Paulo, SP" value={formData.cidade} onChange={setField('cidade')} />
                </div>
                <div className="field" style={{ marginBottom: 64 }}>
                  <div className="field-label">INSTAGRAM (OPCIONAL)</div>
                  <input className="field-input" type="text" placeholder="@usuario" value={formData.instagram} onChange={setField('instagram')} />
                </div>
                <button type="button" className="btn-primary" disabled={!step1Valid} onClick={() => step1Valid && setStep(2)}>
                  CONTINUAR →
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="group-label">COMO CONHECEU O PROGRAMA?</div>
                <div style={{ marginBottom: 56 }}>
                  {COMO_CONHECEU.map((label) => (
                    <OptionBox key={label} label={label} selected={formData.comoConheceu === label} onClick={() => selectSingle('comoConheceu', label)} />
                  ))}
                </div>

                <div className="group-label">VOCÊ BUSCA UMA RELAÇÃO DE INVESTIMENTO DE:</div>
                <div style={{ marginBottom: 56 }}>
                  {PRAZO.map((label) => (
                    <OptionBox key={label} label={label} selected={formData.prazo === label} onClick={() => selectSingle('prazo', label)} />
                  ))}
                </div>

                <div className="group-label">QUAL FAIXA DE INVESTIMENTO VOCÊ PRETENDE INICIAR?</div>
                <div style={{ marginBottom: 56 }}>
                  {FAIXA.map((label) => (
                    <OptionBox key={label} label={label} selected={formData.faixa === label} onClick={() => selectSingle('faixa', label)} />
                  ))}
                </div>

                <div className="group-label" style={{ marginBottom: 8 }}>VOCÊ JÁ INVESTE ATUALMENTE?</div>
                <div className="group-sub">Pode selecionar mais de uma opção</div>
                <div style={{ marginBottom: 56 }}>
                  {JA_INVESTE.map((label) => (
                    <OptionBox key={label} label={label} kind="check" selected={formData.jaInveste.includes(label)} onClick={() => toggleMulti('jaInveste', label)} />
                  ))}
                </div>

                <div className="group-label">VOCÊ TEM DISPONIBILIDADE PARA UMA REUNIÃO?</div>
                <div style={{ marginBottom: 64 }}>
                  {DISPONIBILIDADE.map((label) => (
                    <OptionBox key={label} label={label} selected={formData.disponibilidade === label} onClick={() => selectSingle('disponibilidade', label)} />
                  ))}
                </div>

                <div className="btn-row">
                  <button type="button" className="btn-secondary" onClick={() => setStep(1)}>← VOLTAR</button>
                  <button type="button" className="btn-primary" disabled={!step2Valid} onClick={() => step2Valid && setStep(3)}>CONTINUAR →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div className="group-label" style={{ marginBottom: 8 }}>
                  O QUE FEZ VOCÊ PREENCHER ESTE FORMULÁRIO HOJE E PORQUE DEVERIA SER SELECIONADO?
                </div>
                <div className="group-sub">Pode ser honesto. Isso ajuda muito.</div>
                <div style={{ marginBottom: 64 }}>
                  <textarea className="field-textarea" placeholder="Escreva aqui..." rows={4} value={formData.motivo} onChange={setField('motivo')} />
                </div>
                <div className="btn-row">
                  <button type="button" className="btn-secondary" onClick={() => setStep(2)}>← VOLTAR</button>
                  <button type="submit" className="btn-primary">ENVIAR MINHA PRIMEIRA CONVERSA</button>
                </div>
              </form>
            )}
          </div>
        )}
      </section>
    </>
  );
}
