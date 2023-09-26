export function generateInvoiceNumber(counter) {
    // Get the current date.
    const currentDate = new Date();
    
    // Extract the year from the current date.
    const year = currentDate.getFullYear();
    
    // Extract the month from the current date and ensure it is two digits ('01' for January).
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    
    // Combine the year, month, and counter with hyphens to generate the invoice number.
    return `${year}-${month}-${counter}`;
}