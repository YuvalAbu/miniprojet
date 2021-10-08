let indexQuestion = document.querySelectorAll(
  "#survey_question > fields"
).length;

document.querySelector("#add-question").addEventListener("click", () => {
  const collectionHolder = document.querySelector("#survey_question");
  let btnExist = 0;
  collectionHolder.innerHTML += collectionHolder.dataset.prototype.replace(
    /__name__/g,
    indexQuestion
  );
  document
    .querySelector("#survey_question_" + indexQuestion + "_type")
    .addEventListener("change", (e) => {
      const idSelect = e.originalTarget.attributes.id.nodeValue;
      const select = e.target;
      //   const value = select.value;
      const desc = select.selectedOptions[0].text;
      let btnToAddSuggestion = document.createElement("button");
      btnToAddSuggestion.className = "addSuggestion btn btn-danger";
      btnToAddSuggestion.setAttribute("type", "button");
      btnToAddSuggestion.setAttribute("id", "btnSuggestion" + indexQuestion);
      btnToAddSuggestion.innerHTML = "Ajouter une suggestion";
      if (desc !== "Text") {
        if (btnExist === 0) {
          let a = document.querySelector("#" + idSelect);
          a.parentNode.insertBefore(btnToAddSuggestion, a.nextSibling);
          btnExist++;
        }
      } else {
        if (btnExist === 1) {
          document.getElementById(btnToAddSuggestion.id).remove();
          btnExist--;
        }
      }
    });
  indexQuestion++;
});
