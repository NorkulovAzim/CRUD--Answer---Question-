const themeBtn = document.getElementById("theme-toggle");
const addBtn = document.getElementById("add-btn");
const modal = document.getElementById("modal");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");
const faqList = document.getElementById("faq-list");
const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");


addBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  questionInput.value = "";
  answerInput.value = "";
});

// CANCEL
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// SAVE (CREATE)
saveBtn.addEventListener("click", () => {
  const questionText = questionInput.value.trim();
  const answerText = answerInput.value.trim();

  if (questionText && answerText) {
    const faq = document.createElement("div");
    faq.classList.add("faq");
    faq.innerHTML = `
      <div class="question">
        <h3>${questionText}</h3>
        <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div class="answer">
        <p>${answerText}</p>
        <div class="btn-wrap">
          <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
          <button class="delete-btn"><i class="fa-solid fa-trash"></i> Delete</button>
        </div>
      </div>
    `;
    faqList.appendChild(faq);
    modal.style.display = "none";
  }
});

// TOGGLE (show/hide answer)
faqList.addEventListener("click", (e) => {
  if (e.target.closest(".question")) {
    e.target.closest(".faq").classList.toggle("active");
  }
});

// DELETE
faqList.addEventListener("click", (e) => {
  if (e.target.closest(".delete-btn")) {
    e.target.closest(".faq").remove();
  }
});

// EDIT
faqList.addEventListener("click", (e) => {
  if (e.target.closest(".edit-btn")) {
    const faq = e.target.closest(".faq");
    const q = faq.querySelector("h3");
    const a = faq.querySelector("p");

    questionInput.value = q.textContent;
    answerInput.value = a.textContent;

    modal.style.display = "flex";

    saveBtn.onclick = () => {
      q.textContent = questionInput.value;
      a.textContent = answerInput.value;
      modal.style.display = "none";
      resetSaveFunction();
    };
  }
});

// Reset save button to normal (add mode)
function resetSaveFunction() {
  saveBtn.onclick = () => {
    const questionText = questionInput.value.trim();
    const answerText = answerInput.value.trim();
    if (questionText && answerText) {
      const faq = document.createElement("div");
      faq.classList.add("faq");
      faq.innerHTML = `
        <div class="question">
          <h3>${questionText}</h3>
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="answer">
          <p>${answerText}</p>
          <div class="btn-wrap">
            <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i> Delete</button>
          </div>
        </div>
      `;
      faqList.appendChild(faq);
      modal.style.display = "none";
    }
  };
}
