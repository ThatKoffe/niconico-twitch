document.addEventListener('onLoad', function (obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

let anim_types = [
    "25s", // small messages under 100
    "20s", // medium messages under 150
    "15s" // over 150
];

let hardCapSize = 300; // DEFAULT and recommended! (this is tested and works!)

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.trace(obj.detail.command?.toUpperCase())
    if (obj?.detail?.command?.toUpperCase() !== "PRIVMSG") return;
    console.log(obj);
    // log the code
    console.log(`%cOK ${obj.detail.body} -> ${obj.detail.messageId}`, 'color:blue;');
    // get message ID
    const mid = obj.detail.messageId;
    // get message itself 
    const bod = obj.detail.body;
    // get message length for future use
    const mlen = bod.length;
    // get message element
    const el = document.querySelector(`[data-id="${mid}"]`);

    // cap message so that it doesn't mess with the animation
    if (bod.length > hardCapSize) {
        el.remove();
        // log it for debugging
        return console.log(`%cMAX LENGTH FOR ${mid} EXCEEDED: ${hardCapSize}`, 'color:red;border:2px dotted red;padding:5px;');
    }

    // default speed
    let speed = anim_types[0];

    // speed calculations
    if (mlen < 100) {
        speed = anim_types[0];
    } else if (mlen < 150) {
        speed = anim_types[1];
    } else if (mlen <= 300) {
        speed = anim_types[2];
    }

    // set element animations etc...
    el.style.animation = `LRMove ${speed} linear, RLMove ${speed} linear ${speed} forwards`;
    el.style.WebkitAnimation = `LRMove ${speed} linear, RLMove ${speed} linear ${speed} forwards`;

    el.style.position = 'absolute';
    el.style.right = '0px';
    el.style.width = window.innerWidth
    el.style.color = obj.detail?.tags?.color;

    el.style.bottom = Math.floor(Math.random() * window.innerHeight);
});