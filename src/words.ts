import { writable, derived } from 'svelte/store';

export type Word = {
  frontWord: string,
  backWord: string
};

export const words = writable([
  {
    frontWord: "hello",
    backWord: "こんにちは"
  },
  {
    frontWord: "good morning",
    backWord: "おはよう"
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
