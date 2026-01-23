document.addEventListener('DOMContentLoaded', () => {
    
    // MENU MOBILE
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fecha o menu ao clicar em um link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // CARROSSEL DE PROJETOS
    const carousel = document.getElementById('carousel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (carousel && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 350, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -350, behavior: 'smooth' });
        });
    }

    // EFEITO DE HEADER AO ROLAR
    const header = document.querySelector('header');
    const logo = header?.querySelector('img');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-xl');
            if(logo) logo.classList.add('scale-90');
        } else {
            header.classList.remove('shadow-xl');
            if(logo) logo.classList.remove('scale-90');
        }
    });
});
function atualizarSimulador(valor, elemento = null) {
    valor = parseFloat(valor);
    if (!valor || valor <= 0) return;

    // 1. Lógica de cálculo simplificada para SP
    // Média: R$ 50,00 de conta por placa (aprox)
    let numPaineis = Math.ceil(valor / 50);
    if (numPaineis < 2) numPaineis = 2; // Mínimo de 2 placas

    // Economia de 90%
    const economia = valor * 0.90;

    // 2. Atualizar os textos na tela com animação simples
    document.getElementById('res-paineis').innerText = numPaineis;
    document.getElementById('res-economia').innerText = economia.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

    // 3. Gerenciar classes dos botões (cor amarela no selecionado)
    if (elemento) {
        document.querySelectorAll('.btn-simular').forEach(btn => btn.classList.remove('active'));
        elemento.classList.add('active');
        document.getElementById('campo-outro').classList.add('hidden');
    }

    // 4. Atualizar link do WhatsApp com o valor simulado
    const linkZap = document.getElementById('link-whatsapp-simulador');
    const mensagem = encodeURIComponent(`Olá! Simulei uma conta de R$ ${valor} no site e vi que posso economizar R$ ${economia.toFixed(0)} por mês. Gostaria de um orçamento detalhado.`);
    linkZap.href = `https://wa.me/5511912602751?text=${mensagem}`;
}

function focarOutro() {
    document.querySelectorAll('.btn-simular').forEach(btn => btn.classList.remove('active'));
    document.getElementById('campo-outro').classList.remove('hidden');
    document.getElementById('valor-customizado').focus();
}

// Inicia o simulador com R$ 200 ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Se quiser que comece com um valor padrão:
    // atualizarSimulador(200);
});
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Remove active de todos
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Adiciona ao slide atual
    currentSlideIndex = index;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Função para o clique nos dots
function currentSlide(index) {
    showSlide(index);
}

// Troca automática a cada 7 segundos
setInterval(() => {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}, 7000);
