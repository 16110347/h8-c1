for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}



var kalkulator = {


    tambah: function tambah(x, y) {

        var x = x;
        var y = y;
        var total = y + x;

        return total;

    },

    perkalian: function perkalian(x, y) {
        var x = x;
        var y = y;
        var total = x * y;
        return total;

    }

}

kalkulator.tambah(3, 2);