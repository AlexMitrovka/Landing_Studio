
(function ($) {
  $(".contact-form").submit(function (event) {
    event.preventDefault();
    
    // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
    let form = $('#' + $(this).attr('id'))[0];
     
    // Сохраняем в переменную класс с параграфом для вывода сообщений

    let fd = new FormData(form);
    $.ajax({
      url: "/assets/php/send-message-to-telegram.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      success: function success(res) {
        let respond = $.parseJSON(res);
        if (respond.err) {
          document.getElementById('btn-close').click();
          setTimeout(()=> {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              showConfirmButton: false,
            });
          }, 500);
         
          
        } else if(respond.okSend) {
          document.getElementById('btn-close').click();
          setTimeout(()=> {
            Swal.fire({
              icon: 'success',
              title: 'successfully',
              timer: 1500,
              showConfirmButton: false,
            });
          }, 500);
          
        } else {
          alert ('Необработанная ошибка. Проверьте консоль и устраните.');
        }
      },
    });
  });
     
}(jQuery));