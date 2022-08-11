import { Routes, Route } from 'react-router-dom';

import AccountPage from '../components/AccountPage';
import BlogListPage from '../components/BlogListPage';
import BlogPage from '../components/BlogPage';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import RegisterPage from '../components/RegisterPage';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} />
      <Route path='/login' element={<LoginPage></LoginPage>} />
      <Route path='/register' element={<RegisterPage></RegisterPage>} />
      <Route path='/account' element={<AccountPage></AccountPage>} />
      <Route path='/bloglist' element={<BlogListPage></BlogListPage>} />
      <Route path='/blog/:blogid' element={<BlogPage></BlogPage>} />
      <Route path='*' element={<NotFoundPage></NotFoundPage>} />
    </Routes>
  )
}

export default AppRouter;