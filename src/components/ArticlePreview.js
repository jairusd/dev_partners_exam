import React, {useState} from 'react'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle,
} from 'react-md'

export default function ArticlePreview({article, onDelete}) {
  const {
    id, title, content, dateCreated,
  } = article

  return (
    <Card className="article-preview">
      <CardTitle
        title={title}
        subtitle={dateCreated}
        avatar={<Avatar src="https://picsum.photos/100/100" role="presentation" />}
      />

      <CardText>
        <p>
          {content}
        </p>
      </CardText>

      <CardActions>
        <Button flat>Edit</Button>
        <Button flat secondary onClick={() => onDelete(id)}>Delete</Button>
      </CardActions>
    </Card>
  )
}
