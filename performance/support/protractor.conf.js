exports.config = {
  capabilities: {
    browserName: 'chrome',
    specs: [
      '../spec/*spec.js'
    ]
  },
  framework: 'jasmine'
}
