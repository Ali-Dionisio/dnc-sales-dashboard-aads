/**
 * Converte pixel para rem
 * @param pixels - Valor de pixel para conversão
 * @returns O valor convertido (em rem)
 */
export function pxToRem(pixels: number) {
  return `${pixels / 16}rem`
}
