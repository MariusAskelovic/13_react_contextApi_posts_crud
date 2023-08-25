const errorsArr = [
  {
    field: 'title',
    message: '"title" is not allowed to be empty',
  },
  {
    field: 'image',
    message: '"image" is not allowed to be empty',
  },
  {
    field: 'body',
    message: '"body" is not allowed to be empty',
  },
  {
    field: 'author',
    message: '"author" is not allowed to be empty',
  },
  {
    field: 'date',
    message: '"date" must be in ISO 8601 date format',
  },
];

const errorsObj = {
  title: '"title" is not allowed to be empty',
  image: '"image" is not allowed to be empty',
};

const rez = errorsArr.reduce((finalObj, eObj) => {
  finalObj[eObj.field] = eObj.message;
  return finalObj;
}, {});
console.log('rez ===', rez);

const finalObj = {};
errorsArr.forEach((eObj) => {
  finalObj[eObj.field] = eObj.message;
});
console.log('finalObj ===', finalObj);
