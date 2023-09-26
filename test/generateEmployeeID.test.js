import {generateEmployeeID} from "../generateEmployeeID"
describe('generate employee ID', () => {
    it('should generate employee Id correctly', () => {
        const name = "Tomas Svabauskas"
        const birthYear = 1986
        const id = generateEmployeeID(name, birthYear)
        expect(id).toBe("TOM-1986")
    })
})