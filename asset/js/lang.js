const translations = {
  id: {
    dear: "Kepada",
    youAreInvited: "Anda Diundang!",
    theWeddingOf: "Pernikahan",
    openInvitation: "Buka Undangan",
    scrollKebawah: "Scroll Kebawah",
    theWeddingOf2: "Pernikahan Peni & Dio",
    quotes: "“Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa tentram di samping-Nya dan dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan Allah”",
    quotes2: "“Pernikahan yang bahagia dimulai ketika kita menikahi orang yang kita cintai, dan mereka berkembang ketika kita mencintai orang yang kita nikahi.”",
    familyBride: "Putri dari<br />Bapak Rohimat<br />&amp; Ibu Eti Kartika",
    familyGroom: "Putra dari<br />Bapak Denny Wulandi<br />&amp; Ibu Anne Nurdiah",
    akad: "Akad",
    nikah: "Nikah",
    tanggal: "Minggu, 19 April 2026",
    jamAkad: "08:00 - 10:00 WIB",
    resepsiPernikahan: "Resepsi",
    resepsiPernikahan2: "Pernikahan",
    jamResepsi: "11:00 - 14:00 WIB",
    undanganBerlaku: "Undangan berlaku untuk 2 orang",
    lihatLokasi: "Lihat Lokasi",
    saveTheDate: "Simpan Tanggal",
    tambahKeKalender: "Tambah ke Kalender",
    ourStory: "Kisah",
    ourStory2: "Cinta",
    konfirmasiKehadiran: "Konfirmasi",
    konfirmasiKehadiran2: "Kehadiran",
    konfirmasiKehadiranMessage: "Kami tidak sabar menunggu hari pernikahan kami bersama Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i. Terima kasih.",
    rsvpNama: "Nama",
    rsvpKehadiran: "Kehadiran",
    hadir: "Saya akan hadir",
    tidakBisa: "Maaf tidak bisa",
    jumlahTamu: "Jumlah Tamu",
    kirim: "Kirim",
    weddingGift: "Amplop",
    weddingGift2: "Digital",
    weddingGiftMessage: "Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:",
    kirimHadiah: "Kirim Hadiah",
    transferBank: "Transfer Bank",
    nomorRekening: "Nomor Rekening",
    copy: "Salin",
    alamat: "Alamat Penerima",
    copyAddress: "Salin Alamat",
    happyMoments: "Momen",
    happyMoments2: "Bahagia",
    wish: "Tinggalkan pesan/doa untuk kami ",
    rsvpUcapan: "Ucapan & Doa",
    quotes3: "Dua jiwa menjadi satu, dua hati berdetak sebagai satu."
  },
  en: {
    dear: "Dear",
    youAreInvited: "You Are Invited!",
    theWeddingOf: "The Wedding Of",
    openInvitation: "Open Invitation",
    scrollKebawah: "Scroll Down",
    theWeddingOf2: "The Wedding of Peni & Dio",
    quotes: "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”",
    quotes2: "“Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry.”",
    familyBride: "Daughter of<br />Mr. Rohimat<br />&amp; Mrs. Eti Kartika",
    familyGroom: "Son of<br />Mr. Denny Wulandi<br />&amp; Mrs. Anne Nurdiah",
    akad: "Wedding",
    nikah: "Ceremony",
    tanggal: "Sunday, April 19th, 2026",
    jamAkad: "8.00 - 10.00 AM",
    resepsiPernikahan: "Wedding",
    resepsiPernikahan2: "Reception",
    jamResepsi: "11.00 AM - 2.00 PM",
    undanganBerlaku: "Invitation valid for 2 people",
    lihatLokasi: "View Location",
    saveTheDate: "Save The Date",
    tambahKeKalender: "Add to Calendar",
    ourStory: "Our",
    ourStory2: "Story",
    konfirmasiKehadiran: "Confirm",
    konfirmasiKehadiran2: "Attendance",
    konfirmasiKehadiranMessage: "We can't wait to celebrate our wedding day with you, please confirm your attendance. Thank you.",
    rsvpNama: "Name",
    rsvpKehadiran: "Attendance",
    hadir: "I will attend",
    tidakBisa: "Sorry, I can't",
    jumlahTamu: "Number of Guests",
    kirim: "Submit",
    weddingGift: "Wedding",
    weddingGift2: "Gift",
    weddingGiftMessage: "For family and friends who wish to send gifts, please send them through the following link:",
    kirimHadiah: "Send Gift",
    transferBank: "Bank Transfer",
    nomorRekening: "Account Number",
    copy: "Copy",
    alamat: "Recipient Address",
    copyAddress: "Copy Address",
    happyMoments: "Happy",
    happyMoments2: "Moments",
    wish: "Leave a message/wish for us ",
    rsvpUcapan: "Message & Wishes",
    quotes3: "Two souls become one, two hearts beat as one"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-id]").forEach(el => {
    const key = el.getAttribute("data-id");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);

  // highlight flag aktif (AMAN)
  document.querySelectorAll(".lang-flag").forEach(el => {
    el.style.opacity = "0.5";
  });

  const activeFlag = document.querySelector(".flag-" + lang);
  if (activeFlag) {
    activeFlag.style.opacity = "1";
  }
}

function toggleLang(e) {
  e.stopPropagation();

  const opt = document.getElementById("lang-options");
  if (!opt) return;

  opt.style.display = opt.style.display === "block" ? "none" : "block";
}

function changeLang(e) {
  e.stopPropagation();

  const lang = e.target.getAttribute("data-lang");
  const img = e.target.src;

  setLanguage(lang);

  // ganti flag
  const flag = document.getElementById("current-flag");
  if (flag) {
    flag.src = img;
  }

  // tutup dropdown (AMAN)
  const opt = document.getElementById("lang-options");
  if (opt) {
    opt.style.display = "none";
  }
}

// klik luar
document.addEventListener("click", function () {
  const opt = document.getElementById("lang-options");
  if (opt) {
    opt.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "id";
  setLanguage(savedLang);

  const flagMap = {
    id: "https://drive.google.com/thumbnail?id=1NVzlJiSkKHneCd27ZhSk7pBDz7BjjEsS&sz=w2000",
    en: "https://drive.google.com/thumbnail?id=1e_I8r4z-tMcBen0MwYQF62Z16MVvaYhF&sz=w2000"
  };

  document.getElementById("current-flag").src = flagMap[savedLang];
});