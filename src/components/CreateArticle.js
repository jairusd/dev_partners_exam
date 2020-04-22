import React, {useState} from 'react'
import {Button} from 'react-md'
import CreateArticleDialog from './CreateArticleDialog'

export default function CreateArticle({onSave}) {
  const [show, setShow] = useState(false)

  const doSave = async data => {
    await setShow(false)
    onSave(data)
  }

  return (
    <div>
      <Button flat primary onClick={() => setShow(true)}>
        New Article
      </Button>

      <CreateArticleDialog
        show={show}
        onHide={() => setShow(!show)}
        onSave={doSave}
      />
    </div>
  )
}
