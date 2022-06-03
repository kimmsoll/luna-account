# 💸 이 달의 소비 (Luna-account)

## 🙌 서비스 소개

수입 및 지출 내역을 한눈에 알아볼 수 있는 미니 가계부입니다

## 🚀 배포
[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://luna-account.netlify.app)

## 🔧 기술 스택

- Typescript
- React
- Recoil
- Axios
- Victory
- dayjs
- storejs
- react-datepicker
- SCSS

## 💡 구현 상세
- 홈 화면에서 총 지출과 수입을 그래프 및 수치로 확인할 수 있습니다
- 전체 내역, 수입, 지출에 따라 데이터를 필터링하고 최근 날짜부터 보여줍니다
- 헤더의 버튼과, 각 내역 목록의 맨 하단에서 거래 내역 추가 창을 띄울 수 있습니다
-  거래 내역 추가 창에서 모든 항목을 입력하지 않았거나 올바른 타입이 아닐 경우, validation 을 하여 올바른 값을 입력하도록 구현했습니다.
- 거래 내역이 변경될 때마다 로컬 스토리지에 저장하도록 했습니다.

## 📌 실행 방법

```
git clone https://github.com/kimmsoll/luna-account.git
```

```
yarn && yarn start
```

## 📸 구현 결과
| 홈 | 거래 내역 추가 |
|:---:|:---:|
|<img width="497" alt="스크린샷 2022-06-04 오전 1 43 36" src="https://user-images.githubusercontent.com/62868465/171909322-12549822-c285-4d23-8091-f218d530f989.png">|<img width="499" alt="거래 내역 추가" src="https://user-images.githubusercontent.com/62868465/171909200-aa5f13fe-e36c-4e30-a532-0ab3cb2c87d5.png">|

## ✏️ 느낀 점
- 처음에 데이터를 react-query 로 받아왔으나, 데이터가 변경될 때 처리하는 부분에서 난항을 겪어, recoil 만으로 데이터를 관리했습니다. 이 부분은 더 공부할 생각입니다.
- '이 달의 소비' 이름과 달리, 달별 데이터 구분을 아직 구현하지 못했습니다. 아쉽지만 다음 기회에 구현하려고 합니다.
- react portal 을 처음 써봤는데, 원하는 대로 구현할 수 있어 즐거운 경험이었습니다.
