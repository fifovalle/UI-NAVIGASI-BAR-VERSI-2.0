const daftar = document.querySelectorAll(".navigasi li");

function tautanAktif() {
  daftar.forEach((objek) => objek.classList.remove("aktif"));
  this.classList.add("aktif");
}

daftar.forEach((objek) => objek.addEventListener("click", tautanAktif));
