const dataBase = [
    {month: 0, products: {name: "Nematicidas", QuantityPerLiter: [0.4]}}, 
    {month: 1, products: {name: ["Nematicidas", "Herbicidas"], QuantityPerLiter: [0.4, 0.2]}},
    {month: 1, products: {name: ["Nematicidas", "Herbicidas"], QuantityPerLiter: [0, 0.2, 0.4]}}
]

const rows = []

const sizeRows = () => {
  dataBase.map(({month, products}) => {
    rows.push(products.QuantityPerLiter.length)
  })
  return Math.max.apply(null, rows)
}

const info = []
const refactoringRows = () => {
  
  dataBase.map(({month, products}) => {
    if(products.QuantityPerLiter.length < sizeRows()){
      let count = sizeRows() - products.QuantityPerLiter.length
      
      for (let i = 0; i < count; i++) {
        products.QuantityPerLiter.push(0)
      }}
      info.push(products.QuantityPerLiter)
      console.log(info)
    })
}






google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

const productPerMonth = () => {

}

function drawChart() {
var data = new google.visualization.DataTable();
data.addColumn('number', 'Mês');
data.addColumn('number', 'Julho');
data.addColumn('number', 'Agosto');
data.addColumn('number', 'Setembro');


  data.addRows(info)



var options = {
  chart: {
    title: 'Dados das aplicações',
    subtitle: 'Quantidade de produtos despejados'
  },
  width: 900,
  height: 500
};

var chart = new google.charts.Line(document.getElementById('linechart_material'));

chart.draw(data, google.charts.Line.convertOptions(options));
}