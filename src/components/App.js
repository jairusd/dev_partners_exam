import React, {useState} from 'react'
import moment from 'moment'
import ArticlePreview from './ArticlePreview'
import CreateArticle from './CreateArticle'

export default function App() {
  const initialArticles = Array(1)
    .fill({
      content: `WHO is continuously monitoring and responding to this outbreak.
        This Q&A will be updated as more is known about COVID-19, how it spreads
        and how it is affecting people worldwide. For more information, check back
        regularly on WHO’s coronavirus pages. https://www.who.int/emergencies/diseases/novel-coronavirus-2019',
      `,
      dateCreated: '8 April 2020',
      title: 'Q&A on coronaviruses (COVID-19)',
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

  const doShowArticle = () => {
    console.log('test')
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
            onShowArticle={doShowArticle}
          />
        ))}
      </div>
    </div>
  )
}
