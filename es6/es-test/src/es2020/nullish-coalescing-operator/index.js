let person = {
    profile: {
      name: "",
      age: 0
    }
  };
  
console.log(person.profile.name || "Anonymous"); // Anonymous
console.log(person.profile.age || 18); // 18

console.log(person.profile.name ?? "Anonymous"); // ""
console.log(person.profile.age ?? 18); // 0

/* ========================================== */
/* 没有增加@babel/plugin-proposal-nullish-coalescing-operator这个插件但是运行成功了？ */