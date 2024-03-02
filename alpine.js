import Alpine from 'alpinejs';

Alpine.data('randomNameGenerator', () => ({
    names: ['David', 'Benny', 'Marcos', 'Abbie', 'Obed', 'Fernando', 'Tomas', 'Rodrigo', 'Minerva', 'Merari'],
    randomName: '',

    generateRandomName() {
        const randomIndex = Math.floor(Math.random() * this.names.length);
        this.randomName = this.names[randomIndex];
    }
}));

Alpine.start();