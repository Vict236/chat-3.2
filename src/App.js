import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Header} from './components/Header';
import {Login} from './pages/Login';
import {Main} from './pages/Main';

import './App.css';

function App() {
  return (
    <>
    <Routes>
<Route path='/' element={<>Header </>} />
<Route index element={<>Login </>} />
<Route path='/main' element={<>Main </>} />
    </Routes>
    </>
  )
}

export default App;
