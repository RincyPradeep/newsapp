import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { NewsContext } from '../NewsContext';

const NewsDetail = ({currentNewsId}) => {
    const history=useHistory();
    const {news} =useContext(NewsContext) 
    let currentNews = news.filter(item=>item.id === currentNewsId)
    return (
        <>
        <h1 className='header'>News App 📰</h1>
        <div className="news-detail-wrapper">
            <button className='back-btn' onClick={()=>history.push('/')}>Close</button>
          <div className='news-detail'>
            <h5>{currentNews[0].source.name}</h5>
            <h1 className='news-title'>{currentNews[0].title}</h1>
            <div className='news-subhead'>
                <h3>-{currentNews[0].author}</h3>
                <h3>{currentNews[0].publishedAt}</h3>
            </div>           
            <img src={currentNews[0].urlToImage} alt="news image" />
            <p>{currentNews[0].content}</p>
        </div>  
        </div>
        </> 
    )
}

export default NewsDetail
