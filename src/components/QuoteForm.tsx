import React, { useState, useMemo } from 'react';
import { AlertCircle, Calendar, Clock, ShieldCheck, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getTodayMinDate, isPastDate, formatDateBR } from '../utils/dateValidation';

export const QuoteForm: React.FC = () => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [period, setPeriod] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const [errors, setErrors] = useState<{ name?: string; service?: string; visitDate?: string }>({});

  // Minimum selectable date (today in local time formatted as YYYY-MM-DD)
  const todayMinDate = useMemo(() => getTodayMinDate(), []);

  const serviceOptions = [
    { id: 'Corte de grama', label: 'Corte de grama' },
    { id: 'Poda de plantas', label: 'Poda de plantas' },
    { id: 'Limpeza de piscinas', label: 'Limpeza de piscinas' },
    { id: 'Paisagismo', label: 'Paisagismo' },
  ];

  const periodOptions = [
    { id: '', label: 'Selecione o período...' },
    { id: 'Manhã', label: 'Manhã' },
    { id: 'Tarde', label: 'Tarde' },
    { id: 'Sem preferência', label: 'Sem preferência' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; service?: string; visitDate?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }
    if (!service) {
      newErrors.service = 'Por favor, selecione o serviço desejado.';
    }
    if (visitDate && isPastDate(visitDate, todayMinDate)) {
      newErrors.visitDate = 'A data para visita não pode ser anterior a hoje.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct the formatted WhatsApp message exactly as requested
    const messageLines: string[] = [
      'Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento com a JBA.',
      '',
      `Nome: ${name.trim()}`,
      `Serviço desejado: ${service}`,
    ];

    if (neighborhood.trim()) {
      messageLines.push(`Bairro: ${neighborhood.trim()}`);
    }

    if (visitDate) {
      messageLines.push(`Data preferencial para visita: ${formatDateBR(visitDate)}`);
    }

    if (period && period.trim()) {
      messageLines.push(`Período preferencial: ${period.trim()}`);
    }

    if (additionalNotes.trim()) {
      messageLines.push(`Observações adicionais: ${additionalNotes.trim()}`);
    }

    messageLines.push('');
    messageLines.push('Gostaria de combinar a visita para que você possa avaliar o local e preparar o orçamento.');

    const fullText = messageLines.join('\n');

    const whatsappUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
      fullText
    )}`;

    // Abrir o WhatsApp em nova aba preservando noopener e noreferrer
    // Evita o falso positivo de bloqueio onde window.open com noopener retorna null e causava redirecionamento indevido da página atual
    try {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Alternativa caso ocorra restrição no ambiente de execução
      window.location.href = whatsappUrl;
    }
  };

  return (
    <section
      id="orcamento"
      className="section-subtle-bg section-bg-orcamento py-16 md:py-24 bg-gradient-to-b from-[#F0F7EF] to-[#E8F2E7] border-b border-[#2B921D]/20 overflow-hidden"
      aria-labelledby="orcamento-heading"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165C2A]/10 border border-[#2B921D]/30 text-[#165C2A] text-xs font-bold uppercase tracking-wider mb-3">
            Avaliação Presencial
          </div>
          <h2
            id="orcamento-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2F0D] tracking-tight mb-4"
          >
            Solicite uma visita para avaliação
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed max-w-xl mx-auto">
            Informe seus dados e o serviço desejado para iniciar o contato com Aristeu. A avaliação presencial permite conhecer o local antes da elaboração do orçamento.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#13491C] via-[#0E3A15] to-[#08270E] border-2 border-[#2B921D]/60 p-6 sm:p-10 shadow-2xl shadow-emerald-950/40 reveal-on-scroll reveal-delay-100 relative overflow-hidden">
          {/* Subtle top specular accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#77D100]/50 to-transparent" aria-hidden="true" />

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Field: Nome Completo (Obrigatório) */}
            <div>
              <label
                htmlFor="form-nome"
                className="block text-sm font-bold text-white mb-1.5"
              >
                Nome completo <span className="text-[#77D100] font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="form-nome"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Ex: Carlos Eduardo"
                className={`w-full px-4 py-3 rounded-xl border bg-white text-neutral-900 placeholder:text-neutral-500 text-sm focus:outline-none transition-all ${
                  errors.name
                    ? 'border-red-400 ring-2 ring-red-300'
                    : 'border-emerald-200/90 focus:border-[#77D100] focus:ring-2 focus:ring-[#77D100]/40'
                }`}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'error-nome' : undefined}
              />
              {errors.name && (
                <p id="error-nome" className="mt-1.5 text-xs text-red-200 bg-red-950/70 border border-red-500/40 px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-300" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Field: Serviço Desejado (Obrigatório) */}
            <div>
              <label
                htmlFor="form-servico"
                className="block text-sm font-bold text-white mb-1.5"
              >
                Serviço desejado <span className="text-[#77D100] font-bold" aria-hidden="true">*</span>
              </label>
              <select
                id="form-servico"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                }}
                className={`w-full px-4 py-3 rounded-xl border bg-white text-neutral-900 text-sm focus:outline-none transition-all cursor-pointer ${
                  errors.service
                    ? 'border-red-400 ring-2 ring-red-300'
                    : 'border-emerald-200/90 focus:border-[#77D100] focus:ring-2 focus:ring-[#77D100]/40'
                }`}
                aria-required="true"
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? 'error-servico' : undefined}
              >
                <option value="">Selecione o serviço...</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="error-servico" className="mt-1.5 text-xs text-red-200 bg-red-950/70 border border-red-500/40 px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-300" />
                  <span>{errors.service}</span>
                </p>
              )}
            </div>

            {/* Field: Bairro (Opcional) */}
            <div>
              <label
                htmlFor="form-bairro"
                className="block text-sm font-bold text-white mb-1.5"
              >
                Bairro em Jundiaí <span className="text-xs font-normal text-emerald-200/90 ml-1">(opcional)</span>
              </label>
              <input
                id="form-bairro"
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Informe seu bairro em Jundiaí"
                className="w-full px-4 py-3 rounded-xl border border-emerald-200/90 bg-white text-neutral-900 placeholder:text-neutral-500 text-sm focus:border-[#77D100] focus:ring-2 focus:ring-[#77D100]/40 focus:outline-none transition-all"
              />
            </div>

            {/* Grid for Date and Period Preferences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Field: Data preferencial para a visita (Opcional, min hoje) */}
              <div>
                <label
                  htmlFor="form-data-visita"
                  className="block text-sm font-bold text-white mb-1.5"
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#77D100]" />
                    <span>Data preferencial para a visita</span>
                  </span>
                  <span className="text-xs font-normal text-emerald-200/90 ml-1">(opcional)</span>
                </label>
                <input
                  id="form-data-visita"
                  type="date"
                  min={todayMinDate}
                  value={visitDate}
                  onChange={(e) => {
                    setVisitDate(e.target.value);
                    if (errors.visitDate) setErrors((prev) => ({ ...prev, visitDate: undefined }));
                  }}
                  aria-invalid={!!errors.visitDate}
                  aria-describedby={errors.visitDate ? 'error-data-visita' : undefined}
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-neutral-900 text-sm focus:outline-none transition-all cursor-pointer ${
                    errors.visitDate
                      ? 'border-red-400 ring-2 ring-red-300'
                      : 'border-emerald-200/90 focus:border-[#77D100] focus:ring-2 focus:ring-[#77D100]/40'
                  }`}
                />
                {errors.visitDate && (
                  <p id="error-data-visita" className="mt-1.5 text-xs text-red-200 bg-red-950/70 border border-red-500/40 px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-300" />
                    <span>{errors.visitDate}</span>
                  </p>
                )}
              </div>

              {/* Field: Período preferencial (Opcional) */}
              <div>
                <label
                  htmlFor="form-periodo-visita"
                  className="block text-sm font-bold text-white mb-1.5"
                >
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#77D100]" />
                    <span>Período preferencial</span>
                  </span>
                  <span className="text-xs font-normal text-emerald-200/90 ml-1">(opcional)</span>
                </label>
                <select
                  id="form-periodo-visita"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200/90 bg-white text-neutral-900 text-sm focus:border-[#77D100] focus:ring-2 focus:ring-[#77D100]/40 focus:outline-none transition-all cursor-pointer"
                >
                  {periodOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Field: Observações Adicionais (Opcional) */}
            <div>
              <label
                htmlFor="form-observacoes"
                className="block text-sm font-bold text-white mb-1.5"
              >
                Observações Adicionais <span className="text-xs font-normal text-emerald-200/90 ml-1">(opcional)</span>
              </label>
              <textarea
                id="form-observacoes"
                rows={3}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Se desejar, detalhe as características do local (ex.: tamanho do terreno, tipo de vegetação, acesso ou necessidades específicas antes da visita técnica)."
                className="w-full px-4 py-3 rounded-xl border border-emerald-200/90 bg-white text-neutral-900 placeholder:text-neutral-500 text-sm focus:border-[#77D100] focus:ring-2 focus:ring-[#77D100]/40 focus:outline-none transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white text-base font-bold shadow-lg shadow-black/25 border border-[#77D100]/50 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#77D100]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar visita pelo WhatsApp</span>
                <Send className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Notice about date/period preference & in-person quote */}
            <div className="p-4 rounded-xl bg-[#06200A]/80 border border-[#77D100]/40 text-left shadow-inner">
              <p className="text-xs text-emerald-100 leading-relaxed font-normal">
                <strong className="text-[#77D100] font-bold">Importante:</strong> a data e o período informados são apenas uma preferência. Aristeu entrará em contato para confirmar a disponibilidade da visita. O orçamento será elaborado após a avaliação presencial do local.
              </p>
            </div>

            {/* Privacy notice */}
            <div className="pt-3 border-t border-[#2B921D]/40 flex items-start gap-2 text-left">
              <ShieldCheck className="w-4 h-4 text-[#77D100] shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                {siteConfig.disclaimer.privacyNote}
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
