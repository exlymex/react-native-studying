module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
                    alias: {
                        '@assets': './assets',
                        '@components': './components',
                        '@constants': './constants',
                        '@helpers': './helpers',
                        '@hooks': './hooks',
                        '@models': './models',
                        '@navigation': './navigation',
                        '@redux': './redux',
                        '@screens': './screens',
                        '@services': './services',
                        '@theme': './theme',
                        '@utils': './utils',
                        '@types': './types',
                    },
                },
            ],
        ],
    };
};
