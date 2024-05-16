import getData from '../lib/getData'

async function getAllPosts() {
  return getData('/all_posts', 'okhub')
}
async function getAllProjects() {
  return getData('/all_projects', 'okhub')
}

export default async function sitemap() {
  const [dataAllPosts, dataAllProjects] = await Promise.all([
    getAllPosts(),
    getAllProjects(),
  ])
  const siteMapAllPosts = dataAllPosts.map((item) => {
    return {
      url: `${process.env.DOMAIN}/tin-tuc/${item.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    }
  })
  const siteMapAllProjects = dataAllProjects.map((item) => {
    return {
      url: `${process.env.DOMAIN}/du-an/${item.slug}`,
      lastModified: new Date(),
      priority: 0.9,
    }
  })
  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-may-gia-dinh`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-may-tai-khach`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-may-tai-hang`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-may-quan-sat`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-may-benh-vien`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-tai-o-to`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-tai-thuc-pham`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-cuon`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/thang-may-nhat-ban/thang-bang-chuyen`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/du-an`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/tin-tuc`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/lien-he`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/dich-vu/thiet-ke-va-lap-dat-thang-may-theo-yeu-cau`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/dich-vu/bao-tri-bao-duong`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...siteMapAllPosts,
    ...siteMapAllProjects,
  ]
}
