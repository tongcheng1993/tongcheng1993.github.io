var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

let startX = null;
let startY = null;
let isSwiping = false;
let swipeDirection = ''; // 'left', 'right', 'up', 'down'
 
// 根据需要调整判断条件以确定左右移动的阈值或区域
function onPointerDown(pointer) {
    let x = 200
    let y = 100
    startX = pointer.x;
    startY = pointer.y;
    isSwiping = true;
    if(isSwiping){
        let dx = startX-x
        let dy = startY-y
        let absDx = Math.abs(dx);
        let absDy = Math.abs(dy);
        if (absDx > absDy) { // horizontal movement dominates
            if (dx > 0) {
                swipeDirection = 'right'; // Right swipe
                player.setVelocityX(160);
            } else {
                swipeDirection = 'left'; // Left swipe
                player.setVelocityX(-160);
            }
        } else if (absDy > absDx) { // vertical movement dominates, but we can still check for up/down if needed
            if (dy > 0) {
                swipeDirection = 'down'; // Down swipe, not used in this example but can be included if needed.
            } else {
                swipeDirection = 'up'; // Up swipe, not used in this example but can be included if needed.
            }
        } else { // diagonal movement, treat as a tap or adjust logic as needed.
            swipeDirection = ''; // Treat as no swipe or adjust as needed.
        }
    }



}
function onPointerUp() {
    isSwiping = false;
}
function onPointerMove(pointer) {
    if (isSwiping) {
        let dx = pointer.x - startX;
        let dy = pointer.y - startY;
        let absDx = Math.abs(dx);
        let absDy = Math.abs(dy);
        if (absDx > absDy) { // horizontal movement dominates
            if (dx > 0) {
                swipeDirection = 'right'; // Right swipe
                player.setVelocityX(160);
            } else {
                swipeDirection = 'left'; // Left swipe
                player.setVelocityX(-160);
            }
        } else if (absDy > absDx) { // vertical movement dominates, but we can still check for up/down if needed
            if (dy > 0) {
                swipeDirection = 'down'; // Down swipe, not used in this example but can be included if needed.
                player.setVelocityY(330);
            } else {
                swipeDirection = 'up'; // Up swipe, not used in this example but can be included if needed.
                player.setVelocityY(-330);
            }
        } else { // diagonal movement, treat as a tap or adjust logic as needed.
            swipeDirection = ''; // Treat as no swipe or adjust as needed.
        }
        console.log('Swipe direction:', swipeDirection); // Log or use the direction as needed.
    }
}
function collectStar(player, star) {
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0) {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
}

function hitBomb(player, bomb) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}


function preload() {
    this.load.image('sky', '/assets/sky.png');
    this.load.image('ground', '/assets/platform.png');
    this.load.image('star', '/assets/star.png');
    this.load.image('bomb', '/assets/bomb.png');
    this.load.spritesheet('dude', '/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}



function create() {
    this.input.on('pointerdown', onPointerDown, this);
    this.input.on('pointerup', onPointerUp, this);
    this.input.on('pointermove', onPointerMove, this);
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update() {
    if (gameOver) {
        return;
    }

    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}