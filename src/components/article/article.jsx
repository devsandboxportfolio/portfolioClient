import React, { useState } from 'react';

import ArticleFragment from './articleFragment';
import Button from '../common/button/button';

const Article = (props) => {
  const {articleId, articleName, author, text, editArticle, deleteArticle} = props;
  const [disabled, setDisabled] = useState(true);

  const [articleBody, setArticleBody] = useState({
    articleName: articleName,
    author: author,
    text: text
  });

  const updateArticle = (key, value) => {
    setArticleBody({
      ...articleBody,
      [key]: value
    });
  }

  return (
    <ArticleFragment 
      articleName={articleBody.articleName} 
      author={articleBody.author} 
      text={articleBody.text} 
      onArticleNameChange={(e) => updateArticle('articleName', e.target.value)}
      onAuthorChange={(e) => updateArticle('author', e.target.value)} 
      onTextChange={(e) => updateArticle('text', e.target.value)} 
      disabled={disabled}
    >
      <Button disabled={disabled} text='Save' onClick={() => {
          editArticle(articleId, articleBody, setDisabled(true));
        }} 
      />
      <Button text='Modify' onClick={() => {
          setDisabled(false);
        }} 
      />
      <Button text='Delete' onClick={() => deleteArticle(articleId)} />
    </ArticleFragment>
  );
}

Article.defaultProps = {
  articleName: '',
  author: '',
  text: '',
};

export default Article