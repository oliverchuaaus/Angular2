class MockCar {
    startCallCount: number = 0;
    start() {
        this.startCallCount++;
    }
}

class CarRemote {
    constructor(public car: MockCar) {
    }
    holdButton(str) {
        this.car.start();
    }
}

describe('CarRemote', function () {
    it('starts the car when the start key is held', function () {
        var car = new MockCar();
        var remote = new CarRemote(car);
        remote.holdButton('start');
        expect(car.startCallCount).toEqual(1);
    });
});