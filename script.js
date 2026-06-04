window.onload = () => {
    const bars = document.querySelectorAll('.progress-line span');
    const container = document.querySelector('.skills-card');

    // Adiciona a classe que revela as tags após um pequeno delay
    setTimeout(() => {
        container.classList.add('show-progress');
        
        bars.forEach(bar => {
            // Pega a largura definida no atributo de estilo e aplica para disparar a transition
            const targetWidth = bar.style.width;
            bar.style.width = targetWidth;
        });
    }, 200);
};
