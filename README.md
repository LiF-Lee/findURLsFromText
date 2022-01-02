# findURLsFromText

```js
const text = 'One. http://localhost:8080\nTwo. www.naver.com?t=1641096928\nThree. open.kakao.com/me/elif\nFour. xqing.tech:65535\nFive. xqing.tech:65536';

console.log(`Original Text:\n${text}`);
// Original Text:
// One. http://localhost:8080
// Two. www.naver.com?t=1641096928
// Three. open.kakao.com/me/elif
// Four. xqing.tech:65535
// Five. xqing.tech:65536

console.log(findURLsFromText(text));
// [
//     'http://localhost:8080',
//     'http://www.naver.com?t=1641096928',
//     'http://open.kakao.com/me/elif',
//     'http://xqing.tech:65535',
//     'http://xqing.tech'
// ]
```
