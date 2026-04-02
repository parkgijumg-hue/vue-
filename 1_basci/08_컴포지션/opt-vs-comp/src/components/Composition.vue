<template>
  <div>
    <h3>COmposition API 적용</h3>

    <div>
      이름 :
      <input
        type="text"
        placeholder="입력 시 대문자로 변환"
        :value="name"
        @input="changeName($event.target.value)"
      />
    </div>

    <hr />
    <h5>계산하기</h5>
    <div>
      x: <input type="text" v-model.number="x" /><br />
      y: <input type="text" v-model.number="y" /><br />
      <button @click="add(x, y, 1)">X + Y</button>
      <p>X+Y={{ result }}</p>
    </div>
    <div>
      a: <input type="text" v-model.number="a" /><br />
      b: <input type="text" v-model.number="b" /><br />
      <button @click="add(a, b, 2)">a + b</button>
      <p>X+Y={{ result2 }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
//ref(): 컴포넌트의 데이터를 정의하는 함수
//-> data() 함수의 역할을 대신함
// - .value 프로퍼티를 이용해서 데이터를 조작함
export default {
  name: 'Options',

  //setup() : 컴포넌트의 로직을 작성하는 함수
  //컴포넌트 생명주기 beforeCreate, created 단계에서 실행됨
  //setup() 내부에서는 this 사용 불가
  //ref 로 받을시 value 써야함
  setup() {
    // name 관련 로직만 모아둠
    const name = ref('');

    const changeName = (inputName) => {
      name.value = inputName.toUpperCase();
    };

    // setup() 에서 템플릿에 사용할 모든 변수와 함수를 반환해줘야 함
    return { name, changeName, ...useCalc() };
    // ...(spread 문법) : useCalc() 가 반환하는 객체를 펼쳐서 넣음
  },
};

//계산과 관련된 로직만 모아둠 + 재사용 가능한 함수 형태로 작성
export const useCalc = () => {
  const x = ref(3);
  const y = ref(5);
  const a = ref(4);
  const b = ref(5);
  const result1 = ref(0);
  const result2 = ref(0);
  const add = (num1, num2, type) => {
    if (type === 1) {
      result1.value = num1 + num2;
    } else {
      result2.value = num1 + num2;
    }
  };
  return { x, y, a, b, result1, result2, add };
};
</script>
