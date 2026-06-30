module.exports = {
    transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }]
  },
    testEnvironment: "jsdom",
    moduleDirectories: ["node_modules", "src"],
};
