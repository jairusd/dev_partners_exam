import React, {useState} from 'react'
import {
  DialogContainer, Toolbar, Button, TextField
} from 'react-md'
import moment from 'moment'

export default function CreateArticleDialog({show, onHide, onSave}) {
  const [form, setForm] = useState({
    content: '',
    title: '',
  })

  const doChange = (value, e) => {
    setForm({...form, [e.target.id]: value})
  }

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

      <div className="article-form">
        <TextField
          id="title"
          label="Title"
          placeholder="Hello World"
          className="md-cell md-cell--bottom"
          value={form.title}
          onChange={doChange}
        />

        <TextField
          id="content"
          label="Content"
          placeholder="What about the world?"
          className="md-cell md-cell--bottom"
          rows={3}
          value={form.content}
          onChange={doChange}
        />
      </div>
    </DialogContainer>
  )
}
