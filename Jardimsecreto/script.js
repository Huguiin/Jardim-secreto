document.addEventListener('DOMContentLoaded', () => {

    const itensJardim = document.querySelectorAll('.item-jardim');
    const caixaMensagem = document.getElementById('caixa-mensagem');
    const textoMensagem = document.getElementById('texto-mensagem');
    const btnFechar = document.getElementById('btn-fechar');
    let itemAtivo = null;

// ===  TEXTOS  ===
    const textosDoJardim = {
        flor: "No centro de tudo, nosso amor floresce. Cada pétala vibrante representa a beleza única dos nossos momentos, a doçura dos nossos gestos e o carinho que nos une.",
        fonte: "Nesta fonte mágica, deposito meus desejos por nós: que nossa jornada seja sempre repleta de alegria, compreensão e um amor que se renova a cada instante. Que a nossa água nunca pare de correr.",
        cristal: "Nossas memórias mais preciosas cintilam neste cristal. Cada brilho é um instante inesquecível, um riso compartilhado, um olhar que diz tudo, tesouros que brilham no fundo do meu coração."
    };
    // ================================================

    // Adiciona o evento de clique para cada item do jardim
    itensJardim.forEach(item => {
        item.addEventListener('click', () => {
            const tipoItem = item.dataset.item;
            
            // Se já houver um item ativo, remove sua classe de animação
            if(itemAtivo) {
                itemAtivo.classList.remove('ativa');
            }
            
            // Ativa o item clicado
            item.classList.add('ativa');
            itemAtivo = item;

            // Mostra a mensagem correspondente
            textoMensagem.textContent = textosDoJardim[tipoItem];
            caixaMensagem.classList.remove('oculto');
        });
    });

    // Adiciona o evento para fechar a caixa de mensagem
    btnFechar.addEventListener('click', () => {
        caixaMensagem.classList.add('oculto');
        
        // Remove a classe de animação do item que estava ativo
        if(itemAtivo) {
            itemAtivo.classList.remove('ativa');
            itemAtivo = null;
        }
    });
});