export const dateChange = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString('sv-SE', { timeZone: 'UTC' });
};