export default class Swapi {
  static #baseUrl = `https://swapi.dev/api`;

  static async getAllPeople() {
    return (await this._getResource(`/people/`)).results.map(
      this._transformPerson,
    );
  }

  static async getPerson(id) {
    return this._transformPerson(
      await this._getResource(`/people/${id}/`),
    );
  }

  static async getAllPlanets() {
    return (await this._getResource(`/planets/`)).results.map(
      this._transformPlanet,
    );
  }

  static async getPlanet(id) {
    return this._transformPlanet(
      await this._getResource(`/planets/${id}/`),
    );
  }

  static async getAllStarships() {
    return (await this._getResource(`/starships/`)).results.map(
      this._transformStarship,
    );
  }

  static async getStarship(id) {
    return this._transformStarship(
      await this._getResource(`/starships/${id}/`),
    );
  }

  static async _getResource(url) {
    const res = await fetch(this.#baseUrl + url);

    if (!res.ok)
      throw new Error(
        `Couldn't fetch url ${url}, received: ${res.status}`,
      );

    return await res.json();
  }

  static _extractId = (item) => {
    return item.url.match(/\/([0-9]*)\/$/)[1];
  };

  static _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  static _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  static _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };
}
