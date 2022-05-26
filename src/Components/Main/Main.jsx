import React from 'react'
import Files from '../../Data';
import Card from '../Card/Card';
import Words from '../Words/Words';

function Main({theme, setFileVal}) {

  return (
    <main className={`main ${theme}`}>
        <section className='cards'>
        <div className="container">
            <h1 className="cards__title">Meet our full product family</h1>
            <ul className="cards__list">
            {Files.map(arr => (
                <Card 
                    key={arr.id} 
                    arr = {arr} 
                    setFileVal={setFileVal}
                    theme={theme} 
                />
            ))
            }
            </ul>
        </div>
        </section>

        <Words theme={theme} />

  </main>
  )
}

export default Main