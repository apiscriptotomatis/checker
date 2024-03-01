var api = '9fcd9b5c9e6d885209e09b4b3efd598e';
    game = "genshinimpact"
function cekNick() {
   var id = $('#id').val();
   var zone = $('#zone').val();
   console.log('ID:', id);
   console.log('Zone:', zone);
   if (id === "") {
    $('#nick').text('');
    $('#emptyInputToast').toast('show');
    return;
   }
   $.ajax({
    method: "GET",
    url: "https://api-otomatis.my.id/trueid/games/" + game + "/?id=" + id + "&zone=" + zone + "&key=" + api,
        beforeSend: function () {
     $('#nick').text('Sedang Mengecek...');
    },
    success: function (response) {
     if (response.hasOwnProperty('error_msg')) {
      $('#nick').text('Tidak Ditemukan!');
     } else {
      $('#nick').text(response.nickname);
     }
    }
   });
}
