import Ember from 'ember';
import CancelModalMixin from '../mixins/cancel-modal';
import layout from './template';
const { Component } = Ember;

export default Component.extend(CancelModalMixin, {
  classNames: [ 'modal-header' ],
  layout: layout,
  label: ""
});
