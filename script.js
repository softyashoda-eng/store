const form = document.getElementById('dataForm');

form.addEventListener('submit',(e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const ohine = document.getElementById('phone').value;

                      cost data = {
                        name,
                        email,
                        phone
                      };
  fetch('your_google_script_url',{
    method: 'post',
    headers: {
      'Content-Type: 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((responce) => responce.text())
  .then((result) => console.log(resul))
  .catch((error) => console.error(error));
});
