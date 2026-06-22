
// Type exports for consumers
// Add specific types as needed
export function formatPhilHealth(num: string): string {
  const cleaned = num.replace(/[^0-9]/g, "");
  if (cleaned.length !== 12) throw new Error("PhilHealth must be 12 digits");
  return `${cleaned.slice(0,2)}-${cleaned.slice(2,11)}-${cleaned.slice(11)}`;
}
