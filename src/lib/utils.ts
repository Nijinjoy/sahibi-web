/**
 * Formats an amount in minor units (fils for AED) as e.g. "AED 1,430" or "AED 12.50".
 * Whole amounts drop the decimals.
 */
export function formatPrice(amountInMinor: number, currency = "AED", locale = "en-AE") {
  const whole = amountInMinor % 100 === 0;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "code",
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amountInMinor / 100);
}

export function plural(count: number, one: string, many = `${one}s`) {
  return `${count} ${count === 1 ? one : many}`;
}
