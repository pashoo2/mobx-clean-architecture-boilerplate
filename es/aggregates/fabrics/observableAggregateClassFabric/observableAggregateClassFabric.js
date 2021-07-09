"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observableAggregateClassFabric = void 0;
const mobx_1 = require("mobx");
const fabrics_1 = require("@pashoo2/clean-architecture-boilerplate/es/aggregates/fabrics");
function observableAggregateClassFabric(parameters) {
    class ObservableAggregateRootConstructor extends fabrics_1.aggregateClassFabric(parameters) {
        constructor(constructorParameters) {
            super(constructorParameters);
            mobx_1.makeObservable(this, {
                isDeleted: mobx_1.computed,
                delete: mobx_1.action,
            });
            // TODO - the private property might become a private (actually without an access from an outside) in future
            mobx_1.makeObservable(this, {
                __isDeleted: mobx_1.observable,
            });
        }
    }
    return ObservableAggregateRootConstructor;
}
exports.observableAggregateClassFabric = observableAggregateClassFabric;
//# sourceMappingURL=observableAggregateClassFabric.js.map