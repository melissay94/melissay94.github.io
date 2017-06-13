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
      html += "<div class='test'><div class='row'>";
      html += "<div class='col-md-6'><h3>" + project.title + "</h3></div>";
      html += "<div class='col-md-6'><p>" + project.tagline + "</p></div>";
      html += "</div></div></div>";
    }

    document.querySelector('#portfolio').innerHTML = html;

    $(document).ready(function() {
      $('.my-slides').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
      });
    });
  }

  xhr.open('GET', "projects.JSON", true);
  xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2010 00:00:00 GMT");
  xhr.send();

};

window.onload = loadData;