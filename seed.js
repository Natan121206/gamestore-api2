const sequelize = require('./config/database');
const Game = require('./models/Game');
const Publisher = require('./models/Publisher');

async function seed() {
    await sequelize.sync({ force: true }); // O 'true' limpa o banco para começar do zero

    const pub1 = await Publisher.create({ nome: 'Nintendo', pais: 'Japão' });
    const pub2 = await Publisher.create({ nome: 'Ubisoft', pais: 'França' });

    const games = [
        { titulo: 'Mario Odyssey', anoLancamento: 2017, genero: 'Plataforma', publisherId: pub1.id },
        { titulo: 'Zelda BOTW', anoLancamento: 2017, genero: 'Aventura', publisherId: pub1.id },
        { titulo: 'Assassin\'s Creed', anoLancamento: 2007, genero: 'Ação', publisherId: pub2.id },
        { titulo: 'Far Cry 6', anoLancamento: 2021, genero: 'FPS', publisherId: pub2.id },
    { titulo: 'Pokémon Scarlet', anoLancamento: 2022, genero: 'RPG', publisherId: 1 },
    { titulo: 'Super Smash Bros', anoLancamento: 2018, genero: 'Luta', publisherId: 1 },
    { titulo: 'Animal Crossing', anoLancamento: 2020, genero: 'Simulação', publisherId: 1 },
    { titulo: 'Splatoon 3', anoLancamento: 2022, genero: 'FPS', publisherId: 1 },
    { titulo: 'Metroid Dread', anoLancamento: 2021, genero: 'Ação', publisherId: 1 },
    { titulo: 'Kirby Forgotten', anoLancamento: 2022, genero: 'Plataforma', publisherId: 1 },
    { titulo: 'Mario Kart 8', anoLancamento: 2017, genero: 'Corrida', publisherId: 1 },
    { titulo: 'Xenoblade 3', anoLancamento: 2022, genero: 'RPG', publisherId: 1 },
    
    { titulo: 'Rainbow Six Siege', anoLancamento: 2015, genero: 'FPS', publisherId: 2 },
    { titulo: 'Watch Dogs 2', anoLancamento: 2016, genero: 'Ação', publisherId: 2 },
    { titulo: 'The Division 2', anoLancamento: 2019, genero: 'RPG', publisherId: 2 },
    { titulo: 'Prince of Persia', anoLancamento: 2024, genero: 'Ação', publisherId: 2 },
    { titulo: 'Anno 1800', anoLancamento: 2019, genero: 'Estratégia', publisherId: 2 },
    { titulo: 'For Honor', anoLancamento: 2017, genero: 'Luta', publisherId: 2 },
    { titulo: 'Riders Republic', anoLancamento: 2021, genero: 'Esporte', publisherId: 2 },
    { titulo: 'Skull and Bones', anoLancamento: 2024, genero: 'Ação', publisherId: 2 }
];

    await Game.bulkCreate(games);
    console.log('Banco populado com sucesso!');
    process.exit();
}

seed();