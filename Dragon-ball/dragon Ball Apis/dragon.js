const personajesList = [
    {
        id: '0001',
        nombre: 'Goku',
        imagen: 'https://dragonball-api.com/characters/goku_normal.webp',
        raza: 'Saiyajin',
        nivelPoder: 9000,
        debilidad: 'Ninguna'
    },
    {
        id: '0002',
        nombre: 'Vegeta',
        imagen: 'https://dragonball-api.com/characters/vegeta_normal.webp',
        raza: 'Saiyajin',
        nivelPoder: 8500,
        debilidad: 'Ego'
    },
    {
        id: '0003',
        nombre: 'Piccolo',
        imagen: 'https://dragonball-api.com/characters/picolo_normal.webp',
        raza: 'Namekiano',
        nivelPoder: 4000,
        debilidad: 'Ninguna'
    },
    {
        id: '0004',
        nombre: 'Gohan',
        imagen: 'https://dragonball-api.com/characters/gohan.webp',
        raza: 'Saiyajin/Humano',
        nivelPoder: 6000,
        debilidad: 'Sentimentalismo'
    },
    {
        id: '0005',
        nombre: 'Krillin',
        imagen: 'https://dragonball-api.com/characters/Krilin_Universo7.webp',
        raza: 'Humano',
        nivelPoder: 3000,
        debilidad: 'Ninguna'
    },
    {
        id: '0006',
        nombre: 'Frieza',
        imagen: 'https://dragonball-api.com/characters/Freezer.webp',
        raza: 'No Especificado',
        nivelPoder: 530000,
        debilidad: 'Ninguna'
    },
    {
        id: '0007',
        nombre: 'Bulma',
        imagen: 'https://dragonball-api.com/characters/bulma.webp', 
        raza: 'Humano',
        nivelPoder: 100,
        debilidad: 'Ninguna'
    },
    {
        id: '0008',
        nombre: 'Yamcha',
        imagen: 'https://dragonball-api.com/characters/Final_Yamcha.webp', 
        raza: 'Humano',
        nivelPoder: 1500,
        debilidad: 'Miedo a los androides'
    },
    {
        id: '0009',
        nombre: 'Bardock',
        imagen: 'https://dragonball-api.com/characters/Bardock_Artwork.webp', 
        raza: 'Saiyajin',
        nivelPoder: 10000,
        debilidad: 'Propensión al sacrificio'
    },
    {
        id: '0010',
        nombre: 'Roshi',
        imagen: 'https://dragonball-api.com/characters/roshi.webp', 
        raza: 'Humano',
        nivelPoder: 1800,
        debilidad: 'Pervertido'
    },
    {
        id: '0011',
        nombre: 'Android 13',
        imagen: 'https://dragonball-api.com/characters/Androide13normal.webp', 
        raza: 'Android',
        nivelPoder: 7500,
        debilidad: 'Desconocida'
    },
    {
        id: '0012',
        nombre: 'Android 14',
        imagen: 'https://dragonball-api.com/characters/14Dokkan.webp', 
        raza: 'Android',
        nivelPoder: 7000,
        debilidad: 'Desconocida'
    },
    {
        id: '0013',
        nombre: 'Android 15',
        imagen: 'https://dragonball-api.com/characters/15Dokkan.webp', 
        raza: 'Android',
        nivelPoder: 7000,
        debilidad: 'Desconocida'
    },
    {
        id: '0014',
        nombre: 'Android 16',
        imagen: 'https://dragonball-api.com/characters/Androide_16.webp', 
        raza: 'Android',
        nivelPoder: 15000,
        debilidad: 'Compasión por la naturaleza'
    },
    {
        id: '0015',
        nombre: 'Android 17',
        imagen: 'https://dragonball-api.com/characters/17_Artwork.webp', 
        raza: 'Android',
        nivelPoder: 10000,
        debilidad: 'Desconocida'
    },
    {
        id: '0016',
        nombre: 'Android 18',
        imagen: 'https://dragonball-api.com/characters/Androide_18_Artwork.webp', 
        raza: 'Android',
        nivelPoder: 10000,
        debilidad: 'Desconocida'
    },
    {
        id: '0017',
        nombre: 'Android 19',
        imagen: 'https://dragonball-api.com/characters/Android19.webp', 
        raza: 'Android',
        nivelPoder: 8000,
        debilidad: 'Dependencia de absorción de energía'
    },
    {
        id: '0018',
        nombre: 'Android 20 (Dr. Gero)',
        imagen: 'https://dragonball-api.com/characters/Dr._Gero%20nadroide%2020.webp', 
        raza: 'Android',
        nivelPoder: 9000,
        debilidad: 'Orgullo y venganza'
    },
    {
        id: '0019',
        nombre: 'Majin Buu',
        imagen: 'https://dragonball-api.com/characters/BuuGordo_Universo7.webp', 
        raza: 'Majin',
        nivelPoder: 8000,
        debilidad: 'Inocencia'
    },
    {
        id: '0020',
        nombre: 'Dende',
        imagen: 'https://dragonball-api.com/characters/Dende_Artwork.webp', 
        raza: 'Namekiano',
        nivelPoder: 2000,
        debilidad: 'Inexperiencia en combate'
    },
];

function renderPersonajeCard(personaje) {
    return `
        <div class="personaje-card">
            <div class="personaje-card-inner">
                <div class="personaje-card-front">
                    <img src="${personaje.imagen}" alt="${personaje.nombre}">
                    <div class="personaje-info">
                        <p class="personaje-id">ID: ${personaje.id}</p>
                        <h3 class="personaje-nombre">${personaje.nombre}</h3>
                        <p class="personaje-nivelPoder">Nivel de Poder: ${personaje.nivelPoder}</p>
                        <p class="personaje-raza">Raza: ${personaje.raza}</p>
                    </div>
                </div>
                <div class="personaje-card-back">
                    <h3 class="personaje-nombre">${personaje.nombre}</h3>
                    <p class="personaje-raza">Raza: ${personaje.raza}</p>
                    <p>Debilidad: ${personaje.debilidad}</p>
                </div>
            </div>
        </div>
    `;
}

function displayAllPersonajes(personajesList) {
    const pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = personajesList.map(personaje => renderPersonajeCard(personaje)).join('');
}

function filterPersonajes() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredPersonajes = personajesList.filter(personaje => {
        return (
            personaje.nombre.toLowerCase().includes(searchTerm) ||
            personaje.raza.toLowerCase().includes(searchTerm)
        );
    });
    displayAllPersonajes(filteredPersonajes);
}

displayAllPersonajes(personajesList);
