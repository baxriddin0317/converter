import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Content from './Components/Content/Content';
import Delete from './Components/Delete/Delete';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Merge from './Components/Merge/Merge';
import Protect from './Components/Protect/Protect';
import Split from './Components/Split/Split';
import Unclock from './Components/Unclock/Unclock';

function App() {

  // ==== theme useState ====
  const [ theme, setTheme ] = useState("light");
  const [ fileVal, setFileVal ] = useState();
  
  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path='/' element={<Main theme={theme} setFileVal={setFileVal} />} />
        <Route path='/word-to-pdf' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdf-to-word' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdf-to-excel' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/excel-to-pdf' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/powerpoint-to-pdf' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdf-to-powerpoint' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/jpg-to-pdf' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdf-to-jpg' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/iword-to-pdf' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdf-to-iword' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/ebooks-to-pdf' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdf-to-ebooks' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdfa-to-pdf' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdf-to-pdfa' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/pdf-to-ebooks' element={<Content theme={theme} fileVal={fileVal} />} />
        <Route path='/merge' element={<Merge theme={theme} fileVal={fileVal} />} />
        <Route path='/split' element={<Split theme={theme} />} />
        <Route path='/protect' element={<Protect theme={theme} fileVal={fileVal} />} />
        <Route path='/unclock' element={<Unclock theme={theme} fileVal={fileVal} />} />
        <Route path='/delete' element={<Delete theme={theme} fileVal={fileVal} />} />
      </Routes>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
