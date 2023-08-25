import css from './NewPostForm.module.css';
import Btn from '../UI/btn/Btn';
import { useFormik } from 'formik';
import config from '../../config';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*
{
  "id": "8538263590611068",
  "image": "",
  "title": "Test Post",
  "body": "This is a test post.",
  "author": "John Doe",
  "tags": [
    "test",
    "example"
  ],
  "date": "2022-04-03"
}
*/

const url = config.postUrl;

export default function NewPostForm() {
  const [errorsArr, setErrorsArr] = useState([]);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      body: '',
      author: '',
      tags: '',
      date: '',
    },
    onSubmit: (values) => {
      //   console.log('form submit values ===', values);
      const tagsArr = values.tags
        .split(',')
        .map((obj) => obj.trim())
        // .filter((strEl) => strEl !== '');
        .filter((strEl) => strEl);
      //   console.log('tagsArr ===', tagsArr);
      const newArr = {
        image: values.image,
        title: values.title,
        body: values.body,
        author: values.author,
        tags: tagsArr,
        date: values.date,
      };
      console.log('newArr ===', newArr);
      sendNewPostData(newArr);
    },
  });

  function sendNewPostData(newPostObj) {
    axios
      .post(url, newPostObj)
      .then((resp) => {
        console.log('resp ===', resp);
        console.log('newPostObj ===', newPostObj);
        // setErrorsArr([]);
        if (resp.status === 200) {
          navigate('/posts', { replace: true });
        }
      })
      .catch((error) => {
        console.log('ivyko klaida:', error.response.data.error);
        const errorArr = error.response.data.error;
        setErrorsArr(errorArr);
      });
  }
  function handleErrorsArr(field) {
    const errorObj = errorsArr.find((obj) => obj.field === field);
    return errorObj ? errorObj.message : '';
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.title}
            type='text'
            id='title'
            placeholder='Title'
          />
          <p>{handleErrorsArr('title')}</p>
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.image}
            type='text'
            id='image'
            placeholder='Image url'
          />
          <p>{handleErrorsArr('image')}</p>
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.author}
            type='text'
            id='author'
            placeholder='Author'
          />
          <p>{handleErrorsArr('author')}</p>
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.tags}
            type='text'
            id='tags'
            placeholder='Tags (comma separated)'
          />
          <p>{handleErrorsArr('tags')}</p>
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.date}
            type='date'
            id='date'
          />
          <p>{handleErrorsArr('date')}</p>
        </div>
        <div className='inputBlock'>
          <textarea
            onChange={formik.handleChange}
            value={formik.values.body}
            id='body'
            placeholder='Enter text here'
          ></textarea>
          <p>{handleErrorsArr('body')}</p>
        </div>
        <Btn sub>Create</Btn>
      </form>
    </div>
  );
}
