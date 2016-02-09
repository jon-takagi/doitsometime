function toggleDeleteButtons() {
  var projectList = document.getElementById("projects");
  console.log(projectList);
  var projects = projectList.children;
  var project;
  var status = projectList.getAttribute('data-deleteisshown');
  for (var i = 0; i < projects.length; i++) {
    if(status == "true") {
      for (var i = 0; i < projects.length; i++) {
        var contents = projects[i].children;
        for(var j = 0; j < contents.length; j++) {
          if(contents[j].id == 'delete') {
            projects[i].removeChild(contents[j]);
          }
        }
      }
      projectList.setAttribute('data-deleteisshown',false);
      break;
    } else {
      var link = document.createElement("a");
      link.rel = 'nofollow';
      link.setAttribute('data-confirm','Are you sure?');
      link.setAttribute('data-method', 'delete');
      link.href='/projects/' + projects[i].id;
      link.innerHTML = 'X';
      link.id='delete';
      projects[i].appendChild(link);
    }
    projectList.setAttribute('data-deleteisshown',true);
  }

}
