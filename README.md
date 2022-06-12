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
> 월별 거래 내역 구분
- 헤더 아래의 화살표 버튼을 통해 1월 ~ 12월까지 데이터를 구분하여 보여주도록 했습니다.
- 거래 내역이 변경될 때마다 로컬 스토리지에 저장하도록 했습니다.

> 지출 / 수입 비교 처리
- 홈 화면에서 총 지출과 수입을 그래프 및 수치로 보여줍니다.
- 전체 내역, 수입, 지출에 따라 데이터를 필터링하고 최근 날짜부터 보여줍니다.

> 거래 내역 추가
- 헤더의 버튼과, 각 내역 목록의 맨 하단에서 거래 내역 추가 창을 띄울 수 있게 했습니다.
-  거래 내역 추가 시 모든 항목을 입력하지 않았거나 올바른 타입이 아닐 경우, validation 을 하여 올바른 값을 입력하도록 유도했습니다.

> 거래 내역 삭제
- 홈 화면에서 각 내역을 클릭하면 거래 내역 삭제 창을 띄울 수 있게 했습니다.
- 삭제 버튼을 누를 경우 삭제 확인 창을 띄웁니다.

> 라이트 모드 / 다크 모드
- 헤더의 아이콘을 통해 테마를 변경할 수 있습니다.
- 테마를 로컬 스토리지에 저장하여, 선택된 테마를 유지하도록 했습니다.

## 📌 실행 방법

```
git clone https://github.com/kimmsoll/luna-account.git
```

```
yarn && yarn start
```

## 📸 구현 결과
### 라이트 모드
| 홈 | 거래 내역 추가 | 거래 내역 삭제 |
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/62868465/173240374-f48666d5-a925-4655-b8fd-48b6e4259713.gif" width="220" />|<img src="https://user-images.githubusercontent.com/62868465/173240425-0b22ea5e-6b19-4f21-85d9-439fe3d3cb7d.gif" width="220" />|<img src="https://user-images.githubusercontent.com/62868465/173240429-4f61cd14-ccbb-452d-8d70-40e0aa933f04.gif" width="220" />|

### 다크 모드
| 홈 | 거래 내역 추가 | 거래 내역 삭제 |
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/62868465/173240497-79cbb110-3db4-4d67-9e6f-4da5ad9b45a5.gif" width="220" />|<img src="https://user-images.githubusercontent.com/62868465/173240494-39fd94db-862a-4658-956d-e3ea6e001d2a.gif" width="220" />|<img src="https://user-images.githubusercontent.com/62868465/173240489-5a8ed3fc-c943-4dc7-addf-ac1c21e2f1cc.gif" width="220" />|

## ✏️ 배운 점
- react portal 을 처음 써봤는데, 원하는 대로 구현할 수 있어 즐거운 경험이었습니다.
- 당월 데이터가 없을 경우, input 입력 타입이 다를 경우 등 발생할 수 있는 에러를 사전에 고려하는 것의 중요성을 느꼈습니다.
- 다크모드 색 조합을 하는 데 꽤 시간이 걸렸습니다. Adobe, Color space 등의 사이트를 통해 색을 조합했는데, 디자인을 많이 접하고 감각을 길러야 할 필요성을 느꼈습니다.

## 🔥 아쉬운 점
- 처음에 데이터를 react-query 로 받아왔으나, 데이터가 변경될 때 처리하는 부분에서 난항을 겪어, recoil 만으로 데이터를 관리했습니다. 이 부분은 더 공부할 생각입니다.
- 0월, 13월 등의 달로 넘어가지 않기 위해 1월 ~ 12월로 범위를 제한했는데, 연 단위로 확장하지 못한 점이 아쉽습니다. 시간이 된다면 이 부분도 구현하고 싶습니다.

