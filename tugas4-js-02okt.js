console.log("+------------------------------+");
console.log("|Sistem Manajemen Transportasi |");
console.log("+------------------------------+");

// class Pelanggan beserta property (nama, noTelepon, kendaraanDisewa)
class Pelanggan {
	constructor(nama, nomorTelepon) {
		this.nama = nama;
		this.nomorTelepon = nomorTelepon;
		this.kendaraanDisewa = null;
	}

	// method mencatat transaksi penyewaan kendaraan oleh Pelanggan
	sewaKendaraan(kendaraan) {
		this.kendaraanDisewa = kendaraan;
	}
}

// membuat object Pelanggan
let pelanggan1 = new Pelanggan("Joni", "081323236721");
pelanggan1.sewaKendaraan("Nissan GTR");
let pelanggan2 = new Pelanggan("Budi", "085251129878");
pelanggan2.sewaKendaraan("Toyota Avanza");
let pelanggan3 = new Pelanggan("Yono", "089189234544");
pelanggan3.sewaKendaraan("Yamaha Nmax");

// simpan data object Pelanggan ke array
let daftarPelanggan = [pelanggan1, pelanggan2, pelanggan3];

// tampilkan daftar Pelanggan
daftarPelanggan.forEach((pelanggan) => {
	console.log(` Nama : ${pelanggan.nama} \n No.Telp : ${pelanggan.nomorTelepon} \n Sedang Menyewa : ${pelanggan.kendaraanDisewa}\n------------
    `);
});
