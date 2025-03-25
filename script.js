// Função para enviar a mensagem via WhatsApp
function enviarWhats(event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome");
    const mensagemInput = document.getElementById("mensagem");
    
    const nome = nomeInput.value;
    const mensagem = mensagemInput.value;
    const telefone = '5527998587499';
    
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    
    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;
    
    window.open(url, '_blank');

    // Limpa os campos após o envio
    nomeInput.value = '';
    mensagemInput.value = '';
}
