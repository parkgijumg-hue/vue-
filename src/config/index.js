// 이 파일은 Header에서 읽는 "사이트 설정/메뉴 데이터"의 단일 출처이며, Header.vue가 이 값을 기준으로 메뉴를 만들고 라우터 경로로 이동한다.
export default {
  // 히어로 영역에 표시할 메인 타이틀
  title: 'Fake Store',
  // 히어로 영역에 표시할 서브 타이틀
  subtitle: 'Vue3 연습 사이트',
  // Header 메뉴에 그려질 항목 목록
  menus: [
    {
      // 메뉴 텍스트
      title: 'Fake store',
      // 라우터 경로와 1:1로 매칭되어야 화면이 정상 렌더링됨
      url: '/',
      // Font Awesome 아이콘 클래스
      icon: 'fa-solid fa-house',
      // 브랜드 메뉴처럼 강조 표시할지 여부
      isBrand: true,
    },
    {
      title: '가전',
      url: '/electronics',
      icon: 'fa-solid fa-tv',
    },
    {
      title: '주얼리',
      url: '/jewelery',
      icon: 'fa-solid fa-gem',
    },
    {
      title: '남성의류',
      url: '/mensclothing',
      icon: 'fa-solid fa-user-tie',
    },
    {
      title: '여성의류',
      url: '/womensclothing',
      icon: 'fa-solid fa-person-dress',
    },
  ],
};
