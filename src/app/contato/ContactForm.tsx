'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

type Status = 'idle' | 'loading' | 'error';

type ContactFormProps = {
  defaultFrente?: string;
  origem?: string;
  submitLabel?: string;
  compacto?: boolean;
};

const demandas = [
  'Advocacia societária',
  'Holding patrimonial',
  'Planejamento sucessório',
  'Acordo de sócios',
  'Empresa familiar',
  'Contrato social / alteração contratual',
  'Outro',
];

export function ContactForm({
  defaultFrente = '',
  origem = 'contato',
  submitLabel = 'Enviar demanda',
  compacto = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const router = useRouter();
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    setStatus('loading');

    trackEvent('form_submit_attempt', {
      origem,
      tipo_demanda: String(payload.frente || defaultFrente || 'não informado'),
    });

    try {
      if (!endpoint) {
        const body = Array.from(data.entries())
          .filter(([k]) => !k.startsWith('_'))
          .map(([k, v]) => `${k}: ${v}`)
          .join('\n');

        trackEvent('click_email', {
          local: `formulario_${origem}`,
          motivo: 'fallback_sem_endpoint',
        });

        window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'contato@thiagoseixas.adv.br'}?subject=${encodeURIComponent('Contato via site')}&body=${encodeURIComponent(body)}`;
        setStatus('idle');
        return;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        trackEvent('generate_lead', {
          origem,
          tipo_demanda: String(payload.frente || defaultFrente || 'não informado'),
        });
        form.reset();
        router.push('/obrigado');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="quali" onSubmit={handleSubmit}>
      <input type="hidden" name="origem" value={origem} />
      <input type="hidden" name="pagina" value={origem} />

      <div className="row">
        <label htmlFor={`nome-${origem}`}>Nome completo</label>
        <input id={`nome-${origem}`} name="nome" type="text" required placeholder="Seu nome" autoComplete="name" />
      </div>

      <div className={compacto ? 'row' : 'two'}>
        <div className="row">
          <label htmlFor={`email-${origem}`}>E-mail</label>
          <input id={`email-${origem}`} name="email" type="email" required placeholder="seu@email.com" autoComplete="email" />
        </div>
        <div className="row">
          <label htmlFor={`tel-${origem}`}>WhatsApp</label>
          <input id={`tel-${origem}`} name="tel" type="tel" required placeholder="(00) 00000-0000" autoComplete="tel" />
        </div>
      </div>

      <div className="row">
        <label htmlFor={`frente-${origem}`}>Tipo de demanda</label>
        <select id={`frente-${origem}`} name="frente" defaultValue={defaultFrente} required>
          <option value="" disabled>Selecione</option>
          {demandas.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="row">
        <label htmlFor={`cenario-${origem}`}>Breve descrição</label>
        <textarea
          id={`cenario-${origem}`}
          name="cenario"
          required
          placeholder="Descreva em poucas linhas o cenário: empresa, sócios, família, patrimônio ou ato societário que precisa ser analisado."
        />
      </div>

      <label className="consent">
        <input type="checkbox" name="consentimento" value="sim" required />
        <span>Li e concordo com a <a href="/privacidade">Política de Privacidade</a>. Autorizo o contato pelos canais informados.</span>
      </label>

      {status === 'error' && (
        <p className="form-error">
          Erro ao enviar. Tente novamente ou utilize os canais oficiais de contato.
        </p>
      )}

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando…' : submitLabel} <span className="arr">→</span>
      </button>
    </form>
  );
}
