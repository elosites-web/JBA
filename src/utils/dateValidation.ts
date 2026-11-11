/**
 * Utilitários de data para o formulário de orçamento e agendamento da JBA
 */

/**
 * Retorna a data atual no formato YYYY-MM-DD baseado no horário local
 */
export function getTodayMinDate(now: Date = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Verifica se uma data YYYY-MM-DD é anterior à data mínima permitida (hoje)
 */
export function isPastDate(dateStr: string, minDate: string = getTodayMinDate()): boolean {
  if (!dateStr) return false;
  return dateStr < minDate;
}

/**
 * Converte data no formato YYYY-MM-DD para DD/MM/AAAA para exibição brasileira
 */
export function formatDateBR(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}
