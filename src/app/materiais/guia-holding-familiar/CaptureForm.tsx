'use client';

import { useState, type FormEvent } from 'react';

export function CaptureForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('material', 'guia-holding-familiar');
    setStatus('loading');

    try {
      if (!endpoint) {
        // Fallback: libera o download direto quando não há endpoint configurado
        window.location.href = '/materiais/guia-holding-familiar.pdf';
        setStatus('ok');
        return;
      }
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (res.ok) {
        setStatus('ok');
        // Dispara download
        window.location.href = '/materiais/guia-holding-familiar.pdf';
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div style={{ padding: '20px 0', color: 'rgb(var(--burgundy))', fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic', fontSize: 17 }}>
        Obrigado. O download está iniciando. Em breve enviaremos também por e-mail.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
      <label style={{ display: 'grid', gap: 6 }}>
        <span style={{ fontFamily: 'var(--font-instrument-sans)', fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgb(var(--brass))', fontWeight: 500 }}>
          Nome
        </span>
        <input
          name="nome"
          required
          placeholder="Seu nome"
          style={{ background: 'transparent', border: 0, borderBottom: '1px solid rgba(13,26,43,.3)', padding: '10px 0', fontFamily: 'var(--font-fraunces)', fontSize: 17, color: 'rgb(var(--ink))', outline: 'none' }}
        />
      </label>
      <label style={{ display: 'grid', gap: 6 }}>
        <span style={{ fontFamily: 'var(--font-instrument-sans)', fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgb(var(--brass))', fontWeight: 500 }}>
          E-mail
        </span>
        <input
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          style={{ background: 'transparent', border: 0, borderBottom: '1px solid rgba(13,26,43,.3)', padding: '10px 0', fontFamily: 'var(--font-fraunces)', fontSize: 17, color: 'rgb(var(--ink))', outline: 'none' }}
        />
      </label>
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 12.5, color: 'rgba(13,26,43,.72)', lineHeight: 1.5, marginTop: 4 }}>
        <input type="checkbox" required style={{ marginTop: 3 }} />
        <span>
          Li e concordo com a <a href="/privacidade" style={{ color: 'rgb(var(--brass))', borderBottom: '1px dashed' }}>Política de Privacidade</a>.
        </span>
      </label>
      {status === 'error' && (
        <p style={{ color: 'rgb(var(--burgundy))', fontSize: 13, fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic' }}>
          Não foi possível registrar. Tente novamente, por favor.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{ justifySelf: 'start', marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 14, padding: '16px 28px', background: 'rgb(var(--ink))', color: 'rgb(var(--paper))', border: 0, cursor: 'pointer', fontFamily: 'var(--font-instrument-sans)', fontSize: 12.5, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 600, transition: 'all .3s' }}
      >
        {status === 'loading' ? 'Enviando…' : 'Receber o guia'} <span style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic', fontSize: 18 }}>→</span>
      </button>
    </form>
  );
}
