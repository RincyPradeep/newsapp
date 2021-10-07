import React from 'react'
import { useHistory} from 'react-router-dom'

const NewsArticle = ({news,setCurrentNewsId}) => {
    const history=useHistory();
    return (
        <div className='news-card' onClick={()=>{setCurrentNewsId(news.id);history.push('/news-details')}}>           
            <h4>{news.title}</h4>  
            <h5>-{news.author}</h5>
            <p>{news.description}</p>
            <div className='news-card-footer'>
                <p>{news.source.name}</p>
                <p>{news.publishedAt}</p>    
            </div>  
        </div>
    )
}

export default NewsArticle
