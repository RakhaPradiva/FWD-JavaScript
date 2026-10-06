import { index, store, destroy } from "./controller.mjs";

const main = () => {
	let user = [
		{
			nama: "Tomi Kurnia",
			umur: 22,
			alamat: "Jl. Ambon Barat No. 10, Ambon",
			email: "tomi.Kurnia@gmail.com",
		},
		{
			nama: "Yanto Sujiro",
			umur: 25,
			alamat: "Jl. Merauke Timur No. 30, Merauke",
			email: "yanto.sujiro@gmail.com",
		},
	];

	index();
	store(user);
	destroy(11);
};

main();
