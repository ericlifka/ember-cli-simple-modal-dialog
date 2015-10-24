import Ember from 'ember';
import CancelModalMixin from './mixins/cancel-modal';
import layout from './template';
const { Component } = Ember;

export default Component.extend(CancelModalMixin, {
  classNames: [ 'SMD-simple-modal-dialog' ],
  layout: layout,

  actions: {
    clickToCancel() {
      if (this.get('showDismiss')) {
        this.send('dismiss');
      }
    }
  }
});
