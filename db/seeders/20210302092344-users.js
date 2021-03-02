"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Геральт из Ривии",
          password: "13245678",
          avatar:
            "http://pm1.narvii.com/6953/2cee94a1d2e20675fa279afdfa0643ea7744f247r1-848-848v2_uhq.jpg",
          email: "test3@test.com",
          phone: 123456,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мастер Чиф",
          password: "13245678",
          avatar:
            "https://avatars.mds.yandex.net/get-zen_doc/1588093/pub_5d0e0d9b6b111400aebd111e_5d113cc02e1e1b00af6cc4dd/scale_1200",
          email: "chif@xbox.com",
          phone: 123456,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Кратос",
          password: "13245678",
          avatar:
            "https://cdn.igromania.ru/mnt/news/b/1/5/9/f/8/75766/539baab7d5887b98_848x477.jpg",
          email: "cratos@sony.com",
          phone: 123456,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("users", null, {}),
};
