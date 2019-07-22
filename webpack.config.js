module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
              }
        ]
    },
}