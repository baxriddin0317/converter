import { useState } from 'react';
import './App.scss';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Modal from './Components/Modal/Modal';
import Files from './Data';

function App() {
  const [ fileValue, setFileValue ] = useState(1);

  const [ modalUse, setModalUse ] = useState(false);
  // ==== theme useState ====
  const [ theme, setTheme ] = useState("light");
  
  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />

      <main className={`main ${theme}`}>
        <section className='cards'>
          <div className="container">
            <h1 className="cards__title">Meet our full product family</h1>
            <ul className="cards__list">
              {Files.map(arr => (
                  <Card 
                    key={arr.id} 
                    arr = {arr} 
                    Setvalue = {setFileValue} 
                    setModalUse={setModalUse} 
                    theme={theme} 
                  />
              ))
              }
            </ul>
          </div>
        </section>
        
        {modalUse && <Modal 
                        fileValue={fileValue} 
                        setModalUse={setModalUse} 
                        theme={theme} 
                      />}

      </main>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
