import {login, welcome} from './Constants';
import Login from '../components/Pages/Login'
import Welcome from '../components/Pages/Welcome'

export const pages = [
  {
    path: login,
    component: Login
  },
  {
    path: welcome,
    component: Welcome
  }
];