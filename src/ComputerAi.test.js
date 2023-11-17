import ComputerAi from "./ComputerAi";

test('gets Random valid coordinates', () => {
    const computerAi = new ComputerAi(7);
    const randomCords = computerAi.getRandomCords();
    expect(randomCords[0] > 0 && randomCords[1] <= 7).toBeTruthy();
});