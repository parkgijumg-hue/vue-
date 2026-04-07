import { defineStore } from 'pinia';
import { ref, computed, inject } from 'vue';

// pinia 스토어 정의
// defineStore : 스토어 생성하는 함수
// 첫 번쨰 인자(like)가 해당 스토어의 고유 이름이 된다.

export const useLikeStore = defineStore('like', () => {
  //state 정의
  const like = ref(0); // 좋아요 수를 저장하는 상태 변수

  //action : 상태 값 변경
  //like 값을 1씩 증가시키는 메소드
  const increase = () => {
    like.value++;
  };

  const decrease = () => {
    like.value--;
  };

  // getters : 계산된 값
  // like 5배 증가한 값만 보여줄 뿐 원본 like 값은 안바뀜
  const fivelike = computed(() => like.value * 5);

  //사용할 상태, 상태값 반환
  return { like, increase, decrease, fivelike };
});
