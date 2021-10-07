import React ,{useContext} from 'react'
import { NewsContext } from '../NewsContext'
import NewsArticle from './NewsArticle';
import './News.css'

const News = ({setCurrentNewsId}) => {

    const {news}= useContext(NewsContext)

    return (
        <>
        <h1 className='header'>News App 📰</h1>
        <div className='news-container'>
        {
                news.map(item=>{
                return(
                     <NewsArticle news={item} setCurrentNewsId={setCurrentNewsId} />                
                )
                }) 
        }  
        </div>
        </>
    )
}

export default News
