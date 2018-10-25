function List (len) {
  var inst = new Array(len);
  inst.__proto__ = List.prototype;
  return inst;
}
List.prototype = Object.create(Array.prototype)
List.prototype.empty = function () {
  this.splice(0, this.length)

  return this
}
List.prototype.add = function (...items) {
  this.push(...items)

  return this
}
List.prototype.remove = function (item) {
  const index = this.indexOf(item)

  if (index === -1) {
    return this
  }

  this.splice(index, 1)

  return this
}

List.prototype.removeAll = function (item) {
  while (this.includes(item)) {
    this.remove(item)
  }

  return this
}
List.prototype.top = function () {
  return this[this.length - 1]
}

export {
  List
}
