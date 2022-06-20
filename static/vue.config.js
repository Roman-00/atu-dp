module.exports = {
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://localhost:5000',
                secure: false,
                logLevel: 'debug',
                changeOrigin: true,
            },
        },
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/scss/main.scss";',
            },
        },
    },
};
