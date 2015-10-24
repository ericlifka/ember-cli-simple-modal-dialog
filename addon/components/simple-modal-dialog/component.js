import Ember from 'ember';
import CancelModalMixin from './mixins/cancel-modal';
import layout from './template';
const { Component } = Ember;

export default Component.extend(CancelModalMixin, {
  classNames: [ 'SMD-simple-modal-dialog' ],
  layout: layout,

  click(event) {
    const elem = $(event.target);
    if (!elem.parents('.SMD-content').length && this.get('showDismiss')) {
      this.send('dismiss');
    }
  }
});
