//settings for the horizontal swiper
var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    autoplay: {
        delay: 10000, 
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
    on: {
      slideChange: function(){
        var video = document.getElementById("video-pause");
      
        video.pause();
        
        video.removeAttribute('id', 'video-pause');
      },
    }
});

//settings for the vertical swiper
var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 8,
    mousewheel: true,
    autoplay: {
        delay: 2000,
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

  // When the user clicks outside the image, close the modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


function pause(){
  var video = document.getElementById("video-pause");

  video.pause();
  
  video.removeAttribute('id', 'video-pause');
}