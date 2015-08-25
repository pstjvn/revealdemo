goog.provide('demo.view.Main');
goog.provide('demo.view.MainRenderer');

goog.require('demo.template');
goog.require('goog.ui.registry');
goog.require('pstj.material.Element');
goog.require('pstj.material.ElementRenderer');

goog.scope(function() {
var E = pstj.material.Element;
var ER = pstj.material.ElementRenderer;


/** @extends {E} */
demo.view.Main = goog.defineClass(E, {
  constructor: function() {
    E.call(this);
    this.setAllowTextSelection(false);
  }
});


/** @extends {ER} */
demo.view.MainRenderer = goog.defineClass(ER, {
  constructor: function() {
    ER.call(this);
  },

  /** @override */
  getTemplate: function() {
    return demo.template.Main();
  },

  /** @override */
  getCssClass: function() {
    return demo.view.MainRenderer.CSS_CLASS;
  },

  statics: {
    /** @const {!string} */
    CSS_CLASS: goog.getCssName('demo-app')
  }
});


// Register for default renderer.
goog.ui.registry.setDefaultRenderer(demo.view.Main,
    demo.view.MainRenderer);


// Register decorator factory function.
goog.ui.registry.setDecoratorByClassName(
    demo.view.MainRenderer.CSS_CLASS, function() {
      return new demo.view.Main();
    });


});  // goog.scope
