export function formatSom(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value) + " сом";
}
