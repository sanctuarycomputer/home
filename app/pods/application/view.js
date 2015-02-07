import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this.set('global.appLoaded', true);
  },

  actions: {
    scrollToWaypoint: function(sectionName) {
      Ember.$("html, body").animate({
        scrollTop: Ember.$('.section.'+sectionName).offset().top
      }, 400);
      return false;
    }
  }
});
