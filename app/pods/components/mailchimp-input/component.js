import Ember from 'ember';

export default Ember.Component.extend({
  emailString: null,
  classNames: ['mailchimp-input'],
  classNameBindings: ['isValid:valid:invalid', 'isLoading:loading', 'isEmpty:empty', 'isError:error'],
  invalidEmailAction: "invalidEmail",
  errorAction: "mailchimpError",
  successAction: "mailchimpSuccess",
  tagName: "form",
  isLoading: false,
  isError: false,
  attributeBindings: ['novalidate'],
  novalidate: "",

  emailStringDidChange: function() {
    this.set('isError', false);
  }.observes('emailString'),

  isEmpty: function() {
    if (this.get('emailString')) {
      return true;
    } else {
      return false;
    }
  }.property('emailString'),

  isValid: function() {
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(this.get('emailString'));
  }.property('emailString'),

  _submitEmail: function() {
    var _this        = this;
    var listUrl      = this.get('listUrl');
    var jsonUrl      = listUrl.replace('/post?', '/post-json?').concat('&c=?');
    var emailAddress = this.get('emailString');

    var data = {
      EMAIL: emailAddress
    };

    this.set('isLoading', true);

    var promise = Ember.$.ajax({
      url: jsonUrl,
      data: data,
      dataType: 'jsonp',
      context: this
    });

    promise.then(
      function(response) {
        _this.set('isLoading', false);
        if (response.result === "success") {
          // _this.sendAction('successAction', response);
          // TODO This is FACE Specific
          _this.set('emailString', 'Thanks!');
          Ember.run.later(_this, function() {
            this.set('emailString', null);
          }, 1200);
        } else {
          _this.sendAction('errorAction', response);
          _this.set('emailString', 'Please enter a valid email address.');
          _this.set('isError', true);
        }
      },
      function() {
        _this.set('isLoading', false);
        _this.sendAction('errorAction', { result: "error", msg: "The Mailchimp POST request failed.  Please check the list URL is correct." });
      }
    );

    return true;
  },


  submit(e) {
    e.preventDefault();

    if (this.get('isValid')) {
      this._submitEmail();
    } else {
      this.set('isError', true);
      this.sendAction('errorAction', { result: "error", msg: "Invalid email address." });
      // TODO this is FACE Specific
      this.set('emailString', 'Please enter a valid email address.');
      Ember.run.later(this, function() {
        this.set('emailString', null);
      }, 1200);
    }
  }
});