export const currencyChange = (currency, price) => {
    if (currency === 'EUR') {
        return (new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(price));
    } else if (currency === 'USD') {
        return (new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price));
    } else {
        return price;
    }
};