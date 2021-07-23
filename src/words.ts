import { writable } from 'svelte/store';

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
