import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './_setting/index.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
