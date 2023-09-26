import { generateInvoiceNumber } from "../generateInvoiceNumber";
describe('generate invoice number', () => {
    it('should checking if the function correctly generates ', () => {
        const counter = 5;
        const newInvoice = generateInvoiceNumber(counter)
        expect(newInvoice).toBe('2023-09-5')
    })
})