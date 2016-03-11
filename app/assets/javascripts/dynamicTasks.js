function remove_task(link) {
  var inputs = link.parentNode.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'hidden' && inputs[i].name.includes('_destroy')) {
      inputs[i].value = 1; //False
    }
  }
  link.parentNode.style.display = 'none';
}

function add_tasks(link) {
  var new_id = new Date().getTime();
  var li = document.createElement("li");
  li.className = "task";
  var hidden_field = document.createElement("input");
  var removeLink = document.createElement("a");

  var descriptionLabel = document.createElement("label");
  var userLabel = document.createElement("userLabel");
  var statusLabel = document.createElement("label");

  var descriptionField = document.createElement("input");
  var userField = document.createElement("input");
  var statusField = document.createElement("select");

  statusField.name = "project[tasks_attributes][" + new_id + "][status]";
  descriptionField.name = "project[tasks_attributes]["+new_id+"][description]";
  var option_texts = ["Not started", "In progress", "Need help", "Complete"];
  for(var i = 0; i < option_texts.length; i++) {
    var option = document.createElement("option");
    option.id = "project_tasks_status_" + new_id;
    option.innerHTML = option_texts[i];
    statusField.appendChild(option);
  }
  statusLabel.innerHTML = "Status: ";
  descriptionLabel.innerHTML = "Description";
  descriptionField.id = "project_tasks_description_" +  new_id;
  userLabel.innerHTML = "Assign To:";
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
  li.appendChild(userLabel);
  li.appendChild(userField);
  li.appendChild(statusLabel);
  li.appendChild(statusField);
  li.appendChild(hidden_field);
  li.appendChild(removeLink);
  document.getElementById("tasks").appendChild(li);
}
