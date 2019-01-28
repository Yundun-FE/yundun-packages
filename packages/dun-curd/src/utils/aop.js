export function constructor(originFun, before, after) {
  function _class() {
    before.apply(this, arguments)
    originFun.apply(this, arguments)
    after.apply(this, arguments)
  }
  return _class
}

