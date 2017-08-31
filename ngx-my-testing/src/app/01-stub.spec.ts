describe('Speedtrap', function () {
    it('tickets a car at more than 60mph', function () {
        var stubCar = { getSpeed: function () { return 61; } };
        var speedTrap = new SpeedTrap(stubCar);
        speedTrap.ticketCount = 0;
        speedTrap.checkSpeed();
        expect(speedTrap.ticketCount).toEqual(1);
    });
});

export class SpeedTrap {
    ticketCount: number;
    constructor(public stubCar: any) { }
    checkSpeed() {
        if (this.stubCar.getSpeed() > 60) {
            this.ticketCount = this.ticketCount + 1;
        }
    }
} 