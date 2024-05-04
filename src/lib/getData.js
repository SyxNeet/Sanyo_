export default async function getData(api, port = 'acf') {
  try {
    const res = await fetch(
      `${
        port === 'acf'
          ? process.env.API
          : port === 'wp'
          ? process.env.WP_API
          : process.env.OKHUB_API
      }${api}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {revalidate: 60},
      },
    )

    if (!res.ok) {
      return null
    }
    return res.json()
  } catch (error) {
    console.log(`${process.env.API}${api}`)
    console.log('Error:', error)
  }
}
