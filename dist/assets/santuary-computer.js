define('santuary-computer/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'santuary-computer/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('santuary-computer/initializers/app-version', ['exports', 'santuary-computer/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function (container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('santuary-computer/initializers/export-application-global', ['exports', 'ember', 'santuary-computer/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('santuary-computer/initializers/global-service', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject("controller", "global", "service:global");
    application.inject("view", "global", "service:global");
  }exports['default'] = {
    name: "global-service",
    initialize: initialize
  };

});
define('santuary-computer/initializers/register-helper', ['exports', 'ember', 'ember-waypoints/utils/register-helpers'], function (exports, Ember, registerHelpers) {

  'use strict';

  exports['default'] = {
    name: "ember-waypoints-register-helper",

    initialize: registerHelpers['default']
  };

});
define('santuary-computer/pods/application/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('santuary-computer/pods/application/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('santuary-computer/pods/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '';
    data.buffer.push("<div ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToWaypoint", "sectionName", {hash:{
      'target': ("view")
    },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(" class=\"item\"><div class=\"circle vertical-center\"></div></div>");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '';
    return buffer;
    }

    data.buffer.push("<div id=\"application\" ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("global.appLoaded:loaded")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("><nav class=\"vertical-center\">");
    stack1 = helpers.each.call(depth0, "sectionName", "in", "global.sectionNames", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</nav><header class=\"animated fadeInDown\"><div class=\"small-12 columns vertical-center\"><h3 class=\"brown-regular\">Sanctuary Computer</h3></div></header>");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("<footer class=\"animated fadeInUp\"><div class=\"small-12 columns vertical-center\"><h4 class=\"austincyr-semibold\">");
    stack1 = helpers._triageMustache.call(depth0, "global.currentSectionTagline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h4></div></footer></div>");
    return buffer;
    
  });

});
define('santuary-computer/pods/application/view', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    didInsertElement: function () {
      this.set("global.appLoaded", true);
    },

    actions: {
      scrollToWaypoint: function (sectionName) {
        Ember['default'].$("html, body").animate({
          scrollTop: Ember['default'].$(".section." + sectionName).offset().top
        }, 400);
        return false;
      }
    }
  });

});
define('santuary-computer/pods/site/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    actions: {
      sectionDidChange: function (direction, instance) {
        this.set("global.currentSectionName", instance.get("sectionName"));
        return false;
      }
    }
  });

});
define('santuary-computer/pods/site/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('santuary-computer/pods/site/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("<div class=\"small-12 large-2 large-offset-5 columns text-center vertical-center\"><img id=\"logo\" src=\"./assets/images/logo.png\" class=\"animated bounceIn\" /></div>");
    }

  function program3(depth0,data) {
    
    var buffer = '';
    return buffer;
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("<div class=\"blurb small-12 medium-10 medium-offset-1 columns\"><h4 class=\"ui-text brown-light\">We build cohesive web experiences and ecommerce systems with technologies like Spree, Ember and Ruby on Rails.</h4></div><div class=\"small-12\"><div class=\"row collapse\"><div class=\"item small-6 medium-3 columns\"><img src=\"./assets/images/work/calendar-camp.jpg\" /><div class=\"title text-center\"><h5 class=\"brown-regular vertical-center\">Calendar Camp</h5></div><a href=\"http://www.calendarcamp.co/\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 columns\"><img src=\"./assets/images/work/mainframe.jpg\" /><div class=\"title text-center\"><h5 class=\"brown-regular vertical-center\">Mainframe Group</h5></div><a href=\"http://mainframegroup.co/\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 columns\"><img src=\"./assets/images/work/the-working-pair.jpg\" /><div class=\"title text-center\"><h5 class=\"brown-regular vertical-center\">The Working Pair</h5></div><a href=\"http://theworkingpair.com/\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 columns\"><img src=\"./assets/images/work/silo-arts.jpg\" /><div class=\"title text-center\"><h5 class=\"brown-regular vertical-center\">Silo Arts & Records</h5></div><a href=\"http://siloarts.net\" target=\"_blank\"></a></div></div></div>");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("<div class=\"blurb small-12 medium-10 medium-offset-1 columns\"><h4 class=\"ui-text brown-light\">We like to work with our friends.</h4></div><div class=\"small-12 columns\"><div class=\"row collapse\"><div class=\"item small-6 medium-3 large-2 columns\"><img src=\"./assets/images/clients/ginlane-logo.png\" /><a href=\"#\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 large-2 columns\"><img src=\"./assets/images/clients/human-logo.png\" /><a href=\"http://human-nyc.com/\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 large-2 columns\"><img src=\"./assets/images/clients/silo-logo.png\" /><a href=\"http://siloarts.net\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 large-2 columns\"><img src=\"./assets/images/clients/face-logo.png\" /><a href=\"#\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 large-2 columns\"><img src=\"./assets/images/clients/mainframe-logo.png\" /><a href=\"http://mainframegroup.co/\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 large-2 columns\"><img src=\"./assets/images/clients/calendarcamp-logo.png\" /><a href=\"http://www.calendarcamp.co/\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 large-2 columns\"><img src=\"./assets/images/clients/cantora-logo.png\" /><a href=\"http://playlab.org/\" target=\"_blank\"></a></div><div class=\"item small-6 medium-3 large-2 columns\"><img src=\"./assets/images/clients/playlab-logo.png\" /><a href=\"http://playlab.org/\" target=\"_blank\"></a></div></div></div>");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("<div class=\"small-12 columns vertical-center\"><h1 class=\"austincyr-fat animated fadeInDown\">Get in Touch.</h1><a href=\"mailto:hello@sanctuary.computer\" target=\"_blank\"><h3 class=\"brown-light\">hello@sanctuary.computer</h3></a></div>");
    }

    data.buffer.push("<div id=\"site\">");
    stack1 = (helper = helpers.waypoint || (depth0 && depth0.waypoint),options={hash:{
      'action': ("sectionDidChange"),
      'sectionName': ("welcome"),
      'classNames': ("welcome section")
    },hashTypes:{'action': "STRING",'sectionName': "STRING",'classNames': "STRING"},hashContexts:{'action': depth0,'sectionName': depth0,'classNames': depth0},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "waypoint", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    stack1 = (helper = helpers.waypoint || (depth0 && depth0.waypoint),options={hash:{
      'action': ("sectionDidChange"),
      'sectionName': ("work"),
      'classNames': ("work section")
    },hashTypes:{'action': "STRING",'sectionName': "STRING",'classNames': "STRING"},hashContexts:{'action': depth0,'sectionName': depth0,'classNames': depth0},inverse:self.program(3, program3, data),fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "waypoint", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    stack1 = (helper = helpers.waypoint || (depth0 && depth0.waypoint),options={hash:{
      'action': ("sectionDidChange"),
      'sectionName': ("friends"),
      'classNames': ("friends section")
    },hashTypes:{'action': "STRING",'sectionName': "STRING",'classNames': "STRING"},hashContexts:{'action': depth0,'sectionName': depth0,'classNames': depth0},inverse:self.program(3, program3, data),fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "waypoint", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    stack1 = (helper = helpers.waypoint || (depth0 && depth0.waypoint),options={hash:{
      'action': ("sectionDidChange"),
      'sectionName': ("contact"),
      'classNames': ("contact section")
    },hashTypes:{'action': "STRING",'sectionName': "STRING",'classNames': "STRING"},hashContexts:{'action': depth0,'sectionName': depth0,'classNames': depth0},inverse:self.program(3, program3, data),fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "waypoint", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>");
    return buffer;
    
  });

});
define('santuary-computer/router', ['exports', 'ember', 'santuary-computer/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route("site", { path: "/" });
  });

  exports['default'] = Router;

});
define('santuary-computer/services/global', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Object.extend({
    appLoaded: false,
    currentSectionName: null,

    sectionNames: Ember['default'].A(["welcome", "work", "friends", "contact"]),

    currentSectionTagline: (function () {
      var currentSectionName = this.get("currentSectionName");

      switch (currentSectionName) {
        case "contact":
          return "Contact Details";
        case "work":
          return "Work";
        case "friends":
          return "Friends & Clientelle";
        default:
          return "A lean technology house in NYC.";
      }
    }).property("currentSectionName")

  });

});
define('santuary-computer/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    data.buffer.push("<h2 id=\"title\">Welcome to Ember.js</h2>\n\n");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('santuary-computer/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/helpers/resolver', ['exports', 'ember/resolver', 'santuary-computer/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('santuary-computer/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/helpers/start-app', ['exports', 'ember', 'santuary-computer/app', 'santuary-computer/router', 'santuary-computer/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('santuary-computer/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/initializers/global-service.jshint', function () {

  'use strict';

  module('JSHint - initializers');
  test('initializers/global-service.js should pass jshint', function() { 
    ok(true, 'initializers/global-service.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/pods/application/controller.jshint', function () {

  'use strict';

  module('JSHint - pods/application');
  test('pods/application/controller.js should pass jshint', function() { 
    ok(true, 'pods/application/controller.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/pods/application/route.jshint', function () {

  'use strict';

  module('JSHint - pods/application');
  test('pods/application/route.js should pass jshint', function() { 
    ok(true, 'pods/application/route.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/pods/application/view.jshint', function () {

  'use strict';

  module('JSHint - pods/application');
  test('pods/application/view.js should pass jshint', function() { 
    ok(true, 'pods/application/view.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/pods/site/controller.jshint', function () {

  'use strict';

  module('JSHint - pods/site');
  test('pods/site/controller.js should pass jshint', function() { 
    ok(true, 'pods/site/controller.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/pods/site/route.jshint', function () {

  'use strict';

  module('JSHint - pods/site');
  test('pods/site/route.js should pass jshint', function() { 
    ok(true, 'pods/site/route.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/services/global.jshint', function () {

  'use strict';

  module('JSHint - services');
  test('services/global.js should pass jshint', function() { 
    ok(true, 'services/global.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/test-helper', ['santuary-computer/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('santuary-computer/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/unit/pods/application/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:application", "ApplicationController", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var controller = this.subject();
    ok(controller);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('santuary-computer/tests/unit/pods/application/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/application');
  test('unit/pods/application/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/application/controller-test.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/unit/pods/application/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:application", "ApplicationRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('santuary-computer/tests/unit/pods/application/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/application');
  test('unit/pods/application/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/application/route-test.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/unit/pods/application/view-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:application", "ApplicationView");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var view = this.subject();
    ok(view);
  });

});
define('santuary-computer/tests/unit/pods/application/view-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/application');
  test('unit/pods/application/view-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/application/view-test.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/unit/pods/site/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:site", "SiteController", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var controller = this.subject();
    ok(controller);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('santuary-computer/tests/unit/pods/site/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/site');
  test('unit/pods/site/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/site/controller-test.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/unit/pods/site/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:site", "SiteRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('santuary-computer/tests/unit/pods/site/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/site');
  test('unit/pods/site/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/site/route-test.js should pass jshint.'); 
  });

});
define('santuary-computer/tests/unit/services/global-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("service:global", "GlobalService", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var service = this.subject();
    ok(service);
  });
  // Specify the other units that are required for this test.
  // needs: ['service:foo']

});
define('santuary-computer/tests/unit/services/global-test.jshint', function () {

  'use strict';

  module('JSHint - unit/services');
  test('unit/services/global-test.js should pass jshint', function() { 
    ok(true, 'unit/services/global-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

define('santuary-computer/config/environment', ['ember'], function(Ember) {
  var prefix = 'santuary-computer';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("santuary-computer/tests/test-helper");
} else {
  require("santuary-computer/app")["default"].create({"name":"santuary-computer","version":"0.0.0.6fddee70"});
}

/* jshint ignore:end */
//# sourceMappingURL=santuary-computer.map