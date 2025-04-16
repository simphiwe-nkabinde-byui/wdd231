export default function (birds) {
    {
        const allCountries = birds.map(bird => bird.place_of_found)
        let uniqueCountries = allCountries.filter((e, i, self) => i === self.findIndex((item) => item === e));
        return uniqueCountries
    }
}