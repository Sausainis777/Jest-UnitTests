import{validateEmail} from "../validateEmail"

describe('validate email function', () => {
    it("should return true for a valid email address", () => {
        const email = 'example@email.com'
        const isValid = validateEmail(email)
        expect(isValid).toBe(true)
    })
    it("should return false for invalid email address", () => {
        const email = 'invalid-email'
        const isValid = validateEmail(email)
        expect(isValid).toBe(false)
    })
})