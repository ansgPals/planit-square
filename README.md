# 바닐라 JS Todo List

## 폴더 및 파일 구조

```
planit-square/
├── components/
│   ├── CreateInput.js   # 입력창 컴포넌트
│   ├── List.js          # 할 일 목록 컴포넌트
│   ├── Todoitem.js      # 개별 할 일 컴포넌트
│   └── Summary.js       # 통계/하단 컴포넌트
├── utils/
│   ├── storage.js       # 로컬스토리지 유틸
│   └── toast.js         # 토스트 알림 유틸
├── styles/
│   ├── base.css
│   ├── input.css
│   ├── item.css
│   ├── list.css
│   ├── summary.css
│   ├── toast.css
│   └── style.css
├── App.js
├── index.js
├── index.html
└── README.md
```

## 주요 기능 및 구현 방식

- **할 일 추가/삭제/수정/완료 토글**
  - 입력창에서 Enter 또는 추가 버튼으로 등록
  - 각 항목별 체크박스, 수정, 삭제 버튼 제공
- **로컬스토리지 활용**
  - `utils/storage.js`에서 get/set 함수로 관리
  - 새로고침/브라우저 재시작 시에도 데이터 유지
- **최신순 정렬**
  - 배열의 unshift로 최신 등록이 항상 위에 노출
- **사용자 경험**
  - 스크롤바 커스텀, 토스트 알림 등 사용자 경험 개선
- **컴포넌트 분리**
  - 입력, 리스트, 아이템, 통계 등 역할별 파일 분리
  - 유지보수 및 확장 용이

## 실행 방법

1. 프로젝트 폴더에서 `index.html`을 브라우저로 실행
2. 별도의 빌드/런타임 환경 필요 없음 (순수 HTML/JS/CSS)
