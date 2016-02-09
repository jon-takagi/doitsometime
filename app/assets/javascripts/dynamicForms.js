function remove_success_condition(link) {
  console.log("test");
  var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'hidden') {
      inputs[i].value = 1;
    }
  }
  link.parentNode.style.display = 'none';
}

function add_success_conditions(link) {
  var new_id = new Date().getTime();
  var li = document.createElement("li");
  var label = document.createElement("LABEL");
  var textField = document.createElement("input");
  var hidden_field = document.createElement("input");
  var removeLink = document.createElement("a");
  label.innerHTML = "Description";
  textField.name = "project[success_conditions_attributes]["+new_id+"][description]";
  textField.id = "project_success_conditions_description_" +  new_id;
  hidden_field.name = "project[success_conditions_attributes]["+new_id+"][_destroy]";
  hidden_field.type = "hidden";
  hidden_field.id = "project_success_conditions__destroy_"+ new_id;
  hidden_field.value = "false";
  removeLink.onclick = function() {
    remove_success_condition(this);
  };
  removeLink.href = "#";
  removeLink.innerHTML = "remove";
  li.appendChild(label);
  li.appendChild(textField);
  li.appendChild(hidden_field);
  li.appendChild(removeLink);
  document.getElementById("conditions").appendChild(li);
}
