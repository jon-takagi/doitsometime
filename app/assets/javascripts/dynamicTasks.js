function remove_task(link) {
  var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'hidden') {
      inputs[i].value = 1;
    }
  }
  link.parentNode.style.display = 'none';
}

function add_tasks(link) {
  var new_id = new Date().getTime();
  var li = document.createElement("li");
  var descriptionLabel = document.createElement("descriptionLabel");
  var descriptionField = document.createElement("input");
  var hidden_field = document.createElement("input");
  var removeLink = document.createElement("a");
  var userLabel = document.createElement("userLabel");
  var userField = document.createElement("input");
  var statusBar = document.createElement("select");
  statusBar.name = "project[tasks_attributes][" + new_id + "][status]";
  var option_texts = ["Not started", "In progress", "Need help", "Complete"];
  for(var i = 0; i < option_texts.length; i++) {
    var option = document.createElement("option");
    option.id = "project_tasks_status_" + new_id;
    option.innerHTML = option_texts[i];
    statusBar.appendChild(option);
  }
  var statusLabel = document.createElement("label");
  statusLabel.innerHTML = "Status: ";

  descriptionLabel.innerHTML = "Description";
  descriptionField.name = "project[tasks_attributes]["+new_id+"][description]";
  descriptionField.id = "project_tasks_description_" +  new_id;

  userLabel.innerHTML = "User email:";
  userField.name = "project[tasks_attributes]["+new_id+"][email]";
  userField.id = "project_tasks_email_" +  new_id;
  hidden_field.name = "project[tasks_attributes]["+new_id+"][_destroy]";
  hidden_field.type = "hidden";
  hidden_field.id = "project_tasks__destroy_"+ new_id;
  hidden_field.value = "false";
  removeLink.onclick = function() {
    remove_task(this);
  };
  removeLink.href = "#";
  removeLink.innerHTML = "remove";
  li.appendChild(descriptionLabel);
  li.appendChild(descriptionField);
  li.appendChild(statusLabel);
  li.appendChild(statusBar);
  li.appendChild(userLabel);
  li.appendChild(userField);
  li.appendChild(hidden_field);
  li.appendChild(removeLink);
  document.getElementById("tasks").appendChild(li);
}
