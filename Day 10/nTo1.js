function display(n) {
    //Base case condition is at top
    if (n == 0) return;
    console.log(n)
    display(--n)
}
display(10)