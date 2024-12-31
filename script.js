// 배경 음악 자동 재생
document.getElementById('background-music').play();

function updateCountdown() {
    const targetDate = new Date('2025-01-01T00:00:00');
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        document.querySelector('.countdown-container').innerHTML = "<h1>2025년, 을사년이 도래했습니다!</h1>";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
