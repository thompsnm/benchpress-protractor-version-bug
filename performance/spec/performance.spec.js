var benchpress = require('benchpress');

var runner = new benchpress.Runner([
  // Use protractor as Webdriver client
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_BINDINGS,

  // Set sample size
  benchpress.Validator.bindTo(benchpress.SizeValidator),
  benchpress.bind(benchpress.SizeValidator.SAMPLE_SIZE).toValue(5),

  // Collect additional data received and request count metrics
  benchpress.bind(benchpress.Options.RECEIVED_DATA).toValue(true),
  benchpress.bind(benchpress.Options.REQUEST_COUNT).toValue(true)
]);

describe('Video performance', function() {
  it('initial buffer', function() {
    return runner.sample({
      id: 'Initial video load',
      execute: function() {
        expect(true).toEqual(true);
      }
    });
  });
});
