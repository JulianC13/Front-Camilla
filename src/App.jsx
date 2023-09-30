import React, { useState, useEffect, useDebugValue }  from 'react';
import './App.css'
import Card from './components/Card';
import HeadC from './components/HeadC';
import Footer from './components/Footer';

const App = () => {
// Hooks that allow you to load the status of the request and the result.
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [dataT, setDataT] = useState([]);

      useEffect(() => {
        // For web deployment, this is the URL that was used.
        fetch("https://back-camilla2-0e129e1d58c8.herokuapp.com/search")
        // For deployment in a local enviroment use local address:
        // fetch("http://127.0.0.1:8282/search")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setDataT(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

// Handling the behavior of the request and rendering something to let the user know what's happening.
if (error) {
        return <div><h2>Error while fetching the data, please try later</h2></div>;
    } else if (!isLoaded) {
        return <div><h1>Loading...</h1></div>;
    } else {
      return (
        <>
          <HeadC/>
          <div className='cards'>
            {dataT.map(da => (
            <Card key={da.Date} data={da}/>
            ))}
          </div>
          <Footer/>

        </>
    );
    }
}
export default App

