import React from 'react'
import {TextField} from 'react-md'

export default function ArticleForm({onSave, form, setForm}) {
  const doChange = (value, e) => {
    setForm({...form, [e.target.id]: value})
  }

  return (
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
  )
}
