import React, {useState} from 'react'
import moment from 'moment'
import ArticlePreview from './ArticlePreview'
import CreateArticle from './CreateArticle'
import EditArticle from './EditArticle'
import {articles as initialArticles} from '../mockData'

export default function App() {
  const [articles, setArticles] = useState([...initialArticles])

  const doDeleteArticle = id => {
    const filtered = articles.filter(article => article.id !== id)
    setArticles(filtered)
  }

  const doSaveArticle = (content) => {
    if (!content.id) {
      setArticles([...articles, {
        ...content,
        id: moment().format('YYYY/MM/DD'),
      }])
    }
  }

  const doShowArticle = () => {
    console.log('test')
  }

  const doEditArticle = article => {

  }

  return (
    <div className="container">
      <CreateArticle onSave={doSaveArticle} />

      <EditArticle onSave={doSaveArticle} />

      <div className="articles-preview">
        {articles.map(article => (
          <ArticlePreview
            key={article.id}
            article={article}
            onDelete={doDeleteArticle}
            onSave={doSaveArticle}
            onShowArticle={doShowArticle}
            onEdit={() => doEditArticle(article)}
          />
        ))}
      </div>
    </div>
  )
}
