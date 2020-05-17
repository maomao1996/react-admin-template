export function isHidden(el: HTMLElement): boolean {
  const style = window.getComputedStyle(el)
  return style.display === 'none'
}
