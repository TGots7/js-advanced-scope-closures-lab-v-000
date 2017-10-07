function produceDrivingRange(x){
  return function(start, end){
    let startB = (parseInt(start))
    let endB = (parseInt(end))
    let blocks = Math.abs(startB - endB)
    if (blocks >= x) {
      return `${Math.abs(blocks - x)} blocks out of range`
    } else {
      return `within range by ${Math.abs(blocks - x)}`
    }
  }
}
function produceTipCalculator(c){
  return function(fare){
    return (fare * c)
  }
}
function createDriver{
  let driverId = 0;
  return class {
    contructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
