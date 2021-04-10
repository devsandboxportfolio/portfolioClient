import React, { useState } from 'react';
import ArticleFragment from './articleFragment';
import Button from '../common/button/button';

const CreateArticle = (props) => {
  const {articleName, author, text, createArticle} = props;

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
    <div style={{padding: '10px', width: '400px', border: '1px solid'}}>
      <span style={{fontSize: '18px', fontWeight: 'bold'}}>Create an article</span>
      <ArticleFragment 
        articleName={articleBody.articleName} 
        author={articleBody.author} 
        text={articleBody.text} 
        onArticleNameChange={(e) => updateArticle('articleName', e.target.value)}
        onAuthorChange={(e) => updateArticle('author', e.target.value)} 
        onTextChange={(e) => updateArticle('text', e.target.value)} 
      >
        <Button text='Create' onClick={() => createArticle(articleBody, setArticleBody({articleName: '', author: '', text: ''}))} />
      </ArticleFragment>
    </div>
  );
}

CreateArticle.defaultProps = {
  articleName: '',
  author: '',
  text: '',
};

export default CreateArticle