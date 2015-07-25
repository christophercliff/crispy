var expect = require('chai').expect

describe('the thing', function () {

    it('should do stuff', function () {
        expect(true).to.equal(true)
    })

    it('should do async stuff', function (done) {
        return done()
    })

})
