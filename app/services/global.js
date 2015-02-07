import Ember from 'ember';

export default Ember.Object.extend({
  appLoaded: false,
  currentSectionName: null,

  sectionNames: Ember.A(['welcome', 'work', 'friends', 'contact']),

  currentSectionTagline: function() {
    var currentSectionName = this.get('currentSectionName');

    switch(currentSectionName) {
      case "contact":
        return "Contact Details";
      case "work":
        return "Work";
      case "friends":
        return "Friends & Clientelle";
      default:
        return "A lean technology house in NYC.";
    }
  }.property('currentSectionName')

});
