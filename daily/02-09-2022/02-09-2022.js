const data1 = [[100, 110], [100,50] , [120,20], [100, 200]]
const data2 = [[200, 210], [200,150] , [220,50], [200, 300]]

const draw = () => {
    const canvas = document.querySelector('canvas');
    canvas.width = 500
    canvas.height = 400
    if (canvas.getContext){
      const ctx1 = canvas.getContext("2d");
      const ctx2 = canvas.getContext("2d");
  
      ctx1.beginPath();
      ctx1.moveTo(75,50);
      data1.forEach((size) => {
        ctx1.lineTo(size[0], size[1])
    })
      ctx1.fill();

      ctx2.beginPath();
      ctx2.moveTo(105,150);
      data2.forEach((size) => {
        ctx2.lineTo(size[0], size[1])
    })
    ctx2.fill();
    }
}

draw()

