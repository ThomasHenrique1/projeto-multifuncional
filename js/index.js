$(document).ready(function() {
    // Variáveis para o cronômetro
    let h = 0, m = 0, s = 0, mm = 0;
    let cronometro;
    let isRunning = false;

    // Função para atualizar o cronômetro
    function updateCronometro() {
        mm++;
        if (mm == 100) {
            s++;
            mm = 0;
        }
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }
        $('#tempo').html(`<p>${String(h).padStart(2, '0')}h:${String(m).padStart(2, '0')}m:${String(s).padStart(2, '0')}s:${String(mm).padStart(2, '0')}mm</p>`);
    }

    // Iniciar/Pausar cronômetro
    $('#btn5').click(function() {
        if (isRunning) {
            clearInterval(cronometro);
            isRunning = false;
            $('#btn5').text('Iniciar Cronômetro');
        } else {
            cronometro = setInterval(updateCronometro, 10);
            isRunning = true;
            $('#btn5').text('Pausar Cronômetro');
        }
    });

    // Funções do SlideShow
    let max = 5;
    let cont = 1;

    $('#ant').click(function() {
        cont = (cont === 1) ? max : cont - 1;
        $('#imagem').attr('src', `Image/img${cont}.jpg`);
    });

    $('#prox').click(function() {
        cont = (cont === max) ? 1 : cont + 1;
        $('#imagem').attr('src', `Image/img${cont}.jpg`);
    });

    // Função da Tabuada
    $('#btnTab').click(function() {
        let valor = Number($('#txttab').val());
        $('#tabuada').html('');
        if (!isNaN(valor) && valor > 0) {
            for (let i = 1; i <= 10; i++) {
                $('#tabuada').append(`${valor} × ${i} = ${valor * i}<br>`);
            }
        } else {
            $('#tabuada').html('Por favor, insira um número válido.');
        }
    });

    // Inicialização dos botões
    $('#box1, #box2, #box3').hide(); // Esconder todas as seções inicialmente

    $('#btn1').click(function() {
        $('#box1').show();
        $('#box2, #box3').hide();
    });

    $('#btn2').click(function() {
        $('#box2').show();
        $('#box1, #box3').hide();
    });

    $('#btn3').click(function() {
        $('#box3').show();
        $('#box1, #box2').hide();
    });
});
