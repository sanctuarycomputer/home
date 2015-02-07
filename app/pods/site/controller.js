import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sectionDidChange: function(direction, instance) {
      this.set('global.currentSectionName', instance.get('sectionName'));
      return false;
    }
  }
});
