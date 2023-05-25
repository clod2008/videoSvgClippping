// HTML ref
const videoBase = document.getElementById('baseVideo')
const topVideoContainer = document.getElementById('topVideoContainer')
const topVideo = document.getElementById('topVideo')
const transparent = document.getElementById('transparent')

// import video1920 from './assets/videos/1920px by 961px.webm'

// Screen size
const screen = window.innerWidth
console.log(screen)


// Media selector
switch (true) {
    case (screen > 1920):
        videoBase.setAttribute("src", './assets/videos/2560px by 1283px.webm')
        videoBase.setAttribute("poster", './assets/baseVideo.jpg')
        topVideoContainer.classList.add('topVideo')
        topVideo.classList.add('svg-clipped-whell')
        topVideo.setAttribute("src", './assets/videos/Wheel toBack.mp4')
        transparent.innerHTML = `
            <svg width="746" height="746" viewBox="0 0 746 746" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M73.2164 373.564C73.2164 300.567 99.1054 231.594 146.495 177.145L94.5921 125.085C33.4739 193.555 0 280.95 0 373.564C0 466.178 33.4739 553.635 94.5921 622.043L146.495 569.983C99.1681 515.471 73.2164 446.498 73.2164 373.564Z"
                    fill="#475F70" />
            </svg> 
            `
        break;
    case (screen <= 1920 && screen > 1535):
        videoBase.setAttribute("src", './assets/videos/1920px by 961px.webm')
        videoBase.setAttribute("poster", './assets/baseVideo.jpg')
        topVideoContainer.classList.add('topVideo560')
        topVideo.setAttribute("src", './assets/videos/Wheel toBack_560.mp4')
        topVideo.classList.add('svg-clipped-whell560')
        transparent.innerHTML = `
            <svg width="560" height="560" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M54.9614 280.423C54.9614 225.627 74.3955 173.851 109.97 132.977L71.0075 93.8975C25.1279 145.296 0 210.901 0 280.423C0 349.946 25.1279 415.598 71.0075 466.949L109.97 427.869C74.4426 386.949 54.9614 335.173 54.9614 280.423Z"
                    fill="#475F70" />
            </svg>  
            `
        break;
    case (screen <= 1535 && screen > 1366):
        videoBase.setAttribute("src", './assets/videos/1536px by 769px.webm')
        videoBase.setAttribute("poster", './assets/baseVideo.jpg')
        topVideoContainer.classList.add('topVideo448')
        topVideo.setAttribute("src", './assets/videos/Wheel toBack_448.mp4')
        topVideo.classList.add('svg-clipped-whell448')
        transparent.innerHTML = `
            <svg width="448" height="448" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M43.9691 224.339C43.9691 180.501 59.5164 139.081 87.9759 106.382L56.806 75.1182C20.1023 116.237 0 168.721 0 224.339C0 279.957 20.1023 332.478 56.806 373.559L87.9759 342.296C59.5541 309.559 43.9691 268.138 43.9691 224.339Z"
                    fill="#475F70" />
            </svg>
            `
        break;
}

// Video Loader

const playVideos = () => {
    videoBase.play()
    topVideo.play()
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log(document.readyState)
        
    }
};

videoBase.addEventListener('loadstart', function () {
    if (videoBase.networkState === 2 && topVideo.networkState === 2) {
        console.log('Videos are Ready');
        console.log(videoBase.networkState, topVideo.networkState)
        setTimeout(() => {
            playVideos()
        }, 1000);
    }
});


console.log(videoBase)










