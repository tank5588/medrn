import React from 'react';
import niceColors from 'nice-color-palettes';

faker.seed(1);

const colors = [
    ...niceColors[1].slice(1, niceColors[1].length),
    ...niceColors[55].slice(0, 3),
];

const data = [
    {
        image: '../assets/sprout.png',
    },
    {
        image: '../assets/pic1.jpg',
    },
    {
        image: '../assets/pic2.jpg',
    },
];

export const detailsIcons = [
    { color: '#9FD7F1', icon: 'isv' },
    { color: '#F3B000', icon: 'Trophy' },
    { color: '#F2988F', icon: 'edit' },
];

export default data.map((item, index) => ({
    ...item,
    key: faker.random.uuid(),
    color: colors[index % colors.length],
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    categories: [...Array(3).keys()].map(() => {
        return {
            key: faker.random.uuid(),
            title: faker.name.jobType(),
            subcats: [...Array(3).keys()].map(faker.name.jobType),
        };
    }),
}));


