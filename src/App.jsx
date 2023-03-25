import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '@pages/SignUp/SignUp';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Header from '@pages/Header/Header';
import Logout from '@components/Header/Logout';
import Footer from '@pages/Footer/Footer';
import MainNavPage from '@pages/MainNavPage/MainNavPage';
import DetailPage from '@pages/DetailPage/DetailPage';
import LandingButtonPage from '@pages/LandingButtonPage/LandingButtonPage';
import SignIn from '@pages/SignIn/SignIn';
import FindIdPage from '@pages/FindId/FindIdPage';
import FindIdResultPage from '@pages/FindIdResult/FindIdResultPage';
import FindPasswordPage from '@pages/FindPassword/FindPasswordPage';
import Profiles from '@pages/Profiles/Profiles';
import MainPageSlide from '@pages/MainPageSlide/MainPageSlide';
import LandingPage from '@pages/LandingPage/LandingPage';
import Main from '@pages/Main/Main';
import { searchOpen } from './@store/searchOpen';
import DetailPages from './pages/DetailPages/DetailPages';
import SearchForm from './pages/SearchForm/SearchForm';

function App() {
  const [showLogout, setShowLogout] = useState(false);
  const [realSearchOpen] = useRecoilState(searchOpen);

  const onClickModalHandler = () => {
    setShowLogout(true);
  };

  const handleLogoutConfirm = () => {
    console.log('User confirmed logout');
    // 로그아웃 로직 작성 필요
    setShowLogout(false);
  };

  const handleLogoutCancel = () => {
    console.log('User cancelled logout');
    setShowLogout(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header onClickModalHandler={onClickModalHandler} />
        {showLogout && (
          <Logout
            onConfirm={handleLogoutConfirm}
            onCancel={handleLogoutCancel}
          />
        )}
        {
          realSearchOpen && <SearchForm />
        }
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginpage" element={<SignIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/detailpage" element={<DetailPage />} />
          <Route path="/landingbuttonpage" element={<LandingButtonPage />} />
          <Route path="/findid" element={<FindIdPage />} />
          <Route path="/findidresult" element={<FindIdResultPage />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/detailPage01/:id" element={<DetailPages />} />
          <Route path="/findpassword" element={<FindPasswordPage />} />
          <Route path="/search" element={<SearchForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
