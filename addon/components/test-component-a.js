import Ember from 'ember';
import layout from '../templates/components/test-component-a';
const { Component } = Ember;

export default Component.extend({
  classNames: ['test-component-a'],
  layout: layout
});
