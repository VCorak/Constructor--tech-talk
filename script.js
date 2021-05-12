// Canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); // access to build 2d drawing methods, ctx-shortcut for context
canvas.width = 800;
canvas.height = 500;



let canvasPosition = canvas.getBoundingClientRect();

// Mouse interactivity
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click:false

}

canvas.addEventListener('mousedown', function (event) {
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;

})

canvas.addEventListener('mouseup', function (event) {
    mouse.click = false;
})


// Player constructor

class Player {
    constructor() {
        this.x = canvas.width
        this.y = canvas.height
        this.radius = 50
    }


    update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        if (mouse.x != this.x) {
            this.x -= dx / 20;
        }
        if (mouse.y != this.y) {
            this.y -= dy / 20;
        }
    }
    draw() {
        if(mouse.click) {
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.fillRect(this.x, this.y, this.radius, 10 );
    }

}
const player = new Player();





// Animation loop

 function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          player.update();
          player.draw();

          requestAnimationFrame(animate);
      }
      animate();
 

      window.addEventListener('resize', function () {
          canvasPosition = canvas.getBoundingClientRect();
      });












