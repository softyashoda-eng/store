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
  fetch('https://script.google.com/macros/s/AKfycbxrFs8RKKjwRcQ-Wzs7QN6VRa22IRpfFqPxul9AHp1_XvuWYuJfGrVE-iFNeSOqMKHR7g/exec',{
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
