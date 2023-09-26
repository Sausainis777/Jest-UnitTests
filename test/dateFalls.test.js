import { dateFalls, isWeekend } from "../dateFalls"
describe("dateFalls function", () => {

    it("should retur a weekendday", () => {
        const sundayDate = new Date('2023-09-24')
        const result = isWeekend(sundayDate)
        expect(result).toBe(true);

    })
    it("should retur a work day date", () => {
        const sundayDate= new Date('2023-09-22')
        const result = isWeekend(sundayDate)
        expect(result).toBe(false);

    })

})