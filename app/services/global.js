import Ember from 'ember';

export default Ember.Object.extend({
  appLoaded: false,
  currentSectionName: null,

  sectionNames: Ember.A(['welcome', 'about', 'work', 'services', 'friends', 'contact']),

  currentSectionTagline: function() {
    var currentSectionName = this.get('currentSectionName');

    switch(currentSectionName) {
      case "about":
        return "About Us";
      case "services":
        return "Our Services";
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
