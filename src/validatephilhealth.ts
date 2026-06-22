
// Type exports for consumers
// Add specific types as needed
export function validatePhilHealth(num: string): boolean {
  const cleaned = num.replace(/[^0-9]/g, "");
  return /^\d{12}$/.test(cleaned);
}
