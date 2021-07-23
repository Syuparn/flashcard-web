import { writable, derived } from 'svelte/store';

export const words = writable([
  {
    frontWord: "hello",
    backWord: "こんにちは"
  },
  {
    frontWord: "apple",
    backWord: "りんご"
  }
]);

export const wordsLength = derived(
  words,
  $words => $words.length
);
