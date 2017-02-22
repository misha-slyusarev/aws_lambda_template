var moduleUnderTest = '../index.js',
    event = require( '../event.json' );

describe('Template', function() {

  beforeEach(function() {
  });

  afterEach( function() {
  });

  it('has no errors', function() {
    var context = {};
    var callback = function(error, response) {
      expect(error).toEqual(null);
    }

    require(moduleUnderTest).handler(event, context, callback);
  })

  it('returns ok', function() {
    var context = {};
    var callback = function(error, response) {
      expect(response).toEqual('ok');
    }

    require(moduleUnderTest).handler(event, context, callback);
  })
})
