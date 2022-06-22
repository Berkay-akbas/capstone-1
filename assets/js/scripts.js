const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navlinks');
const logo = document.querySelector('.desktoplogo');
const desktopnav = document.querySelector('.desktopnav');
const cc = document.querySelector('.cc');

menu.addEventListener('click', () => {
  logo.classList.toggle('off');
  navbar.classList.toggle('active');
  desktopnav.classList.toggle('active');
  menu.classList.toggle('fa-times');
  cc.classList.remove('cc');
});

navbar.addEventListener('click', () => {
  logo.classList.remove('off');
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
  cc.classList.add('cc');
});

const artistData = [
  {
    id: '1',
    name: 'Lynette Williams',
    description: "R&B, Soul",
    featuredimg: '/assets/images/lynettewilliams.jpeg',
    text: 'She writes music that is complex and simple, dark and joyful, abstract and tagible.',
  },
  {
    id: '2',
    name: 'Marbert Rocel',
    description: "Dance, Electronic",
    featuredimg: '/assets/images/marbertrocel.jpeg',
    text: 'Within the Marbert Rocel Studio, a charming togetherness of alleged contrasts evolved, ranging from songs that suddenly become secret weapons on house music dance floors.',
  },
  {
    id: '3',
    name: 'Imam Baildi',
    description: "Electronic, folk, world, country",
    featuredimg: '/assets/images/imambaildi.jpeg',
    text: 'The band represents the idea of mixing rebetiko with different types of music.',
  },
  {
    id: '4',
    name: 'Michael Kiwanukaa',
    description: 'Indie rock, folk rock, soul',
    featuredimg: '/assets/images/michael.jpg',
    text: 'He has been nominated for numerous honours, including the Brit Awards, MTV Europe Music Awards, BBC Music Awards, and The Grammy Awards.',
  },
  {
    id: '5',
    name: 'Mop Mop',
    description: "Jazz, funk, world music, nu-jazz",
    featuredimg: '/assets/images/mopmop.jpeg',
    text: 'Featuring Funk legend Fred Wesley on trombone and Anthony Joseph on vocals.',
  },
  {
    id: '6',
    name: 'VoX LoW',
    description: 'Krautrock, Psychedelic, Minimal Synth, New Wave, Electronic Music',
    featuredimg: '/assets/images/voxlow.jpeg',
    text: 'Vox Low delivers the record nobody expected anymore, one that captures the spirit of the world in motion, for the attention of a crowd of social rejects who have one knee in the gutter but refuse to surrender to the prevailing cynicism.',
  },
];

for (let i = 0; i < artistData.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('artist-card');
  card.innerHTML = `
  <div class="artist-img">
  <img
    src="${artistData[i].featuredimg}"
    alt="${artistData[i].name}"
  />
</div>
<div class="artist-info">
  <h3>${artistData[i].name}</h3>
  <p class="artist-title">${artistData[i].description}</p>
  <p class="artist-text">
  ${artistData[i].text}
  </p>
  </div>
    `;

  document.querySelector('.grid-container').appendChild(card);
}
