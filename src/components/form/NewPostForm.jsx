// forma naujam postui
// valom su useFormik
// klaidos su Yup (galim pradzioj nesidaryt)
// sukurus nauja posta naviguosim i Posts

import Container from '../UI/container/Container';

export default function NewPostForm() {
  return (
    <Container>
      <form>
        <input type='text' placeholder='Title' />
        <input type='text' placeholder='Author' />
        <input type='date' placeholder='Author' />
      </form>
    </Container>
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
