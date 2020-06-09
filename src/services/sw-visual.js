export default class SwVisual {
  static #baseUrl = `https://starwars-visualguide.com/assets/img`;

  static getPersonImage = (id) => {
    return `${this.#baseUrl}/characters/${id}.jpg`;
  };

  static getPlanetImage = (id) => {
    return `${this.#baseUrl}/planets/${id}.jpg`;
  };

  static getStarshipImage = (id) => {
    return `${this.#baseUrl}/starships/${id}.jpg`;
  };
}
