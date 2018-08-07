const ShapeArea = ({ n, children }) => {
  let area = 1;

  Array.from({ length: n }).forEach((empty, i) => {
    area += 4 * i;
  });

  return children(area);
};

export default ShapeArea;

//* ------ Single Line Approach ------ *//
// return children(n ** 2 + (n - 1) ** 2);

// --- Usage --- //
/* 
  <ShapeArea n={15}>
    {area => (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            background: 'lightsteelblue',
            height: `${area}px`,
            width: `${area}px`,
            transform: 'rotate(45deg)'
          }}
        />
      </div>
    )}
  </ShapeArea>
*/

// https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ
