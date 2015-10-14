import Ember from 'ember';
import layout from './template';
const { Component, computed } = Ember;

export default Component.extend({
  classNames: [ 'simple-modal-dialog' ],
  layout: layout
});
