import users from "./data.mjs";

const index = () => {
	// tampilkan data
	users.map((user) => {
		const { nama, umur, alamat, email } = user;

		console.log(`| No.: ${users.indexOf(user) + 1}\n| Nama: ${nama}\n| Umur: ${umur}\n| Alamat: ${alamat}\n| Email: ${email}\n-----------------`);
	});
};

const store = (user) => {
	// tambahkan data
	users.push(...user);
	index();
};

const destroy = (userIndex) => {
	users.splice(userIndex - 1, 1)[0];
	index();
};

export { index, store, destroy };
