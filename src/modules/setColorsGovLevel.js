

const cssVar = ( name, value ) => {
    if(name.substr(0, 2) !== "--") {
        name = "--" + name;
    }
    if(value) {
        document.documentElement.style.setProperty(name, value)
    }
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}



const setColorsGovLevel = (govLevel) => {

    if (govLevel === 'city'){
        document.documentElement.style
            .setProperty('--primaryDark', '#713b88');
    } else if (govLevel === 'county') {
        document.documentElement.style
            .setProperty('--primaryDark', '#d2b727');
    } else if (govLevel === 'state') {
        document.documentElement.style
            .setProperty('--primaryDark', '#73b72f');
    } else if (govLevel === 'federal') {
        document.documentElement.style
            .setProperty('--primaryDark', '#4caaad');
    }

}



export default setColorsGovLevel;