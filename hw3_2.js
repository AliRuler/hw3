function check(num) {
    let sum = 0;
    for (let i = 0; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    sum === num ? console.log("yes") : console.log("no");
}
check(60);