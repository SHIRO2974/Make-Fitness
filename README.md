# 🏋️‍♂️ Make Fitness — 통합 헬스 수업 예약 플랫폼

> 트레이너와 회원 간의 **수업 등록**, **예약**, **출결**, **결제**까지  
> 하나의 시스템으로 연결하는 **웹 기반 헬스장 관리 플랫폼**

---

## 📌 프로젝트 개요

**Make Fitness**는 헬스장 운영에 필요한 전 과정을 통합한 웹 애플리케이션입니다.  
트레이너는 수업을 등록하고 회원의 출석을 관리하며,  
회원은 구매한 이용권(프로모션)을 기준으로 수업을 예약하고 출석 내역을 확인할 수 있습니다.  
결제 시스템은 **PortOne**을 통해 안정적으로 연동되어 있으며,  
예약 시스템은 **캘린더 기반 인터페이스**로 실시간 반영됩니다.

---

## 🧩 핵심 기능

### 👤 회원 (Customer)
- JWT 기반 로그인 / 인증 처리  
- 보유한 프로모션(이용권) 목록 확인  
- 캘린더 기반 수업 예약 및 실시간 반영  
- 출석된 수업 내역 히스토리 확인  

### 🏋️ 트레이너 (Trainer)
- 다중 시간대 수업 등록 / 조회 / 삭제  
- 회원별 예약 현황 조회  
- 수업 자동 출석 처리 및 이력 관리  

### 💳 결제 시스템
- **PortOne** 연동 (KakaoPay, 신용카드 등 지원)  
- 프로모션(이용권) 결제 → 수업 예약 자격 자동 부여  
- 수업 예약 시 남은 횟수 자동 차감, 취소 시 복구  

---

## 🛠 기술 스택

| 영역        | 기술                                     |
|-------------|------------------------------------------|
| **Frontend**| React, React Router, Emotion, Axios      |
| **Backend** | Spring Boot 3.4.3, Spring Security, MyBatis |
| **Database**| MySQL                                    |
| **CI/CD**   | GitHub Actions, NGINX, EC2               |
| **인증**    | JWT (Spring Security 연동)               |
| **결제**    | PortOne Browser SDK                      |
| **문서화**  | Swagger 자동화 문서 (SpringDoc 기반)     |

---

## 🧱 아키텍처 및 구조

[React] ↑ [PortOne SDK] ←→ [Spring Boot + JWT + Swagger] ←→ [MySQL] ↓ [GitHub Actions + EC2]

### 📁 디렉토리 구조
make-fitness/ ┣ back/ ┃ ┣ controller/ ┃ ┣ service/ ┃ ┣ repository/ ┃ ┣ mapper/ ┃ ┣ dto/ ┃ ┗ entity/ ┗ front/ ┣ pages/ ┣ components/ ┣ apis/ ┣ router/ ┗ context/


## 🖥 실행 방법

### 백엔드 실행
./gradlew bootRun

### 프론트엔드 실행
npm install
npm run dev

### 🧪 테스트 계정

| 구분     | ID         | PW         |
|----------|------------|------------|
| Admin    | admin1234  | admin1234! |
| Manager  | park1234   | dong1234!  |
| Customer | wogus2974  | wogus2987! |

## 👨‍💻 개발자 정보

| 이름               | 역할                     |
|--------------------|--------------------------|
| 이재현 (Lee Jaehyun) | 전체 설계 및 개발 (풀스택) |

### 🛠 담당 범위

- DB 모델링 및 관계 설계  
- Figma를 통한 UX 흐름 구성  
- Spring Boot 기반 API 구현  
- React UI / 캘린더 컴포넌트 개발  
- CI/CD 자동화 및 배포 구성

🔗 링크
🔗 배포 주소: https://makefitness.store/
📄 노션 프로젝트 문서: https://lake-guanaco-5fe.notion.site/1af2ef25054380d5bdf8f184138b735e

