module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
    },
};
