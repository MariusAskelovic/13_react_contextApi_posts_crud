// forma naujam postui
// valom su useFormik
// klaidos su Yup (galim pradzioj nesidaryt)
// sukurus nauja posta naviguosim i Posts

import Btn from '../UI/btn/Btn';
import Container from '../UI/container/Container';

export default function NewPostForm() {
  return (
    // <Container>
    <form>
      <div className='inputBlock'>
        <input type='text' id='title' placeholder='Title' />
      </div>
      <div className='inputBlock'>
        <input type='url' id='image' placeholder='Image url' />
      </div>
      <div className='inputBlock'>
        <input type='text' id='author' placeholder='Author' />
      </div>
      <div className='inputBlock'>
        <input type='text' id='tags' placeholder='Tags (comma separated)' />
      </div>
      <div className='inputBlock'>
        <input type='date' id='date' />
      </div>
      <div className='inputBlock'>
        <textarea id='body' placeholder='Enter text here'></textarea>
      </div>
      <Btn sub>Create</Btn>
    </form>
    // </Container>
  );
}

// {
//     "id": "2394056208394732",
//     "image": "",
//     "title": "Using React for Front-End Development",
//     "body": "React is a popular JavaScript library for building user interfaces. It provides a simple and efficient way to create reusable components that can be combined to create complex applications.",
//     "author": "Bob Johnson",
//     "tags": ["CSS", "Grid Layout"],
//     "date": "2022-04-17"
//   },
