/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr'

const nextConfig = withSvgr( {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3.logiclike.com",
                pathname: "**",
            },
        ],
    },
    sassOptions: {
        additionalData: '@import "src/app/styles/scss";',
    },
    // webpack(config) {
    //     const fileLoaderRule = config.module.rules.find(
    //         (rule) => rule.test && rule.test.test && rule.test.test(".svg"),
    //     );
    //
    //     // Добавляем правило для SVG, когда они используются как URL
    //     config.module.rules.push({
    //         ...fileLoaderRule,
    //         test: /\.svg$/i,
    //         resourceQuery: /url/,
    //     });
    //
    //     // Добавляем правило для SVG, когда они импортируются в JS/TS файлы
    //     config.module.rules.push({
    //         test: /\.svg$/i,
    //         issuer: fileLoaderRule.issuer,
    //         resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
    //         use: ["@svgr/webpack"],
    //     });
    //
    //     // Исключаем SVG из правила file-loader
    //     fileLoaderRule.exclude = /\.svg$/i;
    //
    //     return config;
    // },
    webpack(config) {
        return config;
    }
});

export default nextConfig;
