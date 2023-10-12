import { database } from "./database.js"

const data_title = document.querySelector("[data_title]")
const data_img = document.querySelector("[data_img]")
const data_date = document.querySelector("[data_date]")
const data_paragraph = document.querySelector("[data_paragraph]")
const data_views = document.querySelector("[data_views]")

const indice = localStorage.getItem("indice") || '0'

const datatimenow = `${new Date().toLocaleDateString()}`;

switch (indice) {
    case '0':
        data_title.innerHTML = "Inteligência Artificial Impulsiona a Revolução na Medicina Personalizada."
        data_img.setAttribute('src', '/Imagens/circuito.jpg')
        data_img.setAttribute('alt', 'image1')
        data_img.setAttribute('class', 'image1p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardone") || '0'
        data_paragraph.innerHTML = `
            <br>
            <b style="font-size:x-large">A Revolução da Medicina Personalizada e da Inteligência Artificial: Uma
                Abordagem de Precisão para a Saúde.</b><br>
            <br>
            Nos últimos anos, temos sido testemunhas de uma revolução transformadora na maneira como abordamos a
            prestação de cuidados de saúde. A convergência da medicina personalizada e da inteligência artificial (IA)
            está remodelando fundamentalmente nossa abordagem à medicina, possibilitando a personalização e a precisão
            em cada etapa do processo de cuidados de saúde.
            <br>
    
            <br><b style="font-size: x-large;">Medicina Personalizada: Moldando Tratamentos Sob Medida para Cada
                Paciente.</b>
            <br>
    
            <br>A essência da medicina personalizada reside na consideração meticulosa de fatores genéticos, ambientais
            e de
            estilo de vida, a fim de criar abordagens de tratamento verdadeiramente individualizadas. Essa abordagem
            pioneira não apenas visa tratar doenças, mas também busca otimizar a saúde do paciente, minimizar efeitos
            colaterais e, em última análise, aprimorar significativamente a qualidade de vida.
            <br>
    
            <br><b style="font-size: x-large;">IA na Análise Genômica Avançada: Decodificando o Potencial do DNA.</b>
    
            A IA desempenha um papel crucial ao possibilitar análises genômicas avançadas. Algoritmos de aprendizado
            profundo têm a capacidade de examinar vastos volumes de dados genômicos, identificando de maneira precisa e
            rápida mutações genéticas específicas associadas a doenças complexas. Esse avanço revolucionário permite aos
            médicos obterem insights nunca antes imaginados, fundamentais para diagnóstico e tratamento mais precisos.
            <br>
    
            <br><b style="font-size: x-large;">Biomarcadores: Orientando o Caminho para Diagnóstico e Tratamento
                Precisos.</b><br>
    
            <br>Outra aplicação vital da IA é a identificação de biomarcadores, que atuam como faróis orientadores no
            vasto
            oceano das doenças. Esses indicadores biológicos apontam, de maneira precoce e precisa, a presença ou
            progressão de uma doença, fornecendo aos médicos informações valiosas para tomadas de decisão informadas e
            tratamentos altamente direcionados.
            <br>
    
            <br><b style="font-size: x-large;">Previsão de Resposta ao Tratamento com IA: Maximizando a Eficácia.</b><br>
    
            <br>A inteligência artificial também oferece a capacidade de prever com considerável precisão como os
            pacientes
            responderão a tratamentos específicos. Com base em perfis genéticos e de saúde individuais, os médicos podem
            escolher terapias com a mais alta probabilidade de sucesso. Isso não apenas aprimora a eficácia do
            tratamento, mas também reduz significativamente o processo de tentativa e erro que frequentemente acompanha
            as abordagens convencionais.
            <br>
    
            <br><b style="font-size: x-large;">Medicina Preventiva Potencializada pela IA: Antecipando e PrevenindoDoenças.</b><br>
    
            <br>A medicina personalizada não se limita ao tratamento reativo; ela se estende à prevenção proativa. Por meio
            da inteligência artificial, a medicina preventiva analisa dados detalhados de estilo de vida, histórico
            médico e genética para identificar riscos de saúde antes mesmo que as doenças se manifestem completamente.
            Com base nessas informações, são recomendadas intervenções preventivas, como mudanças na dieta ou no estilo
            de vida, com o objetivo de manter o paciente saudável a longo prazo.
            <br>
    
            <br><b style="font-size: x-large;">Desafios e Considerações Éticas na Era da Medicina Personalizada com IA.</b>
    
            <br>Apesar desses avanços empolgantes, a implementação bem-sucedida da medicina personalizada com IA enfrenta
            desafios significativos que não podem ser subestimados. A proteção da privacidade dos dados genéticos dos
            pacientes é uma preocupação central, e a ética e a transparência na utilização da IA desempenham um papel
            fundamental na manutenção da confiança e integridade da medicina personalizada.
            <br>
    
            <br><b style="font-size: x-large;">Equidade no Acesso à Medicina Personalizada e IA: Garantindo Benefícios Universais.</b>
    
            <br>Além disso, é imperativo garantir que todos os indivíduos, independentemente de sua origem socioeconômica,
            tenham acesso igualitário aos benefícios da medicina personalizada e da IA na saúde. A equidade no acesso é
            essencial para assegurar que essa revolução na medicina beneficie a sociedade como um todo.
            <br>
    
            <br><b style="font-size: x-large;">Conclusão: Uma Nova Era na Medicina Personalizada e na IA.</b>
    
            <br>Em resumo, a fusão da medicina personalizada e da IA está inaugurando uma nova era na abordagem de cuidados
            de saúde, prometendo tratamentos altamente personalizados e precisos para pacientes em todo o mundo. À
            medida que a tecnologia avança, devemos continuar a considerar atentamente as implicações éticas e de
            privacidade, bem como trabalhar incansavelmente para garantir que todos os pacientes possam colher os frutos
            dessa abordagem inovadora para a saúde. Estamos diante de uma revolução que moldará o futuro da medicina e
            da saúde globalmente.
            `
        break;

    case '1':
        data_title.innerHTML = "Programação funcional: o futuro da programação?"
        data_img.setAttribute('src', '/Imagens/programacao.jpg')
        data_img.setAttribute('alt', 'image2')
        data_img.setAttribute('class', 'image2p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardtwo") || '0'
        data_paragraph.innerHTML = `
            A programação funcional é um paradigma de programação que se concentra em funções e seus resultados. Essa
            abordagem é diferente da programação imperativa, que se concentra na execução de instruções passo a passo. <br>
            
            Em programação funcional, as funções são os blocos de construção fundamentais. Elas são usadas para
            representar operações matemáticas, transformações de dados e outros tipos de comportamento. As funções
            funcionais são geralmente pequenas e simples, o que as torna fáceis de entender e reutilizar.<br>
            <br>
            A programação funcional tem uma série de vantagens sobre a programação imperativa, incluindo:
            <br>
            Menor chance de erros: As funções funcionais são mais fáceis de entender e testar, o que reduz a chance de
            erros.<br>
            Maior eficiência: As funções funcionais geralmente são mais eficientes em termos de tempo e espaço do que as
            funções imperativas.<br>
            Maior paralelização: As funções funcionais são mais fáceis de paralelizar, o que pode melhorar o desempenho.<br>
            <br>
            <b style="font-size:x-large ;">Funções</b><br>
            <br>
            A base da programação funcional são as funções. As funções são blocos de código que aceitam um conjunto de
            argumentos e retornam um resultado. As funções podem ser usadas para representar operações matemáticas,
            transformações de dados e outros tipos de comportamento.<br>

            Em programação funcional, as funções são geralmente pequenas e simples. Isso as torna fáceis de entender e
            reutilizar. As funções também são frequentemente escritas de forma a serem puras, o que significa que elas
            não alteram o estado do mundo.<br>
            <br>
            <b style="font-size: x-large;">Lambdas</b><br>
            <br>
            As lambdas são uma forma concisa de escrever funções anônimas. As lambdas podem ser usadas para passar
            funções como argumentos ou retornar funções por outras funções.<br>

            As lambdas são uma ferramenta poderosa que pode ser usada para simplificar o código funcional. Elas também
            podem ser usadas para criar funções que são mais difíceis de escrever de outra forma.<br>
            <br>
            <b style="font-size: x-large;">Map e Reduce</b><br>
            <br>
            Map e reduce são duas funções comuns usadas para aplicar funções a coleções de dados. A função map aplica
            uma função a cada elemento em uma coleção e retorna uma nova coleção com os resultados. A função reduce
            aplica uma função a uma coleção, acumulando o resultado em um único valor.<br>

            As funções map e reduce são ferramentas poderosas que podem ser usadas para trabalhar com coleções de dados.
            Elas podem ser usadas para simplificar o código e melhorar o desempenho.<br>
            <br>
            <b style="font-size: x-large;">Imutabilidade</b><br>
            <br>
            A imutabilidade é a propriedade de um valor não poder ser alterado após sua criação. Os valores imutáveis
            são importantes na programação funcional porque eles tornam o código mais fácil de entender e testar.<br>

            Os valores imutáveis também podem ser usados para melhorar o desempenho. Quando um valor é imutável, não é
            necessário copiar o valor para alterá-lo. Isso pode melhorar o desempenho em alguns casos.<br>
            <br>
            <b style="font-size: x-large;">Vantagens da programação funcional</b><br>
            <br>
            A programação funcional tem uma série de vantagens sobre a programação imperativa, incluindo:

            Menor chance de erros: As funções funcionais são mais fáceis de entender e testar, o que reduz a chance de
            erros.<br>
            Maior eficiência: As funções funcionais geralmente são mais eficientes em termos de tempo e espaço do que as
            funções imperativas.<br>
            Maior paralelização: As funções funcionais são mais fáceis de paralelizar, o que pode melhorar o desempenho.
            Aplicações da programação funcional<br>

            A programação funcional é uma abordagem poderosa para a programação que pode ser usada para construir
            software mais eficiente e confiável. A programação funcional é usada em uma ampla gama de campos, incluindo:<br>

            Ciência da computação: A programação funcional é usada em muitos campos da ciência da computação, incluindo
            IA, computação gráfica e processamento de linguagem natural.<br>
            Engenharia de software: A programação funcional é usada em uma variedade de aplicações de engenharia de
            software, incluindo desenvolvimento de software web, desenvolvimento de jogos e desenvolvimento de
            aplicativos móveis.<br>
            Finanças: A programação funcional é usada em aplicações financeiras, como negociação de ações e gestão de
            risco.<br>
            <br>
            <b style="font-size: x-large;">Conclusão</b><br>
            <br>
            A programação funcional é uma abordagem poderosa para a programação que pode ser usada para construir
            software mais eficiente e confiável. Se você está interessado em aprender mais sobre programação, a
            programação funcional é um excelente tópico para você explorar.<br>
            <br>
            <b style="font-size: x-large;">Complementos</b><br>
            <br>
            Além das vantagens listadas acima, a programação funcional também pode contribuir para a construção de
            software mais fácil de manter. Isso ocorre porque o código funcional é geralmente mais fácil de entender e
            de fazer alterações.<br>

            A programação funcional também pode contribuir para a construção de software mais reutilizável. Isso ocorre
            porque as funções são os blocos de construção fundamentais da programação funcional. As funções podem ser
            facilmente reutilizadas em diferentes partes do código.<br>

            A programação funcional é uma abordagem de programação que está se tornando cada vez mais popular.<br>              
        `
        break;

    case '2':
        data_title.innerHTML = "Você sabe o que é a Robótica bioinspirada?"
        data_img.setAttribute('src', '/Imagens/robotica.jpg')
        data_img.setAttribute('alt', 'image3')
        data_img.setAttribute('class', 'image3p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardtree") || '0'
        data_paragraph.innerHTML = `

            A robótica bioinspirada é um campo da robótica que se concentra no desenvolvimento de robôs que são
            inspirados nos sistemas biológicos. Esse campo tem o potencial de revolucionar a robótica, permitindo que os
            robôs sejam mais eficientes, flexíveis e adaptáveis.
            <br>
            Um exemplo de robótica bioinspirada é o desenvolvimento de robôs que podem se locomover como animais. Esses
            robôs podem ser usados para aplicações como exploração espacial, resgate de desastres e inspeção de
            infraestrutura.
            <br>
            Outro exemplo de robótica bioinspirada é o desenvolvimento de robôs que podem realizar tarefas complexas,
            como a manipulação de objetos delicados. Esses robôs podem ser usados para aplicações como cirurgia,
            fabricação e cuidados de saúde.<br>
            <br>
            <b style="font-size:x-large;">Robótica cognitiva.</b><br>
            <br>
            A robótica cognitiva é um campo da robótica que se concentra no desenvolvimento de robôs que podem aprender
            e se adaptar por conta própria. Esse campo tem o potencial de permitir que os robôs sejam mais autônomos e
            capazes de realizar tarefas complexas.
            <br>
            Um exemplo de robótica cognitiva é o desenvolvimento de robôs que podem aprender a realizar tarefas por meio
            da observação. Esses robôs podem ser usados para aplicações como atendimento ao cliente, educação e
            assistência pessoal.
            <br>
            Outro exemplo de robótica cognitiva é o desenvolvimento de robôs que podem aprender a tomar decisões por
            conta própria. Esses robôs podem ser usados para aplicações como segurança, defesa e exploração espacial.<br>
            <br>
            <b style="font-size: x-large;">Robótica de manufatura.</b><br>
            <br>
            A robótica de manufatura é um campo da robótica que se concentra no uso de robôs para a produção de bens.
            Esse campo tem o potencial de aumentar a eficiência e a produtividade da manufatura.
            Um exemplo de robótica de manufatura é o uso de robôs para a montagem de produtos. Esses robôs podem ser
            usados para fabricar produtos de forma mais rápida e precisa do que os humanos.
            Outro exemplo de robótica de manufatura é o uso de robôs para a inspeção de produtos. Esses robôs podem ser
            usados para identificar defeitos em produtos com mais eficiência do que os humanos.<br>
            <br>
            <b style="font-size: x-large;">Robótica de serviço.</b><br>
            <br>

            A robótica de serviço é um campo da robótica que se concentra no uso de robôs para fornecer serviços. Esse
            campo tem o potencial de melhorar a qualidade de vida das pessoas.

            Um exemplo de robótica de serviço é o uso de robôs para a limpeza de casas. Esses robôs podem ser usados
            para limpar casas de forma mais eficiente do que os humanos.

            Outro exemplo de robótica de serviço é o uso de robôs para o atendimento ao cliente. Esses robôs podem ser
            usados para responder a perguntas e fornecer suporte aos clientes.

            Esses são apenas alguns exemplos de conteúdo inovador relacionado à robótica. A robótica é um campo em
            rápido crescimento, e novas inovações estão surgindo o tempo todo.`

        break;

    case '3':
        data_title.innerHTML = "Como proteger seus dados corporativos de ataques cibernéticos"
        data_img.setAttribute('src', '/Imagens/Ciber.jpg')
        data_img.setAttribute('alt', 'image4')
        data_img.setAttribute('class', 'image4p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardfour") || '0'
        data_paragraph.innerHTML = `
        <b style="font-size: XX-large;">Veja os 5 passos para se proteger de ateques cibernéticos..</b><br>
        <br>
        <b style="font-size: x-large;">1. Tenha um plano de segurança cibernética.</b><br>
         <br>
        <br>
O primeiro passo para proteger seus dados é ter um plano de segurança cibernética. Este plano deve incluir uma avaliação dos seus riscos, medidas de mitigação e procedimentos de resposta a incidentes.

A avaliação de riscos ajudará você a identificar os pontos fracos da sua segurança e tomar medidas para mitigá-los. As medidas de mitigação podem incluir coisas como senhas fortes, autenticação de dois fatores e firewalls. 
Os procedimentos de resposta a incidentes ajudarão você a responder rapidamente a um ataque cibernético.<br>
<br>
<b style="font-size: x-large;">2. Implemente medidas de segurança básicas.</b><br>

<br>
Existem uma série de medidas de segurança básicas que você pode implementar para proteger seus dados, como:

Use senhas fortes e únicas - Suas senhas devem ser pelo menos 12 caracteres de comprimento e conter uma mistura de letras, números e símbolos. Você também deve usar uma senha diferente para cada conta.
Atualize o software regularmente - Os desenvolvedores de software lançam atualizações regularmente para corrigir vulnerabilidades de segurança. É importante instalar essas atualizações o mais rápido possível.
Ative a autenticação de dois fatores - A autenticação de dois fatores adiciona uma camada extra de segurança ao exigir que você insira um código de verificação além de sua senha.
Use um firewall - Um firewall é uma ferramenta de segurança que ajuda a proteger seu sistema de acessos não autorizados.
Implemente um sistema de backup - Um sistema de backup ajudará você a restaurar seus dados caso eles sejam perdidos ou corrompidos em um ataque cibernético.<br>
<br>
<b style="font-size: x-large;">3. Treine seus funcionários.</b><br>
<br>
Seus funcionários são a linha de frente da defesa contra ataques cibernéticos. É importante treiná-los para reconhecer e evitar ameaças.<br>
<br>
O treinamento deve incluir coisas como:<br>

Como identificar e-mails de phishing - Os e-mails de phishing são mensagens de e-mail fraudulentas que tentam enganar o destinatário a fornecer informações confidenciais.
Como usar software de segurança - Os funcionários devem saber como usar o software de segurança que você implementou.
Boas práticas de segurança - Os funcionários devem ser ensinados sobre boas práticas de segurança, como usar senhas fortes e não clicar em links de e-mails de remetentes desconhecidos.<br>
<br>
<b style="font-size: x-large;">4. Monitore sua rede</b><br>
<br>
É importante monitorar sua rede para identificar atividades suspeitas. Você pode fazer isso usando ferramentas de segurança cibernética.<br>
<br>
As ferramentas de segurança cibernética podem ajudar você a identificar coisas como:<br>
Acesso não autorizado
Tentativas de login malsucedidas
Downloads ou uploads suspeitos<br>
<br>
<b style="font-size: x-large;">5. Esteja preparado para um incidente</b><br>
<br>
Mesmo que você tome todas as medidas de segurança possíveis, ainda existe a possibilidade de sofrer um ataque cibernético. É importante estar preparado para um incidente, tendo um plano de resposta.<br>
<br>
O seu plano de resposta deve incluir coisas como:

Como identificar um ataque
Como interromper o ataque
Como restaurar os dados
Conclusão

A cibersegurança é uma responsabilidade de todos. Ao seguir estas dicas, você pode ajudar a proteger seus dados corporativos de ataques cibernéticos.<br>
<br>
<b style="font-size: x-large;">Outras dicas</b><br>
<br>

Além das dicas acima, aqui estão algumas outras dicas que você pode seguir para proteger seus dados corporativos de ataques cibernéticos:<br>

Use uma VPN para proteger suas conexões remotas
Mantenha seus sistemas e aplicativos atualizados com as últimas correções de segurança
Seja cauteloso com os e-mails e links que você clica
Não abra anexos de e-mails de remetentes desconhecidos
Ao seguir essas dicas, você pode ajudar a proteger seus dados e sistemas de ataques cibernéticos.
        `
        break;

    case '4':
        data_title.innerHTML = "As Tendências Emergentes em Cibersegurança."
        data_img.setAttribute('src', '/Imagens/tendencias.jpg')
        data_img.setAttribute('alt', 'image5')
        data_img.setAttribute('class', 'image5p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardfive") || '0'
        data_paragraph.innerHTML = `
        <b style="font-size: X-large;">Neste artigo mostraremos as 6 tendência de Cibersegurança.</b><br>
        <br>
        A cibersegurança é um campo em constante evolução, à medida que ameaças cibernéticas se tornam mais sofisticadas e os atacantes buscam novas maneiras de explorar vulnerabilidades. Neste artigo, exploraremos algumas das tendências emergentes em cibersegurança que estão moldando o cenário atual.<br>
        <br>
        <b style="font-size: X-large;">1. Inteligência Artificial na Detecção de Ameaças.</b><br>
A utilização de inteligência artificial e aprendizado de máquina está revolucionando a forma como as organizações detectam e respondem a ameaças cibernéticas. Essas tecnologias permitem análises em tempo real de grandes volumes de dados, identificando comportamentos suspeitos e automatizando a resposta a incidentes.<br>
<br>
<b style="font-size: X-large;">2. Internet das Coisas (IoT) e Cibersegurança.</b><br>
Com o crescimento exponencial de dispositivos IoT, a superfície de ataque também aumenta. Exploraremos como a cibersegurança se adapta para proteger uma ampla gama de dispositivos conectados, desde eletrodomésticos até veículos autônomos.<br>
<br>
<b style="font-size: X-large;">3. Ataques de Ransomware em Ascensão</b><br>
Os ataques de ransomware continuam sendo uma ameaça significativa, e os atacantes estão se tornando mais direcionados e exigentes em seus resgates. Discutiremos estratégias de prevenção e resposta a ataques de ransomware.<br>
<br>
<b style="font-size: X-large;">4. Privacidade de Dados e Regulamentações</b><br>
A crescente preocupação com a privacidade de dados levou à implementação de regulamentações mais rigorosas, como o GDPR na União Europeia. Veremos como as empresas estão se adaptando para cumprir essas regulamentações e proteger os dados dos clientes.<br>
<br>
<b style="font-size: X-large;">5. Cibersegurança na Nuvem.</b><br>

À medida que mais empresas migram seus serviços para a nuvem, a segurança na nuvem se torna crítica. Abordaremos os desafios e as melhores práticas para garantir a proteção dos dados na nuvem.<br>
<br>
<b style="font-size: X-large;">6. Cibersegurança Industrial (ICS/SCADA).</b><br>
Os sistemas de controle industrial e automação (ICS/SCADA) são alvos cada vez mais atraentes para atacantes. Examincaremos os riscos associados a esses sistemas e as medidas de segurança necessárias.<br>
<br>
<b style="font-size: X-large;">Conclusão</b><br>
A cibersegurança é um campo dinâmico que exige adaptação constante às novas ameaças e tecnologias emergentes. À medida que nos esforçamos para proteger nossos sistemas e dados, a compreensão dessas tendências emergentes é fundamental. A conscientização e a preparação são essenciais para enfrentar os desafios em constante evolução da cibersegurança.

Lembre-se de que este é apenas um esboço de um artigo sobre cibersegurança. Você pode expandir cada seção com informações mais detalhadas, estatísticas, exemplos e referências relevantes para criar um artigo completo e informativo sobre o tópico.
        
        `
        break;

    case '5':
        data_title.innerHTML = "Robôs realizam cirurgias cardíacas com precisão."
        data_img.setAttribute('src', '/Imagens/cirurgia_robotica.jpg')
        data_img.setAttribute('alt', 'image6')
        data_img.setAttribute('class', 'image6p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardsix") || '0'
        data_paragraph.innerHTML = `
        <b style="font-size: X-large;">Robôs conseguem realizar cirurgias cardíacas com a mesma precisão de humanos.</b><br>
        <br>
Um grupo de pesquisadores da Universidade de Stanford, nos Estados Unidos, desenvolveu um sistema de robótica que é capaz de realizar cirurgias cardíacas com a mesma precisão de humanos. O sistema, chamado de "HeartX", é composto por um braço robótico controlado por computador que é equipado com uma câmera e uma série de instrumentos cirúrgicos.<br>
<br>
O HeartX foi testado em um estudo com 10 porcos, e os resultados mostraram que o sistema foi capaz de realizar as cirurgias com a mesma precisão de cirurgiões humanos. Os pesquisadores acreditam que o HeartX tem o potencial de revolucionar a cirurgia cardíaca, tornando-a mais precisa e segura.

Detalhes do estudo

O estudo foi publicado na revista científica <b>"Nature Medicine".</b> Os pesquisadores dividiram os porcos em dois grupos: um grupo foi operado por humanos e o outro grupo foi operado pelo HeartX.

Os resultados mostraram que o HeartX foi capaz de realizar as cirurgias com a mesma precisão de cirurgiões humanos. O sistema foi capaz de realizar com sucesso todos os procedimentos cirúrgicos, e não houve complicações pós-operatórias significativas.<br>
<br>
Os pesquisadores acreditam que o HeartX tem o potencial de revolucionar a cirurgia cardíaca, tornando-a mais precisa e segura. O sistema poderia ser usado para realizar cirurgias em pacientes que são considerados de alto risco, como aqueles com doenças cardíacas graves.<br>

<br>Outras aplicações da robótica em cirurgia

A robótica já está sendo usada em uma variedade de procedimentos cirúrgicos, incluindo cirurgias ortopédicas, neurológicas e urológicas. Os robôs cirúrgicos são capazes de realizar movimentos precisos que seriam difíceis ou impossíveis para os humanos.

Além da cirurgia cardíaca, os pesquisadores estão desenvolvendo robôs cirúrgicos para realizar outros procedimentos, como cirurgias de câncer, cirurgias de transplantes e cirurgias de reconstrução.
        
        `
        break;

    case '6':
        data_title.innerHTML = "Metaverso, a internet que não é apenas virtual."
        data_img.setAttribute('src', '/Imagens/metaverso.jpg')
        data_img.setAttribute('alt', 'image7')
        data_img.setAttribute('class', 'image7p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardseven") || '0'
        data_paragraph.innerHTML = `
        <b style="font-size: X-large;">Meta verso, mudará a internet, implementando o toque virtual, sera possivel sentir o que tocamos e até mesmo criar lembranças.</b><br>
        <br>O metaverso é um termo usado para descrever um mundo virtual compartilhado que pode ser acessado por meio de realidade virtual (VR), realidade aumentada (AR) ou dispositivos de computador tradicionais. No metaverso, as pessoas podem interagir umas com as outras, jogar, trabalhar e até mesmo comprar e vender bens e serviços.<br>

        <br>O metaverso ainda está em sua fase inicial de desenvolvimento, mas tem o potencial de revolucionar a forma como interagimos com a internet. O metaverso pode ser usado para criar experiências mais imersivas e envolventes, além de oferecer novas oportunidades de interação social e econômica.<br>

        <br><b><i>Algumas das aplicações potenciais do metaverso.</i></b><br>

        <br><b>Educação:</b> O metaverso pode ser usado para criar experiências de aprendizagem mais imersivas e envolventes. Por exemplo, os alunos podem visitar museus virtuais, aprender sobre história em mundos históricos ou participar de simulações de laboratório.<br>
        <br><b>Entretenimento:</b> O metaverso pode ser usado para criar novos tipos de jogos, experiências de cinema e música. Por exemplo, os jogadores podem explorar mundos virtuais ricos em detalhes, assistir a filmes em ambientes imersivos ou assistir a shows de música ao vivo.<br>
        <br><b>Redes sociais:</b> O metaverso pode ser usado para criar novas formas de interação social. Por exemplo, as pessoas podem se encontrar em mundos virtuais para conversar, jogar ou fazer negócios.<br>
        <br><b>Comércio:</b> O metaverso pode ser usado para criar novos mercados e oportunidades de negócios. Por exemplo, as pessoas podem comprar e vender bens e serviços em mundos virtuais ou participar de experiências de compra imersivas.<br>
        <br><b>Os desafios do metaverso:</b>

Apesar dos muitos benefícios potenciais do metaverso, existem alguns desafios que precisam ser superados.

Um desafio é que o metaverso pode ser caro e complexo de implementar. É importante desenvolver plataformas de metaverso que sejam acessíveis e fáceis de usar.

Outro desafio é que o metaverso pode ser usado para fins maliciosos, como cyberbullying ou disseminação de desinformação. É importante desenvolver mecanismos para proteger os usuários do metaverso de danos.<br>

<br>Apesar desses desafios, o metaverso tem o potencial de revolucionar a forma como interagimos com a internet. À medida que a tecnologia continua a se desenvolver, o metaverso desempenhará um papel cada vez mais importante em nossas vidas.<br>

<br><b><i>Algumas empresas que estão trabalhando no desenvolvimento do metaverso:</i></b><br>

<br><b>Meta:</b> A Meta, anteriormente conhecida como Facebook, é uma das principais empresas que estão trabalhando no desenvolvimento do metaverso. A empresa lançou o Horizon Worlds, um mundo virtual para uso social.<br>
<br><b>Microsoft:</b> A Microsoft também está trabalhando no desenvolvimento do metaverso. A empresa lançou o Mesh, uma plataforma de realidade virtual que permite às pessoas interagirem umas com as outras em mundos virtuais.<br>
<br><b>Roblox:</b> O Roblox é uma plataforma de jogos online que permite aos usuários criar e compartilhar seus próprios mundos virtuais. A empresa está trabalhando para expandir o Roblox para além de jogos, tornando-o um espaço virtual para interação social e entretenimento.<br>
<br><b>Epic Games:</b> A Epic Games, desenvolvedora do Fortnite, está trabalhando no desenvolvimento do metaverso. A empresa lançou o Fortnite Creative, um modo de jogo que permite aos usuários criar seus próprios mundos virtuais.<br>
<br>O metaverso ainda está em sua fase inicial de desenvolvimento, mas tem o potencial de revolucionar a forma como interagimos com a internet. À medida que a tecnologia continua a se desenvolver, o metaverso desempenhará um papel cada vez mais importante em nossas vidas.<br>
        `
        break;

    case '7':
        data_title.innerHTML = "Desenvolvedores autônomos de jogos ganham espaço."
        data_img.setAttribute('src', '/Imagens/games.jpg')
        data_img.setAttribute('alt', 'image8')
        data_img.setAttribute('class', 'image8p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardeight") || '0'
        data_paragraph.innerHTML = `
        <b style="font-size: X-large;">Desenvolvedores de jogos autônomos, que trabalham por conta própria, estão ganhando espaço no mercado.</b><br>
        
        <br>Esses desenvolvedores geralmente trabalham em projetos pessoais ou em parceria com outras pessoas, e não estão vinculados a grandes empresas ou estúdios.<br>

        <br>O crescimento dos desenvolvedores autônomos de jogos é impulsionado por uma série de fatores, incluindo o aumento da acessibilidade às ferramentas de desenvolvimento de jogos, o crescimento do mercado de jogos independentes e a mudança nas preferências dos jogadores.<br>

        <br>Os desenvolvedores autônomos de jogos têm uma série de vantagens em relação aos desenvolvedores tradicionais. Eles têm mais liberdade criativa e flexibilidade, e podem trabalhar em projetos que são de seu interesse. Além disso, eles podem aproveitar as novas tecnologias e plataformas para criar experiências de jogo inovadoras.<br>

        <br>O sucesso dos desenvolvedores autônomos de jogos é uma boa notícia para a indústria de jogos. Ele mostra que os jogos não são mais exclusivos de grandes empresas ou estúdios, e que qualquer pessoa com as habilidades e a paixão necessárias pode criar um jogo de sucesso.<br>

        <br><b><i>Exemplos de desenvolvedores autônomos de jogos:</i></b><br>

        <br><b>Eric Barone, desenvolvedor de Stardew Valley</b><br>
        <br><b>Markus Persson, desenvolvedor de Minecraft</b><br>
        <br><b>Jonathan Blow, desenvolvedor de Braid</b><br>
        <br><b>Supergiant Games, desenvolvedora de Hades</b><br>
        <br><b>Team Cherry, desenvolvedora de Hollow Knight</b><br>
        <br>Esses desenvolvedores são alguns dos exemplos mais bem-sucedidos de desenvolvedores autônomos de jogos. Eles criaram jogos de alta qualidade que foram aclamados pela crítica e pelo público.<br>

        <br><b><i>O futuro dos desenvolvedores autônomos de jogos</i></b><br>

        <br>O futuro dos desenvolvedores autônomos de jogos é promissor. À medida que a tecnologia de desenvolvimento de jogos continua a se desenvolver, esses desenvolvedores terão acesso a ferramentas e recursos cada vez mais poderosos. Isso lhes permitirá criar jogos mais complexos e sofisticados.<br>

        <br>Além disso, o crescimento do mercado de jogos independentes e a mudança nas preferências dos jogadores devem continuar a favorecer os desenvolvedores autônomos. Os jogadores estão cada vez mais interessados em jogos que são criativos e inovadores, e os desenvolvedores autônomos são bem posicionados para atender a essa demanda.
        `
        break;

    case '8':
        data_title.innerHTML = "Python 3.12.0 lançado."
        data_img.setAttribute('src', 'Imagens/python.jpg')
        data_img.setAttribute('alt', 'image9')
        data_img.setAttribute('class', 'image9p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardnine") || '0'
        data_paragraph.innerHTML = `
        <b style="font-size: X-large;">Python 3.12.0rc1 lançado.</b><br>
        
        <br>O Python Software Foundation (PSF) anunciou o lançamento do Python 3.12.0rc1, a primeira release candidate da próxima versão da linguagem de programação Python. O lançamento do rc1 marca um marco importante no desenvolvimento do Python 3.12, que está programado para ser lançado em 2 de outubro de 2023.<br>

        <br><b>O Python 3.12 traz uma série de novos recursos e melhorias, incluindo:</b><br>

        <br>Novas funções e métodos: o Python 3.12 adiciona uma série de novas funções e métodos, incluindo datetime.replace(), itertools.groupby() e re.sub().<br>
        <br>Melhorias de desempenho: o Python 3.12 inclui uma série de melhorias de desempenho, incluindo otimizações para a biblioteca numpy e o compilador PyPy3.<br>
        <br>Correções de bugs: o Python 3.12 corrige uma série de bugs conhecidos, incluindo um bug que afetava a biblioteca pandas.<br>
        <br>Para saber mais sobre o Python 3.12, visite o site do Python Software Foundation.<br>

        <br><b>Outras notícias sobre Python</b><br>

        <br>Além do lançamento do Python 3.12.0rc1, também foram noticiadas as seguintes novidades sobre a linguagem Python:

        <br>Novo livro sobre Python lançado: o livro "Python for Data Analysis" foi lançado em sua segunda edição. O livro é uma referência para cientistas de dados que desejam aprender Python.<br>
        <br>Nova ferramenta de desenvolvimento de Python lançada: a ferramenta "PyCharm" foi lançada em sua versão 2023.2. A nova versão inclui uma série de melhorias, incluindo suporte para o Python 3.12.<br>
        <br>Python é a linguagem de programação mais popular: o Python foi classificado como a linguagem de programação mais popular no índice TIOBE de popularidade de linguagens de programação.<br>
        <br><b>Conclusão</b><br>

        <br>O Python continua sendo uma das linguagens de programação mais populares do mundo. O lançamento do Python 3.12, com seus novos recursos e melhorias, deve contribuir para o crescimento da popularidade da linguagem.
        `
        break;

    case '9':
        data_title.innerHTML = "O futuro dos jogos. Realidade Virtual"
        data_img.setAttribute('src', 'Imagens/realidade virtual.jpg')
        data_img.setAttribute('alt', 'image10')
        data_img.setAttribute('class', 'image10p')
        data_date.innerHTML = datatimenow;
        data_views.innerHTML = localStorage.getItem("data_views_cardten") || '0'
        data_paragraph.innerHTML = `
        <b style="font-size: X-large;">Inteligência artificial e jogos em nuvem.</b><br>

        <br>O mercado de games está em constante crescimento e evolução. Novos gêneros, tecnologias e plataformas estão surgindo o tempo todo. Então, como será o futuro dos games?<br>

        <br><b>Algumas tendências que podem moldar o futuro dos games incluem:</b><br>

        <br><i>Realidade virtual e aumentada: Essas tecnologias estão se tornando cada vez mais populares e acessíveis. Elas oferecem uma experiência de jogo mais imersiva e realista.<br>
        <br>Jogos em nuvem: Os jogos em nuvem permitem que os jogadores joguem sem precisar baixar ou instalar o jogo em seu dispositivo. Isso torna os jogos mais acessíveis e convenientes.<br>
        <br>Inteligência artificial: A inteligência artificial está sendo cada vez mais usada nos jogos para criar inimigos mais desafiadores e experiências de jogo mais personalizadas.</i><br>

        <br><b>Realidade virtual e aumentada</b><br>

        <br>A realidade virtual (VR) e a realidade aumentada (AR) estão revolucionando o mundo dos jogos. Essas tecnologias permitem que os jogadores experimentem o jogo de uma forma totalmente nova.<br>

        <br>A VR oferece uma experiência de jogo totalmente imersiva. Os jogadores usam um headset VR para se sentir como se estivessem dentro do jogo. Isso pode levar a uma experiência de jogo mais realista e envolvente.<br>

        <br>A AR adiciona elementos virtuais ao mundo real. Os jogadores podem usar um smartphone ou tablet para visualizar objetos virtuais no mundo real. Isso pode ser usado para criar experiências de jogo mais interativas e inovadoras.<br>

        <br><b>Jogos em nuvem</b><br>

        <br>Os jogos em nuvem estão se tornando cada vez mais populares. Esses jogos são executados em servidores remotos e transmitidos para o dispositivo do jogador. Isso torna os jogos mais acessíveis e convenientes.<br>

        <br>Os jogos em nuvem não exigem que os jogadores tenham hardware potente. Eles também não precisam baixar ou instalar o jogo em seu dispositivo. Isso torna os jogos mais acessíveis para jogadores com dispositivos mais antigos ou com conexões de internet lentas.<br>

        <br><b>Inteligência artificial</b><br>

        <br>A inteligência artificial (IA) está sendo cada vez mais usada nos jogos. A IA pode ser usada para criar inimigos mais desafiadores, gerar experiências de jogo personalizadas e até mesmo criar jogos que jogam sozinhos.<br>

        <br>A IA pode ser usada para criar inimigos mais desafiadores. Os jogos podem usar a IA para aprender as habilidades do jogador e adaptá-los de acordo. Isso pode levar a uma experiência de jogo mais desafiadora e gratificante.<br>

        <br>A IA também pode ser usada para gerar experiências de jogo personalizadas. Os jogos podem usar a IA para entender os interesses do jogador e criar experiências de jogo personalizadas. Isso pode levar a uma experiência de jogo mais envolvente e prazerosa.<br>

        <br>A IA também pode ser usada para criar jogos que jogam sozinhos. Esses jogos usam a IA para controlar os personagens e criar uma experiência de jogo envolvente. Isso pode levar a uma experiência de jogo mais acessível para jogadores que não têm tempo ou habilidades para jogar por conta própria.<br>

        <br><b>Oportunidades e desafios</b><br>

        <br>O futuro dos games apresenta uma série de oportunidades e desafios. As novas tecnologias, como realidade virtual, inteligência artificial e jogos em nuvem, têm o potencial de revolucionar o mundo dos jogos.<br>

        <br>No entanto, também existem desafios que precisam ser superados. Por exemplo, a realidade virtual ainda é relativamente cara e requer hardware poderoso. Os jogos em nuvem podem ter problemas de latência e qualidade de imagem. A inteligência artificial ainda está em desenvolvimento e pode não ser capaz de criar experiências de jogo tão envolventes quanto os humanos.<br>

        <br><b>Conclusão</b><br>

        <br>O futuro dos games é promissor. Novas tecnologias e tendências estão surgindo que têm o potencial de mudar a forma como jogamos. No entanto, também existem desafios que precisam ser superados antes que essas tecnologias possam ser amplamente adotadas.<br>
            `
        break;
}
