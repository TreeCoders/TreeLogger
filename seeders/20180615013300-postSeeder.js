'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Posts', [{
        author: 'John Doe',
        title: "false",
        message: "dude",
        url: "google.com",
        likes: 1,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Joe Dirt',
        title: "Meh",
        message: "What the effff yooooo",
        url: "google.com",
        likes: 120,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'D Money',
        title: "Toto",
        message: "liusahfiu aeiuh ;sehrgu; hreios ",
        url: "",
        likes: 6,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'John Doe',
        title: "Bad Oompa Loompas",
        message: "isduidshiuf hiusd fhiudsfhiu ",
        url: "google.com",
        likes: 0,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'John Doe',
        title: "false",
        message: "dude",
        url: "google.com",
        likes: 1,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'John Doe',
        title: "IUASHDI UAHSD IUAHS ",
        message: "AS HDFI OUAFHSIULA ILDFH ",
        url: "google.com",
        likes: 3,
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'John Doe',
        title: "ASDFJ OIDSAJF IO",
        message: "ASH ASHF IUA",
        url: "oidsjds.com",
        likes: 50,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'John Doe',
        title: "ASDFJ OIDSAJF IO",
        message: "ASH ASHF IUA",
        url: "oidsjds.com",
        likes: 50,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'John Doe',
        title: "More than 10",
        message: "oisdiojsdijodijodfioj",
        url: "oidsjds.com",
        likes: 50,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'John Doe',
        title: "AWhat aet eat ae ",
        message: "ASH ASHF IUA",
        url: "oidsjds.com",
        likes: 50,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'John Doe',
        title: "More than 10",
        message: "COOOOOOOOL",
        url: "oidsjds.com",
        likes: 50,
        rating: 5.6,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
