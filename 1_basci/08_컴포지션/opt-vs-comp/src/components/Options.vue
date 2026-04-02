<template>
  <div>
    <h3>Options API 적용</h3>

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
export default {
  name: 'Options',
  data() {
    return {
      name: '',
      x: '',
      y: '',
      result: '',
      result2: '',
      a: '',
      b: '',
    };
  },
  methods: {
    changeName(inputName) {
      //console.log(e);

      //문자열.toUpperCase() : 대문자로 변환
      this.name = inputName.toUpperCase();
    },
    add(num1, num2, type) {
      if (type == 1) {
        this.result = this.x + this.y;
      } else {
        this.result2 = this.a + this.b;
      }
    },
    // add2(a, b) {
    //   this.result2 = a + b;
    // },
  },
};
</script>
