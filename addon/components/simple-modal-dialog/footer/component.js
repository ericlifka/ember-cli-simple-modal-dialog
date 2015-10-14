import Ember from 'ember';
import CancelModalMixin from '../mixins/cancel-modal';
import AcknowledgeModalMixin from '../mixins/acknowledge-modal';
import layout from './template';
const { Component } = Ember;

export default Component.extend(CancelModalMixin, AcknowledgeModalMixin, {
  classNames: [ 'SMD-footer' ],
  layout: layout
});
