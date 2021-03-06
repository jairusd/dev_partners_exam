import React, {useState, useEffect} from 'react'
import {
  DialogContainer, Toolbar, Button
} from 'react-md'
import ArticleForm from './ArticleForm'

export default function EditArticleDialog({
  show, onHide, onSave, article,
}) {
  const [form, setForm] = useState(article)

  const doSave = async data => {
    await onHide()
    onSave(form)
  }

  useEffect(() => {
    setForm(article)
  }, [article])

  return (
    <DialogContainer
      id="create-article-dialog"
      visible={show}
      fullPage
      onHide={onHide}
      aria-labelledby=""
    >
      <Toolbar
        fixed
        colored
        title="Edit Article"
        titleId="create-article-dialog"
        nav={<Button icon onClick={onHide}>close</Button>}
        actions={<Button flat onClick={doSave}>Save</Button>}
      />

      <ArticleForm form={form} setForm={setForm} />
    </DialogContainer>
  )
}
