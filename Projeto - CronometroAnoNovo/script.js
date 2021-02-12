const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const meses = ["Janeiro", "Fevereiro", "Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

const daysEl = document.getElementById('dias');
const hoursEl = document.getElementById('horas');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('segs');
const diaHoje = document.getElementById('dia-hoje');
const fim = new Date("January 1, 2022")

function contagem() {

    const data = new Date()
    var total = Math.floor((fim - data) / 1000)
    var segundos = Math.floor(total % 60)
    var minutos = Math.floor(total / 60) % 60
    var horas = Math.floor(total / 3600) % 24
    var dias = Math.floor(total / (3600 * 24) % 365)

    daysEl.innerHTML = dias;
    hoursEl.innerHTML = horas;
    minsEl.innerHTML = minutos;
    secsEl.innerHTML = segundos;

    var dia = data.getDate();
    var ano = data.getFullYear();
    var diaSemana = diasSemana[data.getDay()];
    var mes = meses[data.getMonth()];

    diaHoje.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

}
contagem()
setInterval(contagem, 1000)