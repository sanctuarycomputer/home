import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    navToggle: function(direction) {
      if (direction === "up") {
        this.global.set('active', false);
      } else {
        this.global.set('active', true);
      }
    },
    toggleSideNav: function() {
      this.global.toggleProperty('sideNavActive');
    }
  }
});
