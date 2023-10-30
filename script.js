document.getElementById("categorizeButton").addEventListener("click", function(){
    const caseName = document.getElementById("case").value;
    const category = document.getElementById("category").value;
    let result = "Empty";

   if (caseName && category) {
         result = `The case "${caseName}" is categorized as "${category}" case.`
   }
   document.getElementById("result").textContent = result
})