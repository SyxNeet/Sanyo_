export const generateUrlSearchParams = (array) => {
  const url = window.location.href
  const urlObject = new URL(url)
  array.forEach((item) => {
    urlObject.searchParams.set(item.key, item.value)
  })
  return urlObject.toString()
}
