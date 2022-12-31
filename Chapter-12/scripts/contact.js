function focusLabels() {
  if (!document.querySelectorAll || !document.querySelector) return false;
  const labels = document.querySelectorAll("label");
  for (const label of labels) {
    if (!label.getAttribute("for")) continue;
    labeladdEventListener("click", () => {
      const id = label.getAttribute("for");
      const element = document.querySelector(`#${id}`);
      if (element) element.focus();
    });
  }
}
function resetFields(whichform) {
  for (const element of whichform.elements) {
    if (element.type === "submit" || !element.getAttribute("placeholder"))
      continue;
    element.addEventListener("focus", () => {
      if (element.value === element.getAttribute("placeholder"))
        element.value = "";
    });
    element.addEventListener("blur", () => {
      if (element.value === "")
        element.value = element.getAttribute("placeholder");
    });
    element.dispatchEvent(new Event("blur"));
  }
}
function validateForm(whichform) {
  // TODO: 自定义验证規則
  const rules = whichform.getAttribute("rules");
  const alertMsg = (element) => {
    alert(element.getAttribute("error-msg"));
    return false;
  };
  for (const element of whichform.elements) {
    if (element.getAttribute("required") == "required" && !isFilled(element))
      alertMsg(element);
    if (element.getAttribute("type") == "email" && !isEmail(element))
      alertMsg(element);
  }
  return true;
}
function isFilled(field) {
  return field.value.length > 1 && field.value != field.placeholder;
}
function isEmail(field) {
  return field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1;
}
function prepareForms() {
  for (const form of document.forms) {
    resetFields(form);
    form.onsubmit = function () {
      if (!validateForm(this)) return false;

      const article = document.querySelectorAll("article")[0];
      if (submitFormWithAjax(this, article)) return false;
      return true;
    };
  }
}

addLoadEvent(() => {
  focusLabels();
  prepareForms();
});
