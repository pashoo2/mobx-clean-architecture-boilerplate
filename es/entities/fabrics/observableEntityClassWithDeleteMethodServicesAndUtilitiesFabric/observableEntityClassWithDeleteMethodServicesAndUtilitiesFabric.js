"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric = void 0;
const mobx_1 = require("mobx");
const fabrics_1 = require("@pashoo2/clean-architecture-boilerplate/es/entities/fabrics");
function observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric(parameters, services, utilities) {
    class ObservableEntityConstructorWithDeleteMethod extends fabrics_1.entityClassWithDeleteMethodServicesAndUtilitiesFabric(parameters, services, utilities) {
        constructor(parameters) {
            super(parameters);
            mobx_1.makeObservable(this, {
                isDeleted: mobx_1.computed,
                $delete: mobx_1.action,
            });
            // TODO - the private property might become a private (actually without an access from an outside) in future
            mobx_1.makeObservable(this, {
                __isDeleted: mobx_1.observable,
            });
        }
    }
    return ObservableEntityConstructorWithDeleteMethod;
}
exports.observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric = observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric;
//# sourceMappingURL=observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric.js.map