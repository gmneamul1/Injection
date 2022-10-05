document.getElementById("calulator").addEventListener("click", function () {


    // cyce time 
  const cycleTime = document.getElementById("cycle").value;

  const cycleString = parseInt(cycleTime ? cycleTime:1);
  const output = 345600 / cycleString;
  const outputString = parseInt(output);
  const outputText = document.getElementById("output");
  outputText.innerText = outputString;
  const outputValue = outputText.innerText;
  
  const material = document.getElementById('size').value;
  const gramToKg = parseFloat(material /1000);

// console.log(gramToKg)
  const materials = (material )* outputString 
  const gramMaterial = (material )* outputString 
  const  kgMaterial = gramMaterial /1000;
  const materialskg= document.getElementById('material-kg');

  materialskg.innerText =parseFloat(kgMaterial).toFixed(2);
  const remainingTime = document.getElementById('remaining-time').value;

  const reminingTimeNumber =60 / remainingTime;
  const remaingstring = parseInt(reminingTimeNumber);
  
  const remaingPreforms = outputString / remaingstring;
  const product8hourse =document.getElementById('8hoursProduct');
  const producedPreforms = document.getElementById('produce-preforms').value
//   total production 
  product8hourse.innerText = parseInt(remaingPreforms)  + parseInt(producedPreforms? producedPreforms:0)
  const totalProduction =   product8hourse.innerText
console.log(totalProduction)

    const totalWastage =document.getElementById('wastage').value;
    const userWastege = parseFloat(totalWastage?  totalWastage: 0)
    // console.log(userWastege)

  const produceToMaterials = totalProduction  * gramToKg  ;
  const materialsString =parseFloat(produceToMaterials)
//   console.log(produceToMaterials)
const TotalMaterial = userWastege + materialsString;
console.log(TotalMaterial)
  

  const totalMaterial = document.getElementById('total-materials')
  totalMaterial.innerText= TotalMaterial.toFixed(2)

  const perCase = document.getElementById('perCase').value

  const cases = document.getElementById("case");
  const totalCase = parseInt(totalProduction/ perCase? perCase:1);
  cases.innerText = totalCase;
//   carton
const carton = document.getElementById('percarton').value
const cartons = (carton? carton: 1)
const totalCarton =  totalProduction  / parseInt(cartons);
const totalCartons = document.getElementById('Cartons')
totalCartons.innerText = totalCarton

// cages
const cages = document.getElementById('per-cage').value;

const totalCages = document.getElementById('cages');
const totalCage =(cages? cages:1)

totalCages.innerText = parseInt( totalCarton)  / parseInt(totalCage);
 




});

function refreshPage(){
    window.location.reload();
} 