import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
})

export default withNextra({
  basePath: '/docs',
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old single-file pages → new section folders (April 2026 nav refresh)
      { source: '/platform/dashboard', destination: '/platform/pulse', permanent: true },
      { source: '/platform/strategy', destination: '/platform/portfolio/strategic-hub', permanent: true },
      { source: '/platform/operations', destination: '/platform/portfolio', permanent: true },
      { source: '/platform/intelligence', destination: '/platform/portfolio', permanent: true },
      { source: '/platform/services', destination: '/platform/configure/service-setup/services', permanent: true },
      { source: '/platform/portfolios', destination: '/platform/configure/service-setup/portfolios', permanent: true },
      { source: '/platform/contracts', destination: '/platform/configure/service-setup/contracts', permanent: true },
      { source: '/platform/templates', destination: '/platform/configure/service-setup/templates', permanent: true },
      { source: '/platform/catalogs', destination: '/platform/configure/data/library', permanent: true },
      { source: '/platform/bulk-upload', destination: '/platform/configure/data/bulk-upload', permanent: true },
      { source: '/platform/organisation', destination: '/platform/organization', permanent: true },
      { source: '/platform/system', destination: '/platform/configure/system', permanent: true },
      { source: '/platform/settings', destination: '/platform/configure/system/account', permanent: true },
    ]
  },
})
