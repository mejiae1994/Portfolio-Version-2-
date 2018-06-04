var zooImg = document.getElementById('zoo');
var iosImg = document.getElementById('ios');
var contact = document.getElementById('contactMe');
var iosCurrent = 0;
var zooCurrent = 0;
alternateZooImg();
alternateIosImg();

function alternateZooImg() {
    var zooArray = ['code.png', 'zoologist.png'];
    var last = zooArray.length - 1;
    if (zooCurrent != last ) {
      zooImg.src = zooArray[zooCurrent];
      zooCurrent++;
    } else {
      zooImg.src = zooArray[last];
      zooCurrent = 0;
    }
    setTimeout(alternateZooImg, 3000);
}

function alternateIosImg() {
    var iosArray = ['ios.png', 'ios1.png', 'ios2.png'];
    var last = iosArray.length - 1;
    if (iosCurrent != last ) {
      iosImg.src = iosArray[iosCurrent];
      iosCurrent++;
    } else {
      iosImg.src = iosArray[last];
      iosCurrent = 0;
    }
    setTimeout(alternateIosImg, 4000);
}

contact.addEventListener('click', function () {
  $('.ui.modal')
  .modal('show')
  ;
});
