module.exports = {
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            matter: false
        };

        return config;
    },
};
