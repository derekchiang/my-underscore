require('should')
_ = require('../')

describe('Random Stuff', function() {
  it('whatever', function() {

  })
})

describe('Collections', function() {
  describe('#each()', function() {
    var map, array

    beforeEach(function () {
      map = _.emptyObj()
      array = _.emptyArray()
    })

    function triple(num) {
      array.push(num * 3)
    }

    function tripleWithContext(num) {
      array.push(num * 3 + this)
    }

    it('should invoke the function on each element of the list', function() {
      _.each([1, 2, 3], triple)
      array.should.eql([3, 6, 9])
    })

    it('should invoke the function on each element with the \
      correct context', function () {
      _.each([1, 2, 3], tripleWithContext, 1)
      array.should.eql([4, 7, 10])
    })
  })

  describe('#each()', function() {
    var map, array

    beforeEach(function () {
      map = _.emptyObj()
      array = _.emptyArray()
    })

    function triple(num) {
      return num * 3
    }

    function tripleWithContext(num) {
      return num * 3 + this
    }

    it('should invoke the function on each element of the list', function() {
      _.map([1, 2, 3], triple).should.eql([3, 6, 9])
    })

    it('should invoke the function on each element with the \
      correct context', function() {
      _.map([1, 2, 3], tripleWithContext, 1).should.eql([4, 7, 10])
    })
  })
})

describe('Functions', function() {
  describe('#partial()', function() {
    function printThreeNames(a, b, c) {
      return 'First: ' + a + '\nSecond: ' + b + '\nThird: ' + c
    }

    it('should create a partially applied function', function() {
      _.partial(printThreeNames, 'Derek', undefined, 'Nemo')('Yo')
        .should.be.equal(printThreeNames('Derek', 'Yo', 'Nemo'))
    })

    it('should work when only some of the arguments are given', function() {
      _.partial(printThreeNames, 'Derek')('Yo', 'Nemo')
        .should.be.equal(printThreeNames('Derek', 'Yo', 'Nemo'))
    })
  })
})