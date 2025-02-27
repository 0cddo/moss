import styled from '@emotion/styled';
import { StudyBanner } from '../../../components/StudyMain/StudyBanner';
import { COLOR } from '../../../constants';
import dynamic from 'next/dynamic';
import { NoticeTitle } from '../../../components/Notice/NoticeTitle';
import { Button } from '../../../components/Notice/Button';
const PostEditor = dynamic(
  () => import('../../../components/Notice/PostEditor'),
  {
    ssr: false,
  },
);

export default function NoticePage(): JSX.Element {
  return (
    <>
      <StudyBanner
        logo="../../images/StudyLogo.png"
        category="카테고리"
        title="React 스터디"
        des="혼자 코딩하기 싫은 개발자들 모여라! 누구나 자유롭게 모여서 각자 코딩해요"
        hashtag="#개발"
        member={7}
        link="#"
      />
      <NoticeTitle />
      <NoticeForm>
        <div className="list">
          <label htmlFor="input-category">말머리</label>
          <input
            list="category-list"
            id="input-category"
            name="input-category"
            placeholder="최대 4자까지 입력할 수 있습니다."
          />

          <datalist id="category-list">
            <option value="장소" />
            <option value="미션" />
            <option value="일반공지" />
          </datalist>
        </div>
        <div className="list">
          <label htmlFor="input-title">제목</label>
          <input type="text" id="input-title" className="w100" />
        </div>
        <div className="list">
          <PostEditor />
        </div>

        <BtnGroup>
          <Button text="글게시" href="/study/notice/view" className="write" />
          <Button text="취소" href="/study/notice/view" className="cancel" />
        </BtnGroup>
      </NoticeForm>
    </>
  );
}

const NoticeForm = styled.form`
  .list {
    margin-top: 16px;
  }
  label {
    display: block;
    margin-bottom: 8px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  input {
    width: 320px;
    height: 48px;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #e7e6e2;
    color: #aaa;
    &:focus {
      outline: 0;
      border-color: ${COLOR.main};
      color: ${COLOR.black};
    }
    &.w100 {
      width: 100%;
    }
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 8px;
`;
