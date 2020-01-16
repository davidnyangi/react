module.exports ={
    entry: "./src/index.js",
    output: {
        path: "beginner/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer:{
        inline: true,
        contentBase: "./beginner",
        port: 3001
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query:{
                    presets:["latest","react","stage-0"]
                }
            }
        ]
    }
}