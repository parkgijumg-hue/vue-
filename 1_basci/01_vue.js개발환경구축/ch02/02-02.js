/* -let
- 블록 단위(중괄호)로 유효범위가 지정되는 변수 
- 중복 선언 불가
*/

let msg = 'GLOBAL';
function outer() {
  console.log(msg);
  if (true) {
    let msg = 'block';
    console.log(msg);
  }
}
outer();
