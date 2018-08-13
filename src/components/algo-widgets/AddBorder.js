const AddBorder = ({ picture, children }) => {
  const wall = '*'.repeat(picture[0].length + 2);
  return children([wall, ...picture.map(val => `*${val}*`), wall]);
};

export default AddBorder;

//* ------ Usage ------ *//
/*
<AddBorder picture={['abc', 'ded']}>
  {newPic => newPic.map((val, i) => <div key={i}> {val} </div>)}
</AddBorder>
*/

// un-used logic
// Array.from({ length: picture.length + 2 }, (val, i) => {
//   return
// })

// #15
// https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN/solutions/3igiH6WRa6vp5Smrv
