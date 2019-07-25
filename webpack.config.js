module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                        '@babel/preset-env',
                        {
                            plugins: [
                            '@babel/plugin-proposal-class-properties'
                            ]
                        }
                        ]
                    },
                }
                
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
              }
        ]
    },
}