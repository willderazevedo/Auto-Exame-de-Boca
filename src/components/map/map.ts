import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

//Template Pages
import { HelpMapModalPage } from './../../pages/help-map-modal/help-map-modal';

@Component({ 
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  acList = [
    {
      city: "Rio Branco",
      hospitals: [
        {name: "Hospital da Fundação Hospitalar Estadual do Acre (Unacon com Serviço de Radioterapia)"}
      ]
    }
  ];

  amList = [
    {
      city: "Manaus",
      hospitals: [
        {name: "Hospital da Fundação Centro de Controle de Oncologia/Cecon (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"}
      ]
    }
  ];

  apList = [
    {
      city: "Macapá",
      hospitals: [
        {name: "Hospital de Clínicas Dr. Alberto Lima (Unacon)"}
      ]
    }
  ];

  paList = [
    {
      city: "Belém",
      hospitals: [
        {name: "Hospital Ofir Loyola (Cacon serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Santarém",
      hospitals: [
        {name: "Hospital Regional do Baixo Amazonas Dr. Waldemar Penna (Unacon com serviço de Radioterapia)"}
      ]
    }
  ];

  roList = [
    {
      city: "Cacoal",
      hospitals: [
        {name: "Hospital Regional de Cacoal HRC (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Porto Velho",
      hospitals: [
        {name: "Hospital de Base Dr. Ary Pinheiro/Hospital de Base Porto Velho (Unacon com serviço de Radioterapia)"},
        {name: "Instituto de Oncologia e Radioterapia São Pellegrino (Unacon com serviço de Radioterapia)"}
      ]
    }
  ];

  rrList = [
    {
      city: "Boa Vista",
      hospitals: [
        {name: "Hospital Geral de Roraima/HGR (Unacon)"}
      ]
    }
  ];

  toList = [
    {
      city: "Araguaína",
      hospitals: [
        {name: "Hospital de Referência de Araguaína (Unacon com serviço de radioterapia)"}
      ]
    },
    {
      city: "Palmas",
      hospitals: [
        {name: "Hospital Geral de Palmas (Unacon)"}
      ]
    }
  ];

  alList = [
    {
      city: "Arapiraca",
      hospitals: [
        {name: "Centro Hospitalar Manoel André / Chama (Unacon com Radioterapia)"},
        {name: "Hospital Afra Barbosa/Sociedade Médica Afra Barbosa SC (Unacon)"}
      ]
    },
    {
      city: "Maceió",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Maceió (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital do Açúcar/Fundação da Agroindústria de Açúcar e do Álcool de Alagoas (Unacon exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital Universitário Alberto Antunes/Universidade Federal de Alagoas (Cacon)"}
      ]
    }
  ];  

  baList = [
    {
      city: "Feira de Santana",
      hospitals: [
        {name: "Hospital Dom Pedro de Alcântara/Santa Casa de Misericórdia de Feira de Santana (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Ilhéus",
      hospitals: [
        {name: "Hospital São José Maternidade Santa Helena/Santa Casa de Misericórdia (Unacon)"},
      ]
    },
    {
      city: "Itabuna",
      hospitals: [
        {name: "Hospital Calixto Midlej Filho (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Manoel Novaes"},
        {name: "Juazeiro"},
        {name: "Hospital Regional de Juazeiro (Unacon)"}
      ]
    },
    {
      city: "Salvador",
      hospitals: [
        {name: "Centro Estadual de Oncologia - Cican (Unacon)"},
        {name: "Hospital Aristidez Maltez/Liga Baiana Contra o Câncer (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Geral Roberto Santos/SES (Unacon com Serviço de Radioterapia)"},
        {name: "Hospital Martagão Gesteira/Liga Álvaro Bahia Contra a Mortalidade Infantil (Unacon exclusivo de Oncologia Pediátrica)"},
        {name: "Hospital Professor Edgard Santos/Hospital Universitário MEC-Universidade Federal da Bahia/Fapex (Unacon com serviço de Hematologia)"},
        {name: "Hospital São Rafael/Fundação Monte Tabor (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Santa Isabel/Santa Casa de Misericórdia da Bahia (Unacon com serviços de Radioterapia e Hematologia)"},
        {name: "Hospital Santo Antônio/Obras Sociais Irmã Dulce (Unacon)"}
      ]
    },
    {
      city: "Teixeira de Freitas",
      hospitals: [
        {name: "Hospital Municipal de Teixeira de Freitas/Prefeitura Municipal de T. de Freitas (Unacon)"}
      ]
    },
    {
      city: "Vitória da Conquista",
      hospitals: [
        {name: "Conquista Assistência Médica Ltda/Onco-Med Rac (Unacon com Serviço de Radioterapia)"},
        {name: "Hospital Geral de Vitória da Conquista (Unacon com serviço de Radioterapia)"}
      ]
    }
  ]; 

  ceList = [
    {
      city: "Barbalha",
      hospitals: [
        {name: "Hospital e Maternidade São Vicente de Paulo (Unacon com serviço de Radioterapia e Hematologia)"},
      ]
    },
    {
      city: "Fortaleza",
      hospitals: [
        {name: "Centro Regional Integrado de Oncologia/CRIO (Unacon com Serviço de Radioterapia)"},
        {name: "Instituto de Câncer do Ceará (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Cura D'ars/Beneficência Camiliana (Unacon)"},
        {name: "Hospital Distrital Dr. Fernandes Távola/ Instituto Clínico de Fortaleza (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Geral de Fortaleza/Secretaria de Estado de Saúde (Unacon com serviço de Hematologia)"},
        {name: "Hospital Infantil Albert Sabin (Unacon exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital da Irmandade Beneficente Santa Casa de Misericórdia de Fortaleza (Unacon)"},
        {name: "Hospital Universitário Walter Cantídio/UFC (Unacon com serviço de Hematologia)"}
      ]
    },
    {
      city: "Sobral",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Sobral (Cacon)"},
      ]
    }
  ]; 

  maList = [
    {
      city: "Imperatriz",
      hospitals: [
        {name: "Hospital São Rafael (Unacon com Serviço de Radioterapia)"},
        {name: "Oncoradium (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "São Luís",
      hospitals: [
        {name: "Instituto Maranhense de Oncologia Aldenora Belo - Imoab/Fundação Antônio Jorge Dino (Cacon)"},
        {name: "Hospital Geral Tarquínio Lopes Filho/SES (Unacon com serviço de Hematologia)"}
      ]
    }
  ];

  pbList = [
    {
      city: "Campina Grande",
      hospitals: [
        {name: "Hospital da Fundação Assistência da Paraíba/FAP (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Universitário Alcides Carneiro/Universidade Federal de Campina Grande (Unacon serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "João Pessoa",
      hospitals: [
        {name: "Hospital Napoleão Laureano (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital São Vicente de Paula/Instituto Walfredo Guedes Pereira (Unacon)"}
      ]
    }
  ];

  peList = [
    {
      city: "Arcoverde",
      hospitals: [
        {name: "Hospital Memorial de Arcoverde (Unacon)"}
      ]
    },
    {
      city: "Caruaru",
      hospitals: [
        {name: "Hospital Regional do Agreste Dr. Waldemiro Ferreira/Fund. Saúde Amaury de Medeiros (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Garanhuns",
      hospitals: [
        {name: "Casa de Saúde e Maternidade Nossa Senhora do Perpétuo Socorro (Unacon)"}
      ]
    },
    {
      city: "Petrolina",
      hospitals: [
        {name: "Hospital Dom Malan/Prefeitura de Petrolina (Unacon)"}
      ]
    },
    {
      city: "Recife",
      hospitals: [
        {name: "Hospital Barão de Lucena/Fundação de Saúde Amaury de Medeiros (Unacon)"},
        {name: "Hospital de Câncer de Pernambuco/Sociedade Pernambucana do Combate ao Câncer (Unacon com serviços de Radioterapia e Oncologia Pediátrica)"},
        {name: "Hospital das Clínicas/Universidade Federal de Pernambuco (Unacon)"},
        {name: "Hospital da Fundação de Hematologia e Hemoterapia de Pernambuco/Hemope (Unacon exclusiva de Hematologia)"},
        {name: "Hospital Universitário Oswaldo Cruz (Unacon com serviços de Hematologia e Oncologia Pediátrica)"},
        {name: "Instituto de Medicina Integral Professor Fernando Figueira/Imip (Cacon)"}
      ]
    }
  ];

  piList = [
    {
      city: "Teresina",
      hospitals: [
        {name: "Hospital São Marcos/Sociedade Piauiense Combate ao Câncer (Cacon com serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Parnaíba",
      hospitals: [
        {name: "Maternidade Dr. Marques Bastos e Hospital Infantil Dr. Mirócles Véras (Unacon)"}
      ]
    }
  ];

  rnList = [
    {
      city: "Natal",
      hospitals: [
        {name: "Hospital do Coração de Natal (Unacon)"},
        {name: "Hospital Dr. Luiz Antônio/Liga Norteriograndense Contra o Câncer (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Infantil Varela Santiago/Instituto de Proteção e Assistência a Infância do Rio Grande do Norte (Unacon exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital Universitário Onofre Lopes - HUOL (Unacon)"},
        {name: "Natal Hospital Center S/C Ltda (Unacon)"}
      ]
    },
    {
      city: "Mossoró",
      hospitals: [
        {name: "Hospital da LMECC (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Wilson Rosado (Unacon)"}
      ]
    }
  ];

  seList = [
    {
      city: "Aracaju",
      hospitals: [
        {name: "Hospital de Cirurgia/Fundação de Beneficência Hospital de Cirurgia (Unacon com serviço de radioterapia)"},
        {name: "Hospital Governador João Alves Filho (Unacom com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"}
      ]
    }
  ];

  dfList = [
    {
      city: "Brasília",
      hospitals: [
        {name: "Hospital de Apoio Abrace (Cacon serviço de Oncologia Pediátrica)"},
        {name: "Hospital de Base do Distrito Federal/SES do Distrito Federal (Cacon serviço de Oncologia Pediátrica)"},
        {name: "Hospital Regional da Asa Norte (Cacon serviço de Oncologia Pediátrica)"},
        {name: "Hospital Regional de Ceilândia (Cacon serviço de Oncologia Pediátrica)"},
        {name: "Hospital Regional do Gama (Cacon serviço de Oncologia Pediátrica)"},
        {name: "Hospital Regional de Sobradinho (Cacon serviço de Oncologia Pediátrica)"},
        {name: "Hospital Regional de Taguatinga (Cacon serviço de Oncologia Pediátrica)"},
        {name: "Hospital Sarah /Associação das Pioneiras Sociais (Unacon) "},
        {name: "Hospital Universitário de Brasília/Fundação da Universidade de Brasília (Unacon com serviço de Radioterapia)"}
      ]
    }
  ];

  goList = [
    {
      city: "Anápolis",
      hospitals: [
        {name: "Hospital Evangélico Anápolis/Fundação James Fanstone (Unacon com serviço de Radioterapia)"},
        {name: "Santa Casa de Misericórdia de Anápolis/Fundação de Assistência Social de Anápolis (Unacon)"}
      ]
    },
    {
      city: "Goiânia",
      hospitals: [
        {name: "Hospital Araújo Jorge/Hospital do Câncer/Associação de Combate ao Câncer em Goiás (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital das Clínicas da Universidade Federal de Goiás (Unacon com serviço de Hematologia)"},
        {name: "Hospital da Santa Casa de Misericórdia de Goiânia (Unacon com serviço de Radioterapia)"}
      ]
    }
  ];

  mtList = [
    {
      city: "Cuiabá",
      hospitals: [
        {name: "Hospital Geral Universitário/Associação de Proteção à Maternidade e à Infância Cuiabá (Unacon com serviço de Hematologia)"},
        {name: "Hospital do Câncer de Mato Grosso/Associação Matogrossense de Combate ao Câncer - AMCC (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"},
        {name: "Hospital da Sociedade Beneficente Santa Casa de Misericórdia de Cuiabá (Unacon com serviços de Radioterapia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Rondonópolis",
      hospitals: [
        {name: "Santa Casa de Misericórdia e Maternidade de Rondonópolis (Unacon)"}
      ]
    },
    {
      city: "Sinop",
      hospitals: [
        {name: "Hospital Santo Antonio/Fundação de Saúde Comunitária de Sinop (Unacon)"}
      ]
    }
  ];

  msList = [
    {
      city: "Campo Grande",
      hospitals: [
        {name: "Hospital Universitário Maria Aparecida Pedrossian/UFMS (Unacon com serviço de Radioterapia)"},
        {name: "Hospital do Câncer Professor Dr. Alfredo Abrão/Fundação Carmem Prudente de Mato Grosso do Sul (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Regional de Mato Grosso do Sul/Fundação Serviços de Saúde de Mato Grosso do Sul (Unacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital da Santa Casa/Associação Beneficente de Campo Grande (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Corumbá",
      hospitals: [
        {name: "Santa Casa de Corumbá/Associação Beneficente de Corumbá (Unacon)"}
      ]
    },
    {
      city: "Dourados",
      hospitals: [
        {name: "Hospital Evangélico Dr.e Sra.Goldby King/Associação Beneficente Douradense (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Três Lagoas",
      hospitals: [
        {name: "Hospital Nossa Senhora Auxiliadora de Três Lagoas (Unacon)"}
      ]
    }
  ];

  esList = [
    {
      city: "Cachoeiro de Itapemirim",
      hospitals: [
        {name: "Hospital Evangélico de Cachoeiro de Itapemirim (Unacon com serviços de Radioterapia e de Hematologia)"}
      ]
    },
    {
      city: "Colatina",
      hospitals: [
        {name: "Hospital São José (Unacon)"}
      ]
    },
    {
      city: "Vila Velha",
      hospitals: [
        {name: "Hospital Evangélico de Vila Velha (Unacon com Serviço de Hematologia)"}
      ]
    },
    {
      city: "Vitória",
      hospitals: [
        {name: "Hospital Infantil Nossa Senhora da Glória (Unacon exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital Santa Rita de Cássia/Associação Feminina Educacional de Combate ao Câncer (Cacon)"},
        {name: "Hospital da Santa Casa de Misericórdia de Vitória (Unacon com serviço de Hematologia)"},
        {name: "Hospital Universitário Cassiano Antônio de Moraes (Unacon com Serviço de Hematologia)"}
      ]
    }
  ];

  mgList = [
    {
      city: "Alfenas",
      hospitals: [
        {name: "Casa de Caridade de Alfenas Nossa Sra. do Perpétuo Socorro (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Barbacena",
      hospitals: [
        {name: "Hospital Ibiapaba S/A (Unacon)"}
      ]
    },
    {
      city: "Belo Horizonte",
      hospitals: [
        {name: "Hospital Alberto Cavalcanti/Fundação Hospitalar do Estado de Minas Gerais (Unacon com serviço de Radioterapia)"},
        {name: "Hospital da Baleia/Fundação Benjamin Guimarães (Unacon com serviços de Radioterapuia Hematologia e Oncologia Pediátrica)"},
        {name: "Hospital das Clínicas da UFMG (Unacon com serviços de Hematologia e Oncologia Pediátrica)"},
        {name: "Hospital Felício Rocho/Fundação Felice Rosso (Unacon com serviços de Radioterapia e Hematologia)"},
        {name: "Hospital Luxemburgo/Associação dos Amigos do Hospital Mário Penna (Cacon)"},
        {name: "Hospital da Santa Casa de Misericórdia de Belo Horizonte (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital São Francisco de Assis (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Betim",
      hospitals: [
        {name: "Hospital Professor Oswaldo R. Franco (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Cataguases",
      hospitals: [
        {name: "Hospital de Cataguases (Unacon)"}
      ]
    },
    {
      city: "Divinópolis",
      hospitals: [
        {name: "Hospital São João de Deus/Fundação Geraldo Corrêa (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Governador Valadares",
      hospitals: [
        {name: "Hospital Samaritano/ Beneficência Social Bom Samaritano (Unacon com seriço de Radioterapia)"}
      ]
    },
    {
      city: "Ipatinga",
      hospitals: [
        {name: "Hospital Márcio Cunha/Fundação São Francisco Xavier (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Juiz de Fora",
      hospitals: [
        {name: "Hospital Dr. João Felício S/A (Unacon com serviços de Radioterapia e Hematologia)"},
        {name: "Hospital Maria José Baeta Reis/Asconcer (Unacon com serviços de Radioterapia e Hematologia)"},
        {name: "Instituto Oncológico (Unacon com serviços de Radioterapia e Hematologia)"},
      ]
    },
    {
      city: "Montes Claros",
      hospitals: [
        {name: "Hospital Dílson de Quadros Godinho/Fundação Dílson de Quadros Godinho (Unacon com serviços de Radioterapia e Hematologia)"},
        {name: "Hospital da Santa Casa de Montes Claros /Irmandade N. Sra. das Mercês de Montes Claros (Unacon com Serviço de Radioterapia)"},
      ]
    },
    {
      city: "Muriaé",
      hospitals: [
        {name: "Hospital do Câncer de Muriaé/Fundação Cristiano Varella (Cacon)"}
      ]
    },
    {
      city: "Passos",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Passos (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Patos de Minas",
      hospitals: [
        {name: "Hospital São Lucas (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Poços de Caldas",
      hospitals: [
        {name: "Clínica Memorial (Unacon com Serviço de Radioterapia)"},
        {name: "Hospital da Santa Casa de Misericórdia de Poços de Caldas (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Ponte Nova",
      hospitals: [
        {name: "Hospital Nossa Senhora das Dores/Irmandade H. Nossa Senhora das Dores (Unacon)"}
      ]
    },
    {
      city: "Pouso Alegre",
      hospitals: [
        {name: "Hospital das Clínicas Samuel Libânio de Pouso Alegre  (Unacon com Serviço de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "São João Del Rei",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de São João Del Rei (Unacon)"}
      ]
    },
    {
      city: "Sete Lagoas",
      hospitals: [
        {name: "Hospital Nossa Senhora das Graças (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Teófilo Otoni",
      hospitals: [
        {name: "Hospital Bom Samaritano (Unacon)"}
      ]
    },
    {
      city: "Uberaba",
      hospitals: [
        {name: "Hospital Dr. Hélio Angotti/Associação de Combate ao Câncer do Brasil Central (Unacon com Serviços de Radioterapia e de Hematologia)"},
        {name: "Hospital Escola da Universidade Federal do Triângulo Mineiro - Universidade Federal do Triângulo Mineiro (Unacon)"}
      ]
    },
    {
      city: "Uberlândia",
      hospitals: [
        {name: "Hospital de Clínicas de Uberlândia/Universidade Federal de Uberlândia (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Varginha",
      hospitals: [
        {name: "Hospital Bom Pastor/Fundação Hospitalar do Município de Varginha (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    }
  ];

  rjList = [
    {
      city: "Barra Mansa",
      hospitals: [
        {name: "Santa Casa de Misericórdia de Barra Mansa (Unacon com Serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Cabo Frio",
      hospitals: [
        {name: "Hospital Santa Isabel (Unacon)"}
      ]
    },
    {
      city: "Campos de Goytacazes",
      hospitals: [
        {name: "Hospital Universitário Álvaro Alvim (Unacon com serviço de Radioterapia)"},
        {name: "Instituto de Medicina Nuclear e Endocrinologia Ltda/IMNE (Unacon com serviço de Radioterapia e de Oncologia Pediátrica)"},
        {name: "Sociedade Portuguesa de Beneficência de Campos (Unacon)"}
      ]
    },
    {
      city: "Itaperuna",
      hospitals: [
        {name: "Hospital São José do Avaí/Conferência São José do Avaí (Unacon com serviço de Radioterapia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Niterói",
      hospitals: [
        {name: "Hospital Municipal Orêncio de Freitas (Hospital Geral com Cirurgia Oncológica)"},
        {name: "Hospital Universitário Antônio Pedro - Huap/UFF (Unacon com serviço de Hematologia)"}
      ]
    },
    {
      city: "Petrópolis",
      hospitals: [
        {name: "Hospital Alcides Carneiro (Unacon com serviço de Radioterapia)"},
        {name: "Centro de Terapia Oncológica SC LTDA (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Rio Bonito",
      hospitals: [
        {name: "Hospital Regional Darcy Vargas (Unacon)"}
      ]
    },
    {
      city: "Rio de Janeiro",
      hospitals: [
        {name: "Hospital dos Servidores do Estado (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"},
        {name: "Hospital Geral do Andaraí (Unacon)"},
        {name: "Hospital Geral de Bonsucesso (Unacon com serviço de Hematologia)"},
        {name: "Hospital Geral de Jacarepaguá/Hospital Cardoso Fontes (Unacon)"},
        {name: "Hospital Geral de Ipanema (Hospital Geral com Cirurgia Oncológica)"},
        {name: "Hospital Geral da Lagoa (Unacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Mário Kroeff (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Universitário Clementino Fraga Filho/UFRJ (Cacon)"},
        {name: "Hospital Universitário Gaffrée/UniRio (Unacon)"},
        {name: "Hospital Universitário Pedro Ernesto-Hupe/Uerj (Unacon com serviços de Radioterapia e Hematologia)"},
        {name: "Instituto de Puericultura e Pediatria Martagão Gesteira/UFRJ (Unacon Exclusiva de Oncologia Pediátrica)"},
        {name: "Instituto Estadual de Hematologia Arthur Siqueira Cavalcanti/Hemorio/Fundação Pró-Instituto de Hematologia do Rio de Janeiro (Unacon exclusiva de Hematologia)"},
        {name: "Instituto Nacional de Câncer/INCA (Cacon com serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Teresópolis",
      hospitals: [
        {name: "Hospital São José/Associação Congregação de Santa Catarina (Unacon)"}
      ]
    },
    {
      city: "Vassouras",
      hospitals: [
        {name: "Hospital Universitário Severino Sombra/Fundação Educacional Severino Sombra (Unacon)"}
      ]
    },
    {
      city: "Volta Redonda",
      hospitals: [
        {name: "Hospital Jardim Amália Ltda - Hinja (Unacon com serviço de Radioterapia)"}
      ]
    }
  ];

  spList = [
    {
      city: "Araçatuba",
      hospitals: [
        {name: "Hospital Sagrado Coração de Jesus/Santa Casa de Misericórdia de Araçatuba (Unacon com serviços de Radioterapia e de Hematologia)"},
        {name: "Araraquara"},
        {name: "Hospital da Irmandade Santa Casa de Misericórdia de Araraquara (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Araras",
      hospitals: [
        {name: "Hospital São Luiz/Irmandade da Santa Casa de Misericórdia de Araras (Unacon)"}
      ]
    },
    {
      city: "Assis",
      hospitals: [
        {name: "Hospital Regional de Assis (Unacon)"}
      ]
    },
    {
      city: "Avaré",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Avaré (Unacon)"}
      ]
    },
    {
      city: "Barretos",
      hospitals: [
        {name: "Hospital São Judas Tadeu/Fundação Pio XII (Cacon com serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Bauru",
      hospitals: [
        {name: "Hospital Estadual de Bauru (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Botucatu",
      hospitals: [
        {name: "Hospital das Clínicas UNESP/Universidade Estadual Paulista (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Bragança Paulista",
      hospitals: [
        {name: "Hospital Universitário São Francisco Bragança Paulista/Casa de Nossa Senhora da Paz Ação Social Franciscana (Unacon com serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Campinas",
      hospitals: [
        {name: "Centro Infantil de Investigação Hematológica Dr. Domingos A. Boldrini (Unacon exclusiva de Oncologia Pediátrica com serviço de Radioterapia)"},
        {name: "Hospital e Maternidade Celso Pierrô/Sociedade Campineira de Educação e Instrução (Unacon com serviço de Hematologia)"},
        {name: "Hospital das Clínicas da UNICAMP/Universidade Estadual de Campinas (Cacon)"},
        {name: "Hospital Municipal Dr. Mário Gatti (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Catanduva",
      hospitals: [
        {name: "Hospital Padre Albino – Catanduva/Fundação Padre Albino (Unacon)"}
      ]
    },
    {
      city: "Diadema",
      hospitals: [
        {name: "Hospital Estadual de Diadema – Hospital Serraria (Hospital geral com cirurgia Oncológica)"}
      ]
    },
    {
      city: "Franca",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Franca/Fundação Civil Casa de Misericórdia de Franca (Cacon com serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Guaratinguetá",
      hospitals: [
        {name: "Santa Casa de Misericórdia de Guaratinguetá (Unacon)"}
      ]
    },
    {
      city: "Guarujá",
      hospitals: [
        {name: "Hospital Santo Amaro/ Associação Santamarense de Beneficência do Guarujá (Unacon com serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Jacareí",
      hospitals: [
        {name: "Hospital São Francisco de Assis/Associação Casa Fonte da Vida (Unacon)"}
      ]
    },
    {
      city: "Jales",
      hospitals: [
        {name: "Fundação PIO XII - Unicade III (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Jaú",
      hospitals: [
        {name: "Hospital Amaral Carvalho/Fundação Amaral Carvalho (Cacon com serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Jundiaí",
      hospitals: [
        {name: "Hospital São Vicente/Hospital de Caridade São Vicente de Paulo (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Limeira",
      hospitals: [
        {name: "Hospital da Irmandade da Santa Casa de Misericórdia de Limeira (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Marília",
      hospitals: [
        {name: "Hospital das Clínicas Unidade Clínico Cirúrgico/ Fundação de Apoio à Faculdade de Medicina de Marília - Famar (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital da Irmandade da Santa Casa de Misericórdia de Marília (Unacon com serviços de Hematologia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Mogi das Cruzes",
      hospitals: [
        {name: "Hospital das Clínicas Luzia de Pinho Melo (Unacon com Serviço de Hematologia)"}
      ]
    },
    {
      city: "Mogi Guaçu",
      hospitals: [
        {name: "Hospital Municipal Dr. Tabajara Ramos (Unacon)"}
      ]
    },
    {
      city: "Pariquera-Açu",
      hospitals: [
        {name: "Hospital Regional Dr. Leopoldo Bevilacqua/Consórcio de Desenvolvimento Intermunicipal do Vale do Ribeira (Unacon)"}
      ]
    },
    {
      city: "Piracicaba",
      hospitals: [
        {name: "Hospital Fornecedores de Cana de Piracicaba Djaldrovandi/Associação dos Fornecedores de Cana de Piracicaba (Unacon com serviços de Radioterapia e Hematologia)"},
        {name: "Hospital da Irmandade da Santa Casa Misericórdia de Piracicaba (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Presidente Prudente",
      hospitals: [
        {name: "Hospital Dr. Aristóteles Oliveira Martins/Santa Casa de Misericórdia de Presidente Prudente (Unacon com serviço de Hematologia)"},
        {name: "Hospital Regional de Presidente Prudente (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"},
        {name: "Instituto de Radioterapia de Presidente Prudente (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Ribeirão Preto",
      hospitals: [
        {name: "Hospital das Clínicas Faepa/Fundação de Apoio ao Ensino, Pesquisa e Assistência/HCFMRP (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Imaculada Conceição/Sociedade Portuguesa de Beneficência (Cacon)"},
        {name: "Hospital da Santa Casa de Ribeirão Preto/Sociedade Beneficência Hospitalar Santa Casa de Misericórdia (Unacon com serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Rio Claro",
      hospitals: [
        {name: "Hospital da Irmandade Santa Casa de Misericórdia de Rio Claro (Unacon)"}
      ]
    },
    {
      city: "Santo André",
      hospitals: [
        {name: "Centro Hospitalar do Município de Santo André (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Estadual Mário Covas de Santo André (Unacon com serviço de Oncologia Pediátrica)"},
        {name: "Instituto de Radioterapia do ABC (Unacon com serviço de Radioterapia)"},
      ]
    },
    {
      city: "Santos",
      hospitals: [
        {name: "Hospital da Irmandade da Santa Casa de Misericórdia de Santos (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Santo Antônio Santos/Sociedade Portuguesa de Beneficência (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Guilherme Álvaro (Unacon)"}
      ]
    },
    {
      city: "São Bernardo do Campo",
      hospitals: [
        {name: "Hospital Anchieta São Bernardo do Campo/Fundação ABC (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Municipal Universitário de São Bernardo do Campo (Hospital Geral com Cirurgia Oncológica)"}
      ]
    },
    {
      city: "São Caetano do Sul",
      hospitals: [
        {name: "Hospital Materno-Infantil Márcia Braido (Unacon)"}
      ]
    },
    {
      city: "São Carlos",
      hospitals: [
        {name: "Hospital da Irmandade da Santa Casa de Misericórdia de São Carlos (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "São João da Boa Vista",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia Dona Carolina Malheiros (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "São José do Rio Preto",
      hospitals: [
        {name: "Hospital da Irmandade Santa Casa de Misericórdia de São José do Rio Preto (Cacon)"},
        {name: "Hospital de Base de São José do Rio Preto/Fundação Faculdade Regional de Medicina de São José do Rio Preto (Unacon com serviços de Hematologia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "São José dos Campos",
      hospitals: [
        {name: "Centro de Tratamento Fabiana Macedo de Morais (Unacon exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital e Maternidade Pio XII/ IPMMI - Obra de Ação Social Pio XII (Unacon com serviço de Hematologia)"},
        {name: "Hospital Materno Infantil Antoninho da Rocha Marmo/IPMM (Unacon)"}
      ]
    },
    {
      city: "São Paulo",
      hospitals: [
        {name: "Centro de Referência da Saúde da Mulher (Unacon)"},
        {name: "Conjunto Hospitalar do Mandaqui (Hospital geral com cirurgia Oncológica)"},
        {name: "Hospital do Câncer A. C Camargo/Fundação Antônio Prudente (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Central da Santa Casa de São Paulo/Irmandade da Santa Casa de Misericórdia de São Paulo (Unacon com serviços de Hematologia e de Oncologia Pediátrica)"},
        {name: "Hospital de Clínicas da Faculdade de Medicina da USP/Fundação Faculdade de Medicina (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Geral de Vila Nova Cachoeirinha (Hospital geral com cirurgia Oncológica)"},
        {name: "Hospital Heliópolis (Unacon)"},
        {name: "Hospital Infantil Darcy Vargas (Unacon exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital Ipiranga/Unidade de Gestão Assistencial II (Unacon)"},
        {name: "Hospital São Joaquim Beneficência Portuguesa/Real e Benemérita Associação Portuguesa de Beneficência (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Santa Marcelina/Casa de Saúde Santa Marcelina (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital São Paulo Unidade I/Escola Paulista de Medicina/Unifesp (Cacon)"},
        {name: "Hospital de Transplante do Estado de São Paulo Euryclides de Jesus Zerbini/Hospital Brigadeiro (Unacon com serviço de Hematologia)"},
        {name: "Instituto Brasileiro de Controle do Câncer - IBCC (Unacon com serviço de Radioterapia)"},
        {name: "Instituto de Oncologia Pediátrica/Grupo de Apoio ao Adolescente e a Criança com Câncer - GRAAC (Unacon Exclusiva de Oncologia Pediátrica com Serviço de Radioterapia)"},
        {name: "Instituto do Câncer Arnaldo Vieira de Carvalho (Cacon)"},
        {name: "Instituto do Câncer do Estado de São Paulo/SES (Cacon)"}
      ]
    },
    {
      city: "Sorocaba",
      hospitals: [
        {name: "Conjunto Hospitalar de Sorocaba (Unacon com serviço de Hematologia)"},
        {name: "Hospital da Irmandade Santa Casa de Misericórdia de Sorocaba (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Sara Rolin Caracante (Unacon exclusiva de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Taboão da Serra",
      hospitals: [
        {name: "Hospital Geral de Pirajussara (Hospital geral com Cirurgia Oncológica)"}
      ]
    },
    {
      city: "Taubaté",
      hospitals: [
        {name: "Hospital Regional do Vale do Paraíba/Sociedade Beneficente São Camilo (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Tupã",
      hospitals: [
        {name: "Hospital São Francisco de Tupã/Sociedade Beneficente São Francisco de Assis de Tupã (Unacon)"}
      ]
    }
  ];

  prList = [
    {
      city: "Apucarana",
      hospitals: [
        {name: "Hospital da Providência/Província Brasileira da Congregação Irmãs Filhas da Caridade de São Vicente de Paulo (Unacon)"}
      ]
    },
    {
      city: "Campina Grande do Sul",
      hospitals: [
        {name: "Hospital Angelina Caron/Sociedade Hospitalar Angelina Caron  (Cacon com Serviço de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Campo Mourão",
      hospitals: [
        {name: "Hospital Santa Casa de Misericórdia/Associação Beneficiente Hospitalar Santa Casa de Misericórdia (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Campo Largo",
      hospitals: [
        {name: "Hospital São Lucas (Unacon)"}
      ]
    },
    {
      city: "Cascavel",
      hospitals: [
        {name: "Hospital do Câncer UOPECCAN/União Paranaense de Estudo e Combate ao Câncer (Cacon com Serviço de Oncologia Pediátrica)"},
        {name: "Hospital do Centro de Oncologia Cascavel Ltda/CEONC (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Curitiba",
      hospitals: [
        {name: "Hospital de Clínicas/Universidade Federal do Paraná (Unacon com Serviços de Hematologia e de Oncologia Pediátrica)"},
        {name: "Hospital Erasto Gaertner/Liga Paranaense de Combate ao Câncer (Cacon com Serviço de Oncologia Pediátrica)"},
        {name: "Hospital Infantil Pequeno Príncipe/Associação Hospitalar de Proteção à Infância Dr. Raul Carneiro (Unacon Exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital Santa Casa/Irmandade da Santa Casa de Misericórdia de Curitiba (Unacon)"},
        {name: "Hospital São Vicente/Fundação de Estudos das Doenças do Fígado (Unacon)"},
        {name: "Hospital Universitário Evangélico de Curitiba (Unacon com Serviço de Hematologia)"}
      ]
    },
    {
      city: "Guarapuava",
      hospitals: [
        {name: "Hospital de Caridade São Vicente de Paulo (Unacon)"}
      ]
    },
    {
      city: "Foz do Iguaçu",
      hospitals: [
        {name: "Hospital Ministro Costa Cavalcante/Fundação de Saúde Itaiguapy (Cacon)"}
      ]
    },
    {
      city: "Francisco Beltrão",
      hospitals: [
        {name: "Centro de Oncologia de Cascavel - CEONC de Francisco Beltrão - Francisco Beltrão/PR (Unacon)"}
      ]
    },
    {
      city: "Londrina",
      hospitals: [
        {name: "Hospital Universitário Regional Norte do Paraná/Universidade Estadual de Londrina  (Unacon com Serviços de Hematologia e de Oncologia Pediátrica)"},
        {name: "Instituto de Câncer de Londrina (Cacon)"}
      ]
    },
    {
      city: "Maringá",
      hospitals: [
        {name: "Hospital e Maternidade Santa Rita (Unacon com Serviço de Radioterapia)"},
        {name: "Centro de Oncologia e Radioterapia Santana Ltda (Unacon com Serviço de Radioterapia)"},
        {name: "Hospital do Câncer de Maringá/Instituto de  Oncologia e  Hematologia Maringá SC Ltda (Unacon com Serviços de Radioterapia e de Hematologia)"}
      ]
    },
    {
      city: "Pato Branco",
      hospitals: [
        {name: "Hospital Policlínica Pato Branco SA (Unacon com Serviço de Radioterapia)"}
      ]
    },
    {
      city: "Ponta Grossa",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Ponta Grossa (Unacon com Serviço de Radioterapia)"}
      ]
    }
  ];

  rsList = [
    {
      city: "Bagé",
      hospitals: [
        {name: "Santa Casa de Caridade de Bagé (Unacon)"}
      ]
    },
    {
      city: "Bento Gonçalves",
      hospitals: [
        {name: "Hospital Tacchini/Sociedade Dr. Barholomeu Tacchini (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Cachoeira Sul",
      hospitals: [
        {name: "Hospital Caridade Beneficência Cachoeira do Sul (Unacon)"}
      ]
    },
    {
      city: "Canoas",
      hospitals: [
        {name: "Hospital Nossa Senhora das Graças ( Unacon com serviço de Hematologia)"}
      ]
    },
    {
      city: "Carazinho",
      hospitals: [
        {name: "Hospital de Caridade e Beneficência (Unacon)"}
      ]
    },
    {
      city: "Caxias do Sul",
      hospitals: [
        {name: "Hospital Geral/Fundação UCS Hospital Geral de Caxias do Sul (Unacon com serviços de Hematologia e Oncologia Pediátrica)"},
        {name: "Hospital Pompeia/Pio Sodalício Damas Caridade (Unacon)"}
      ]
    },
    {
      city: "Cruz Alta",
      hospitals: [
        {name: "Hopital São Vicente de Paulo/Associação Damas Caridade (Unacon com serviço de Hematologia)"}
      ]
    },
    {
      city: "Erechim",
      hospitals: [
        {name: "Hospital da Fundação Hospitalar Santa Terezinha de Erechim (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Ijuí",
      hospitals: [
        {name: "Hospital da Associação Hospital. de Caridade de Ijuí (Cacon)"}
      ]
    },
    {
      city: "Lajeado",
      hospitals: [
        {name: "Hospital Bruno Born/Sociedade Beneficente de Caridade de Lajeado (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Novo Hamburgo",
      hospitals: [
        {name: "Hospital Regina /Associação Congregação Santa Catarina (Unacon)"}
      ]
    },
    {
      city: "Passo Fundo",
      hospitals: [
        {name: "Hospital São Vicente de Paulo/Associação  Beneficente São Vicente de Paulo (Unacon com serviços de radioterapia, Hematologia e Oncologia Pediátrica)"},
        {name: "Hospital da Cidade de Passo Fundo (Unacon)"}
      ]
    },
    {
      city: "Pelotas",
      hospitals: [
        {name: "Hospital Escola da Universidade Federal de Pelotas/Fundação de Apoio Universitário (Unacon com serviços de Radioterapia e Hematologia)"},
        {name: "Hospital da Santa Casa de Misericórdia de Pelotas (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Porto Alegre",
      hospitals: [
        {name: "Hospital de Clínicas de Porto Alegre (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital São Lucas da PUCRS/União Brasileira de Educação e Assistência (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"},
        {name: "Hospital Fêmina S/A (Unacon)"},
        {name: "Hospital da Santa Casa de Misericórdia de Porto Alegre (Cacon com serviço de Oncologia Pediátrica)"},
        {name: "Hospital Nossa Senhora da Conceição S/A (Unacon com serviços de Hematologia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Rio Grande",
      hospitals: [
        {name: "Hospital da Associação de Caridade Santa Casa de Caridade do Rio Grande (Unacon com serviços de Radioterapia e Hematologia)"}
      ]
    },
    {
      city: "Santa Cruz do Sul",
      hospitals: [
        {name: "Hospital Ana Nery (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Santa Rosa",
      hospitals: [
        {name: "Hospital Vida Saúde/Associação Hospital Caridade de Santa Rosa (Unacon com serviços de Radioterapia e  Hematologia)"}
      ]
    },
    {
      city: "São Leopoldo",
      hospitals: [
        {name: "Hospital da Fundação Hospital Centenário (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Santa Maria",
      hospitals: [
        {name: "Hospital Universitário de Santa Maria  (Unacon com serviços de Radioterapia, Hematologia e Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Uruguaiana",
      hospitals: [
        {name: "Hospital da Santa Casa de Caridade de Uruguaiana (Unacon com serviço de Radioterapia)"}
      ]
    }
  ];

  scList = [
    {
      city: "Blumenau",
      hospitals: [
        {name: "Hospital Santa Isabel/Sociedade Divina Providência (Unacon com serviço de Radioterapia)"},
        {name: "Hospital Santo Antonio/Fundação Hospitalar de Blumenau (Unacon)"}
      ]
    },
    {
      city: "Chapecó",
      hospitals: [
        {name: "Hospital Regional do Oeste/Associação Hospitalar Lenoir Vargas Ferreira (Unacon com serviços de Radioterapia e de Hematologia)"}
      ]
    },
    {
      city: "Criciúma",
      hospitals: [
        {name: "Hospital São José/Sociedade Caritativa Santo Agostinho (Unacon com serviços de Radioterapia e de Hematologia)"}
      ]
    },
    {
      city: "Florianópolis",
      hospitals: [
        {name: "Centro de Pesquisas Oncológicas/CEPON (Unacon com serviços de Radioterapia e de Hematologia)"},
        {name: "Hospital Governador Celso Ramos (Unacon com serviços de Radioterapia e de Hematologia)"},
        {name: "Hospital Carmela Dutra (Hematologia)"},
        {name: "Hospital Infantil Joana de Gusmão (Unacon exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital Universitário/Universidade Federal de Santa Catarina (Unacon com serviço de Hematologia)"}
      ]
    },
    {
      city: "Itajaí",
      hospitals: [
        {name: "Hospital e Maternidade Marieta Konder Bornhausen/Inst. das Pequenas Missionárias Mª Imaculada (Unacon)"}
      ]
    },
    {
      city: "Jaraguá do Sul",
      hospitals: [
        {name: "Hospital São José/ Sociedade Divina Providência (Unacon com serviço de Radioterapia)"}
      ]
    },
    {
      city: "Joaçaba",
      hospitals: [
        {name: "Hospital Univesitário Santa Terezinha/Fundação Universidade do Oeste de Santa Catarina (Unacon)"}
      ]
    },
    {
      city: "Joinville",
      hospitals: [
        {name: "Hospital Municipal São José (Cacon)"},
        {name: "Hospital Materno Infantil Dr Jesser Amarante Faria (Unacon exclusiva de Oncologia Pediátrica)"}
      ]
    },
    {
      city: "Lages",
      hospitals: [
        {name: "Hospital Geral e Maternidade Tereza Ramos (Unacon)"}
      ]
    },
    {
      city: "Porto União",
      hospitals: [
        {name: "Hospital de Caridade São Braz de Porto União (Unacon)"}
      ]
    },
    {
      city: "Tubarão",
      hospitals: [
        {name: "Hospital Nossa Senhora da Conceição/Sociedade Divina Providência (Unacon)"}
      ]
    }
  ];

  constructor(public modalCtrl: ModalController) {}

  public toggleModal(estateName, estateUf, ufHospitals) {
    this.modalCtrl.create(HelpMapModalPage, {estateName: estateName, estateUf: estateUf, ufHospitals: ufHospitals}).present();
  }

}
