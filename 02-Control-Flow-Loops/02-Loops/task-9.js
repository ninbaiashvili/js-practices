for (var a = 2; a <= 10; a++) {
    for (var i = 2; i <= a; i++) {
        if (a != i && a % i == 0) {
            break;
        }
        if (i < a) {
            continue;
        }
        console.log(a);
    }
}