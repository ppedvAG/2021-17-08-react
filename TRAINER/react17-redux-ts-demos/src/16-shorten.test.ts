import { shorten } from './16-shorten';

test('shorten "loremipsum" to "lor..."', () => {
  expect(shorten('loremipsum', 6)).toEqual('lor...');
});