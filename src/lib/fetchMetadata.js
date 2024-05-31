export const fetchMetaData = async (slug) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_REST_API}/wp-json/yoast/v1/get_head?url=${process.env.NEXT_PUBLIC_REST_API}${slug}`,
      {
        method: 'GET',
      },
    )
    return result.json()
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
    throw error;
  }
}