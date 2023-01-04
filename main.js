const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papan_skor = document.querySelector(".papan-skor")

let sebelumnya;
let selesai = false;
let blm_selsai = false;
let skor = 0;

function random(tikus) {
  const r = Math.floor(Math.random() * tikus.length);
  const tr = tikus[r];
  if (tr == sebelumnya) {
    return random(tikus);
  }

  sebelumnya = tr;
  return tr;
}

function waktu(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

function muncul() {
  selesai = false;
  const tr = random(tikus);
  const wr = waktu(300, 1500)
  tr.classList.add('muncul');
  setTimeout(() => {
    tr.classList.remove('muncul');
    if (!selesai) {
      muncul(tikus);
    }
  }, wr);
};

function mulai() {
  muncul(tikus)
  setTimeout(() => {
    selesai = true;
  }, 10000);
};


function pukul() {
  skor++;
  papan_skor.textContent = skor;
  setTimeout(() => {
      tikus.classList.remove("muncul")
  },100)
}

console.log(tikus)
tikus.forEach(t => {
  t.addEventListener("click", pukul)
})