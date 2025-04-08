function resetAndPlayAllVideos(section) {
    section.querySelectorAll('video').forEach(video => {
        if (!video.querySelector('source').src.includes('gen0_crop')) {
            video.currentTime = 0; // Reset video to start
            video.play(); // Ensure video starts playing
        }
    });
}

function switchToBbox() {
    const section = document.getElementById('ablation-section');
    section.querySelectorAll('video').forEach(video => {
        const source = video.querySelector('source');
        if (source.src.includes('ori_gs') && !source.src.includes('gen0_crop')) {
            source.src = source.src.replace('ori_gs', 'bbox');
            video.load();
        }
    });
    resetAndPlayAllVideos(section);
    document.getElementById('bboxButton').classList.add('is-primary');
    document.getElementById('oriGSButton').classList.remove('is-primary');
}

function switchToOriGS() {
    const section = document.getElementById('ablation-section');
    section.querySelectorAll('video').forEach(video => {
        const source = video.querySelector('source');
        if (source.src.includes('bbox') && !source.src.includes('gen0_crop')) {
            source.src = source.src.replace('bbox', 'ori_gs');
            video.load();
        }
    });
    resetAndPlayAllVideos(section);
    document.getElementById('oriGSButton').classList.add('is-primary');
    document.getElementById('bboxButton').classList.remove('is-primary');
}
