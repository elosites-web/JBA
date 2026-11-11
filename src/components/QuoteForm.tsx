import React, { useState } from 'react';
import { MessageCircle, AlertCircle, Send, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const QuoteForm: React.FC = () => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ name?: string; service?: string }>({});

  const serviceOptions = [
    { id: 'Corte de grama', label: 'Corte de grama (com roçadeira)' },
    { id: 'Poda de plantas', label: 'Poda de plantas (com tesourão)' },
    { id: 'Limpeza de piscinas', label: 'Limpeza de piscinas' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; service?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Por favor, informe seu nome.';
    }
    if (!service) {
      newErrors.service = 'Por favor, selecione o serviço desejado.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct the formatted WhatsApp message exactly as requested
    let fullText = `Olá, Aristeu! Gostaria de solicitar um orçamento com a JBA.\n\n`;
    fullText += `Nome: ${name.trim()}\n`;
    fullText += `Serviço desejado: ${service}\n`;
    if (neighborhood.trim()) {
      fullText += `Bairro: ${neighborhood.trim()}\n`;
    }
    if (message.trim()) {
      fullText += `Mensagem: ${message.trim()}\n`;
    }

    const whatsappUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
      fullText
    )}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="orcamento"
      className="py-16 md:py-24 bg-white border-b border-neutral-200"
      aria-labelledby="orcamento-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165C2A]/10 border border-[#2B921D]/30 text-[#165C2A] text-xs font-bold uppercase tracking-wider mb-3">
            Solicitação Rápida
          </div>
          <h2
            id="orcamento-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2F0D] tracking-tight mb-4"
          >
            Peça seu Orçamento
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Preencha os dados abaixo para gerar sua mensagem personalizada e conversar diretamente com o Aristeu Barbosa no WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-[#F7FAF6] border border-neutral-200/90 p-6 sm:p-10 shadow-lg reveal-on-scroll reveal-delay-100">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Field: Nome */}
            <div>
              <label
                htmlFor="form-nome"
                className="block text-sm font-bold text-neutral-900 mb-1.5"
              >
                Seu Nome <span className="text-red-500" aria-hidden="true">*</span>
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
                className={`w-full px-4 py-3 rounded-xl border bg-white text-neutral-900 text-sm focus:outline-none transition-all ${
                  errors.name
                    ? 'border-red-500 ring-2 ring-red-200'
                    : 'border-neutral-300 focus:border-[#2B921D] focus:ring-2 focus:ring-[#77D100]/30'
                }`}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'error-nome' : undefined}
              />
              {errors.name && (
                <p id="error-nome" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Field: Serviço Desejado */}
            <div>
              <label
                htmlFor="form-servico"
                className="block text-sm font-bold text-neutral-900 mb-1.5"
              >
                Serviço Desejado <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <select
                id="form-servico"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                }}
                className={`w-full px-4 py-3 rounded-xl border bg-white text-neutral-900 text-sm focus:outline-none transition-all appearance-none cursor-pointer ${
                  errors.service
                    ? 'border-red-500 ring-2 ring-red-200'
                    : 'border-neutral-300 focus:border-[#2B921D] focus:ring-2 focus:ring-[#77D100]/30'
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
                <p id="error-servico" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.service}</span>
                </p>
              )}
            </div>

            {/* Field: Bairro (opcional) */}
            <div>
              <label
                htmlFor="form-bairro"
                className="block text-sm font-bold text-neutral-900 mb-1.5"
              >
                Bairro em Jundiaí <span className="text-xs font-normal text-neutral-500">(opcional)</span>
              </label>
              <input
                id="form-bairro"
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Ex: Eloy Chaves, Anhangabaú, Caxambu..."
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 text-sm focus:border-[#2B921D] focus:ring-2 focus:ring-[#77D100]/30 focus:outline-none transition-all"
              />
            </div>

            {/* Field: Mensagem adicional (opcional) */}
            <div>
              <label
                htmlFor="form-mensagem"
                className="block text-sm font-bold text-neutral-900 mb-1.5"
              >
                Mensagem adicional <span className="text-xs font-normal text-neutral-500">(opcional)</span>
              </label>
              <textarea
                id="form-mensagem"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descreva detalhes como tamanho aproximado da área, se a piscina precisa de aspiração ou decantação, etc."
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 text-sm focus:border-[#2B921D] focus:ring-2 focus:ring-[#77D100]/30 focus:outline-none transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white text-base font-bold shadow-lg hover:shadow-xl active:scale-[0.99] transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#77D100]"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Enviar Orçamento no WhatsApp</span>
                <Send className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Privacy notice */}
            <div className="pt-3 border-t border-neutral-200/80 flex items-start gap-2 text-left">
              <ShieldCheck className="w-4 h-4 text-[#165C2A] shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-500 leading-relaxed">
                {siteConfig.disclaimer.privacyNote}
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
