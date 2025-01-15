const faker = require('faker');
const fs = require('fs');

const generateArticles = (count) => {
    const articles = [];
    for (let i = 0; i < count; i++) {
        articles.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: parseFloat(faker.commerce.price()),
            stock: faker.datatype.number({ min: 0, max: 100 }),
            image: faker.image.imageUrl(),
        });
    }
    return articles;
};

const articles = generateArticles(100);
fs.writeFileSync('articles.json', JSON.stringify(articles, null, 2));
console.log('Articles data generated in article-service/scripts/articles.json');
