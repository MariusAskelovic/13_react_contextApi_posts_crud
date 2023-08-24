import css from './NewPostForm.module.css';
import Btn from '../UI/btn/Btn';
import { useFormik } from 'formik';

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

export default function NewPostForm() {
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
      console.log('form submit values ===', values);
    },
  });
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
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.image}
            type='text'
            id='image'
            placeholder='Image url'
          />
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.author}
            type='text'
            id='author'
            placeholder='Author'
          />
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.tags}
            type='text'
            id='tags'
            placeholder='Tags (comma separated)'
          />
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.date}
            type='date'
            id='date'
          />
        </div>
        <div className='inputBlock'>
          <textarea
            onChange={formik.handleChange}
            value={formik.values.body}
            id='body'
            placeholder='Enter text here'
          ></textarea>
        </div>
        <Btn sub>Create</Btn>
      </form>
    </div>
  );
}
