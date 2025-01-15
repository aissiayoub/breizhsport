const faker = require('faker');
const fs = require('fs');

const generateUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: faker.helpers.randomize(['user', 'admin']),
        });
    }
    return users;
};

const users = generateUsers(50);
fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
console.log('Users data generated in user-service/scripts/users.json');
