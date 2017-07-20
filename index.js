const loadData = function() {

  var xhr = new XMLHttpRequest();

  xhr.onload = function(){

    var projectJSON = JSON.parse( xhr.responseText );
    var projects = projectJSON.projects;

    // Empty html string to add slides to 
    var html = "";

    // For loop for each slide
    for (var i = 0; i < projects.length; i++) {
      project = projects[i];

      // Put all the fields into elements and add it to the html
      html += "<div class='slide' style='background: #eee url(" + project.picture +") no-repeat center;";
      html += " background-size: 100% auto;'>";
      if (project.github != "") {
        html += "<a href=" + project.github + " target='_blank'>";
        html += "<span class='fa-stack'><i class='fa fa-circle fa-stack-2x'></i>";
        html += "<i class='fa fa-github-alt fa-stack-1x'></i></span></a>";
      }
      html += "<div class='test'><div class='row'><a href=" + project.link + " target='_blank'>";
      html += "<div class='col-md-6'><h3>" + project.title + "</h3></div>";
      html += "<div class='col-md-6'><p>" + project.tagline + "</p></div>";
      html += "</a></div></div></div>";
    }

    document.querySelector('#portfolio').innerHTML = html;

    $(document).ready(function() {
      $('.my-slides').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,
            }
          }, 
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ],
      });
    });
  }

  xhr.open('GET', "projects.JSON", true);
  xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2010 00:00:00 GMT");
  xhr.send();

};

window.onload = loadData;