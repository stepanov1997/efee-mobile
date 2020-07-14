export const parseDate = (date) => {
    let format = x => x < 10 ? "0" + x : x;
    let datetime = new Date(Date.parse(date.substring(0, 19)));
    return format(datetime.getDate()) + "." + format(datetime.getMonth() + 1) + "." + datetime.getFullYear() + ".  " +
        format(datetime.getHours()) + ":" + format(datetime.getMinutes());
}

export function promjeniNazivRada(naziv) {
    if (naziv === 'Dodjeljen')
        return 'Zauzet';
    else if (naziv === 'Odobren') {
        return 'Slobodan';
    } else return naziv;
}
