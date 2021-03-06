module.exports = {
    entry: "./scripts/entry.js",
    output: {
        path: "./build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
