import User from  './components/User';
import Overlay from  './components/Overlay';
import Form from  './components/Form';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './scss/app.scss';

const app = () => {
    document.querySelector('.content-left').innerHTML = User(); 
    document.querySelector('.wrapper-right-overlay').innerHTML = Overlay(); 
    document.querySelector('.wrapper-right-form').innerHTML = Form(); 
}
  
app();

