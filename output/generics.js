"use strict";
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh",
});
addId(user);
