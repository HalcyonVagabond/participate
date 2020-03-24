const Parse = require('parse/node');

var states = [
    // ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arizona', 'AZ'],
    ['Arkansas', 'AR'],
    // ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    // ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    // ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    // ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
];

const oopsStates = [
    ['Alabama', 'AL'],
    ['California', 'CA'],
    ['Kentucky', 'KY'],
    ['New York', 'NY'],
    ['Tennessee', 'TN'],
]

const stateGovObjects = oopsStates.map(state=>({name: `${state[0]} U.S. Federal`, level: 'federal', state: state[0], websiteUrl: ""}))


Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'q48tbaunRNR3NLrxAcmQax0i8cB4EDmqezCXUfrb', // This is your Application ID
  'ZV1KQ6J56sDXGLAE0TeCJHxS7FPpAaOKbVI9CIdI', // This is your Javascript key
);

async function createNewGovernment(resourceObject){

    const FetchedResource = Parse.Object.extend('Governments')
    const newResource = new FetchedResource();

    newResource.set(resourceObject)

    await newResource.save()
}

stateGovObjects.forEach(object => createNewGovernment(object))