function calculateReturnDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
}
 
console.log(calculateReturnDate());