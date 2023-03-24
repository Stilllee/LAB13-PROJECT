import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@components/Footer/Footer';
import SignUp from '@pages/SignUp/SignUp';
import SearchForm from './pages/SearchForm/SearchForm';
import { useState } from 'react';
import Header from '@pages/Header/Header';
import Logout from '@components/Header/Logout';
import Footer from '@components/Footer/Footer';
import MainNavPage from '@pages/MainNavPage/MainNavPage';
import DetailPage from '@pages/DetailPage/DetailPage';
import LandingButtonPage from '@pages/LandingButtonPage/LandingButtonPage';
import SignIn from '@pages/SignIn/SignIn';
import Test from '@components/Test/Test';
import FindIdPage from '@pages/FindId/FindIdPage';
import FindIdResultPage from '@pages/FindIdResult/FindIdResultPage';
import FindPasswordPage from '@pages/FindPassword/FindPasswordPage';
import Profiles from '@pages/Profiles/Profiles';
import MainPageSlide from '@pages/MainPageSlide/MainPageSlide';
import LandingPage from '@pages/LandingPage/LandingPage';
import DetailPages from './pages/DetailPages/DetailPages';

function App() {
  const [showLogout, setShowLogout] = useState(false);

  const onClickModalHandler = () => {
    setShowLogout(true);
  };

  const handleLogoutConfirm = () => {
    console.log('User confirmed logout');
    // 로그아웃 로직 작성 필요
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
        <Routes>
          <Route path="/hello" element={<SignUp />} />
          <Route path="/mainnavpage" element={<MainNavPage />} />
          <Route path="/detailpage" element={<DetailPage />} />
          <Route path="/landingbuttonpage" element={<LandingButtonPage />} />
          <Route path="/onboarding" element={<LandingPage />} />
          <Route path="/findid" element={<FindIdPage />} />
          <Route path="/findidresult" element={<FindIdResultPage />} />
          <Route path="/hello" element={<SignIn />} />
          <Route path="/test" element={<Test />} />
          <Route path="/hello" element={<Test />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/main" exact element={<MainPageSlide />} />
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
