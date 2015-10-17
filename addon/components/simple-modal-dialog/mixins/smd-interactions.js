import Ember from 'ember';
const { Mixin } = Ember;

export default Mixin.create({
  SMDVisible: false,

  actions: {
    openSMD() {
      this.set('SMDVisible', true);
    },

    closeSMD() {
      this.set('SMDVisible', false);
    },

    toggleSMD() {
      this.togglleProperty('SMDVisible');
    }
  }
});
