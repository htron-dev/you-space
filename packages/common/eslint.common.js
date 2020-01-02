module.exports = {
    parser: "@typescript-eslint/parser",
    extends:[
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions:{
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        "no-trailing-spaces": "error",
        "comma-dangle": ["error", "never"],
        "@typescript-eslint/quotes": [2, "double"],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/semi": "error"
    }
};