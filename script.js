let nama, val;

const url_string = document.URL;

const url = new URL(url_string);

let doi;

if (url.searchParams.get('in') != null) {

  doi = url.searchParams.get('in');

} else {

  doi = "Kak_Arief";

}

let footer = document.getElementById("credit");

footer.innerHTML = doi;

footer.href = "https://www.instagram.com/adamukti/";

function time() {

  var d = new Date();

  var n = d.getHours();

  console.log(n);

  if (n >= 5 && n <= 10) {

    return "Pagi"

  } else if (n >= 10 && n <= 15) {

    return "Siang"

  } else if (n >= 15 && n <= 18) {

    return "Sore"

  } else if (n >= 18 && n <= 24) {

    return "Malam"

  }

}

function makan() {

  switch (time()) {

    case "Pagi":

      return "sarapan"

      break;

    case "Siang":

      return "makan siang"

      break;

    case "Malam":

      return "makan malam"

      break;

      case "Sore":

      return "makan"

      break;

    default:

      break;

  }

}

function selesai() {

  const teks = document.getElementById('teks');

  const btn = document.querySelector('.tombol');

  teks.innerHTML = `Semangat ${doi} <i

  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;

  btn.classList.add('d-none');

  teks.classList.remove('d-none');  

}

document.querySelector(".tombol").addEventListener('click', function () {

  Swal.fire({

    title: 'Hai Kak',

    html: `Selamat ${time()}, Kk udah ${makan()}?`,

    timer: 2500,

    timerProgressBar: true,

    showConfirmButton: false,

  }).then((result) => {

    if (result.dismiss === Swal.DismissReason.timer) {

      Swal.fire('Kalau belum jangan lupa makan yaa').then((result) => {

        Swal.fire({

          title: ' ',

          html: `Alivia ngerti perasaan kk`,

          timer: 2000,

          timerProgressBar: true,

          showConfirmButton: false,

        }).then((result) => {

          if (result.dismiss === Swal.DismissReason.timer) {

            Swal.fire({

              title: ' ',

              html: `Tapi gapapa Allah swt pasti punya rencana lain`,

              timer: 2000,

              timerProgressBar: true,

              showConfirmButton: false,

            }).then((result) => {

              if (result.dismiss === Swal.DismissReason.timer) {

                Swal.fire('Semangat terus ya kk :)').then((result) => {

                  Swal.fire(

                    'Jangan lupa sholat!',

                    '',

                    'error'

                  ).then((result) => {

                    Swal.fire(

                      'Jangan lupa berdoa!',

                      '',

                      'error'

                    ).then((result) => {

                      Swal.fire('Alivia dukung kk terus ko').then((result) => {

                        Swal.fire({

                          title: 'Oh iya Alivia mau nanya',

                          text: 'Ada sesuatu yang ingin disampaikan gak?',

                          showDenyButton: true,

                          confirmButtonText: `Ada`,

                          denyButtonText: `Ga ada ko`,

                        }).then((result) => {

                          /* Read more about isConfirmed, isDenied below */

                          if (result.isConfirmed) {

                            Swal.fire({

                              title: 'apa?',

                              input: 'text',

                              inputPlaceholder: 'ex: anu, apa aja, or etc',

                              showCancelButton: false,

                              inputValidator: (value) => {

                                if (!value) {

                                  return 'Isi dulu yaa'

                                }

                              }

                            }).then((result) => {

                              Swal.fire('Okey', 'Terima kasihh', 'success').then((result) => {

                                Swal.fire("See ya! Tetap semangat!! ^^").then((result) => {

                                  selesai()

                                });

                              })

                            })

                          } else if (result.isDenied) {

                            Swal.fire('Oh okedeh kalo ga ada').then((result) => {

                              Swal.fire("See ya! Tetap semangat!! ^^").then((result) => {

                                selesai()

                              });

                            })

                          }

                        })

                      })

                    })

                  })

                })

              }

            })

          }

        })

      })

    }

  })

});
