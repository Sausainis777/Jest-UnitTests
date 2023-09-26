import{add} from "../sum"

describe("add function", () => {
    it("should add two numbers correctly", () => {
        expect(add(5, 5)).toBe(10)
    })
    it("should handle negative numbers", () => {
        expect(add(-1, 2)).toBe(1)

    })
    it("should return NaN for non-numeric input", () => {
        expect(isNaN(add('hello', 2))).toBe(true)
    })
})
