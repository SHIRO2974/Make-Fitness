/** SelectTrainer.jsx */
/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import { AuthContext } from '../../../../context/AuthContext';

// 트레이너 리스트 (하드코딩)
const trainers = [
  {
    manager_id: 1,
    name: '박재훈',
    img: '/Trainer/park.jpeg',
    profile: [
      '동국대학교 사회체육학과 졸업',
      '2023 IFBB TEXAS Pro 클래식 피지크 우승',
      '2023 MR.OLYMPIA 클래식 피지크 TOP10',
      '2023 TAIWAN Pro 클래식 피지크 우승',
    ],
  },
  {
    manager_id: 2,
    name: '장성엽',
    img: '/Trainer/jang.jpg',
    profile: [
      '계명문화대 체육학과 학사졸업',
      '퍼스널 트레이닝 2급', '스포츠마사지 2급',
      '유아체육지도자 2급', '생활체육지도자 3급(보디빌딩)',
      '펑셔널 트레이닝 마스터과정 수료',
    ],
  },
  {
    manager_id: 3,
    name: '강두혁',
    img: '/Trainer/kang.jpg',
    profile: [
      '한국체육대학교 운동건강관리학과 보디빌딩 학사',
      '스포츠 테이핑사 1급', '스포츠마사지 1급',
      '유아체육지도자 1급', '체형관리사 1급',
    ],
  },
  {
    manager_id: 4,
    name: '신소영',
    img: '/Trainer/shin.jpg',
    profile: [
      '리더십 지도자 1급', '레크레이션지도사 1급',
      '스포츠마사지 1급', '유아체육지도자 1급',
      'CPR(긴급구조심폐소생술)교육 수료',
    ],
  },
];

function SelectTrainer() {
  const navigate = useNavigate();
  const [selectedTrainer, setSelectedTrainer] = useState(null); // 현재 선택된 트레이너
  const { loginUser, loading } = useContext(AuthContext);       // 로그인 정보 및 로딩 상태

  if (loading) return <div>로그인 확인 중...</div>; // 인증 정보 대기 중

  const userId = loginUser?.jti;

  /**
   * "선택 완료" 버튼 클릭 시 실행
   */
  const handleComplete = () => {
    if (!selectedTrainer) return alert('강사를 선택해주세요!');
    if (!userId) return alert('로그인 상태가 아닙니다.');

    // 선택된 트레이너와 유저 정보를 상태로 전달하며 페이지 이동
    navigate('/makefitness/pt', {
      state: {
        trainer: selectedTrainer,
        user_id: userId,
      },
    });
  };

  return (
    <div css={s.topGroup}>
      {/* 상단 안내 텍스트 */}
      <div css={s.toptext1}>START YOUR FIT</div>
      <div css={s.toptext2}>근력운동 시작을 위한 모든 것</div>
      <h2 css={s.managerIntroduceTitle}>강사진을 선택해주세요.</h2>

      {/* 트레이너 리스트 렌더링 */}
      {trainers.map((trainer, idx) => (
        <button
          key={idx}
          onClick={() => setSelectedTrainer(trainer)}
          css={[
            s.trainerCard,
            selectedTrainer?.name === trainer.name && s.selectedTrainerCard, // 선택 상태 스타일
          ]}
        >
          <div css={s.toptext5}>
            <div css={s.mainImgs4}>
              <img src={trainer.img} alt={`${trainer.name} 이미지`} />
            </div>
            <div css={s.topTextGroup6}>
              <div css={s.toptext7}>{trainer.name}</div>
              {trainer.profile.map((line, i) => (
                <div key={i} css={s.toptext6}>{line}</div>
              ))}
            </div>
          </div>
        </button>
      ))}

      {/* 하단 선택 완료 버튼 */}
      <div css={s.selectBtnWrapper}>
        <button css={s.completeBtn} onClick={handleComplete}>선택 완료</button>
      </div>
    </div>
  );
}

export default SelectTrainer;
