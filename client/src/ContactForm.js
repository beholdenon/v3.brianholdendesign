import $ from 'jquery';

function ContactForm() {
  $(() => {
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    
    function initContactForm() {
      $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        let numErrors = 0;
        const form = $(this);

        // capture data
        const data = {
          fname: $('#fname').val(),
          email: $('#email').val(),
          message: $('#message').val()
        };

        if(data.fname === "") {
          numErrors += 1;
          $('#fname').addClass("error");
        }

        if(data.email === "" || !validateEmail(data.email)) {
          numErrors += 1;
          $('#email').addClass("error");
        }

        if(data.message === "") {
          numErrors += 1;
          $('#message').addClass("error");
        }

        if(numErrors === 0) {
          $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: JSON.stringify(data),
            cache: false,
            contentType: 'application/json; charset=utf-8',
            error: (err) => { console.log(err); },
            success: (data) => {
              $('.section.contact .heading p').html('Thank you for your comments. I will respond shortly.')
              $('#contact-form').addClass('success');
            },
          });
        }

      });
    }

    initContactForm();
  });
}

export default ContactForm;