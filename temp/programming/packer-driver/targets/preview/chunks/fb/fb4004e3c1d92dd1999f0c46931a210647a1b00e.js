System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, PlayerInfomation;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99ec13nu61JzJSMXIoJGiTA", "PlayerInfomation", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerInfomation", PlayerInfomation = (_dec = ccclass('PlayerInfomation'), _dec(_class = class PlayerInfomation extends Component {
        constructor() {
          super(...arguments);
          this.coins = 20000;
          this.thinkTime = 600;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fb4004e3c1d92dd1999f0c46931a210647a1b00e.js.map