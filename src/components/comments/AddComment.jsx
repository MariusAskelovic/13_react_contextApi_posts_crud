// forma sukurti naujam komentarui

import { useParams } from 'react-router-dom';
import Container from '../UI/container/Container';
import css from './AddComment.module.css';
import { useFormik } from 'formik';
import Btn from '../UI/btn/Btn';
import { useEffect } from 'react';
import config from '../../config';
import axios from 'axios';
import { useAuth } from '../../store/AuthProvider';

// laukai is BE (backEnd) comment, pav

// useFormik

// authorEmail uzpildom is prisijungusio vartotojo

// gauti postId is SinglePost per props

export default function AddComment() {
  const params = useParams();
  const url = config.commentsUrl;
  const ctx = useAuth();

  const formik = useFormik({
    initialValues: {
      id: '',
      authorEmail: ctx.email,
      text: '',
      postId: params,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    axios
      .post(url)
      .then((resp) => console.log(resp))
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  //   console.log('params ===', params);
  //   console.log('formik ===', formik);
  //   console.log('{formik.values.authorEmail} ===', formik.values.authorEmail);
  return (
    <Container>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div className={css.inputs}>
          <input
            type='text'
            value={formik.values.authorEmail}
            placeholder='your email'
            id='authorEmail'
          />
          <textarea
            placeholder='enter comment here'
            onChange={formik.handleChange}
            id='text'
          ></textarea>
        </div>
        <Btn>Leave only positive comments</Btn>
      </form>
    </Container>
  );
}
