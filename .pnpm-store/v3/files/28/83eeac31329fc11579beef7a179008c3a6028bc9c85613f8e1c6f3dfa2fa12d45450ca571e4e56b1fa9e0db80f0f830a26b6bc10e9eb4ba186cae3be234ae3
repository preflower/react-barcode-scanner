"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magnifier = exports.SpeechExplorer = exports.AbstractKeyExplorer = void 0;
var Explorer_js_1 = require("./Explorer.js");
var sre_js_1 = require("../sre.js");
var AbstractKeyExplorer = (function (_super) {
    __extends(AbstractKeyExplorer, _super);
    function AbstractKeyExplorer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attached = false;
        _this.eventsAttached = false;
        _this.events = _super.prototype.Events.call(_this).concat([['keydown', _this.KeyDown.bind(_this)],
            ['focusin', _this.FocusIn.bind(_this)],
            ['focusout', _this.FocusOut.bind(_this)]]);
        _this.oldIndex = null;
        return _this;
    }
    AbstractKeyExplorer.prototype.FocusIn = function (_event) {
    };
    AbstractKeyExplorer.prototype.FocusOut = function (_event) {
        this.Stop();
    };
    AbstractKeyExplorer.prototype.Update = function (force) {
        if (force === void 0) { force = false; }
        if (!this.active && !force)
            return;
        this.highlighter.unhighlight();
        var nodes = this.walker.getFocus(true).getNodes();
        if (!nodes.length) {
            this.walker.refocus();
            nodes = this.walker.getFocus().getNodes();
        }
        this.highlighter.highlight(nodes);
    };
    AbstractKeyExplorer.prototype.Attach = function () {
        _super.prototype.Attach.call(this);
        this.attached = true;
        this.oldIndex = this.node.tabIndex;
        this.node.tabIndex = 1;
        this.node.setAttribute('role', 'application');
    };
    AbstractKeyExplorer.prototype.AddEvents = function () {
        if (!this.eventsAttached) {
            _super.prototype.AddEvents.call(this);
            this.eventsAttached = true;
        }
    };
    AbstractKeyExplorer.prototype.Detach = function () {
        if (this.active) {
            this.node.tabIndex = this.oldIndex;
            this.oldIndex = null;
            this.node.removeAttribute('role');
        }
        this.attached = false;
    };
    AbstractKeyExplorer.prototype.Stop = function () {
        if (this.active) {
            this.highlighter.unhighlight();
            this.walker.deactivate();
        }
        _super.prototype.Stop.call(this);
    };
    return AbstractKeyExplorer;
}(Explorer_js_1.AbstractExplorer));
exports.AbstractKeyExplorer = AbstractKeyExplorer;
var SpeechExplorer = (function (_super) {
    __extends(SpeechExplorer, _super);
    function SpeechExplorer(document, region, node, mml) {
        var _this = _super.call(this, document, region, node) || this;
        _this.document = document;
        _this.region = region;
        _this.node = node;
        _this.mml = mml;
        _this.showRegion = 'subtitles';
        _this.init = false;
        _this.restarted = false;
        _this.initWalker();
        return _this;
    }
    SpeechExplorer.prototype.Start = function () {
        var _this = this;
        if (!this.attached)
            return;
        var options = this.getOptions();
        if (!this.init) {
            this.init = true;
            sre_js_1.sreReady().then(function () {
                if (SRE.engineSetup().locale !== options.locale) {
                    SRE.setupEngine({ locale: options.locale });
                }
                sre_js_1.sreReady().then(function () {
                    _this.Speech(_this.walker);
                    _this.Start();
                });
            }).catch(function (error) { return console.log(error.message); });
            return;
        }
        _super.prototype.Start.call(this);
        this.speechGenerator = sre.SpeechGeneratorFactory.generator('Direct');
        this.speechGenerator.setOptions(options);
        this.walker = sre.WalkerFactory.walker('table', this.node, this.speechGenerator, this.highlighter, this.mml);
        this.walker.activate();
        this.Update();
        if (this.document.options.a11y[this.showRegion]) {
            this.region.Show(this.node, this.highlighter);
        }
        this.restarted = true;
    };
    SpeechExplorer.prototype.Update = function (force) {
        if (force === void 0) { force = false; }
        _super.prototype.Update.call(this, force);
        var options = this.speechGenerator.getOptions();
        SRE.setupEngine({ modality: options.modality,
            locale: options.locale });
        this.region.Update(this.walker.speech());
        if (options.modality === 'speech') {
            this.document.options.sre.domain = options.domain;
            this.document.options.sre.style = options.style;
            this.document.options.a11y.speechRules =
                options.domain + '-' + options.style;
        }
    };
    SpeechExplorer.prototype.Speech = function (walker) {
        walker.speech();
        this.node.setAttribute('hasspeech', 'true');
        this.Update();
        if (this.restarted && this.document.options.a11y[this.showRegion]) {
            this.region.Show(this.node, this.highlighter);
        }
    };
    SpeechExplorer.prototype.KeyDown = function (event) {
        var code = event.keyCode;
        this.walker.modifier = event.shiftKey;
        if (code === 27) {
            this.Stop();
            this.stopEvent(event);
            return;
        }
        if (this.active) {
            this.Move(code);
            if (this.triggerLink(code))
                return;
            this.stopEvent(event);
            return;
        }
        if (code === 32 && event.shiftKey || code === 13) {
            this.Start();
            this.stopEvent(event);
        }
    };
    SpeechExplorer.prototype.triggerLink = function (code) {
        var _a, _b;
        if (code !== 13) {
            return false;
        }
        var node = (_a = this.walker.getFocus().getNodes()) === null || _a === void 0 ? void 0 : _a[0];
        var focus = (_b = node === null || node === void 0 ? void 0 : node.getAttribute('data-semantic-postfix')) === null || _b === void 0 ? void 0 : _b.match(/(^| )link($| )/);
        if (focus) {
            node.parentNode.dispatchEvent(new MouseEvent('click'));
            return true;
        }
        return false;
    };
    SpeechExplorer.prototype.Move = function (key) {
        this.walker.move(key);
        this.Update();
    };
    SpeechExplorer.prototype.initWalker = function () {
        this.speechGenerator = sre.SpeechGeneratorFactory.generator('Tree');
        var dummy = sre.WalkerFactory.walker('dummy', this.node, this.speechGenerator, this.highlighter, this.mml);
        this.walker = dummy;
    };
    SpeechExplorer.prototype.getOptions = function () {
        var options = this.speechGenerator.getOptions();
        var sreOptions = this.document.options.sre;
        if (options.modality === 'speech' &&
            (options.locale !== sreOptions.locale ||
                options.domain !== sreOptions.domain ||
                options.style !== sreOptions.style)) {
            options.domain = sreOptions.domain;
            options.style = sreOptions.style;
            options.locale = sreOptions.locale;
            this.walker.update(options);
        }
        return options;
    };
    return SpeechExplorer;
}(AbstractKeyExplorer));
exports.SpeechExplorer = SpeechExplorer;
var Magnifier = (function (_super) {
    __extends(Magnifier, _super);
    function Magnifier(document, region, node, mml) {
        var _this = _super.call(this, document, region, node) || this;
        _this.document = document;
        _this.region = region;
        _this.node = node;
        _this.mml = mml;
        _this.walker = sre.WalkerFactory.walker('table', _this.node, sre.SpeechGeneratorFactory.generator('Dummy'), _this.highlighter, _this.mml);
        return _this;
    }
    Magnifier.prototype.Update = function (force) {
        if (force === void 0) { force = false; }
        _super.prototype.Update.call(this, force);
        this.showFocus();
    };
    Magnifier.prototype.Start = function () {
        _super.prototype.Start.call(this);
        if (!this.attached)
            return;
        this.region.Show(this.node, this.highlighter);
        this.walker.activate();
        this.Update();
    };
    Magnifier.prototype.showFocus = function () {
        var node = this.walker.getFocus().getNodes()[0];
        this.region.Show(node, this.highlighter);
    };
    Magnifier.prototype.Move = function (key) {
        var result = this.walker.move(key);
        if (result) {
            this.Update();
        }
    };
    Magnifier.prototype.KeyDown = function (event) {
        var code = event.keyCode;
        this.walker.modifier = event.shiftKey;
        if (code === 27) {
            this.Stop();
            this.stopEvent(event);
            return;
        }
        if (this.active && code !== 13) {
            this.Move(code);
            this.stopEvent(event);
            return;
        }
        if (code === 32 && event.shiftKey || code === 13) {
            this.Start();
            this.stopEvent(event);
        }
    };
    return Magnifier;
}(AbstractKeyExplorer));
exports.Magnifier = Magnifier;
//# sourceMappingURL=KeyExplorer.js.map