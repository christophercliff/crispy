var _ = require('lodash')

var JUST_A_NUMBER = 12345

var myString = 'Hello!'
var smallArray = [ 100 ]
var largeArray = [
    100,
    200,
]
var smallObject = { a: 'A' }
var largeObject = {
    a: 'A',
    b: 'B',
}
var smallNumber = 123
var largeNumber = 10e3
var inlineTernary = (_.random(10) > 0) ? 'greater than' : 'less than'
var multilineTernary = (_.random(10) > 0)
    ? 'greater than'
    : 'less than'

exports.JUST_A_NUMBER = JUST_A_NUMBER
exports.myString = myString
exports.smallArray = smallArray
exports.largeArray = largeArray
exports.smallObject = smallObject
exports.largeObject = largeObject
exports.smallNumber = smallNumber
exports.largeNumber = largeNumber
exports.inlineTernary = inlineTernary
exports.multilineTernary = multilineTernary
exports.UselessConstructor = UselessConstructor
exports.uselessFunc = uselessFunc
exports.uselessInstance = new UselessConstructor(smallNumber)

function UselessConstructor(num) {
    this.num = num
}

_.extend(UselessConstructor.prototype, {

    isJustANumber: function () {
        return this.num === JUST_A_NUMBER
    },

})

function uselessFunc(num) {
    if (_.isNumber(num)) {
        num = _.random(num)
    } else {
        num = _.random(100)
    }
    if (num > 10) {
        return 1
    }
    return 2
}

new UselessConstructor(smallNumber).then(function () {
    console.log('Hello!')
})
