$(document).ready(function() {
    $('#cep').on('blur', function() {
      var cep = $(this).val().replace(/\D/g, '');
      if (cep !== '') {
        var url = 'https://viacep.com.br/ws/' + cep + '/json/';
  
        $.ajax({
          url: url,
          dataType: 'json',
          crossDomain: true,
          contentType: "application/json",
          success: function(data) {
            if (data.erro) {
              alert('CEP não encontrado.');
            } else {
              $('#logradouro').val(data.logradouro);
              $('#bairro').val(data.bairro);
              $('#cidade').val(data.localidade);
              $('#estado').val(data.uf);
            }
          },
          error: function() {
            alert('Erro ao consultar o CEP.');
          }
        });
      }
    });
  });