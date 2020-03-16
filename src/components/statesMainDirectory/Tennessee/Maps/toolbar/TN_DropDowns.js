import React from 'react'
import { Dropdown, Input, Icon } from 'semantic-ui-react'

const TN_counties = ['Anderson', 'Bedford', 'Benton', 'Bledsoe', 'Blount', 'Bradley', 'Campbell', 'Cannon', 'Carroll', 'Carter', 'Cheatham', 'Chester', 'Claiborne', 'Clay', 'Cocke', 'Coffee', 'Crockett', 'Cumberland', 'Davidson', 'Decatur', 'DeKalb', 'Dickson', 'Dyer', 'Fayette', 'Fentress', 'Franklin', 'Gibson', 'Giles', 'Grainger', 'Greene', 'Grundy', 'Hamblen', 'Hamilton', 'Hancock', 'Hardeman', 'Hardin', 'Hawkins', 'Haywood', 'Henderson', 'Henry', 'Hickman', 'Houston', 'Humphreys', 'Jackson', 'Jefferson', 'Johnson', 'Knox', 'Lake', 'Lauderdale', 'Lawrence', 'Lewis', 'Lincoln', 'Loudon', 'Macon', 'Madison', 'Marion', 'Marshall', 'Maury', 'McMinn', 'McNairy', 'Meigs', 'Monroe', 'Montgomery', 'Moore', 'Morgan', 'Obion', 'Overton', 'Perry', 'Pickett', 'Polk', 'Putnam', 'Rhea', 'Roane', 'Robertson', 'Rutherford', 'Scott', 'Sequatchie', 'Sevier', 'Shelby', 'Smith', 'Stewart', 'Sullivan', 'Sumner', 'Tipton', 'Trousdale', 'Unicoi', 'Union', 'Van Buren', 'Warren', 'Washington', 'Wayne', 'Weakley', 'White', 'Williamson', 'Wilson']
const TN_cities = "Adams,Adamsville,Alamo,Alcoa,Alexandria,Algood,Allardt,Altamont,Ardmore,Arlington,Ashland City,Athens,Atoka,Atwood,Auburntown,Baileyton,Baneberry,Banner Hill,Bartlett,Baxter,Beersheba Springs,Bell Buckle,Belle Meade,Bells,Benton,Berry Hill,Bethel Springs,Big Sandy,Blaine,Bloomingdale,Blountville,Bluff City,Bolivar,Braden,Bradford,Brentwood,Brighton,Bristol,Brownsville,Bruceton,Bulls Gap,Burlison,Burns,Byrdstown,Calhoun,Camden,Carthage,Caryville,Cedar Hill,Celina,Centertown,Centerville,Central,Chapel Hill,Charleston,Charlotte,Chattanooga,Church Hill,Clarksburg,Clarksville,Cleveland,Clifton,Clinton,Coalmont,Collegedale,Collierville,Collinwood,Colonial Heights,Columbia,Cookeville,Coopertown,Copperhill,Cornersville,Cottage Grove,Covington,Cowan,Crab Orchard,Cross Plains,Crossville,Crump,Cumberland City,Cumberland Gap,Dandridge,Dayton,Decatur,Decaturville,Decherd,Dickson,Dover,Dowelltown,Doyle,Dresden,Ducktown,Dunlap,Dyer,Dyersburg,Eagleton Village,Eagleville,East Brainerd,East Cleveland,East Ridge,Eastview,Elizabethton,Elkton,Englewood,Enville,Erin,Erwin,Estill Springs,Ethridge,Etowah,Fairfield Glade,Fairmount,Fairview,Fall Branch,Farragut,Fayetteville,Finger,Forest Hills,Franklin,Friendship,Friendsville,Gadsden,Gainesboro,Gallatin,Gallaway,Garland,Gates,Gatlinburg,Germantown,Gibson,Gilt Edge,Gleason,Goodlettsville,Gordonsville,Grand Junction,Gray,Graysville,Greenback,Greenbrier,Greeneville,Greenfield,Green Hill,Gruetli-Laager,Guys,Halls,Harriman,Harrison,Harrogate-Shawanee,Hartsville,Helenwood,Henderson,Hendersonville,Henning,Henry,Hickory Valley,Hickory Withe,Hohenwald,Hollow Rock,Hopewell,Hornbeak,Hornsby,Humboldt,Hunter,Huntingdon,Huntland,Huntsville,Iron City,Jacksboro,Jackson,Jamestown,Jasper,Jefferson City,Jellico,Johnson City,Jonesborough,Kenton,Kimball,Kingsport,Kingston,Kingston Springs,Knoxville,Lafayette,La Follette,La Grange,Lake City,Lakeland,Lakesite,Lake Tansi,Lakewood,La Vergne,Lawrenceburg,Lebanon,Lenoir City,Lewisburg,Lexington,Liberty,Linden,Livingston,Lobelville,Lookout Mountain,Loretto,Loudon,Louisville,Luttrell,Lynchburg,Lynnville,McEwen,McKenzie,McLemoresville,McMinnville,Madisonville,Manchester,Martin,Maryville,Mascot,Mason,Maury City,Maynardville,Medina,Medon,Memphis,Michie,Middleton,Middle Valley,Midtown,Midway,Milan,Milledgeville,Millersville,Millington,Minor Hill,Mitchellville,Monteagle,Monterey,Morrison,Morristown,Moscow,Mosheim,Mountain City,Mount Carmel,Mount Juliet,Mount Pleasant,Munford,Murfreesboro,Nashville,Newbern,New Hope,New Johnsonville,New Market,Newport,New Tazewell,Niota,Nolensville,Normandy,Norris,Oakdale,Oak Grove,Oak Hill,Oakland,Oak Ridge,Obion,Oliver Springs,Oneida,Ooltewah,Orlinda,Orme,Palmer,Paris,Parkers Crossroads,Parrottsville,Parsons,Pegram,Petersburg,Philadelphia,Pigeon Forge,Pikeville,Pine Crest,Piperton,Pittman Center,Plainview,Pleasant Hill,Pleasant View,Portland,Powells Crossroads,Pulaski,Puryear,Ramer,Red Bank,Red Boiling Springs,Ridgely,Ridgeside,Ridgetop,Ripley,Rives,Roan Mountain,Rockford,Rockwood,Rogersville,Rossville,Rural Hill,Rutherford,Rutledge,St. Joseph,Saltillo,Samburg,Sardis,Saulsbury,Savannah,Scotts Hill,Selmer,Sevierville,Sewanee,Seymour,Sharon,Shelbyville,Signal Mountain,Silerton,Slayden,Smithville,Smyrna,Sneedville,Soddy-Daisy,Somerville,South Carthage,South Cleveland,South Fulton,South Pittsburg,Sparta,Spencer,Spring City,Springfield,Spring Hill,Spurgeon,Stanton,Stantonville,Sunbright,Surgoinsville,Sweetwater,Tazewell,Tellico Plains,Tennessee Ridge,Thompson's Station,Three Way,Tiptonville,Toone,Townsend,Tracy City,Trenton,Trezevant,Trimble,Troy,Tullahoma,Tusculum,Unicoi,Union City,Vanleer,Viola,Vonore,Walden,Walnut Grove,Walnut Hill,Walterhill,Wartburg,Wartrace,Watauga,Watertown,Waverly,Waynesboro,Westmoreland,White Bluff,White House,White Pine,Whiteville,Whitwell,Wildwood Lake,Williston,Winchester,Winfield,Woodbury,Woodland Mills,Yorkville"

const TN_countiesObjects = TN_counties.map(county=>{
    return (
    {key: county, value: county, text: county}
)})

const TN_citiesObjects = TN_cities.split(',').map(city=>{
    return (
    {key: city, value: city, text: city}
)})



const TN_DropDown = ({ govLevel }) => {

    if (govLevel === 'city') {
        return (
            <Dropdown
                placeholder='Search Cities'
                styling={{width: '100%'}}
                search
                selection
                options={TN_citiesObjects}
            />
        )
    } else if (govLevel === 'county') {
        return (
            <Dropdown
                placeholder='Search Counties'
                styling={{width: '100%'}}
                search
                selection
                options={TN_countiesObjects}
            />
        )
    }   else if (govLevel === 'federal') {
        return (
            <Input
                icon={<Icon name='search' inverted circular link />}
                placeholder='Search by zipcode'
            />
        )
    }   else  {
        return null
    }
    
}

export default TN_DropDown