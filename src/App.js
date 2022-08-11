import AppRouter from './router/AppRouter';
import AuthProvider from './auth/AuthProvider';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Layout>
            <AppRouter />
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
