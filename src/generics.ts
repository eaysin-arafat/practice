const addId = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);

  return { ...obj, id };
};

let user = addId({
  name: "Mashrafi",
  age: 40,
  country: "Bangladesh",
});

addId(user);
