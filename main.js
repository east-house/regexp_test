let str = `
010-1234-5678.
thesecond@gmail.com
The quick brown fox jumps over the lazy dog.
abbccddddd
`

console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)



// \w : 숫자 혹은 문자어떤것을지칭 => 아래 예시에서는 숫자나 문자 한종류가 3개혹은 2개 연속반복
// \b : 임의의 경계잡기
console.log(
  str.match(/\b\w{2,3}\b/g)
)

console.log(
  str.match(/^t/gim)
)

// g : 전체 찾기 / i: 대소문자 구분안함
// const regexp = new RegExp('the','gi')
const regexp = /\.$/gim
console.log(str.match(regexp))
// console.log(str.match(regexp))
// str = str.replace(regexp, 'AAAA')
// console.log(str)
