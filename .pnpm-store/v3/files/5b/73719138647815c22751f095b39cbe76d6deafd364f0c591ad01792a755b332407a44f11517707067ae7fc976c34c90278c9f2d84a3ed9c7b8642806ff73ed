"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoreRule = exports.defineWrapperListener = exports.createRule = void 0;
const jsoncESLintParser = __importStar(require("jsonc-eslint-parser"));
const path_1 = __importDefault(require("path"));
function createRule(ruleName, rule) {
    return {
        meta: Object.assign(Object.assign({}, rule.meta), { docs: Object.assign(Object.assign({}, rule.meta.docs), { url: `https://ota-meshi.github.io/eslint-plugin-jsonc/rules/${ruleName}.html`, ruleId: `jsonc/${ruleName}`, ruleName }) }),
        jsoncDefineRule: rule,
        create(context) {
            if (typeof context.parserServices.defineCustomBlocksVisitor ===
                "function" &&
                path_1.default.extname(context.getFilename()) === ".vue") {
                return context.parserServices.defineCustomBlocksVisitor(context, jsoncESLintParser, {
                    target(lang, block) {
                        if (lang) {
                            return /^json[5c]?$/i.test(lang);
                        }
                        return block.name === "i18n";
                    },
                    create(blockContext) {
                        return rule.create(blockContext, {
                            customBlock: true,
                        });
                    },
                });
            }
            return rule.create(context, {
                customBlock: false,
            });
        },
    };
}
exports.createRule = createRule;
function defineWrapperListener(coreRule, context, options) {
    if (!context.parserServices.isJSON) {
        return {};
    }
    const listener = coreRule.create({
        __proto__: context,
        options,
    });
    const jsonListener = {};
    for (const key of Object.keys(listener)) {
        const original = listener[key];
        if (!original) {
            continue;
        }
        const jsonKey = key.replace(/(?:^|\b)(ExpressionStatement|ArrayExpression|ObjectExpression|Property|Identifier|Literal|UnaryExpression)(?:\b|$)/gu, "JSON$1");
        jsonListener[jsonKey] = function (node, ...args) {
            original.call(this, getProxyNode(node), ...args);
        };
    }
    function isNode(data) {
        return (data &&
            typeof data.type === "string" &&
            Array.isArray(data.range) &&
            data.range.length === 2 &&
            typeof data.range[0] === "number" &&
            typeof data.range[1] === "number");
    }
    function getProxyNode(node) {
        const type = node.type.startsWith("JSON")
            ? node.type.slice(4)
            : node.type;
        const cache = { type };
        return new Proxy(node, {
            get(_t, key) {
                if (key in cache) {
                    return cache[key];
                }
                const data = node[key];
                if (isNode(data)) {
                    return (cache[key] = getProxyNode(data));
                }
                if (Array.isArray(data)) {
                    return (cache[key] = data.map((e) => isNode(e) ? getProxyNode(e) : e));
                }
                return data;
            },
        });
    }
    return jsonListener;
}
exports.defineWrapperListener = defineWrapperListener;
let ruleMap = null;
function getCoreRule(name) {
    let map;
    if (ruleMap) {
        map = ruleMap;
    }
    else {
        ruleMap = map = new (require("eslint").Linter)().getRules();
    }
    return map.get(name);
}
exports.getCoreRule = getCoreRule;
