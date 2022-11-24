const key = 'icI2CTNjyNO2wVzp28G48OGkp40Eim92'

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
    console.log(data);
};
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data[0]);
};

getCity('cheyenne')
    .then(data => {
        return getWeather(data.Key)
    }).then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

getWeather('331604');    