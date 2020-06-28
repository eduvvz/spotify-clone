const estiloCachorro = require('../../static/songs/Estilo cachorro - Racionais Mcs.mp3');
const semMedoDaEscuridao = require('../../static/songs/Sem Medo da Escuridão - Charlie Brown Jr..mp3');
const snoopSong1 = require('../../static/songs/snoop doggy dogg.mp3');
const snoopSong2 = require('../../static/songs/Snoop Dogg-Gin And Juice.mp3');
const hotOreiaSong = require('../../static/songs/Eu Vou.mp3');
const djongaSong = require('../../static/songs/3 . Djonga - UFA.mp3');

export const racionaisMC = [
  {
    name: 'Estilo Cachorro',
    artists: ['Racionais Mc'],
    image:
      'https://upload.wikimedia.org/wikipedia/pt/6/62/Nada_como_um_dia_após_o_outro_dia.jpg',
    url: estiloCachorro,
    liked: true,
  },
];

export const charlieBrownJr = [
  {
    name: 'Sem Medo da Escuridão',
    artists: ['Charlie Brown Jr', 'MV Bill'],
    image:
      'https://http2.mlstatic.com/charlie-brown-jr-ritmo-ritual-e-responsa-cd-D_NQ_NP_951411-MLB28023955664_082018-O.jpg',
    url: semMedoDaEscuridao,
    liked: false,
  },
];

export const snoopDogg = [
  {
    name: 'Who Am I',
    artists: 'Snoop Dogg',
    image:
      'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/3/e/4/a/22340.jpg',
    url: snoopSong1,
    liked: true,
  },
  {
    name: 'Gin And Juice',
    artists: 'Snoop Dogg',
    image:
      'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/3/e/4/a/22340.jpg',
    url: snoopSong2,
    liked: false,
  },
];

export const hotOreia = [
  {
    name: 'Eu Vou',
    artists: ['Hot e Oreia', 'Djonga'],
    image:
      'https://images.genius.com/328b47ccd1d46c351f1c937a276ecfc1.761x761x1.jpg',
    url: hotOreiaSong,
    liked: true,
  },
];

export const djonga = [
  {
    name: 'UFA',
    artists: ['Djonga', 'Sidoka', 'Sant'],
    image:
      'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/e/e/9/1/628451521047499.jpg',
    url: djongaSong,
    liked: true,
  },
];
