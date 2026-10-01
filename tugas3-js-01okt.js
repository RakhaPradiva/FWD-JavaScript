// array data produk
let produkToko = [
	{ id: 1, nama: "Laptop", harga: 7000000, stok: 5 },

	{ id: 2, nama: "Mouse", harga: 200000, stok: 10 },

	{ id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];
// function tambah produk
let tambahProduk = (nama, harga, stok) => {
	let id = produkToko.length + 1;
	let newProduk = { id, nama, harga, stok };
	produkToko.push(newProduk);
};
tambahProduk("Printer", 3000000, 3);

// function hapus produk berdasarkan id
let hapusProduk = (id) => (produkToko = produkToko.filter((produk) => produk.id != id));
hapusProduk(2);

// function tampilkan produk
let tampilkanProduk = () => {
	produkToko.forEach((produk) => {
		console.log(`--------------------              
No     : ${produk.id}
Nama   : ${produk.nama}
Harga  : Rp${produk.harga}
Stok   : ${produk.stok}
--------------------`);
	});
};
tampilkanProduk();
