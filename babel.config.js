module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": 18, 
                },
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ]
}