const jsonString = '{"name":"John Doe","email":"john.doe@example.com","age":35,"isAdmin":false,"roles":["user","editor"]}';

const user = JSON.parse(jsonString);
console.log(user.name);  // 'John Doe'

const userObj = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 32,
    isAdmin: true,
    roles: ["admin", "user"]
};

const jsonStr = JSON.stringify(userObj);
console.log(jsonStr);  // '{"name":"Jane Doe","email":...'
