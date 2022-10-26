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
  STRINGS: /(["'])((?:(?=(\\?))\2.)*?)\1/g,
  /**
   * Matches all json keys and valeus
   * @example
   * const regexPresets = require("regex-presets");
   * const jsonFile = '{ "foo": "bar", "hi": { "you": "me", "me": "you" } }';
   * const allMatches = [...jsonFile.matchAll(regexPresets.JSON.KEY_VALUE)]; // type: [match, key, value][]
   * const matches = [...jsonFile.match(regexPresets.JSON.KEY_VALUE)]; // type: match[]
   * // returns [['"foo": "bar"', 'foo', 'bar'], ['"hi": ', 'hi', ''], ['"you": "me"', 'you', 'me'], ['"me": "you"', 'me', 'you']]
   * console.log(allMatches);
   * // returns ['"foo": "bar"', '"hi": ', '"you": "me"', '"me": "you"']
   * console.log(matches);
   */
  KEY_VALUE: /(?:\"|\')(?<key>[\w\d]+)(?:\"|\')(?:\:\s*)(?:\"|\')?(?<value>[\w\s-]*)(?:\"|\')?/mg
}