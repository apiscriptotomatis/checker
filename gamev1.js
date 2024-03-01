var api = 'caea83d20b89b90';
function cekNick() {
   var id = $('#id').val();
   if (id === "") {
    $('#nick').text('');
    $('#nickplayer').text('');
    $('#emptyInputToast').toast('show');
    return;
   }
   $.ajax({
    method: "GET",
    url: "https://api-rekening.my.id/trueid/game/" + game + "/?id=" + id + "&key=" + api,
        beforeSend: function () {
     $('#nick').text('Sedang Mengecek...');
     $('#nickplayer').text('Sedang Mengecek...');
    },
    success: function (response) {
     if (response.hasOwnProperty('error_msg')) {
      $('#nick').text('Tidak Ditemukan!');
      $('#nickplayer').text('Tidak Ditemukan!');
     } else {
      $('#nick').text(response.nickname);
      $('#nickplayer').text(response.nickname);
     }
    }
   });
}
