document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
      alert("wow");
      $(location).attr('href', 'http://google.com');
    });
  }, false);
