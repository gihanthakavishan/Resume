
// const contents = document.querySelectorAll(".content");

// contents.forEach((content) => {
//     content.addEventListener("click", () => {
//         content.classList.toggle("active");
//     });
// });

// const contents = document.querySelectorAll(".content");

// contents.forEach((content) => {
//     content.addEventListener("click", () => {
//         contents.forEach((otherContent) => {
//             if (otherContent !== content) {
//                 otherContent.classList.remove("active");
//             }
//         });
//         content.classList.toggle("active");
//     });
// });

const accordionItemHeaders = document.querySelectorAll(".title");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    // Close all open accordion items
    accordionItemHeaders.forEach(item => {
      if (item !== accordionItemHeader) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = 0;
      }
    });

    // Toggle the clicked accordion item
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});




