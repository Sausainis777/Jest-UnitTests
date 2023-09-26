import { generateRandomPassword } from "../generateRandomPassword"
describe('generate random password', () => {
    it('should generate a random password of specified length (12)', () => {
        const password = generateRandomPassword(12);
        expect(password).toHaveLength(12)
    })
})