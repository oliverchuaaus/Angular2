"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 21, name: 'Mr. Nice' },
            { id: 22, name: 'Narco' },
            { id: 23, name: 'Bombasto' },
            { id: 24, name: 'Celeritas' },
            { id: 25, name: 'Magneta' },
            { id: 26, name: 'RubberMan' },
            { id: 27, name: 'Dynama' },
            { id: 28, name: 'Dr IQ' },
            { id: 29, name: 'Magma' },
            { id: 30, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map