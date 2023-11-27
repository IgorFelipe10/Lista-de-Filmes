import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filmes';
  nomeCategoria = '';
  minhaFuncao() :void {
    alert('clicou')
  }
  condicao1 = false;
  condicao2 = true;
  nomeDigitado = '';
   categorias: string[] = ['drama','guerra', 'romance', 'mafia','terror'];

    categoriaDrama = [
    {
      name: 'La Haine',
      description: 'O filme aborda o conflito entre a juventude francesa e a polícia em Paris e outros problemas enfrentados pela periferia da cidade francesa. Toda a história se passa em um período de 24 horas em que os protagonistas, três jovens franceses, enfrentam a polícia, encontram uma arma perdida e tem que decidir o que fazer com ela, encontram gangues e skinheads',
      anoLancamento: 1995,
      diretor: 'Mathieu Kassovitz',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/8/8b/LA_HAINE.jpeg',
    },
    {
      name: 'Whiplash',
      description: 'Andrew Neiman é um estudante baterista de jazz do melhor conservatório dos Estados Unidos. Pretende ser um dos grandes músicos, tendo como ídolo Buddy Rich. Terence Fletcher é professor do conservatório. É extremamente exigente com seus alunos e está a procura de músicos para a banda da escola. Recruta Andrew, que ainda é baterista reserva em sua turma. Caravan e Whiplash são as principais composições ensaiadas pela banda. Porém os métodos duros de Fletcher podem ser demais para Andrew.',
      anoLancamento: 2014,
      diretor: 'Damien Chazelle',
      imagem: 'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      name: 'The Silence of the Lambs',
      description: 'A agente do FBI, Clarice Starling (Jodie Foster) é ordenada a encontrar um assassino que arranca a pele de suas vítimas. Para entender como ele pensa, ela procura o periogoso psicopata, Hannibal Lecter (Anthony Hopkins), encarcerado sob a acusação de canibalismo.',
      anoLancamento: 1991,
      diretor: 'Jonathan Demme',
      imagem: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
    {
      name: 'Chinatown',
      description: 'Los Angeles, 1937. O detetive particular J.J. Gittes (Jack Nicholson) recebe a visita de uma mulher que acredita que seu marido, engenheiro-chefe do Departamento de Águas e Energia, tem uma amante. Gittes logo descobre que a mulher era uma farsante e encontra a verdadeira Evelyn Mulwray (Faye Dunaway), filha de Noah Cross (John Huston), um dos homens mais poderosos da cidade. O engenheiro aparece morto e Gittes, envolvido com Evelyn, se vê no meio de um perigoso jogo de poder, com muitos segredos e mistérios.',
      anoLancamento: 1974,
      diretor: 'Roman Polanski',
      imagem: 'https://upload.wikimedia.org/wikipedia/en/3/38/Chinatownposter1.jpg',
    },
    {
      name: 'The Prestige',
      description: 'Los Angeles, 1937. O detetive particular J.J. Gittes (Jack Nicholson) recebe a visita de uma mulher que acredita que seu marido, engenheiro-chefe do Departamento de Águas e Energia, tem uma amante. Gittes logo descobre que a mulher era uma farsante e encontra a verdadeira Evelyn Mulwray (Faye Dunaway), filha de Noah Cross (John Huston), um dos homens mais poderosos da cidade. O engenheiro aparece morto e Gittes, envolvido com Evelyn, se vê no meio de um perigoso jogo de poder, com muitos segredos e mistérios.',
      anoLancamento: 2006,
      diretor: 'Christopher Nolan',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg',
    },
    {
      name: 'Cinema Paradiso',
      description: 'Nos anos que antecederam a chegada da televisão em uma pequena cidade da Sicília, o garoto Toto (Salvatore Cascio) ficou hipnotizado pelo cinema local e iniciou uma amizade com Alfredo (Philippe Noiret), projecionista que se irritava com certa facilidade, mas tinha um enorme coração. Todos estes acontecimentos chegam em forma de lembrança quando Toto (Jacques Perrin), agora um um cineasta de sucesso, recebe a notícia de que Alfredo faleceu.',
      anoLancamento: 1988,
      diretor: 'Giuseppe Tornatore',
      imagem: 'https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_.jpg',
    },
    {
      name: 'Persona',
      description: 'Após um desempenho na peça "Electra", uma famosa atriz, Elisabeth Vogler (LIv Ullmann), pára de falar. Sua psiquiatra, Lakaren (Margaretha Krook), a deixa sob os cuidados de Alma (Bibi Andersson), uma dedicada enfermeira.',
      anoLancamento: 1966,
      diretor: 'Ingmar Bergman',
      imagem: 'https://s3.amazonaws.com/criterion-production/films/d5c135c95f58e74e2ee28cb92659bafd/DoD5SlisIFjKyi0zucupnwj2B3ADGy_large.jpg',
    },
    {
      name: 'Mulholland Drive',
      description: 'Um acidente automobilístico na estrada Mulholland Drive, em Los Angeles, dá início a uma complexa trama que envolve diversos personagens. Rita (Laura Harring) escapa da colisão, mas perde a memória e sai do local rastejando para se esconder em um edifício residencial que é administrado por Coco (Ann Miller). É nesse mesmo prédio que vai morar Betty (Naomi Watts), uma aspirante a atriz recém-chegada à cidade que conhece Rita e tenta ajudar a nova amiga a descobrir sua identidade.',
      anoLancamento: 2001,
      diretor: 'David Lynch',
      imagem: 'https://m.media-amazon.com/images/M/MV5BYTRiMzg4NDItNTc3Zi00NjBjLTgwOWYtOGZjMTFmNGU4ODY4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: 'Taxi Driver',
      description: 'Em Taxi Driver - Motorista de Táxi, Travis Bickle, 26 anos (Robert De Niro) e veterano da Guerra do Vietnã, é um homem solitário no meio da grande Nova York. Logo, ele começa a trabalhar como motorista de táxi no turno da noite, crescendo o sentimento de revolta pela miséria, o vício, a violência e a prostituição que estão sempre à sua volta. Travis começa a cogitar, então, de tomar algumas medidas drásticas para mudar esse cenário.',
      anoLancamento: 1976,
      diretor: 'Martin Scorsese',
      imagem: 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      name: 'American Psycho',
      description: 'Patrick Bateman (Christian Bale) jovem, branco, bonito e sem nada que o diferencie de seus colegas de Wall Street. Protegido pela conformidade, privilégio e riqueza, Bateman também um serial killer, que vaga livremente e sem receios em busca de uma nova vítima. Seus impulsos assassinos são abastecidos por um zeloso materialismo e uma inveja torturante quando ele encontra alguém que possui mais do que ele.',
      anoLancamento: 2000,
      diretor: 'Mary Harron',
      imagem: 'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    },
  ];
  
   categoriaGuerra = [
    {
      name: 'Apocalypse Now',
      description: 'O Capitão Willard (Martin Sheen) recebe a missão de encontrar e matar o comandante das Forças Especiais, Coronel Kurtz (Marlon Brando), que aparentemente enlouqueceu e se refugiou nas selvas do Camboja, onde comanda um exército de fanáticos.',
      anoLancamento: 1979,
      diretor: 'Francis Ford Coppola',
      imagem: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Apocalypse_Now_poster.jpg',
    },
    {
      name: 'Paths of Glory',
      description: 'Em 1916, durante a Primeira Guerra Mundial, Mireau (George Meeker), um general francês, ordena um ataque suicida e como nem todos os seus soldados puderam se lançar ao ataque ele exige que sua artilharia ataque as próprias trincheiras.',
      anoLancamento: 1957,
      diretor: 'Stanley Kubrick',
      imagem: 'https://s3.amazonaws.com/criterion-production/films/4da269635a13e714b4021c37b5757fc9/N9wFOGE7IhMyxv0TF5tvzn9bXA6hJ1_large.jpg',
    },
    {
      name: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      description: 'Um general americano acredita que os soviéticos estão sabotando os reservatórios de água dos Estados Unidos e resolve fazer um ataque anticomunista, bombardeando a União Soviética para se livrar dos "vermelhos".',
      anoLancamento: 1964,
      diretor: 'Stanley Kubrick',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/7/73/Dr._Strangelove.jpg',
    },
    {
      name: 'Saving Private Ryan',
      description: 'Ao desembarcar na Normandia, no dia 6 de junho de 1944, capitão Miller (Tom Hanks) recebe a missão de comandar um grupo do segundo batalhão para o resgate do soldado James Ryan, caçula de quatro irmãos, dentre os quais três morreram em combate.',
      anoLancamento: 1998,
      diretor: 'Steven Spielberg',
      imagem: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: 'Come and See',
      description: 'Bielorrússia, 1943. O jovem camponês Florya (Aleksei Kravchenko) é cooptado por um despreparado grupo de guerrilheiros antinazistas. Em confronto com os alemães, o garoto é deixado para trás e decide retornar ao seu vilarejo',
      anoLancamento: 1985,
      diretor: 'Elem Klimov',
      imagem: 'https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      name: 'Ran',
      description: 'Japão, século XVI. Hidetora (Tatsuya Nakadai), o poderoso chefe do clã dos Ichimonjis, decide dividir seus bens entre os três filhos: Taro Takatora (Akira Terao), Jiro Masatora (Jinpachi Nezu) e Saburu Naotora (Daisuke Ryu).',
      anoLancamento: 1985,
      diretor: 'Akira Kurosawa',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMmU1NGYwZWYtOWExNi00ZTEyLTgwMmUtM2ZlMDVjNWM4YjVlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
    },
    {
      name: 'Schindlers List',
      description: 'A inusitada história de Oskar Schindler (Liam Neeson), um sujeito oportunista, sedutor, "armador", simpático, comerciante no mercado negro, mas, acima de tudo, um homem que se relacionava muito bem com o regime nazista, tanto que era membro do próprio Partido Nazista (o que não o impediu de ser preso algumas vezes, mas sempre o libertavam rapidamente, em razão dos seus contatos). No entanto, apesar dos seus defeitos, ele amava o ser humano e assim fez o impossível, a ponto de perder a sua fortuna mas conseguir salvar mais de mil judeus dos campos de concentração.',
      anoLancamento: 1993,
      diretor: 'Steven Spielberg',
      imagem: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
    {
      name: 'All Quiet on the Western Front',
      description: 'Um grupo de jovens alemães é convencido por um professor a se alistar no exército. Eles ficam muito entusiasmados com a ideia de lutar por seu país durante a Primeira Guerra Mundial, pois parece uma chance de viver novas experiências e provar para a sociedade o quanto são corajosos e patriotas.',
      anoLancamento: 1930,
      diretor: 'Lewis Milestone',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMDdlMzRjM2MtNjcxNy00MjgyLTkyZmYtY2ExODM0OTBkMzI0XkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_.jpg',
    },
    {
      name: '1917',
      description: 'Em 1917, os cabos Schofield (George MacKay) e Blake (Dean-Charles Chapman) são jovens soldados britânicos durante a Primeira Guerra Mundial. Quando eles são encarregados de uma missão aparentemente impossível, os dois precisam atravessar território inimigo, lutando contra o tempo, para entregar uma mensagem que pode salvar cerca de 1600 colegas de batalhão.',
      anoLancamento: 2019,
      diretor: 'Sam Mendes',
      imagem: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
    },
    {
      name: 'Dunkirk',
      description: 'Em Dunkirk, na Operação Dínamo, mais conhecida como a Evacuação de Dunquerque, soldados aliados da Bélgica, do Império Britânico e da França são rodeados pelo exército alemão e devem ser resgatados durante uma feroz batalha no início da Segunda Guerra Mundial.',
      anoLancamento: 2017,
      diretor: 'Christopher Nolan',
      imagem: 'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
    },
  ];
  
  
  categoriaRomance = [
    {
      name: 'La La Land',
      description: 'Ao chegar em Los Angeles o pianista de jazz Sebastian (Ryan Gosling) conhece a atriz iniciante Mia (Emma Stone) e os dois se apaixonam perdidamente. Em busca de oportunidades para suas carreiras na competitiva cidade, os jovens tentam fazer o relacionamento amoroso dar certo enquanto perseguem fama e sucesso.',
      anoLancamento: 2016,
      diretor: 'Damien Chazelle',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg',
    },
    {
      name: 'About Time',
      description: 'Ao completar 21 anos, Tim (Domhnall Gleeson) é surpreendido com a notícia dada por seu pai (Bill Nighy) de que pertence a uma linhagem de viajantes no tempo. Ou seja, todos os homens da família conseguem viajar para o passado, bastando apenas ir para um local escuro e pensar na época e no local para onde deseja ir. Cético a princípio, Tim logo se empolga com o dom ao ver que seu pai não está mentindo. Sua primeira decisão é usar esta capacidade para conseguir uma namorada, mas logo ele percebe que viajar no tempo e alterar o que já aconteceu pode provocar consequências inesperadas.',
      anoLancamento: 2013,
      diretor: 'Richard Curtis',
      imagem: 'https://m.media-amazon.com/images/I/815Q1ufP6yL._AC_UF894,1000_QL80_.jpg',
    },
    {
      name: 'Before Sunrise',
      description: 'Jesse (Ethan Hawke), um jovem americano, e Celine (Julie Delpy), uma estudante francesa, se encontram casualmente no trem para Viena e logo começam a conversar. Ele a convence a desembarcar em Viena e gradativamente vão se envolvendo em uma paixão crescente.',
      anoLancamento: 1995,
      diretor: 'Richard Linklater',
      imagem: 'https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: 'Before Sunset',
      description: 'Jesse (Ethal Hawke) e Celine (Julie Delpy) se conheceram por acaso em uma viagem de trem que ia de Budapeste a Viena, passando o dia juntos e se separando no início do dia seguinte. Nove anos depois eles se reencontram, novamente por acaso. Jesse agora é um conhecido escritor, enquanto que Celine trabalha para uma organização de proteção ao meio-ambiente.',
      anoLancamento: 2004,
      diretor: 'Richard Linklater',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_.jpg',
    },
    {
      name: 'Eternal Sunshine of the Spotless Mind',
      description: 'Joel (Jim Carrey) e Clementine (Kate Winslet) formavam um casal que durante anos tentaram fazer com que o relacionamento desse certo. Desiludida com o fracasso, Clementine decide esquecer Joel para sempre e, para tanto, aceita se submeter a um tratamento experimental, que retira de sua memória os momentos vividos com ele.',
      anoLancamento: 2004,
      diretor: 'Michel Gondry',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: 'Her',
      description: 'Em Ela, Theodore (Joaquin Phoenix) é um escritor solitário, que acaba de comprar um novo sistema operacional para seu computador. Para a sua surpresa, ele acaba se apaixonando pela voz deste programa informático, dando início a uma relação amorosa entre ambos.',
      anoLancamento: 2013,
      diretor: 'Spike Jonze',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Her.jpg',
    },
    {
      name: '500 Days of Summer',
      description: 'Tom Hansen (Joseph Gordon-Levitt) está em uma reunião com seu chefe, Vance (Clark Gregg), quando ele apresenta sua nova assistente, Summer Finn (Zooey Deschanel). Tom logo fica impressionado com sua beleza, o que faz com que tente, nas duas semanas seguintes, realizar algum tipo de contato',
      anoLancamento: 2009,
      diretor: 'Marc Webb',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: '10 Things I Hate About You',
      description: 'A situação está tensa na casa dos Stratford. Bianca (Larisa Oleynik) não vê a hora de arranjar um namorado, mas seu pai (Larry Miller) não permite que ela saia com garotos. Após muita insistência, o pai toma uma resolução: Bianca pode namorar, desde que sua irmã, Katharina (Julia Stiles), namore também.',
      anoLancamento: 1999,
      diretor: 'Gil Junger',
      imagem: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22802_v_v10_ba.jpg',
    },
    {
      name: 'Portrait of a Young Lady in Fire',
      description: 'Na França do século XVIII, Marianne (Noémie Merlant) é uma jovem pintora que recebe a tarefa de pintar um retrato de Héloïse (Adèle Haenel) para seu casamento sem que ela saiba. Passando seus dias observando Héloïse e as noites pintando, Marianne se vê cada vez mais próxima de sua modelo conforme os últimos dias de liberdade dela antes do iminente casamento se veem prestes a acabar.',
      anoLancamento: 2019,
      diretor: 'Céline Sciamma',
      imagem: 'https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    },
    {
      name: 'Fallen Angels',
      description: 'Na noite de Hong Kong, um matador de aluguel determinado a mudar de vida, decide, antes de completar sua última missão, encarar de frente os sentimentos que tem por sua parceira, uma mulher que o ajuda em seus contratos. Vagando pela noite da cidade, ele cruza no caminho com um homem mudo, determinado a chamar a atenção do mundo e a lidar com o amor da sua própria maneira.',
      anoLancamento: 1995,
      diretor: 'Wong Kar-wai',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMTc3NzI0MzQ3M15BMl5BanBnXkFtZTcwMzA0MDMzNA@@._V1_.jpg',
    },
  ];
  

   categoriaMafia = [
    {
      name: 'The Godfather',
      description: 'Inspirado no romance homônimo de Mario Puzo, o enredo é passado na década de 40, em Nova York, e se foca na figura de Don Corleone, um mafioso extremamente influente. Quando a saúde do patriarca começa a se deteriorar, a família precisa se reorganizar para manter o poder e derrubar seus inimigos.',
      anoLancamento: 1972,
      diretor: 'Francis Ford Coppola',
      imagem: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      name: 'Cassino',
      description: 'Através de três personagens básicos: um diretor de cassino (Robert De Niro) com um passado comprometedor; uma prostituta de alta classe (Sharon Stone), que dominava a todos, menos o seu cafetão; e um gângster (Joe Pesci), que tomava conta do diretor do cassino e passa gradativamente, a seguir os passos dela, criado um painel de Las Vegas dos anos 70, quando a Máfia controlava o jogo, até o gradual surgimento das grandes corporações, que ficaram no lugar das quadrilhas e transformaram a cidade em uma Disneylandia.',
      anoLancamento: 1995,
      diretor: 'Martin Scorsese',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/a0/Casino_1995.jpg',
    },
    {
      name: 'Goodfellas',
      description: 'Henry Hill (Ray Liotta) conta a sua história de garoto do Brooklyn, Nova York, que sempre sonhou ser gângster, começando sua "carreira" aos 11 anos e se tornando protegido de James "Jimmy" Conway (Robert De Niro), um mafioso em ascensão. Tratado como filho por mais de vinte anos, ele se envolve em golpes cada vez maiores.',
      anoLancamento: 1990,
      diretor: 'Martin Scorsese',
      imagem: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      name: 'Scarface',
      description: 'Um criminoso cubano exilado (Al Pacino) vai para Miami e em pouco tempo está trabalhando para um chefão das drogas. Sua ascensão na quadrilha é meteórica, mas quando ele começa a sentir interesse na amante do chefe (Michelle Pfeiffer) este manda matá-lo. ',
      anoLancamento: 1983,
      diretor: 'Brian De Palma',
      imagem: 'https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
    {
      name: 'The Irishman',
      description: 'Conhecido como "O Irlandês", Frank Sheeran (Robert De Niro) é um veterano de guerra cheio de condecorações que concilia a vida de caminhoneiro com a de assassino de aluguel número um da máfia. Promovido a líder sindical, ele torna-se o principal suspeito quando o mais famoso ex-presidente da associação desaparece misteriosamente.',
      anoLancamento: 2019,
      diretor: 'Martin Scorsese',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
    },
    {
      name: 'Heat',
      description: 'Em Los Angeles é cometido um assalto no qual são roubados US$ 1,6 milhão de títulos ao portador e três policiais são mortos no assalto. Assim, um detetive da Divisão de Roubo e Homicídio (Al Pacino) assume o caso. Apesar de contar com poucas pistas, de estar lidando com ladrões profissionais além de ter problemas em sua vida pessoal, ele tenta impedir que esta quadrilha continue operando.',
      anoLancamento: 1995,
      diretor: 'Michael Mann',
      imagem: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Heatposter.jpg',
    },
    {
      name: 'The Godfather 2',
      description: 'Início do século XX. Após a máfia local matar sua família, o jovem Vito (Robert De Niro) foge da sua cidade na Sicília e vai para a América. Já adulto em Little Italy, Vito luta para ganhar a vida (legal ou ilegalmente) e manter sua esposa e filhos.',
      anoLancamento: 1974,
      diretor: 'Francis Ford Coppola',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      name: 'Once Upon a Time in America',
      description: 'Na década de 20, David Aaronson (Robert De Niro) e Maximillian Bercouicz (James Woods), dois amigos de descendência judaica, crescem juntos cometendo pequenos crimes nas ruas do Lower East Side, Nova York. Gradualmente estes crimes assumem proporções maiores e a Máfia judaica passa a ter tanta força que os amigos do passado se tornam rivais.',
      anoLancamento: 1984,
      diretor: 'Sergio Leone',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/2/2a/Era_uma_vez_na_Am%C3%A9rica.jpg',
    },
    {
      name: 'Reservoir Dogs',
      description: 'Joe Cabot (Lawrence Tierney), um experiente criminoso, reuniu seis bandidos para um grande roubo de diamantes, mas estes seis homens não sabem nada um sobre os outros e cada um utiliza uma cor como codinome.',
      anoLancamento: 1992,
      diretor: 'Quentin Tarantino',
      imagem: 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: 'Donnie Brasco',
      description: 'Nos anos 70, policial (Johnny Depp) usa o nome de Donnie Brasco para infiltrar-se entre mafiosos. Um criminoso mais velho (Al Pacino) o toma sob sua tutela, ensinando-lhe os caminhos do crime. Mas ele coloca sua vida pessoal em xeque, pondo em risco sua missão.',
      anoLancamento: 1997,
      diretor: 'Mike Newell',
      imagem: 'https://m.media-amazon.com/images/M/MV5BYzMzMDZkYWEtODIzNS00YjI3LTkxNTktOWEyZGM3ZWI2MWM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    },
  ];
  

  categoriaTerror = [
    {
      name: 'The Shining',
      description: 'Durante o inverno, um homem (Jack Nicholson) é contratado para ficar como vigia em um hotel no Colorado e vai para lá com a mulher (Shelley Duvall) e seu filho (Danny Lloyd). Porém, o contínuo isolamento começa a lhe causar problemas mentais sérios e ele vai se tornado cada vez mais agressivo e perigoso, ao mesmo tempo em que seu filho passa a ter visões de acontecimentos ocorridos no passado, que também foram causados pelo isolamento excessivo.',
      anoLancamento: 1980,
      diretor: 'Stanley Kubrick',
      imagem: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: 'Alien',
      description: 'Uma nave espacial, ao retornar para Terra, recebe estranhos sinais vindos de um asteróide. Ao investigarem o local, um dos tripulantes é atacado por um estranho ser. O que parecia ser um ataque isolado se transforma em um terror constante, pois o tripulante atacado levou para dentro da nave o embrião de um alienígena, que não para de crescer e tem como meta matar toda a tripulação.',
      anoLancamento: 1979,
      diretor: 'Ridley Scott',
      imagem: 'https://i5.walmartimages.com/seo/Alien-Movie-Poster-Sigourney-Weaver-Aliens-New-24x36_f8c3d80b-1f8d-49b9-9689-85a2222c0b88.91261af513e15e13ffa61a82edcd941d.jpeg',
    },
    {
      name: 'Psycho',
      description: 'Em Psicose, Marion Crane (Janet Leigh) é uma secretária que rouba 40 mil dólares da imobiliária onde trabalha para se casar e começar uma nova vida. Durante a fuga a carro, ela enfrenta uma forte tempestade, erra o caminho e chega em um velho hotel. O estabelecimento é administrado por um sujeito atencioso chamado Norman Bates (Anthony Perkins), que nutre um forte respeito e temor por sua mãe. Marion decide passar a noite no local, sem saber o perigo que a cerca.',
      anoLancamento: 1960,
      diretor: 'Alfred Hitchcock',
      imagem: 'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      name: 'The Exorcist',
      description: 'Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão.',
      anoLancamento: 1973,
      diretor: 'William Friedkin',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/a6/The_Exorcist_1973.jpg',
    },
    {
      name: 'Rosemary Baby',
      description: 'Um jovem casal, Rosemarey (Mia Farrow) e Guy Woodhouse (John Cassavetes), se muda para um prédio habitado por estranhas pessoas, onde coisas bizarras acontecem. Quando ela engravida, passa a ter estranhas alucinações e vê o seu marido se envolver com os vizinhos, uma seita de bruxas que quer que ela dê luz ao Filho das Trevas.',
      anoLancamento: 1968,
      diretor: 'Roman Polanski',
      imagem: 'https://m.media-amazon.com/images/I/A1Vmrrc2S+L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Suspiria',
      description: 'Suzy (Jessica Harper) é uma jovem americana chega em Fribourg para fazer cursos em uma academia de dança de prestígio. A atmosfera do lugar, estranho e perturbador, acaba surpreendendo a garota. Quando uma jovem estudante é assassinada, Suzy entra em estado de choque.',
      anoLancamento: 1977,
      diretor: 'Dario Argento',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/2/2d/Suspiria_%28filme%29.jpg',
    },
    {
      name: 'Scream',
      description: 'A masked killer targets high school students, playing on horror movie tropes.',
      anoLancamento: 1996,
      diretor: 'Wes Craven',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_.jpg',
    },
    {
      name: 'Evil Dead',
      description: 'Cinco estudantes da Universidade de Michigan decidem passar um final de semana em uma casa isolada. Lá eles encontram o livro dos mortos, um documento que data da época da Babilônia e que está relacionado ao livro dos mortos egípcio. Enquanto vasculham a casa os amigos gravam em fita alguns encantamentos demoníacos, escritos no livro.',
      anoLancamento: 1981,
      diretor: 'Sam Raimi',
      imagem: 'https://cdn-cosmos.bluesoft.com.br/products/883311284570',
    },
    {
      name: 'Halloween',
      description: 'Michael Myers (Tony Moran) é um psicopata que vive em uma instituição há 15 anos, desde quando matou sua própria irmã. Porém, ele consegue fugir de seu cativeiro e retorna à sua cidade natal para continuar seus crimes na localidade que, aterrorizada, ainda se lembra dele.      ',
      anoLancamento: 1978,
      diretor: 'John Carpenter',
      imagem: 'https://m.media-amazon.com/images/I/613nfsDT4VL.jpg',
    },
    {
      name: 'The Texas Chainsaw Massacre',
      description: 'Em 1973, a polícia texana deu como encerrado o caso de um terrível massacre de 33 pessoas provocado por um homem que usava uma máscara feita de pele humana. Nos anos que se seguiram os policiais foram acusados de fazer uma péssima investigação e de terem matado o cara errado. Só que dessa vez, o único sobrevivente do massacre vai contar em detalhes o que realmente aconteceu na deserta estrada do Texas, quando ele e mais 4 amigos estavam indo visitar o seu avô.',
      anoLancamento: 1974,
      diretor: 'Tobe Hooper',
      imagem: 'https://m.media-amazon.com/images/M/MV5BMTU1MzY2NDc2MV5BMl5BanBnXkFtZTgwMTc3MTUzMzI@._V1_.jpg',
    },
  ];
}