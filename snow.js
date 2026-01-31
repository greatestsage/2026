const colors = ['#fff', '#f0f8ff', '#ccf', '#cff'];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = (10 + Math.random() * 20) + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.animationDuration = (5 + Math.random() * 10) + 's';
    snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
    snowflake.textContent = '❄';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 15000);
}

setInterval(createSnowflake, 200);