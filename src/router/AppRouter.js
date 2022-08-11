import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AccountPage from '../components/AccountPage';
import BlogListPage from '../components/BlogListPage';
import BlogPage from '../components/BlogPage';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import RegisterPage from '../components/RegisterPage';
import Layout from '../components/Layout';


function AppRouter() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/account' element={<AccountPage></AccountPage>}></Route>
        <Route path='/bloglist' element={<BlogListPage></BlogListPage>}></Route>
        <Route path='/blog/:blogid' element={<BlogPage></BlogPage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRouter;