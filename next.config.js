/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    basePath: '/williambeckaskenaizer.github.io',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig