const src = "src/";
const dist = "dist/";
const asset = "assets/";
const test = "test/";

module.exports = {
    src: {
        root : src,
        css  : src + "css/",
        img  : src + "img/",
        spec : src + "spec/",
        fonts: [
            "./node_modules/font-awesome/fonts/"
        ],
    },
    dist: {
        root : dist,
        html : dist,
        css  : dist,
        img  : dist + asset + "img/",
        fonts: dist + asset + "fonts/"
    }
};

