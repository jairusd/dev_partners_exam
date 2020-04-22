import React, {useState} from 'react'
import moment from 'moment'
import ArticlePreview from './ArticlePreview'
import CreateArticle from './CreateArticle'

export default function App() {
  const initialArticles = Array(3)
    .fill({
      content: 'test content',
      dateCreated: 'test date',
      title: 'test title',
    })
    .map((e, i) => ({...e, id: i}))

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

  return (
    <div className="container">
      <CreateArticle onSave={doSaveArticle} />

      <div className="articles-preview">
        {articles.map(article => (
          <ArticlePreview
            key={article.id}
            article={article}
            onDelete={doDeleteArticle}
            onSave={doSaveArticle}
          />
        ))}
      </div>
    </div>
  )
}
