export const formatNumberWithPeriods = (number:number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const formatDate = (date:Date):string => {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}