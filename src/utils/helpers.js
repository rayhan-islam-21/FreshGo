export function formatPrice(value) {
  return (typeof value === 'number') ? value.toFixed(2) : value
}
