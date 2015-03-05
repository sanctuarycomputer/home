import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("site");
  this.route("home", { path: '/' });
  this.route("about");
  this.route("careers", function() {
    this.route("index", { path: '/'});
    this.route("systems-engineer");
    this.route("jnr-designer");
    this.route("product-manager");
  });
  this.route("work", function() {
    this.route("index", { path: '/'});
    this.route("face-design");
    this.route("calendar-camp");
    this.route("mainframe-group");
    this.route("working-pair");
  });
  this.route("services", function() {
    this.route("index", { path: '/'});
    this.route("consulting");
    this.route("development");
    this.route("web-design");
  });
  this.route("contact");
});

export default Router;