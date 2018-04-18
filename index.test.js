const EmojiShort = require('./index');
const emoji = new EmojiShort('/test/');

test('converts shortnames to unicode', () => {
  const result = emoji.toUnicode(':t-rex:');
  expect(result).toBe('🦖');
});

test('converts shortnames to html img tags', () => {
  const result = emoji.toImage(':t-rex:');
  expect(result).toBe('<img class="emojishort" src="/test/1f996.png" alt=":t-rex:" title=":t-rex:" />');
});

test('converts unicode to images', () => {
  const result = emoji.unicodeToImage('🦖');
  expect(result).toBe('<img class="emojishort" src="/test/1f996.png" alt=":t-rex:" title=":t-rex:" />');
});
