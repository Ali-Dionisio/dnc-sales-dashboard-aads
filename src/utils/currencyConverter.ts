/**
 * Converte para Real
 * @param value - Valor para conversão
 * @returns O valor convertido (em Real)
 */
export function currencyConverter(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
