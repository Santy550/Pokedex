export interface Data {
    const: number,
    next: string,
    previous: string,
    results: Resultado[]
}

export interface Resultado {
    name: string,
    url: string,
}