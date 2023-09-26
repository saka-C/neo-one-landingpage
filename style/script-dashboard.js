
// const scrollCard = document.getElementById('scroll-card');

// scrollCard.addEventListener('mousedown', (event) => {
//     let isMouseDown = true;
//     let startX = event.pageX - scrollCard.offsetLeft;
//     let scrollLeft = scrollCard.scrollLeft;

//     scrollCard.style.cursor = 'grabbing';

//     document.addEventListener('mousemove', (e) => {
//         if (!isMouseDown) return;
//         const x = e.pageX - scrollCard.offsetLeft;
//         const walk = (x - startX) * 2;
//         scrollCard.scrollLeft = scrollLeft - walk;
//     });

//     document.addEventListener('mouseup', () => {
//         isMouseDown = false;
//         scrollCard.style.cursor = 'grab';
//     });
// });



var openModule = null;

  function toggleSubBab(moduleId) {
    var subBab = document.getElementById(moduleId);
    if (openModule && openModule !== subBab) {
      openModule.style.display = "none"; // Menutup card sebelumnya yang terbuka
    }
    if (subBab.style.display === "block") {
      subBab.style.display = "none";
      openModule = null;
    } else {
      subBab.style.display = "block";
      openModule = subBab;
    }
  }
  const customSelect = document.querySelector(".custom-select");
    const options = customSelect.querySelector(".options");

    customSelect.addEventListener("click", function () {
      options.style.display = options.style.display === "block" ? "none" : "block";
    });

    let isLiked = [false, false]; // Array untuk melacak status like pada setiap card

        function toggleLike(button) {
            const cardIndex = Array.from(button.parentElement.parentElement.parentElement.parentElement.children).indexOf(button.parentElement.parentElement.parentElement);
            const likeCountElement = button.querySelector(".likeCount");
            const likeIcon = button.querySelector("i");
            
            if (!isLiked[cardIndex]) {
                // Jika belum dilike, tambahkan like
                isLiked[cardIndex] = true;
                likeCountElement.textContent = parseInt(likeCountElement.textContent) + 1;
                likeIcon.classList.toggle("liked", true); // Tambahkan atau hilangkan kelas "liked" untuk mengubah warna ikon
            } else {
                // Jika sudah dilike, kurangi like
                isLiked[cardIndex] = false;
                likeCountElement.textContent = parseInt(likeCountElement.textContent) - 1;
                likeIcon.classList.toggle("liked", false); // Tambahkan atau hilangkan kelas "liked" untuk mengembalikan warna ikon
            }
        }

// Ambil elemen floating-button
var floatingButton = document.querySelector('.floating-button');

// Ambil elemen floating-nav
var floatingNav = document.querySelector('.floating-nav');

// Tambahkan event listener ke floating-button
floatingButton.addEventListener('click', function() {
  // Periksa apakah floating-nav sedang ditampilkan atau disembunyikan
  if (floatingNav.style.display === 'none' || floatingNav.style.display === '') {
    // Tampilkan floating-nav
    floatingNav.style.display = 'flex';
  } else {
    // Sembunyikan floating-nav
    floatingNav.style.display = 'none';
  }
});

// popup

const tombol1 = document.getElementById("tombol-img");
const tombol2 = document.getElementById("tombol-text");
const popup1 = document.getElementById("popup-post-img-text");
const popup2 = document.getElementById("popup-post-text");
const closeButton1 = document.getElementById("close-button-img");
const closeButton2 = document.getElementById("close-button-text");

  tombol1.addEventListener("click", function() {
    popup1.style.display = "block";
  });
  tombol2.addEventListener("click", function() {
    popup2.style.display = "block";
  });

  closeButton1.addEventListener("click", function() {
    popup1.style.display = "none";
  });
  closeButton2.addEventListener("click", function() {
    popup2.style.display = "none";
  });

// preview post
function tampilkanPreview() {
    const inputFoto = document.getElementById("inp-foto");
    const labelPlus = document.getElementById("label-plus");
    const previewContainer = document.getElementById("preview-container");
    const previewImage = document.getElementById("preview-image");
    if (inputFoto.files && inputFoto.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewContainer.style.display = "block";
        labelPlus.style.display = "none";

        // Menambahkan event listener pada gambar
        previewImage.addEventListener("click", function() {
          inputFoto.value = ""; // Mengatur ulang input file
          previewContainer.style.display = "none";
          labelPlus.style.display = "block";
        });
      };

      reader.readAsDataURL(inputFoto.files[0]);
    }
  }

