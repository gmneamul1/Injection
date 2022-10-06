document.getElementById("calulator").addEventListener("click", function () {
  // cyce time
  const cycleTime = document.getElementById("cycle").value;

  const cycleString = parseFloat(cycleTime ? cycleTime : 0);
  // console.log(cycleString)
  // let output = 0;
   function outputvalue() {
    if (cycleString <= 0) {
      return 0;
    } else {
      let output = 345600 / cycleString;
      // console.log(output);
      return output;
    }
  }
  const perHourOutput = outputvalue();
  // console.log(perHourOutput);

  const outputString = parseInt(perHourOutput);
  const outputText = document.getElementById("output");
  outputText.innerText = perHourOutput;
  const outputValue = outputText.innerText;

  const material = document.getElementById("size").value;
  const gramToKg = parseFloat(material / 1000);

  // console.log(gramToKg)
  const materials = material * outputString;
  const gramMaterial = material * outputString;

  console.log(material)
  console.log(outputString)
  console.log(gramMaterial)
  const kgMaterial = gramMaterial / 1000;
  const materialskg = document.getElementById("material-kg");

  materialskg.innerText = parseFloat(kgMaterial).toFixed(2);
  const remainingTime = document.getElementById("remaining-time").value;
  const remain = remainingTime ? remainingTime : 0;
 

function remaingTime (){
  if(remain <= 0){
    return 0;
  }else{
    const reminingTimeNumber = 60 / remainingTime;
    // console.log(reminingTimeNumber)
    return reminingTimeNumber;
  }
}
const remainTime =  remaingTime();
// console.log(remainTime)

  
  const remaingstring = parseInt(remainTime );
  // console.log(remaingstring)
const outputZero =(perHourOutput ? perHourOutput:0)

function remainoutput () {
if(remaingstring <=0 ){
  return 0
  
}else{
  const remaingPreforms =outputZero / remaingstring;
  return remaingPreforms
}

}
const remainPreform =remainoutput()
// console.log(remainPreform)

  const product8hourse = document.getElementById("8hoursProduct");
  const producedPreforms = document.getElementById("produce-preforms").value;
  //   total production
  product8hourse.innerText =parseInt(remainPreform) +
parseInt(producedPreforms ? producedPreforms : 0);
  const totalProduction = product8hourse.innerText;
  // console.log(totalProduction)

  const totalWastage = document.getElementById("wastage").value;
  const userWastege = parseFloat(totalWastage ? totalWastage : 0);
  // console.log(userWastege)

  const produceToMaterials = totalProduction * gramToKg;
  const materialsString = parseFloat(produceToMaterials);
  //   console.log(produceToMaterials)
  const TotalMaterial = userWastege + materialsString;
  // console.log(TotalMaterial)

  const totalMaterial = document.getElementById("total-materials");
  totalMaterial.innerText = TotalMaterial.toFixed(2);

  const perCase = document.getElementById("perCase").value;

  const cases = document.getElementById("case");
  const totalCase = parseInt(totalProduction) / parseInt( perCase ? perCase : 24);
 console.log(totalCase)
 console.log(totalProduction)
 console.log(( perCase ? perCase : 0))
console.log(totalCase)
  function totalCasena() {
    if (!isFinite(totalCase)) {
      return 0;
    } else{
 return totalCase
    }
    
  }
  const totalcaseNan = totalCasena()
  console.log(totalcaseNan)

  cases.innerText = totalcaseNan;
  //   carton
  const carton = document.getElementById("percarton").value;
  const cartons = parseFloat(carton ? carton : 1);
  const totalCarton = parseFloat(totalProduction) / parseInt(cartons);
  const totalCartons = document.getElementById("Cartons");
  totalCartons.innerText = totalCarton.toFixed(2);

  // cages
  const cages = document.getElementById("per-cage").value;

  const totalCages = document.getElementById("cages");
  const totalCage = cages ? cages : 1;

  totalCages.innerText = (parseInt(totalCarton) / parseInt(totalCage)).toFixed(2);
});

function refreshPage() {
  window.location.reload();
}
