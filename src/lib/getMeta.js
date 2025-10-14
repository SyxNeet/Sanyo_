export const getMeta = (result, slug, fallbackTitle) => {
  const meta = {
    metadataBase: new URL(`${process.env.DOMAIN}`),
    title: result?.json?.title.includes('not found')
      ? fallbackTitle
      : result?.json?.title,
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
  };

  // Xử lý hình ảnh cho Open Graph và Twitter
  if (result?.json?.og_image && result.json.og_image.length > 0) {
    const imageUrl = result.json.og_image[0]?.url?.startsWith('http')
      ? result.json.og_image[0]?.url
      : `${process.env.DOMAIN}${result.json.og_image[0]?.url}`; // Đảm bảo URL tuyệt đối

    meta.openGraph.images.push({
      url: imageUrl,
      width: result.json.og_image[0]?.width || 1200, // Fallback width nếu không có
      height: result.json.og_image[0]?.height || 725, // Fallback height nếu không có
    });
    meta.twitter.images.push({
      url: imageUrl,
    });
  } else {
    // Fallback hình ảnh mặc định
    const defaultImageUrl = `${process.env.DOMAIN}/images/sanyo.jpg`;
    meta.openGraph.images.push({
      url: defaultImageUrl,
      width: 1200,
      height: 725,
    });
    meta.twitter.images.push({
      url: defaultImageUrl,
    });
  }

  return meta;
};