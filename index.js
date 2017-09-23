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

      html += "<div class='card'><img class='card-img-block' src=" + project.picture + " alt=" + project.title + "/>";
      html += "<div class='card-block'>";
      html += "<h4 class='card-title'><a href=" + project.link + " target='_blank'>" + project.title + "</a></h4>";
      html += "<p class='card-text' style='font-size:18px;'>" + project.tagline + "</p><p class='card-text'>" + project.description + "</p>";
      if (project.github != "") {
        html += "<a href=" + project.github + " target='_blank'>";
        html += "<span class='fa-stack'><i class='fa fa-circle fa-stack-2x'></i>";
        html += "<i class='fa fa-github-alt fa-stack-1x'></i></span></a>";
      }
      html += "</div></div>";
    }

    document.querySelector('#portfolio').innerHTML = html;
  }

  xhr.open('GET', "projects.JSON", true);
  xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2010 00:00:00 GMT");
  xhr.send();

};

window.onload = loadData;