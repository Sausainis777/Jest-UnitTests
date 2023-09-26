import {calculateMonthlySalary} from "../calculateMonthlySalary"
describe('calculate monthly salary', () => {
    it('should calculate salary correctly', () => {
        const hourlyWage = 15;
        const hoursWorked = 160;
        const salary = calculateMonthlySalary(hourlyWage, hoursWorked)
        expect(salary).toBe(2400)
    })
})