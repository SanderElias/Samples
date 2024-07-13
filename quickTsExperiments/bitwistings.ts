

const maxBitsInNumber = Number.MAX_SAFE_INTEGER.toString(2).length //?
const maxBits = 53 // (a single number!)

const hasBit = (toCheck:number, bit:number) {
  if (bit !== parseInt(''+bit)) {
    throw new Error('Only Integers allowed')
  }
  if (bit >= maxBits || bit < 0) {
    throw new Error(`Out of the available range of bits Current max:${maxBits-1}`)
  }
  return (toCheck & Math.pow(2,bit)) !==0
}

/**
 * NEVER remove a right from this, as it will cause a shift,
 * add, and rename are fine,
 * removal means unpaid overtime for the next few weeks.
 */
enum Rights {
  read,
  write,
  delete,
  filter,
  access,
  editUsers,
  addUsers,
  removeUsers,
  enableModules,
  disableModules,
  blockRoutes,
  unBlockRoutes,
}

const calcRights = (...selected:Rights[]) => selected.reduce((acc:number,bit:Rights) => acc | 1 << bit,0)

const setRight = (rights:number, right:Rights) => rights | 1 << right
const clearRight = (rights:number, right:Rights) =>  rights & ~(1 << right);

let user1Rights = calcRights(Rights.read , Rights.access , Rights.filter , Rights.blockRoutes) //?
let user2Rights = calcRights( Rights.write , Rights.access , Rights.filter , Rights.unBlockRoutes)  //?

// user1Rights = clearRight(user1Rights, Rights.access)
// user1Rights = setRight(user1Rights, Rights.unBlockRoutes)

console.log(user1Rights.toString(2))
console.log(user2Rights.toString(2))

hasBit(user1Rights,Rights.access) //?
hasBit(user1Rights,Rights.unBlockRoutes) //?

hasBit(user2Rights,Rights.unBlockRoutes) //?
