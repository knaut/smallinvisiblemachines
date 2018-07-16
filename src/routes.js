// COMPONENTS
import App from './components/app.js';

// PAGES
import Home from './pages/home.js';

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