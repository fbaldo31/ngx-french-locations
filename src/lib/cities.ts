export interface City {
    /** City name */
    nom: string;
    /** Insee code */
    code: string;
    /** District code */
    codeRegion: string;
    /** County Code */
    codeDepartement: string;
    /** Postal codes list */
    codesPostaux: string[];
    /** People */
    population: number;
}
