module.exports = {
  /**
   * Matches all json strings that are using ' or " as quato
   * @example
   * const regexPresets = require("regex-presets");
   * const jsFile = "// Test Script\nconst foo = \"bar\";\nconst hi = \"hello\";\nconsole.log(foo, hi)";
   * const allMatches = [...jsFile.matchAll(regexPresets.JSON.STRINGS)]; // type: [match, quato, inner][]
   * const matches = [...jsFile.match(regexPresets.JSON.STRINGS)]; // type: match[]
   * // returns [['"bar"', '"', 'bar'], ['"hello"', '"', 'hello']]
   * console.log(allMatches);
   * // returns ['"bar"', '"hello"']
   * console.log(matches);
   */
  STRINGS: /(["'])((?:(?=(\\?))\2.)*?)\1/g
}