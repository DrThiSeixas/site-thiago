'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'ok' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('loading');

    try {
      if (!endpoint) {
        // Sem endpoint configurado — abre mailto como fallback
        const body = Array.from(data.entries())
          .filter(([k]) => !k.startsWith('_'))
          .map(([k, v]) => `${k}: ${v}`)
          .join('\n');
        window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'contato@thiagoseixas.adv.br'}?subject=${encodeURIComponent('Contato via site')}&body=${encodeURIComponent(body)}`;
        setStatus('ok');
        return;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (res.ok) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div style={{padding:'40px 32px',border:'1px solid rgb(var(--brass))',background:'rgba(166,138,77,.08)',fontFamily:'var(--font-fraunces)',fontSize:18,lineHeight:1.6,color:'rgb(var(--paper))'}}>
        Mensagem registrada. Retorno em até 24 horas úteis.
      </div>
    );
  }

  return (
    <form className="quali" onSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor="nome">Nome completo</label>
        <input id="nome" name="nome" type="text" required placeholder="Seu nome" />
      </div>
      <div className="two">
        <div className="row">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required placeholder="seu@email.com" />
        </div>
        <div className="row">
          <label htmlFor="tel">Telefone / WhatsApp</label>
          <input id="tel" name="tel" type="tel" placeholder="(00) 00000-0000" />
        </div>
      </div>
      <div className="row">
        <label htmlFor="frente">Frente de interesse</label>
        <select id="frente" name="frente" defaultValue="">
          <option value="" disabled>Selecione — opcional</option>
          <option>Holding patrimonial</option>
          <option>Governança familiar</option>
          <option>Governança societária</option>
          <option>Organização patrimonial</option>
          <option>Organização sucessória</option>
          <option>Estruturação societária preventiva</option>
          <option>Ainda estou avaliando</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="cenario">Breve descrição do cenário ou dúvida</label>
        <textarea id="cenario" name="cenario" placeholder="Descreva com suas palavras a situação: patrimônio, sociedades, família, o que busca resolver ou entender. Não precisa de linguagem técnica." />
      </div>
      <label className="consent">
        <input type="checkbox" required />
        <span>Li e concordo com a <a href="/privacidade">Política de Privacidade</a>. Autorizo o contato pelos canais informados.</span>
      </label>
      {status === 'error' && (
        <p style={{color:'rgb(var(--burgundy))',fontSize:13,fontFamily:'var(--font-instrument-serif)',fontStyle:'italic'}}>
          Erro ao enviar. Por favor, tente novamente ou envie e-mail diretamente.
        </p>
      )}
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando…' : 'Enviar mensagem'} <span className="arr">→</span>
      </button>
    </form>
  );
}
