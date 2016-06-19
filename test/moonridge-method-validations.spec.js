/* eslint-env mocha */
const expect = require('chai').expect

var validations = require('../lib/moonridge-method-validations')

describe('moonridge method validations', function () {
  it('should fail when validating distinct call with wrong number or arguments', function () {
    expect(() => {
      validations.distinct([])
    }).to.throw()
    expect(() => {
      validations.distinct(['', '', function () {}])
    }).to.throw()
  })

  it('should fail when validating where call with wrong number or arguments', function () {
    expect(() => {
      validations.where([])
    }).to.throw()
    expect(() => {
      validations.where(['', '', function () {}])
    }).to.throw()
  })

  it('should properly validate limit', function () {
    expect(() => {
      validations.limit([5])
    }).to.not.throw()
  })

  it('should fail when limit call has anything else but one integer', function () {
    expect(() => {
      validations.limit([])
    }).to.throw()
    expect(() => {
      validations.limit(['10'])
    }).to.throw()
  })
})
