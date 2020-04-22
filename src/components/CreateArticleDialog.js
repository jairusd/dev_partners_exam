import React, {useState} from 'react'
import {
  DialogContainer, Toolbar, Button
} from 'react-md'
import moment from 'moment'
import ArticleForm from './ArticleForm'

export default function CreateArticleDialog({show, onHide, onSave}) {
  const [form, setForm] = useState({
    content: '',
    title: '',
  })

  const doSave = () => {
    onSave({
      ...form,
      dateCreated: moment().format('YYYY/MM/DD'),
    })
  }

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
        title="New Article"
        titleId="create-article-dialog"
        nav={<Button icon onClick={onHide}>close</Button>}
        actions={<Button flat onClick={doSave}>Save</Button>}
      />

      <ArticleForm form={form} setForm={setForm} />
    </DialogContainer>
  )
}
