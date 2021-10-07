import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';
import { NewsContext } from './NewsContext';
import News from './Components/News';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NewsDetail from './Components/NewsDetail';
import PageNotFound from './Components/PageNotFound';

function App() {

  const [news,setNews] = useState([])
  const [currentNewsId,setCurrentNewsId] = useState()
  
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`).then(res=>{
    res.data.articles.forEach((item,index)=>{
        item.id= index+1;
    })
    setNews(res.data.articles)
 }
    ).catch(error=>{
      console.log(error);
    })
}, [])

  return (
    <NewsContext.Provider value={{news}}>
    <div className="news-wrapper">
      <Router>
        <Route exact path='/'>
          <News setCurrentNewsId={setCurrentNewsId} />
        </Route>
        <Route path='/news-details'>
           {currentNewsId ? <NewsDetail currentNewsId={currentNewsId}/> :<PageNotFound/> }
        </Route>
      </Router>
    </div>
    </NewsContext.Provider>
  );
}

export default App;
