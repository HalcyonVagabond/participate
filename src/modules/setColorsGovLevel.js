

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
        document.documentElement.style
            .setProperty('--primaryLight', '#ac7be0');
    } else if (govLevel === 'county') {
        document.documentElement.style
            .setProperty('--primaryDark', '#c77700');
        document.documentElement.style
            .setProperty('--primaryLight', '#dccc7b');
    } else if (govLevel === 'state') {
        document.documentElement.style
            .setProperty('--primaryDark', '#58a50b');
        document.documentElement.style
            .setProperty('--primaryLight', '#9fc777');
    } else if (govLevel === 'federal') {
        document.documentElement.style
            .setProperty('--primaryDark', '#009fa5');
        document.documentElement.style
            .setProperty('--primaryLight', '#8ccacc');
    }

}



export default setColorsGovLevel;