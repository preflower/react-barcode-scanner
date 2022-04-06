"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewcommandConfiguration = void 0;
var Configuration_js_1 = require("../Configuration.js");
var NewcommandItems_js_1 = require("./NewcommandItems.js");
var NewcommandUtil_js_1 = require("./NewcommandUtil.js");
require("./NewcommandMappings.js");
var ParseMethods_js_1 = require("../ParseMethods.js");
var sm = require("../SymbolMap.js");
var init = function (config) {
    new sm.DelimiterMap(NewcommandUtil_js_1.default.NEW_DELIMITER, ParseMethods_js_1.default.delimiter, {});
    new sm.CommandMap(NewcommandUtil_js_1.default.NEW_COMMAND, {}, {});
    new sm.EnvironmentMap(NewcommandUtil_js_1.default.NEW_ENVIRONMENT, ParseMethods_js_1.default.environment, {}, {});
    config.append(Configuration_js_1.Configuration.local({ handler: { character: [],
            delimiter: [NewcommandUtil_js_1.default.NEW_DELIMITER],
            macro: [NewcommandUtil_js_1.default.NEW_DELIMITER,
                NewcommandUtil_js_1.default.NEW_COMMAND],
            environment: [NewcommandUtil_js_1.default.NEW_ENVIRONMENT]
        },
        priority: -1 }));
};
exports.NewcommandConfiguration = Configuration_js_1.Configuration.create('newcommand', {
    handler: {
        macro: ['Newcommand-macros']
    },
    items: (_a = {},
        _a[NewcommandItems_js_1.BeginEnvItem.prototype.kind] = NewcommandItems_js_1.BeginEnvItem,
        _a),
    options: { maxMacros: 1000 },
    init: init
});
//# sourceMappingURL=NewcommandConfiguration.js.map