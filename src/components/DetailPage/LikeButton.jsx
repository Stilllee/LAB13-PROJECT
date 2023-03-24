import { useState } from 'react';
import styles from './LikeButton.module.css';
import Modal from './Modal';

function Button() {
  const [isActive, setIsActive] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleOpenModal = () => {
    setIsActive(true);
    setIsBookmarked(prevIsBookmarked => !prevIsBookmarked);
  };

  const handleCloseModal = ({ target, currentTarget }) => {
    if (target.localName === 'button' || target === currentTarget) {
      setIsActive(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${isActive ? styles.active : ''}`}
        onClick={handleOpenModal}
      >
        {isBookmarked ? '찜 해제하기' : '찜 하기'}
      </button>
      {isActive && (
        <Modal onClose={handleCloseModal}>
          <p>
            이 프로그램을 {isBookmarked ? '찜했습니다.' : '찜 해제하였습니다'}
          </p>
        </Modal>
      )}
    </>
  );
}

export default Button;
