module.exports = {
    env: { browser: true, es2021: true, node: true },
    extends: ["eslint-config-airbnb", "eslint-config-airbnb/hooks"].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },
    rules: {
        "indent": ["error", 4],
        "max-len": ["error", { "code": 150, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreComments": true }],
        "no-restricted-syntax": ["off", "ForOfStatement"],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "import/extensions": ["error", "ignorePackages"],
        "react/require-default-props": ["off"],
        "react/jsx-indent" : ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/function-component-definition": [2, { "namedComponents": "function-declaration" }]
    },
    ignorePatterns: [
        "dist/**/*",
        "build/**/*",
        "temp/**/*"
    ],
    overrides: [
        {
            files: ["**/*.{ts,tsx}"],
            env: { browser: true, es2021: true, node: true },
            extends: ["eslint-config-airbnb-typescript", "eslint-config-airbnb/hooks"].map(require.resolve),
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                project: "./tsconfig.json"
            },
            rules: {
                "@typescript-eslint/indent": ["error", 4],
                "@typescript-eslint/type-annotation-spacing": ["error", { overrides: { returnType : { before : true, after : true }}}],
                "@typescript-eslint/consistent-type-imports": ["error"],
                "max-len": ["error", { "code": 150, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreComments": true }],
                "no-restricted-syntax": ["off", "ForOfStatement"],
                "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
                "import/extensions": ["error", "ignorePackages"],
                "react/require-default-props": ["off"],
                "react/jsx-indent" : ["error", 4],
                "react/jsx-indent-props": ["error", 4],
                "react/function-component-definition": [2, { "namedComponents": "function-declaration" }]
            }
        }
    ]
}