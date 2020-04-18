import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'
import { NavLink, BrowserRouter, Route } from 'react-router-dom'
import usePromise from '../lib/usePromise'
const API_KEY = '5ed644a60cfc45bcaedc0fe478c008fd'

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
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article
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
`

const sampleArticle = {
  title: 'title',
  description: 'content',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
}

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
    )
  }, [category])

  if (loading) {
    return <NewsListBlock> Loading .... </NewsListBlock>
  }

  if (!response) {
    return null
  }

  if (error) {
    return <NewsListBlock> Error!</NewsListBlock>
  }

  const { articles } = response.data
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

const categories = [
  {
    name: 'all',
    text: 'All',
  },
  {
    name: 'business',
    text: 'Business',
  },
  {
    name: 'entertainment',
    text: 'Entertainment',
  },
  {
    name: 'health',
    text: 'Health',
  },
  {
    name: 'science',
    text: 'Science',
  },
  {
    name: 'sports',
    text: 'Sports',
  },
  {
    name: 'technology',
    text: 'Technology',
  },
]

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`

const Categories = ({ category, onCategorySelect }) => {
  const prevPath = 'chapters/chapter14'
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? `/${prevPath}` : `/${prevPath}/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  )
}

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all'
  console.log('NewsPage =>', category)
  return (
    <React.Fragment>
      <Categories />
      <NewsList category={category} />
    </React.Fragment>
  )
}
const Chapter14 = () => {
  return <Route path="/chapters/chapter14/:category?" component={NewsPage} />
}

export default Chapter14
