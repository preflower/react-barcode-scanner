"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const coreRule = (0, utils_1.getCoreRule)("object-property-newline");
exports.default = (0, utils_1.createRule)("object-property-newline", {
    meta: {
        docs: {
            description: "enforce placing object properties on separate lines",
            recommended: null,
            extensionRule: true,
            layout: true,
        },
        fixable: (_a = coreRule.meta) === null || _a === void 0 ? void 0 : _a.fixable,
        hasSuggestions: coreRule.meta.hasSuggestions,
        schema: coreRule.meta.schema,
        messages: coreRule.meta.messages,
        type: coreRule.meta.type,
    },
    create(context) {
        return (0, utils_1.defineWrapperListener)(coreRule, context, context.options);
    },
});
