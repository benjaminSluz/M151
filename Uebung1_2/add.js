let IdCounter = 3;
export function addAdress(object) {
    this.push({
        ...object,
        id: IdCounter++,
        city: "zürich",
    });
}