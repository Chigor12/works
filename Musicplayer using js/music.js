
    const songs = [
      { title: 'Midnight Drive', artist: 'Nova Lane', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { title: 'Ocean Echo', artist: 'Mira Sky', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
      { title: 'City Lights', artist: 'Ari Sol', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
      { title: 'Summer Breeze', artist: 'Lena Row', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
      
    ];

    const audio = document.getElementById('audio');
    const titleEl = document.getElementById('title');
    const artistEl = document.getElementById('artist');
    const coverEl = document.getElementById('cover');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const progressEl = document.getElementById('progress');
    const volumeEl = document.getElementById('volume');
    const autoplayToggle = document.getElementById('autoplayToggle');
    const playlistEl = document.getElementById('playlist');

    let currentIndex = 0;
    let isPlaying = false;

    function formatTime(time) {
      if (!time || Number.isNaN(time)) return '0:00';
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }

    function renderPlaylist() {
      playlistEl.innerHTML = '';
      songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.dataset.index = index;
        if (index === currentIndex) li.classList.add('active');
        li.innerHTML = `
          <div class="meta">
            <strong>${song.title}</strong>
            <small>${song.artist}</small>
          </div>
          <span>${index === currentIndex && isPlaying ? '▶' : ''}</span>
        `;
        li.addEventListener('click', () => {
          currentIndex = index;
          loadSong(index);
          playSong();
        });
        playlistEl.appendChild(li);
      });
    }

    function updatePlayButton() {
      playBtn.textContent = isPlaying ? '⏸' : '▶';
      renderPlaylist();
    }

    function loadSong(index) {
      currentIndex = index;
      const song = songs[index];
      titleEl.textContent = song.title;
      artistEl.textContent = song.artist;
      coverEl.textContent = song.title.charAt(0);
      audio.src = song.src;
      progressEl.value = 0;
      currentTimeEl.textContent = '0:00';
      durationEl.textContent = '0:00';
      renderPlaylist();
    }

    function playSong() {
      audio.play().then(() => {
        isPlaying = true;
        updatePlayButton();
      }).catch(() => {
        isPlaying = false;
        updatePlayButton();
      });
    }

    function pauseSong() {
      audio.pause();
      isPlaying = false;
      updatePlayButton();
    }

    function nextSong() {
      currentIndex = (currentIndex + 1) % songs.length;
      loadSong(currentIndex);
      playSong();
    }

    function prevSong() {
      currentIndex = (currentIndex - 1 + songs.length) % songs.length;
      loadSong(currentIndex);
      playSong();
    }

    playBtn.addEventListener('click', () => {
      if (isPlaying) pauseSong();
      else playSong();
    });

    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    audio.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audio.duration);
      progressEl.max = audio.duration;
    });

    audio.addEventListener('timeupdate', () => {
      currentTimeEl.textContent = formatTime(audio.currentTime);
      progressEl.value = audio.currentTime;
    });

    audio.addEventListener('ended', () => {
      if (autoplayToggle.checked) nextSong();
      else pauseSong();
    });

    progressEl.addEventListener('input', () => {
      audio.currentTime = Number(progressEl.value);
    });

    volumeEl.addEventListener('input', () => {
      audio.volume = Number(volumeEl.value);
    });

    loadSong(currentIndex);
    updatePlayButton();
  