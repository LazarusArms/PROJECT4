(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();


var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 500,
    height = 300;

canvas.width = width;
canvas.height = height;

var grav = 0.2,
    keys = [],
    boxes = [],
    player = {
        x: width / 2,
        y: height - 20,
        w: 5,
        h: 5,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded : false,
        sliding : false
    };


//ground
boxes.push({x:0,y:0, w:10,h:height});
boxes.push({x:0,y:height-2, w:width,h:50});
boxes.push({x:width-10,y:0, w:50,h:height});


/*for (var i = 0; i < 120; i++) {
    boxes.push({
        x: (i*2)+9,
        y: (i*2)+9,
        w: 5,
        h: 5
    });
}*/

function update() {

    if (keys[38]) {
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed*2;
        }
    }
    if (keys[39]) {
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37]) {
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    //player.velY = grav;
    if (!player.jumping && player.grounded) {
        player.velX *= 0.65;
    }else{
        if(player.sliding){
            player.velY *=0.95;
        }else{
            player.velY += grav; 
        }            
    }

    if (player.x >= width-5) {
        player.x = width-5;
    } else if (player.x <= 0) {
        player.x = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.beginPath();
    
    // reset to false when checking
    player.grounded = false;
    player.sliding = false;
    
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].w, boxes[i].h);
        var dir = colCheck(player, boxes[i]);
        
        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.sliding = true;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    ctx.fill();
    
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.w, player.h);

    if(player.grounded){
         player.velY = 0;
    }
    
    player.y += player.velY;
    player.x += player.velX;
    requestAnimationFrame(update);
}

update();

function colCheck(shapeA, shapeB) {
    var vX = (shapeA.x + (shapeA.w / 2)) - (shapeB.x + (shapeB.w / 2)),
        vY = (shapeA.y + (shapeA.h / 2)) - (shapeB.y + (shapeB.h / 2)),
        hWidths = (shapeA.w / 2) + (shapeB.w / 2),
        hHeights = (shapeA.h / 2) + (shapeB.h / 2),
        colDir = null;

    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // collision
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});