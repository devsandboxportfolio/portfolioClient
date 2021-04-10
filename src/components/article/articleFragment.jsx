import React from 'react';

import Label from '../common/label/label';
import Input from '../common/input/input';
import Textarea from '../common/textarea/textarea';

const ArticleFragment = (props) => {
  const {children, articleName, author, text, onArticleNameChange, onAuthorChange, onTextChange, disabled} = props;

  return (
    <>
      <Label label='Article Name'>
        <Input value={articleName} onChange={onArticleNameChange} disabled={disabled} />
      </Label>
      <Label label='Author'>
        <Input value={author} onChange={onAuthorChange} disabled={disabled} />
      </Label>
      <Label label='Article'>
        <Textarea value={text} onChange={onTextChange} disabled={disabled} />
      </Label>
      {children}
    </>
  );
}

ArticleFragment.defaultProps = {
  articleName: '',
  author: '',
  text: '',
  disabled: false
};

export default ArticleFragment