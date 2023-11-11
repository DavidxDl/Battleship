import { AI } from "../dist/AI";

const ai = new AI()

test('getting random cords', () => {
    expect(ai.getRandomCords().every(cord => cord >= 0 && cord <= 10)).toBeTruthy();
})
