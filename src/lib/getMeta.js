export const getMeta = (result, slug, fallbackTitle) => {
  const meta = {
    metadataBase: new URL(`${process.env.DOMAIN}`),
    // title: result?.json?.title.includes('not found')
    //   ? fallbackTitle
    //   : result?.json?.title,
    title: result?.json?.title,
    description: result?.json?.description,
    alternates: {
      canonical: `${process.env.DOMAIN}${slug}`,
    },
    openGraph: {
      title: result?.json?.title,
      description: result?.json?.description,
      url: `${process.env.DOMAIN}${slug}`,
      siteName: result?.json?.og_site_name,
      images: [],
      locale: result?.json?.og_locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: result?.json?.title,
      description: result?.json?.description,
      creator: process.env.NEXT_PUBLIC_CREDENTIAL_REST_API,
      images: [],
    },
  }
  // if (result?.json?.og_image && result.json.og_image.length > 0) {
  //   meta.openGraph.images.push({
  //     url: result.json.og_image[0]?.url,
  //     width: result.json.og_image[0]?.width,
  //     height: result.json.og_image[0]?.height,
  //   })
  //   meta.twitter.images.push({
  //     url: result.json.og_image[0]?.url,
  //   })
  // }
  meta.openGraph.images.push({
    // url: result?.json?.og_image?.[0]?.url,
    // width: result?.json?.og_image?.[0]?.width,
    // height: result?.json?.og_image?.[0]?.height,
    url: '/images/logosanyo.png',
    width: 1200,
    height: 725,
  })
  meta.twitter.images.push({
    // url: result?.json?.og_image?.[0]?.url,
    url: '/images/logosanyo.png',
  })
  return meta
}
