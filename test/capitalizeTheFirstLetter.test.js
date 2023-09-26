import {capitalizeString} from "../capitalizeTheFirstLetter"

describe('capitalize the first letter', () => {
    it('should capitalized the fist letter correctly', () => {
        const input = 'hello'
        const capitalized = capitalizeString(input);
        expect(capitalized).toBe('Hello')
    })
})