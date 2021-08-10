document.getElementById('dec').addEventListener('click', () => {
  productCounter.decrement(5)
  document.getElementById('count').textContent = count

})
// document.getElementById('inc')
document.getElementById('dec').addEventListener('click', () => {
  productCounter.increment(5)
  document.getElementById('count').textContent = count

})
// document.getElementById('count')
const productCounter = createCounter()

function createCounter() {
  let current = 0

  function increment(value) {
    return (current += value)
  }

  function decrement(value) {
    if (current <= 0) return
    return (current -= value)
  }

  return { increment, decrement, current}
}

export default createCounter