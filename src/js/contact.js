(() => {

  const $ = document.getElementById.bind(document)

  const form = $('form')

  const url = 'https://s4kxk6t0y4.execute-api.us-east-1.amazonaws.com/prod/send_mail'

  const get = function (field) {
    const element = $(field)
    if (element) {
      return element.value
    } else {
      return ''
    }
  };

  if (form) {
    form.addEventListener('submit', (event) => {

      event.preventDefault();

      const r = new XMLHttpRequest();
      r.open("POST", url, true);
      r.onreadystatechange = () => {
        if (r.readyState != 4) return;
        if (r.status === 200) {
          alert('Bedankt voor uw vraag.')
        } else {
          alert('Er is iets mis gegaan bij het versturen van uw bericht. Probeer het later nogmaals.');
        }
      };
      r.send(JSON.stringify({
        name_student: get('name_student'),
        name: get('name'),
        email: get('email'),
        subject: get('subject'),
        year: get('year'),
        message: get('message'),
        level: get('level'),
        phone: get('phone')
      }));
    });
  }
})();