const genres = document.querySelector('#genres');
const selectedOption = genres.options[genres.selectedIndex];
console.log(`value: ${selectedOption.value}, text: ${selectedOption.text}`);

const optionClassic = new Option('Класика', 'classic');
genres.append(optionClassic);

optionClassic.selected = true;