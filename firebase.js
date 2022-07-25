document.getElementById('submitData').onclick = data;

function addUser(userData) {
const userTableRow = document.createElement('tr')
userTableRow.innerHTML = (
    '<td>' + userData.name + '</td>' + 
    '<td>' + userData.phone + '</td>'
)
document.querySelector('#users tbody').appendChild(userTableRow)
}

function data() {
  const data = {
  name: document.getElementById("uname").value,
  phone: document.getElementById('telephone').value 
  }
  addUser(data)
}