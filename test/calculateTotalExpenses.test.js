import { calculateTotalExpenses } from "../calculateTotalExpenses";
describe('calculate total expences', () => {
    it('should calculate correctly', () => {
        const expences = [100, 200 ,300];
        const totalExpenses = calculateTotalExpenses(expences)
        expect(totalExpenses).toBe(600)
    })
})