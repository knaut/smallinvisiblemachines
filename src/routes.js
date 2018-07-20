// COMPONENTS
import App from './components/app.jsx';

// PAGES
import Home from './pages/home.jsx';

const Routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        text: 'Home',
        component: Home
      }
    ]
  }
];

export default Routes;