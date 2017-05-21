//document ready
document.addEventListener('DOMContentLoaded', function() {
   console.log('document is ready. I can sleep now');

   var request = new XMLHttpRequest();
   request.open('GET', './MOCK_DATA.json', true);

   request.onload = function() {
     if (this.status >= 200 && this.status < 400) {
       // Success!
       var data = JSON.parse(this.response);


     } else {
       // We reached our target server, but it returned an error

     }
   };

   request.onerror = function() {
     // There was a connection error of some sort
   };

   request.send();




  document.getElementById('first_name').addEventListener('click', function () {
    console.log('CLICKED ON FIRST_NAME');
  })





   var tbody;
   for (var i = 0; i < json.length; i++) {
     console.log('jsondata: ', json[i]);
     tbody = document.getElementById('tableBody');
     tbody.insertAdjacentHTML('beforeend', '<tr>')
   }
});
//
//     var json = [{"User_Name":"John Doe","score":"10","team":"1"},{"User_Name":"Jane Smith","score":"15","team":"2"},{"User_Name":"Chuck Berry","score":"12","team":"2"}];
//     var tr;
//     for (var i = 0; i < json.length; i++) {
//         tr = $('<tr/>');
//         tr.append("<td>" + json[i].User_Name + "</td>");
//         tr.append("<td>" + json[i].score + "</td>");
//         tr.append("<td>" + json[i].team + "</td>");
//         $('table').append(tr);
//     }
// });
