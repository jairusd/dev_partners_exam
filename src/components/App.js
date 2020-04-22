import React, {useState} from 'react'
import moment from 'moment'
import ArticlePreview from './ArticlePreview'
import CreateArticle from './CreateArticle'
import EditArticleDialog from './EditArticleDialog'
import {articles as initialArticles} from '../mockData'

export default function App() {
  const [articles, setArticles] = useState([...initialArticles])
  const [showEdit, setShowEdit] = useState(false)
  const [currentArticle, setCurrentArticle] = useState(null)

  const doDeleteArticle = id => {
    const filtered = articles.filter(article => article.id !== id)
    setArticles(filtered)
  }

  const doSaveArticle = (content) => {
    console.log('@content', content)
    if (!content.id) {
      setArticles([...articles, {
        ...content,
        id: moment().format('YYYY/MM/DD'),
      }])
    }

    const filtered = articles.filter(a => a.id !== content.id)
    setArticles([...filtered, content])
  }

  const doShowArticle = () => {
    console.log('test')
  }

  const doEditArticle = chosenArticle => {
    setShowEdit(true)
    setCurrentArticle(chosenArticle)
  }

  return (
    <div className="container">
      <CreateArticle onSave={doSaveArticle} />

      <EditArticleDialog
        article={currentArticle}
        show={showEdit}
        onHide={() => setShowEdit(!showEdit)}
        onSave={doSaveArticle}
      />

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
