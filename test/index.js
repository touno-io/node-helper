const { expect, assert } = require('chai')

describe('node_helper', () => {
  const main = require('../index')

  describe('#formater()', () => {
    console.log(main.formater('res: {0}'))
    console.log(main.formater('res: {0}', 'value'))
    console.log(main.formater('res: {0}', 'value1', 'value2'))
    console.log(main.formater('res: {name}', { name: 'aaa', age: 18 }))
    console.log(main.formater('res: {0} {1} {2}', 'value1', 'value2'))
    console.log(main.formater('res: {name} {cc} {age}', { name: 'aaa', age: 18 }))

  //   // it('Functional -- raven', done => {
  //   //   const Raven = require('../helper/raven')
  //   //   Raven.install({}, 'unit-testing')
  //   //   Raven.warning('test message')
  //   //   Raven.error(new Error('Testing Error.'))
  //   //   Raven.ProcessClosed(process, async () => {})
  //   //   Raven.Tracking(async () => {
  //   //     done()
  //   //   })
  //   // })
  //   it('class time.seconds', done => {
  //     let elapsed = new main.Time()
  //     assert(typeof elapsed.seconds, 'function')
  //   })
  //   it('class time.nanoseconds', done => {
  //     let elapsed = new main.Time()
  //     expect(elapsed).to.have.property('nanoseconds')
  //   })
  //   it('class time.total', done => {
  //     let elapsed = new main.Time()
  //     expect(elapsed.seconds).to.have.property('total')
  //   })
  //   it('const DevMode', done => {
  //     expect(main).to.have.property('DevMode')
  //   })
  //   it('const DebugMode', done => {
  //     expect(main).to.have.property('DebugMode')
  //   })
  //   it('const IsLinux', done => {
  //     expect(main).to.have.property('IsLinux')
  //   })
  //   it('const IsWindows', done => {
  //     expect(main).to.have.property('IsWindows')
  //   })
  })
  

})
