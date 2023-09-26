import { isEmployeeEligibleForBonus } from "../isEmployeeEligibleForBonus";
describe('check or emlopyee eligible for bonud', () => {
    it('should checking or function correctly determines ', () => {
        const performanceRating = 8;
        const rating = isEmployeeEligibleForBonus(performanceRating)
        expect(rating).toBe(true)
    })
    it('should checking or function correctly determines ', () => {
        const performanceRating = 5;
        const rating = isEmployeeEligibleForBonus(performanceRating)
        expect(rating).toBe(false)
})
})