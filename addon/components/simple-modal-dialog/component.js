import Ember from 'ember';
import CancelModalMixin from './mixins/cancel-modal';
import layout from './template';
const { Component } = Ember;

export default Component.extend(CancelModalMixin, {
  classNames: [ 'SMD-simple-modal-dialog' ],
  classNameBindings: [ 'showDismiss:clickable' ],
  layout: layout,

  click(event) {
    if (this.get('showDismiss') && this.isClickOutsideModal(event.target)) {
      this.send('dismiss');
    }
  },

  isClickOutsideModal(clickTarget) {
    return $(clickTarget).parents('.SMD-content').length === 0;
  }
});
