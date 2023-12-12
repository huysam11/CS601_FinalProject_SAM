let progress = document.getElementById('bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
    let progressHeight = (document.documentElement.scrollTop / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
};