import { formatPhoneNumber } from "../formatPhoneNumber"

describe('formatPhoneNumber', () => {
    it('should format a phone number correctly', () => {
        const phoneNumber = '123-456-7890';
        const formattedNumber = formatPhoneNumber(phoneNumber);
        expect(formattedNumber).toBe('123-456-7890')
    })
})