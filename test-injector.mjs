import { create } from 'domain'
import {simpleInject, provide, dumpTree} from './dist/simple-injector/fesm2022/simple-injector.mjs'

class Test {
  constructor() {
    console.log('Test')
  }
  prop = 'testprop'
}

class Test2 {
  prop2 = simpleInject(Test).prop
  constructor() {
    console.log('Test2')
  }
  prop = 'test2'
}

class ServiceTest {
  provider = provide(Test)
  test = simpleInject(Test2, this.provider)
  constructor() {
    console.log('ServiceTest', this.test.prop2)
  }

  [Symbol.dispose]() {
    console.log('dispose ServiceTest')
  }
}

const service = new ServiceTest()


 dumpTree()
