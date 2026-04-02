// 상품 객체 p1: 이름, 가격, 수량, 주문/할인 메서드를 가짐
let p1 = {
  name: '아이패드',
  price: 200000,
  quantity: 2,
  order: function () {
    // 기존(ES5) 메서드 선언 방식
    // amount가 아직 없으면(처음 주문이면) 수량 * 가격으로 계산
    if (!this.amount) {
      // this는 p1 객체를 가리킴 → p1.amount에 값 저장
      this.amount = this.quantity * this.price;
    }
    // 계산된 주문 금액 출력
    console.log('주문금액 : ' + this.amount);
  },
  discount(rate) {
    // ES6의 메서드 선언 방식(축약 문법)
    // 할인율이 0~0.8 사이일 때만 할인 적용
    if (rate > 0 && rate < 0.8) {
      // this는 p1 객체 → p1.amount를 할인된 금액으로 변경
      this.amount = (1 - rate) * this.price * this.quantity;
    }
    // 할인율 안내 메시지 출력
    console.log(100 * rate + '% 할인된 금액으로 구매합니다.');
  },
};
// 20% 할인 적용
p1.discount(0.2);
// 최종 주문 금액 출력
p1.order();
