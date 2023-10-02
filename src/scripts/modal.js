// Dados dos Projetos

const dataProjects = [
  {
      title: 'DSmovie',
      date: 'maio de 2022',
      description: `Tecnologias usadas:<br>🧾 Versionamento<br>Git & Github <br>🎨 Front End <br>ReactJS
      React Router DOM, Axios, Git & Github, Typescript, styled-components <br>🔧 Back End <br>
      Java, Spring Boot, Spring Data JPA, Spring Web, H2 Database, PostgreSQL<br>
      💡O que eu aprendi?<br>
      PgAdmin<br> Fazer o deploy de aplicações no Heroku<br>
      React Hooks (useState, useEffect)<br>
      React Router DOM (Router, Link, useNavigate, useParams)<br>
      Axios`, 
      videoSrc: 'https://streamable.com/e/wxwtyy',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6958550843671351296/',
      repository: 'https://github.com/smarcosm/dsmovie',
      site: 'https://smarcosm-dsmovie.netlify.app/'

  },
  {
      title: 'Dsmeta',
      date: '28 de Outubro de 2021',
      description: `Projeto pessoal, desenvolvido em um evento da DevSuperior, onde é possível consultar uma tabela com dados de vendedores para avaliar suas metas alcançadas e enviar um SMS com os dados do vendedor, 
      anunciando que ele foi o destaque de vendas, dentro de um período filtrado por datas.
      Ferramentas utilizadas: <br>
      🧾 Versionamento<br>Git & Github <br>🎨 Front End <br>ReactJS
      React Router DOM, Axios, Git & Github, Typescript, styled-components <br>🔧 Back End <br>
      Java, Spring Boot, Spring Data JPA, Spring Web, H2 Database, PostgreSQL<br>
      `, 
      videoSrc: 'https://streamable.com/e/sdfc59',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6954105535793090561/',
      repository: 'https://github.com/smarcosm/dsmeta',
      site: 'https://smarcosm-dsmeta.netlify.app/'

  },
  {
    title: 'Event Platform',
      date: '28 de Outubro de 2021',
      description: `Projeto pessoal, desenvolvido em um evento da DevSuperior, onde é possível consultar uma tabela com dados de vendedores para avaliar suas metas alcançadas e enviar um SMS com os dados do vendedor, 
      anunciando que ele foi o destaque de vendas, dentro de um período filtrado por datas.
      Ferramentas utilizadas: <br>
      🧾 Versionamento<br>Git & Github <br>🎨 Front End <br>ReactJS
      React Router DOM, Axios, Git & Github, Typescript, styled-components <br>🔧 Back End <br>
      Java, Spring Boot, Spring Data JPA, Spring Web, H2 Database, PostgreSQL<br>
      `, 
      videoSrc: 'https://streamable.com/e/z2k2yi',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6954105535793090561/',
      repository: 'https://github.com/smarcosm/dsmeta',
      site: 'https://event-plataform-amber.vercel.app/'
    
  },
  {
    title: 'Home Broker',
      date: '26 de Junho de 2023',
      description: `Durante a semana Full Stack & Full Cycle, 
      desenvolvi um projeto de "Simulação de Transações da Bolsa de Valores". 
      Este projeto permite aos usuários simular a compra e venda de ações e 
      acompanhar o desempenho de seus investimentos.

      No frontend, utilizei Next.js. 
      No backend, trabalhei com NestJS e Golang.       
      Usei Prisma e MongoDB. 
      Docker.  
      Kafka.     
      O sistema é dividido em três partes principais: 
      um microserviço principal em Golang, 
      um backend em NestJS e um frontend em Next.js. 
      O microserviço principal processa os dados do Kafka e envia as respostas de volta ao Kafka. 
      O backend consome esses dados e os disponibiliza para o frontend, que os exibe ao usuário.
      
       `, 
      videoSrc: 'https://streamable.com/e/a2ote5',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7085713918198726656/',
      repository: 'https://github.com/smarcosm/imersaofullcycle13',
      site: '#'
  }

]

// Open Modal

const openModal = () => {
  const closeModal = document.querySelector('.modal .ri-close-line')
  const modal = document.querySelector('.modal')
  const box = document.querySelectorAll('.cards-projects .box')
  const modalTitle = modal.querySelector('.title h2')
  const modalDescription = modal.querySelector('.info p')
  const modalDate = modal.querySelector('span')
  const modalLinkProject = modal.querySelector('.links a.link-project')
  const modalLinkRepository = modal.querySelector('.links a.link-repository')
  const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
  const iframe = modal.querySelector('.video iframe')

  box.forEach((item, index) => {

      const addData = () => {

          if (index != 5) {
              modal.classList.remove('hidden');
              document.body.style.overflow = 'hidden';
              document.body.classList.add('transparent')
          }

          modalTitle.innerHTML = dataProjects[index].title
          modalDescription.innerHTML = dataProjects[index].description
          modalDate.innerHTML = dataProjects[index].date
          modalLinkProject.setAttribute('href', dataProjects[index].site) 
          modalLinkRepository.setAttribute('href', dataProjects[index].repository) 
          modalLinkLinkedin.setAttribute('href', dataProjects[index].linkedin) 
          iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')

      }

      item.addEventListener('click', addData)

  })

  const closingModal = () => {
      modal.classList.add('hidden')
      document.body.style.overflow = 'visible';
      document.body.classList.remove('transparent')
      iframe.setAttribute('src', '')

  }

  closeModal.addEventListener('click', closingModal)

  document.addEventListener ('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()