(function() {

  var ArrayProto = Array.prototype,
    ObjProto = Object.prototype,
    FuncProto = Function.prototype

    function typeOf(value) {
      var s = typeof value
      if (s === 'object') {
        if (value) {
          if (value instanceof Array) {
            s = 'array'
          }
        } else {
          s = 'null'
        }
      }
      return s
    }

  var _ = {}

  _.emptyObj = function() {
    return Object.create(null)
  }

  _.emptyArray = function() {
    return new Array()
  }

  _.has = function(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
  }

  _.isNumber = function(num) {
    // http://stackoverflow.com/questions/9188998/obj-length-obj-length-in-javascript
    return num === +num
  }

  _.each = function(list, iterator, context) {
    if (ArrayProto.forEach && list.forEach === ArrayProto.forEach) {
      list.forEach(iterator, context)
    } else {
      switch (typeOf(list)) {
        case 'array':
          for (var i = 0; i < list.length; i++) {
            iterator.call(context, list[i], i, list)
          }
          break
        default:
          for (var key in list) {
            if (_.has(list, key))
              iterator.call(context, list[key], key, list)
          }
      }
    }
  }

  _.map = function(list, iterator, context) {
    if (ArrayProto.map && list.map === ArrayProto.map) {
      return list.map(iterator, context)
    } else {
      results = []
      each(list, function (value, index, list) {
        results.push(iterator.call(context, value, index, list))
      }, context)
      return results
    }
  }

  _.partial = function(func) {
    args = ArrayProto.slice.call(arguments, 1)
    return function() {
      var i = 0, j = 0
      
      for (var i = 0; i < args.length; i++)
        if (args[i] === undefined)
          args[i] = arguments[j++]

      var realArgs = args.concat(ArrayProto.slice.call(arguments, j))
      return func.apply(this, realArgs)
    }
  }

  module.exports = _

}).call(this)