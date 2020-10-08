(function(window) {
    "use strict";
    var FORM_SELECTOR = "[data-coffee-order=\"form\"]";
    var App = window.App;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);
  
    formHandler.addSubmitHandler(function(data) {
      //eslint-disable-next-line no-undef
      $("#titleHolder").text(data.title);
      //eslint-disable-next-line no-undef
      $("#nameHolder").text(data.name);
      //eslint-disable-next-line no-undef
      $("#thankMSG").modal();
    });
    //eslint-disable-next-line no-console
    console.log(formHandler);
  })(window);