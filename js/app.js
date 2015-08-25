/**
 * @fileoverview Provides stand-alone demo of the revealing pattern for
 * UI animations.
 *
 * @author regardingscot@gmail.com (Peter StJ)
 */

goog.provide('app');

goog.require('demo.view.Main');
goog.require('pstj.fx.animation');


(function() {
  var view = new demo.view.Main();
  view.render();
  (new pstj.fx.animation.Wave(view.getElement()));
})();
