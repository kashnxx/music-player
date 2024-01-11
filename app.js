console.log("MUSIC APP");
var play_btn = document.querySelector(".play");
var next = document.querySelector(".next");
var loop = document.querySelector(".loop");
var time = document.querySelector(".range");
var album = document.querySelectorAll(".album");
var albumImages = document.querySelectorAll(".album img");
var previous = document.querySelector(".previous");
loop.addEventListener("click", function () {
    if (audio.loop === false) {
        audio.loop = true;
        console.log("Audio looping enabled");
    }
    else {
        audio.loop = false;
        console.log("Audio looping disabled");
    }
});


// time.addEventListener("mousedown", function () {
//     time.innerHTML = audio.currentTime;

// });


let a = [
    {
        name: "Starboy",
        image: "images/download (1).jpeg",
        song: "songs/Starboy - The Weeknd-(DJMaza).mp3",
        singer: "The Weekend",
    }
    , {
        name: "Love Yourself",
        image: "images/download (2).jpeg",
        song: "songs/Justin_Bieber_-_Love_Yourself_(Jesusful.com).mp3",
        singer: "Justin Beiber",
    },
    {
        name: "Blank Space",
        image: "images/download (3).jpeg",
        song: "songs/Blank Space.mp3",
        singer: "Taylor SWift",
    }
    , {
        name: "Hope",
        image: "images/download (6).jpeg",
        song: "songs/XXXTENTACION-Hope.mp3",
        singer: "Chainsmokers",
    }
    , {
        name: "Creeping",
        image: "images/images (1).jpeg",
        song: "songs/Creeping.mp3",
        singer: "The Weekend",
    }
    , {
        name: "Anti Hero",
        image: "images/images (2).jpeg",
        song: "songs/Taylor_Swift_-_Anti-Hero_Lyrics.mp3",
        singer: "Taylor Swift",
    }
    , {
        name: "Kesariya",
        image: "images/images (3).jpeg",
        song: "songs/Kesariya - Brahmastra 128 Kbps.mp3",
        singer: "Justin Beiber",
    }
    , {
        name: "Perfect",
        image: "images/images (4).jpeg",
        song: "songs/Ed_Sheeran_-_Perfect.mp3",
        singer: "Ed Sheeran",
    }


];
let i = 0;
let flag = false;
var n = document.querySelectorAll(".album").length;
for (let j = 0; j < n; j++) {
    document.querySelectorAll(".album")[j].addEventListener("click", function () {

        window.location.href = "index2.html";

    })
}

// albumImages.forEach(function (element, j) {
//     element.addEventListener("click", function () {
//         if (flag) {
//             audio.pause();
//         }
//         audio = new Audio(a[j].song);

//         audio.play();
//         play_btn.innerHTML = "pause";
//         flag = true;
//         i=j;

//     });
// });
document.querySelectorAll(".song").forEach(function (element, j) {
    element.addEventListener("click", function () {

        if (flag) {
            audio.pause();
        }

        audio = new Audio(a[j].song);
        document.querySelector(".leftphoto").src = a[j].image;

        audio.play();
        play_btn.innerHTML = "pause";
        flag = true;
        i = j;

    });
});

play_btn.addEventListener("click", function () {
    if (flag === false) {
        audio.play();
        flag = true;
        play_btn.innerHTML = "pause";
    }
    else {
        audio.pause();
        flag = false;
        play_btn.innerHTML = "play";

    }
});

next.addEventListener("click", function () {
    audio.pause()
    flag = false;
    i = i + 1;
    if (i >= a.length) {

        i = 0;
    }
    console.log(i)
    document.querySelector(".leftphoto").src = a[i].image;
    audio = new Audio(a[i].song)
    if (flag === false) {
        audio.play()

        flag = true;
        console.log(flag)
    }

})


previous.addEventListener("click", function () {
    audio.pause();
    flag = false;
    i = i - 1;
    if (i < 0) {
        i = a.length - 1;
    }
    console.log(i)
    document.querySelector(".leftphoto").src = a[i].image;
    audio = new Audio(a[i].song)
    audio.play()
    flag = true;
})