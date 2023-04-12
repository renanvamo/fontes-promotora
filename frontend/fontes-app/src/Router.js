import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, Home } from './pages';

// const Private = ({ Item }) => {
//   const signed = false;

//   return signed > 0 ? <Item /> : <SignIn />;
// }

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/home" element={<Private Item={Home} />} /> */}
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={ <SignIn /> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}