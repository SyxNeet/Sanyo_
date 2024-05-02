export default async function getData(api, port = 'acf', revalidate = 60) {
  try {
    const res = await fetch(
      `${port === 'acf' ? process.env.API : process.env.WP_API}${api}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {revalidate},
      },
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
      return null
    }
    return res.json()
  } catch (error) {
    console.log(`${process.env.API}${api}`)
    console.log('Error:', error)
  }
}
