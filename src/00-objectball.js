console.log(gameObject());

{
  home: {
    teamName: "",
    colors: [...],
    players: {
      "Alan Anderson": {...},
      "Reggie Evans": {...}
    }
  },
  away: {
    ...
  } 
}
function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  
  console.log(homeTeamName())

  function homeTeamName(){
    return gameObject()['home']['teamName']
  }
  
  console.log(homeTeamName())

  let oo = { foo: 42, bar: 83, "key w/ spaces": true };
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar);

let oo = { foo: 42, bar: 83, baz: 79 };
for (let key in oo) {
  let value = oo[key];
  console.log("key:", key, "value:", value);
}

let oo = { foo: 42, bar: 83, baz: 79 };
console.log("   Object.keys(oo) =>", Object.keys(oo));
console.log(" Object.values(oo) =>", Object.values(oo));
console.log("Object.entries(oo) =>", Object.entries(oo));
