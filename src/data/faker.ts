import { faker } from "@faker-js/faker";
import fs from "fs/promises";

const generateFakeAccommodation = () => {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(3),
    summary: faker.lorem.paragraph(1),
    images: [
      faker.image.urlLoremFlickr({ category: "travel" }),
      faker.image.urlLoremFlickr({ category: "travel" }),
      faker.image.urlLoremFlickr({ category: "travel" }),
    ],
    rating: Number((Math.random() * 5).toFixed(1)),
    reviews: Math.floor(Math.random() * 200 + 1),
    coordinates: {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    },
    price: Number(faker.commerce.price()),
  };
};

const generateFakeAccommodations = (num: number) => {
  const accommodations = [];
  for (let i = 0; i < num; i++) {
    accommodations.push(generateFakeAccommodation());
  }
  return accommodations;
};

const fakeAccommodations = generateFakeAccommodations(
  Number(process.argv[2]) || 1,
);

fs.writeFile(
  `${__dirname}/accommodations.json`,
  JSON.stringify(fakeAccommodations),
  "utf8",
)
  .then(() => {
    console.log("Fake accommodations generated successfully.");
  })
  .catch((err) => {
    console.log(err);
  });
