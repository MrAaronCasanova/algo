const AreEquallyStrong = ({
  yourLeft,
  yourRight,
  friendsLeft,
  friendsRight,
  children
}) => {
  let yourArms = [yourLeft, yourRight].sort((a, b) => a - b);
  let friendsArms = [friendsLeft, friendsRight].sort((a, b) => a - b);
  return children(
    yourArms[0] === friendsArms[0] && yourArms[1] === friendsArms[1]
  );
};

export default AreEquallyStrong;

//* ------ Usage ------ *//
/*
<AreEquallyStrong
  yourLeft={10}
  yourRight={15}
  friendsLeft={15}
  friendsRight={10}
>
  {isEqual => <div>{isEqual ? '💪💪💪💪' : '👎🏽'}</div>}
</AreEquallyStrong>
*/

// #18
// https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL
