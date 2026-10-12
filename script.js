function toggleMenu() {
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");
}





function penjelasan(nomor) {

    let kotak = document.querySelectorAll(".penjelasan");
    let titik = document.querySelectorAll(".dot");

    // =========================
    // TAMPILAN HP
    // =========================
    if (window.innerWidth <= 768) {

        // Sembunyikan semua
        kotak.forEach(function(item) {
            item.style.display = "none";
        });

        // Matikan semua titik
        titik.forEach(function(item) {
            item.classList.remove("aktif");
        });

        // Tampilkan yang dipilih
        kotak[nomor - 1].style.display = "block";

        // Aktifkan titik yang dipilih
        titik[nomor - 1].classList.add("aktif");
    }


    // =========================
    // TAMPILAN PC
    // =========================
    else {

        // HAPUS style display yang dibuat JavaScript
        kotak.forEach(function(item) {
            item.style.removeProperty("display");
        });

        // Matikan titik
        titik.forEach(function(item) {
            item.classList.remove("aktif");
        });
    }
}


// Saat pertama kali halaman dibuka
penjelasan(1);


// Saat ukuran layar berubah
window.addEventListener("resize", function() {

    penjelasan(1);

});








// Menentukan kondisi awal
let sebelumnyaHP = window.innerWidth <= 600;


// =====================================
// FUNGSI GANTI FOTO
// =====================================
function gantiFoto(nomor) {

    let semuaFoto = [
        document.querySelector(".alasan"),
        document.querySelector(".alasan1"),
        document.querySelector(".alasan2"),
        document.querySelector(".alasan3"),
        document.querySelector(".alasan4")
    ];

    let titik = document.querySelectorAll(".titik");


    // =========================
    // TAMPILAN HP
    // =========================
    if (window.innerWidth <= 600) {

        fotoTerakhir = nomor;


        // SEMBUNYIKAN SEMUA FOTO
        semuaFoto.forEach(function(foto) {
            foto.style.setProperty("display", "none", "important");
        });


        // TAMPILKAN HANYA FOTO YANG DIPILIH
        semuaFoto[nomor - 1].style.setProperty(
            "display",
            "block",
            "important"
        );


        // ATUR TITIK
        titik.forEach(function(item) {
            item.classList.remove("aktif");
        });

        if (titik[nomor - 1]) {
            titik[nomor - 1].classList.add("aktif");
        }

    }


    // =========================
    // TAMPILAN PC
    // =========================
    else {

        // SEMUA FOTO TAMPIL
        semuaFoto.forEach(function(foto) {
            foto.style.setProperty("display", "block", "important");
        });

        // Titik tidak aktif
        titik.forEach(function(item) {
            item.classList.remove("aktif");
        });
    }
}



// =====================================
// SAAT WEBSITE PERTAMA KALI DIBUKA
// =====================================
window.addEventListener("DOMContentLoaded", function() {

    if (window.innerWidth <= 600) {

        // HP pertama kali → FOTO 1
        gantiFoto(1);

    } else {

        // PC → semua foto
        gantiFoto(1);

    }

});



// =====================================
// SAAT UKURAN LAYAR BERUBAH
// =====================================
window.addEventListener("resize", function() {

    let sekarangHP = window.innerWidth <= 600;


    // =================================
    // PC → HP
    // =================================
    if (sekarangHP && !sebelumnyaHP) {

        // RESET KE FOTO 1
        fotoTerakhir = 1;

        // HANYA FOTO 1
        gantiFoto(1);
    }


    // =================================
    // HP → PC
    // =================================
    else if (!sekarangHP && sebelumnyaHP) {

        // SEMUA FOTO TAMPIL
        gantiFoto(1);
    }


    // Simpan kondisi layar sekarang
    sebelumnyaHP = sekarangHP;

});