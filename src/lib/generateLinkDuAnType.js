export const generateLinkDuAnType = (type, slug) => {
  let newType = type.toString().toLowerCase()
  if (newType.includes('all')) {
    newType = newType.replace('all', '')
  }
  if (newType.includes(slug)) {
    newType = newType.replace(`${slug}`, '')
  } else {
    newType += `,${slug}`
  }
  if (newType[0] === ',') {
    newType = newType.slice(1)
  }
  if (newType === '') {
    newType = 'all'
  }
  return newType
}
