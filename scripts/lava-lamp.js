const canvas = document.getElementById('lava-lamp-bg');
const ctx = canvas.getContext('2d');
const mainContent = document.querySelector('main');


function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = mainContent.offsetHeight;
}

setCanvasSize();

const blobCount = 5;
const minBlobSize = 50;
const maxBlobSize = 150;
const minSpeed = 0.5;
const maxSpeed = 2;
const colors = ["#f92368", "#7807F2", "#2D23F9", "#f44336", "#03a9f4"];

const blobs = [];


class Blob {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height; 
        this.radius = Math.random() * (maxBlobSize - minBlobSize) + minBlobSize;
        this.vx = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
        this.vy = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < this.radius || this.x > canvas.width - this.radius) {
            this.vx *= -1;
        }
        if (this.y < this.radius || this.y > canvas.height - this.radius) {
            this.vy *= -1;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}


for (let i = 0; i < blobCount; i++) {
    blobs.push(new Blob());
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    blobs.forEach(blob => {
        blob.update();
        blob.draw();
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', setCanvasSize);