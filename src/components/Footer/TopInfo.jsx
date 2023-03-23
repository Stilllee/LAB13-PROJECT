import style from './TopInfo.module.css';

export function TopInfo() {
  return (
    <div className={style.topinfo}>
      <div className={style.notice}>
        <a href="#section">공지사항</a>
        <a href="#section" className={style.gray200}>
          [안내] 합병보고 주주총회에 갈음하는 공고
        </a>
      </div>
      <div className={`${style.select} ${style.gray200}`}>
        <a href="#section">브랜드 바로가기 +</a>
        <p>|</p>
        <a href="#section">그룹 계열사 바로가기 +</a>
      </div>
    </div>
  );
}
