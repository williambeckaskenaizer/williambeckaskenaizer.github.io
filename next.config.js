/** @type {import('next').NextConfig} */
const nextConfig = {}
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    ...nextConfig,
    assetPrefix: isProd ? '/williambeckaskenaizer/' : '',
    images: {
        unoptimized: true
    }
}
