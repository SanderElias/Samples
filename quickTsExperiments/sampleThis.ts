import { map, Subject } from 'rxjs';

class Demo {
  someProp = "hello"
  blah1 = new Subject<string>()
  showBound = (x) => {
    console.log("it is me", this.constructor.name, x);
  }
  showOther = this.showMe.bind(this)
  blah = this.blah1.pipe(
    map(this.showMe.bind(this))
  ).subscribe()

  showMe(x) {
    console.log("it is me", this.constructor.name, x)
  }

  constructor() {
    this.blah1.next('hello')
  }
}
class demo1 {
  d = new Demo()
  showThat = this.d.showBound.bind(this)
}

const d = new Demo()
const sayHi = d.showOther


sayHi("hello")
