"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observableEntityClassFabricWithServicesAndUtilities = void 0;
const mobx_1 = require("mobx");
const fabrics_1 = require("@pashoo2/clean-architecture-boilerplate/es/entities/fabrics");
function observableEntityClassFabricWithServicesAndUtilities(parameters, services, utilities) {
    class ObservableEntityConstructor extends fabrics_1.entityClassFabricWithServicesAndUtilities(parameters, services, utilities) {
        constructor(parameters) {
            super(parameters);
            mobx_1.makeObservable(this, {
                isDeleted: mobx_1.computed,
            });
            // TODO - the private property might become a private (actually without an access from an outside) in future
            mobx_1.makeObservable(this, {
                __isDeleted: mobx_1.observable,
                _delete: mobx_1.action,
            });
        }
    }
    return ObservableEntityConstructor;
}
exports.observableEntityClassFabricWithServicesAndUtilities = observableEntityClassFabricWithServicesAndUtilities;
//# sourceMappingURL=observableEntityClassFabricWithServicesAndUtilities.js.map