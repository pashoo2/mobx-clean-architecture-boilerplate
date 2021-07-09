"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobxUseCaseAsyncFabric = void 0;
const mobx_1 = require("mobx");
function mobxUseCaseAsyncFabric(useCaseGeneratorFunction) {
    return mobx_1.flow(useCaseGeneratorFunction);
}
exports.mobxUseCaseAsyncFabric = mobxUseCaseAsyncFabric;
//# sourceMappingURL=mobxUseCaseAsyncFabric.js.map