System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, Label, Sprite, GameManager, QuizModalManager, BetModal, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, ChoicesModal;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfClientMode(extras) {
    _reporterNs.report("ClientMode", "../Manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../Manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuizModalManager(extras) {
    _reporterNs.report("QuizModalManager", "../Manager/QuizModalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetModal(extras) {
    _reporterNs.report("BetModal", "./BetModal", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      QuizModalManager = _unresolved_3.QuizModalManager;
    }, function (_unresolved_4) {
      BetModal = _unresolved_4.BetModal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24770d9JABELqXIZyBv67L3", "ChoicesModal", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Label', 'SpriteFrame', 'Sprite', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChoicesModal", ChoicesModal = (_dec = ccclass('ChoicesModal'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(_crd && BetModal === void 0 ? (_reportPossibleCrUseOfBetModal({
        error: Error()
      }), BetModal) : BetModal), _dec(_class = (_class2 = class ChoicesModal extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "liverNode", _descriptor, this);

          _initializerDefineProperty(this, "userNode", _descriptor2, this);

          _initializerDefineProperty(this, "buttonList", _descriptor3, this);

          _initializerDefineProperty(this, "labelList", _descriptor4, this);

          _initializerDefineProperty(this, "spriteList", _descriptor5, this);

          _initializerDefineProperty(this, "oddsLabelList", _descriptor6, this);

          _initializerDefineProperty(this, "betLabelList", _descriptor7, this);

          _initializerDefineProperty(this, "questionLabel", _descriptor8, this);

          _initializerDefineProperty(this, "betModal", _descriptor9, this);

          this.choiceNumber = -1;
          this.tempNumber = 0;
          this.debugClientMode = 'Liver';
        }

        start() {
          this.buttonList[0].node.on(Button.EventType.CLICK, function () {
            this.Choice(0);
          }, this);
          this.buttonList[1].node.on(Button.EventType.CLICK, function () {
            this.Choice(1);
          }, this);
          this.buttonList[2].node.on(Button.EventType.CLICK, function () {
            this.Choice(2);
          }, this);
          this.buttonList[3].node.on(Button.EventType.CLICK, function () {
            this.Choice(3);
          }, this);
          this.buttonList[4].node.on(Button.EventType.CLICK, function () {
            this.Choice(4);
          }, this);
          this.buttonList[5].node.on(Button.EventType.CLICK, function () {
            this.Choice(5);
          }, this);
          this.betModal.node.active = false;
        }

        update(deltaTime) {
          this.DebugModalUpdate();

          if (this.betModal.GetIsDecide()) {
            this.DecideChoice();
          }
        } // クリックした時


        Choice(index) {
          this.betModal.node.active = true; // ベットモーダルを表示

          this.tempNumber = index; // 選択した番号
        } // 選択肢を設定


        SetChoices(index, text, sprite) {
          this.labelList[index].string = text;
          this.spriteList[index].spriteFrame = sprite;
        }

        GetChoics() {
          return this.choiceNumber;
        }

        SetQuestion(sent) {
          this.questionLabel.string = sent;
        }

        Initialize() {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).Instance().GetClientMode() === 'Liver') {
            this.liverNode.active = true;
            this.userNode.active = false;

            for (var odds of this.oddsLabelList) {
              odds.node.active = true;
            }

            this.debugClientMode = 'Liver';
          } else {
            this.liverNode.active = false;
            this.userNode.active = true;

            for (var _odds of this.oddsLabelList) {
              _odds.node.active = false;
            }

            this.debugClientMode = 'User';
          }
        }

        DecideChoice() {
          this.choiceNumber = this.tempNumber;
          (_crd && QuizModalManager === void 0 ? (_reportPossibleCrUseOfQuizModalManager({
            error: Error()
          }), QuizModalManager) : QuizModalManager).Instance().ChangeModal('Result');
          (_crd && QuizModalManager === void 0 ? (_reportPossibleCrUseOfQuizModalManager({
            error: Error()
          }), QuizModalManager) : QuizModalManager).Instance().GetResultModal().SetCoinLabel("400");
        }

        DebugModalUpdate() {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).Instance().GetClientMode() != this.debugClientMode) {
            this.Initialize();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "liverNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buttonList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "oddsLabelList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "betLabelList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "questionLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "betModal", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e4cc33a14e49f94b2c27a97f6b7b61addd5adbf.js.map