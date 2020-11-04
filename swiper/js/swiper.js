//settings for the horizontal swiper
var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    autoplay: {
        delay: 4500, 
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
    },
});

//settings for the vertical swiper
var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
    },
});

function show(){
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  
  //change the source path by adding '_large' at the end of the file name
  var srcAtt = document.getElementById("myImg").getAttribute("src");
  srcAtt = srcAtt.replace(/(\.[\w\d_-]+)$/i, '_large$1');
  
  img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = srcAtt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
}



