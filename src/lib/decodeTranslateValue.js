export const decodeTranslateValue = (element) => {
  const transformValue = window
    .getComputedStyle(element)
    .getPropertyValue('transform')
  const match = transformValue.match(/translate\(([^,]+),([^,]+)/)
  const translateX = match ? Math.abs(parseFloat(match[1])) : 0
  const translateY = match ? Math.abs(parseFloat(match[2])) : 0
  console.log('Giá trị translateX:', translateX)
  console.log('Giá trị translateY:', translateY)
}
