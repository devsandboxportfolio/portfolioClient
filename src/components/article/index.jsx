import React, { useState, useEffect } from 'react';
import { getRequest, putRequest, postRequest, deleteRequest } from '../../api';

import Loading from '../common/loading/loading';
import Article from './article';
import CreateArticle from './createArticle';

const Articles = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const articlesEndpoint = 'http://localhost:5000/article';

  // Load articles from backend
  useEffect(() => {
    getRequest(articlesEndpoint, (data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  const createArticle = (body, callback) => {
    postRequest(articlesEndpoint, body, (data) => {
      setArticles(data);
      if(callback) {
        callback();
      }
    });
  }

  const editArticle = (articleId, body, callback) => {
    putRequest(articlesEndpoint + '/' + articleId, body, (data) => {
      setArticles(data);
      if(callback) {
        callback();
      }
    });
  }

  const deleteArticle = (articleId) => {
    deleteRequest(articlesEndpoint + '/' + articleId, (data) => {
      setArticles(data);
    });
  }

  return (
    <>
      {loading && <Loading />}
      <div style={{padding: '10px', width: '400px', border: '1px solid', marginBottom: '5px'}}>
        <span style={{fontSize: '18px', fontWeight: 'bold'}}>Articles</span>
        {articles.map(article => {
          return <Article 
                    articleId={article._id} 
                    articleName={article.articleName} 
                    author={article.author} 
                    text={article.text} 
                    editArticle={editArticle} 
                    deleteArticle={deleteArticle} />
        })}
      </div>
      <CreateArticle createArticle={createArticle} />
    </>
  );
}

export default Articles