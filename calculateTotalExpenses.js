export function calculateTotalExpenses(expenses) {
   
    return expenses.reduce((total, expense) => total + expense, 0);
}