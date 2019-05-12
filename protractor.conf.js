var Jasmine2HtmlReporter = require ('protractor-jasmine2-html-reporter')

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['main.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
   
  },
  //For Reports
  onPrepare: function (){
	  jasmine.getEnv().addReporter(
			  new Jasmine2HtmlReporter({
			  savePath: './test-reports' 
		})
	  );
  }
  
  
  
};
