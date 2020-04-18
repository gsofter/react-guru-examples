import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
const API_KEY = "5ed644a60cfc45bcaedc0fe478c008fd"

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .contents {
        h2{
            margin: 0;
            a{
                color: black;
            }
        }

        p {
            margin: 0;
            line-height: 1.5;
            margin-top:0.5rem;
            white-space: normal;
        }
    }

    & + & {
        margin-top: 3rem;
    }
`

const NewsItem = ({article}) => {
    const {title, description, url, urlToImage} = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2> 
                    <a href={url} target="_blank" rel="reopener noreferer">
                        {title}
                    </a>
                </h2>
                <p> {description}</p>
            </div>
        </NewsItemBlock>
    )
}

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
    title: 'title',
    description: 'content',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
  };

const NewsList = () => {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
                setArticles(response.data.articles)
            } catch(e) {
                console.log(e)
            }
            setLoading(false)
        }
        fetchData();
    }, [])
  
    if(loading) {
        return <NewsListBlock> Loading .... </NewsListBlock>
    }
  
    if(!articles) {
        return null
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
    
};

const Chapter14 = () => {
  
  return (
    <div>
      <NewsList />
    </div>
  )
}

export default Chapter14
