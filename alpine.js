
function NameGenerator() {
    const names = ['Olivia', 'Noah', 'Emma', 'Liam', 'Amelia', 'Oliver', 'Sophia', 'Elijah', 'Charlotte', 'Mateo', 'Jeff'];

    return {

    get generateName() {
        return names[Math.floor(Math.random() * names.length)];
        
    },

}}
