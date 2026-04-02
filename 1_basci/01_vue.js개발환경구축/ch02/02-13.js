// result: 숫자 결과를 담아둘 자리(초기값 0으로 시작)
let obj = { result: 0 };
// obj.add: 객체 메서드. x, y를 받아 내부 함수에서 합을 계산하려는 의도
obj.add = function (x, y) {
  function inner() {
    // 일반 함수 호출이므로 this는 obj가 아님
    // 브라우저(비엄격 모드): this가 window가 될 수 있음
    // 엄격 모드/Node 모듈: this가 undefined일 수 있음
    this.result = x + y; // 기대는 obj.result였지만 실제론 전역(result) 또는 에러
  }
  // 일반 함수 호출 → this가 obj로 묶이지 않음
  inner();
  /* JavaScript에서 일반 함수의 this는 호출 방식에 따라 결정됨 
  inner() 함수는 단독으로 호줄되었기 때문에 그 안에 있는 this 는  
  전역 객체를 가리킴*/
};
// add 실행
obj.add(3, 4);
// obj.result는 그대로일 수 있고, 전역에 result가 생길 수도 있음
console.log(obj);
// 전역 result를 읽으려다 에러가 날 수 있음(환경/모드에 따라 다름)
console.log(result);
