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

    startX = pointer.x;
    startY = pointer.y;
    isSwiping = true;
    if (isSwiping) {
        console.log("屏幕按下")
    }



}
function onPointerUp() {
    isSwiping = false;
    console.log("屏幕抬起")
}
function onPointerMove(pointer) {
    if (isSwiping) {
        console.log("屏幕滑动")
    }
}



function preload() {
    console.log('preload')
    this.load.image('sky', '/assets/sky.png');
    this.load.image('ground', '/assets/platform.png');
    this.load.image('star', '/assets/star.png');
    this.load.image('bomb', '/assets/bomb.png');
    this.load.spritesheet('dude', '/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}



function create() {
    console.log('create')
    let maxWidth = window.innerHeight
    let maxHeight = window.innerWidth
    // this.add.image(0, 0, 'sky').setOrigin(0, 0)
    platforms = this.physics.add.staticGroup();
   
    player = this.physics.add.sprite(0, 0, 'dude').setOrigin(0, 0);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.add.image(maxWidth / 2, maxHeight / 2, 'star').setOrigin(0, 0);

    // anims 动画
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 4 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    // collider 碰撞
    this.physics.add.collider(player, platforms);
    //  键盘
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    console.log('update')
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

    if (cursors.up.isDown ) {
        player.setVelocityY(-330);
    }

}