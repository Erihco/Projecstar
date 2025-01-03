document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');  // Seleciona as estrelas
    const messageBox = document.getElementById('message-box');  // Caixa de mensagem
    const messageText = document.getElementById('message');  // Texto da mensagem
    const photo = document.getElementById('photo');  // Foto da mensagem
    const closeMessage = document.getElementById('close-message');  // Botão de fechar

    // Som ambiente (fica tocando em loop)
    const ambientSound = document.getElementById('ambient-sound');
    ambientSound.volume = 0.2;  // Ajusta o volume do som ambiente para não ficar alto demais

    // Efeito sonoro (som de clique na estrela)
    const starSound = document.getElementById('star-sound');

    // Mensagens a serem exibidas
    const messages = [
        { text: 'Esse, com toda certeza, foi um dos melhores dias da minha vida. Foi o dia em que pude te dar a aliança e, firmemente, selar nosso "para todo sempre". Foi um dia incrível, engraçado, maravilhoso, lindo, colorido e inesquecível: nosso 14/11.', photo: 'Fotos/Eumepreparandonmr.jpeg' },
        { text: 'Essa foi uma das nossas primeiras fotos juntos, e eu fiquei tão feliz com ela que não parava de admirar. Ela permanecerá eternamente comigo, ocupando um grande espaço no meu coração. Esses seus olhos lindos, eles me encantam de uma forma tão forte. Eu AMO SEUS OLHOS, são lindos, perfeitos, magníficos.', photo: 'Fotos/Nossaprimeirafoto.jpeg' },
        { text: 'Essa foto foi bem aleatória, mas você está lindíssima, perfeita como sempre, né? Só queria dizer o quanto sou encantado por você. Você é uma maravilha, linda de todas as formas e jeitos, o amor da minha vida.', photo: 'Fotos/Fotonosssa.jpeg' },
        { text: 'Esse dia foi maravilhoso, extremamente divertido e marcante. Você estava belíssima naquele vestido branco, eu estava completamente encantado. Foi também o dia em que conheci sua mãe, sua maravilhosa mãe, e hoje ela até me xinga. Como eu amo fazer parte dessa família incrível, como sou grato por ter o privilégio de viver ao seu lado.', photo: 'Fotos/Fotonossaratos.jpeg' },
        { text: 'Esse dia foi quando fomos ao cinema pela primeira vez assistir à bomba de Sorria 2. Eu amei esse dia, consegui aproveitar muito ao seu lado, pude conhecer mais sobre você e esse momento ficou fortemente marcado no meu coração. Eu amo esses momentos simples com você.', photo: 'Fotos/f645b418-116d-44ce-8773-2fcce8fe299a.jpeg' },
        { text: 'Nada não, só queria dizer que você é linda, deslumbrante, bela, magnífica, e para mim, uma verdadeira benção. Você é muito mais linda do que qualquer obra de arte. Foi feita pelas mãos de Deus, pincelada com os melhores tons, os mais delicados e singelos, simplesmente o significado de perfeita.', photo: 'Fotos/Mulher mais linda.jpeg' },
        { text: 'Nossa, como eu amo essas fotos! Todos os dias eu olho para elas, vejo seu sorriso e uma felicidade tão grande surge em mim. Me sinto tão motivado, e em vários momentos em que me sentia para baixo, eu olhava essas fotos e, instantaneamente, um grande sorriso surgia. Eu amo essas fotos, amo esse momento, eu te amo.', photo: 'Fotos/Nossaspolaroid.jpeg' },
        { text: 'Esse dia, eu não tenho como colocar em palavras o quão maravilhoso ele foi. Foi calmo, lindo, amoroso e tão magnífico. Você estava muito, muito, muito linda. Esse dia é muito especial para mim.', photo: 'Fotos/Fotonossabonita.jpeg' },
        { text: 'Outra foto nossa desse dia maravilhoso. Obrigado por tudo, meu amor.', photo: 'Fotos/Fotonossaverde.jpeg' },
        { text: 'Esse dia foi literalmente um espetáculo. Eu senti tantas coisas, tantos sentimentos, foi uma explosão de felicidade. E tudo foi 1000 vezes melhor porque você estava comigo. Foi sensacional ver algo assim pela primeira vez.', photo: 'Fotos/Fototeatro.jpeg' },
        { text: 'E para finalizar, eu tive um Natal muito animado. Pude conhecer sua família, que me acolheu com tanto carinho, e eu gosto MUITO de todos eles. Fico muito feliz por ter o privilégio de fazer parte dessa família incrível. Foi o nosso primeiro Natal juntos, e nunca vou esquecer cada risada, cada carinho, cada momento. Eu amo estar ao seu lado. Finalizei 2024 com o melhor presente, que é você. Obrigado por tudo, meu amor.', photo: 'Fotos/Natal.jpeg' },
    ];

    // Adiciona um ouvinte de evento para cada estrela
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Toca o efeito sonoro da estrela
            starSound.play();

            const { text, photo: photoSrc } = messages[index % messages.length];  // Mensagem e foto da estrela clicada
            messageText.textContent = text;  // Atualiza o texto
            photo.src = photoSrc;  // Atualiza a foto
            messageBox.style.display = 'block';  // Exibe a caixa de mensagem
        });
    });

    // Função para fechar a caixa de mensagem
    closeMessage.addEventListener('click', () => {
        messageBox.style.display = 'none';  // Esconde a caixa de mensagem
    });

    // Adicionando a interação para tocar o som ambiente
    const playSoundButton = document.getElementById('play-sound');
    playSoundButton.addEventListener('click', () => {
        ambientSound.play().catch(error => {
            console.log('Erro ao tentar reproduzir o som ambiente:', error);
        });
    });
});
