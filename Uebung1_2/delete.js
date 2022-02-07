export function deleteAddress(index) {
    let i = this.findIndex((value) => value.id === index);
    if (i == !-1) this.splice(i, 1);
}