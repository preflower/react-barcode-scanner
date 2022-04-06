"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const coreRule = (0, utils_1.getCoreRule)("comma-dangle");
exports.default = (0, utils_1.createRule)("comma-dangle", {
    meta: {
        docs: {
            description: "require or disallow trailing commas",
            recommended: ["json"],
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
        const options = [...context.options];
        if (!options[0]) {
            options[0] = "never";
        }
        return (0, utils_1.defineWrapperListener)(coreRule, context, options);
    },
});
