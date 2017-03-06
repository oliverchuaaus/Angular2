"use strict";
var my_service_1 = require("./my-service");
var my_class_1 = require("./my-class");
var myServiceFactory = function (myClass) {
    return new my_service_1.MyService(myClass, myClass.male);
};
exports.myServiceProvider = {
    provide: my_service_1.MyService,
    useFactory: myServiceFactory,
    deps: [my_class_1.MyClass]
};
//# sourceMappingURL=my-service-provider.js.map