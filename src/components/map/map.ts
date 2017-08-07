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
        {name: "Hospital da Fundação Hospitalar Estadual do Acre"}
      ]
    }
  ];

  amList = [
    {
      city: "Manaus",
      hospitals: [
        {name: "Hospital da Fundação Centro de Controle de Oncologia/Cecon"}
      ]
    }
  ];

  apList = [
    {
      city: "Macapá",
      hospitals: [
        {name: "Hospital de Clínicas Dr. Alberto Lima"}
      ]
    }
  ];

  paList = [
    {
      city: "Belém",
      hospitals: [
        {name: "Hospital Ofir Loyola"}
      ]
    },
    {
      city: "Santarém",
      hospitals: [
        {name: "Hospital Regional do Baixo Amazonas Dr. Waldemar Penna"}
      ]
    }
  ];

  roList = [
    {
      city: "Cacoal",
      hospitals: [
        {name: "Hospital Regional de Cacoal HRC"}
      ]
    },
    {
      city: "Porto Velho",
      hospitals: [
        {name: "Hospital de Base Dr. Ary Pinheiro/Hospital de Base Porto Velho"},
        {name: "Instituto de Oncologia e Radioterapia São Pellegrino"}
      ]
    }
  ];

  rrList = [
    {
      city: "Boa Vista",
      hospitals: [
        {name: "Hospital Geral de Roraima/HGR"}
      ]
    }
  ];

  toList = [
    {
      city: "Araguaína",
      hospitals: [
        {name: "Hospital de Referência de Araguaína"}
      ]
    },
    {
      city: "Palmas",
      hospitals: [
        {name: "Hospital Geral de Palmas"}
      ]
    }
  ];

  alList = [
    {
      city: "Arapiraca",
      hospitals: [
        {name: "Centro Hospitalar Manoel André / Chama"},
        {name: "Hospital Afra Barbosa/Sociedade Médica Afra Barbosa SC"}
      ]
    },
    {
      city: "Maceió",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Maceió"},
        {name: "Hospital do Açúcar/Fundação da Agroindústria de Açúcar e do Álcool de Alagoas"},
        {name: "Hospital Universitário Alberto Antunes/Universidade Federal de Alagoas"}
      ]
    }
  ];  

  baList = [
    {
      city: "Feira de Santana",
      hospitals: [
        {name: "Hospital Dom Pedro de Alcântara/Santa Casa de Misericórdia de Feira de Santana"}
      ]
    },
    {
      city: "Ilhéus",
      hospitals: [
        {name: "Hospital São José Maternidade Santa Helena/Santa Casa de Misericórdia"},
      ]
    },
    {
      city: "Itabuna",
      hospitals: [
        {name: "Hospital Calixto Midlej Filho"},
        {name: "Hospital Manoel Novaes"},
        {name: "Juazeiro"},
        {name: "Hospital Regional de Juazeiro"}
      ]
    },
    {
      city: "Salvador",
      hospitals: [
        {name: "Centro Estadual de Oncologia - Cican"},
        {name: "Hospital Aristidez Maltez/Liga Baiana Contra o Câncer"},
        {name: "Hospital Geral Roberto Santos/SES"},
        {name: "Hospital Martagão Gesteira/Liga Álvaro Bahia Contra a Mortalidade Infantil"},
        {name: "Hospital Professor Edgard Santos/Hospital Universitário MEC-Universidade Federal da Bahia/Fapex"},
        {name: "Hospital São Rafael/Fundação Monte Tabor"},
        {name: "Hospital Santa Isabel/Santa Casa de Misericórdia da Bahia"},
        {name: "Hospital Santo Antônio/Obras Sociais Irmã Dulce"}
      ]
    },
    {
      city: "Teixeira de Freitas",
      hospitals: [
        {name: "Hospital Municipal de Teixeira de Freitas/Prefeitura Municipal de T. de Freitas"}
      ]
    },
    {
      city: "Vitória da Conquista",
      hospitals: [
        {name: "Conquista Assistência Médica Ltda/Onco-Med Rac"},
        {name: "Hospital Geral de Vitória da Conquista"}
      ]
    }
  ]; 

  ceList = [
    {
      city: "Barbalha",
      hospitals: [
        {name: "Hospital e Maternidade São Vicente de Paulo"},
      ]
    },
    {
      city: "Fortaleza",
      hospitals: [
        {name: "Centro Regional Integrado de Oncologia/CRIO"},
        {name: "Instituto de Câncer do Ceará"},
        {name: "Hospital Cura D'ars/Beneficência Camiliana"},
        {name: "Hospital Distrital Dr. Fernandes Távola/ Instituto Clínico de Fortaleza"},
        {name: "Hospital Geral de Fortaleza/Secretaria de Estado de Saúde"},
        {name: "Hospital Infantil Albert Sabin (Unacon exclusiva de Oncologia Pediátrica)"},
        {name: "Hospital da Irmandade Beneficente Santa Casa de Misericórdia de Fortaleza"},
        {name: "Hospital Universitário Walter Cantídio/UFC"}
      ]
    },
    {
      city: "Sobral",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Sobral"},
      ]
    }
  ]; 

  maList = [
    {
      city: "Imperatriz",
      hospitals: [
        {name: "Hospital São Rafael"},
        {name: "Oncoradium"}
      ]
    },
    {
      city: "São Luís",
      hospitals: [
        {name: "Instituto Maranhense de Oncologia Aldenora Belo - Imoab/Fundação Antônio Jorge Dino"},
        {name: "Hospital Geral Tarquínio Lopes Filho/SES"}
      ]
    }
  ];

  pbList = [
    {
      city: "Campina Grande",
      hospitals: [
        {name: "Hospital da Fundação Assistência da Paraíba/FAP"},
        {name: "Hospital Universitário Alcides Carneiro/Universidade Federal de Campina Grande"}
      ]
    },
    {
      city: "João Pessoa",
      hospitals: [
        {name: "Hospital Napoleão Laureano"},
        {name: "Hospital São Vicente de Paula/Instituto Walfredo Guedes Pereira"}
      ]
    }
  ];

  peList = [
    {
      city: "Arcoverde",
      hospitals: [
        {name: "Hospital Memorial de Arcoverde"}
      ]
    },
    {
      city: "Caruaru",
      hospitals: [
        {name: "Hospital Regional do Agreste Dr. Waldemiro Ferreira/Fund. Saúde Amaury de Medeiros"}
      ]
    },
    {
      city: "Garanhuns",
      hospitals: [
        {name: "Casa de Saúde e Maternidade Nossa Senhora do Perpétuo Socorro"}
      ]
    },
    {
      city: "Petrolina",
      hospitals: [
        {name: "Hospital Dom Malan/Prefeitura de Petrolina"}
      ]
    },
    {
      city: "Recife",
      hospitals: [
        {name: "Hospital Barão de Lucena/Fundação de Saúde Amaury de Medeiros"},
        {name: "Hospital de Câncer de Pernambuco/Sociedade Pernambucana do Combate ao Câncer"},
        {name: "Hospital das Clínicas/Universidade Federal de Pernambuco"},
        {name: "Hospital da Fundação de Hematologia e Hemoterapia de Pernambuco/Hemope"},
        {name: "Hospital Universitário Oswaldo Cruz"},
        {name: "Instituto de Medicina Integral Professor Fernando Figueira/Imip"}
      ]
    }
  ];

  piList = [
    {
      city: "Teresina",
      hospitals: [
        {name: "Hospital São Marcos/Sociedade Piauiense Combate ao Câncer"}
      ]
    },
    {
      city: "Parnaíba",
      hospitals: [
        {name: "Maternidade Dr. Marques Bastos e Hospital Infantil Dr. Mirócles Véras"}
      ]
    }
  ];

  rnList = [
    {
      city: "Natal",
      hospitals: [
        {name: "Hospital do Coração de Natal"},
        {name: "Hospital Dr. Luiz Antônio/Liga Norteriograndense Contra o Câncer"},
        {name: "Hospital Infantil Varela Santiago/Instituto de Proteção e Assistência a Infância do Rio Grande do Norte"},
        {name: "Hospital Universitário Onofre Lopes - HUOL"},
        {name: "Natal Hospital Center S/C Ltda"}
      ]
    },
    {
      city: "Mossoró",
      hospitals: [
        {name: "Hospital da LMECC"},
        {name: "Hospital Wilson Rosado"}
      ]
    }
  ];

  seList = [
    {
      city: "Aracaju",
      hospitals: [
        {name: "Hospital de Cirurgia/Fundação de Beneficência Hospital de Cirurgia"},
        {name: "Hospital Governador João Alves Filho"}
      ]
    }
  ];

  dfList = [
    {
      city: "Brasília",
      hospitals: [
        {name: "Hospital de Apoio Abrace"},
        {name: "Hospital de Base do Distrito Federal/SES do Distrito Federal"},
        {name: "Hospital Regional da Asa Norte"},
        {name: "Hospital Regional de Ceilândia"},
        {name: "Hospital Regional do Gama"},
        {name: "Hospital Regional de Sobradinho"},
        {name: "Hospital Regional de Taguatinga"},
        {name: "Hospital Sarah /Associação das Pioneiras Sociais"},
        {name: "Hospital Universitário de Brasília/Fundação da Universidade de Brasília"}
      ]
    }
  ];

  goList = [
    {
      city: "Anápolis",
      hospitals: [
        {name: "Hospital Evangélico Anápolis/Fundação James Fanstone"},
        {name: "Santa Casa de Misericórdia de Anápolis/Fundação de Assistência Social de Anápolis"}
      ]
    },
    {
      city: "Goiânia",
      hospitals: [
        {name: "Hospital Araújo Jorge/Hospital do Câncer/Associação de Combate ao Câncer em Goiás"},
        {name: "Hospital das Clínicas da Universidade Federal de Goiás"},
        {name: "Hospital da Santa Casa de Misericórdia de Goiânia"}
      ]
    }
  ];

  mtList = [
    {
      city: "Cuiabá",
      hospitals: [
        {name: "Hospital Geral Universitário/Associação de Proteção à Maternidade e à Infância Cuiabá"},
        {name: "Hospital do Câncer de Mato Grosso/Associação Matogrossense de Combate ao Câncer - AMCC"},
        {name: "Hospital da Sociedade Beneficente Santa Casa de Misericórdia de Cuiabá"}
      ]
    },
    {
      city: "Rondonópolis",
      hospitals: [
        {name: "Santa Casa de Misericórdia e Maternidade de Rondonópolis"}
      ]
    },
    {
      city: "Sinop",
      hospitals: [
        {name: "Hospital Santo Antonio/Fundação de Saúde Comunitária de Sinop"}
      ]
    }
  ];

  msList = [
    {
      city: "Campo Grande",
      hospitals: [
        {name: "Hospital Universitário Maria Aparecida Pedrossian/UFMS"},
        {name: "Hospital do Câncer Professor Dr. Alfredo Abrão/Fundação Carmem Prudente de Mato Grosso do Sul"},
        {name: "Hospital Regional de Mato Grosso do Sul/Fundação Serviços de Saúde de Mato Grosso do Sul"},
        {name: "Hospital da Santa Casa/Associação Beneficente de Campo Grande"}
      ]
    },
    {
      city: "Corumbá",
      hospitals: [
        {name: "Santa Casa de Corumbá/Associação Beneficente de Corumbá"}
      ]
    },
    {
      city: "Dourados",
      hospitals: [
        {name: "Hospital Evangélico Dr.e Sra.Goldby King/Associação Beneficente Douradense"}
      ]
    },
    {
      city: "Três Lagoas",
      hospitals: [
        {name: "Hospital Nossa Senhora Auxiliadora de Três Lagoas"}
      ]
    }
  ];

  esList = [
    {
      city: "Cachoeiro de Itapemirim",
      hospitals: [
        {name: "Hospital Evangélico de Cachoeiro de Itapemirim"}
      ]
    },
    {
      city: "Colatina",
      hospitals: [
        {name: "Hospital São José"}
      ]
    },
    {
      city: "Vila Velha",
      hospitals: [
        {name: "Hospital Evangélico de Vila Velha"}
      ]
    },
    {
      city: "Vitória",
      hospitals: [
        {name: "Hospital Infantil Nossa Senhora da Glória"},
        {name: "Hospital Santa Rita de Cássia/Associação Feminina Educacional de Combate ao Câncer"},
        {name: "Hospital da Santa Casa de Misericórdia de Vitória"},
        {name: "Hospital Universitário Cassiano Antônio de Moraes"}
      ]
    }
  ];

  mgList = [
    {
      city: "Alfenas",
      hospitals: [
        {name: "Casa de Caridade de Alfenas Nossa Sra. do Perpétuo Socorro"}
      ]
    },
    {
      city: "Barbacena",
      hospitals: [
        {name: "Hospital Ibiapaba S/A"}
      ]
    },
    {
      city: "Belo Horizonte",
      hospitals: [
        {name: "Hospital Alberto Cavalcanti/Fundação Hospitalar do Estado de Minas Gerais"},
        {name: "Hospital da Baleia/Fundação Benjamin Guimarães"},
        {name: "Hospital das Clínicas da UFMG"},
        {name: "Hospital Felício Rocho/Fundação Felice Rosso"},
        {name: "Hospital Luxemburgo/Associação dos Amigos do Hospital Mário Penna"},
        {name: "Hospital da Santa Casa de Misericórdia de Belo Horizonte"},
        {name: "Hospital São Francisco de Assis"}
      ]
    },
    {
      city: "Betim",
      hospitals: [
        {name: "Hospital Professor Oswaldo R. Franco"}
      ]
    },
    {
      city: "Cataguases",
      hospitals: [
        {name: "Hospital de Cataguases"}
      ]
    },
    {
      city: "Divinópolis",
      hospitals: [
        {name: "Hospital São João de Deus/Fundação Geraldo Corrêa"}
      ]
    },
    {
      city: "Governador Valadares",
      hospitals: [
        {name: "Hospital Samaritano/ Beneficência Social Bom Samaritano"}
      ]
    },
    {
      city: "Ipatinga",
      hospitals: [
        {name: "Hospital Márcio Cunha/Fundação São Francisco Xavier"}
      ]
    },
    {
      city: "Juiz de Fora",
      hospitals: [
        {name: "Hospital Dr. João Felício S/A"},
        {name: "Hospital Maria José Baeta Reis/Asconcer"},
        {name: "Instituto Oncológico"},
      ]
    },
    {
      city: "Montes Claros",
      hospitals: [
        {name: "Hospital Dílson de Quadros Godinho/Fundação Dílson de Quadros Godinho"},
        {name: "Hospital da Santa Casa de Montes Claros /Irmandade N. Sra. das Mercês de Montes Claros"},
      ]
    },
    {
      city: "Muriaé",
      hospitals: [
        {name: "Hospital do Câncer de Muriaé/Fundação Cristiano Varella"}
      ]
    },
    {
      city: "Passos",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Passos"}
      ]
    },
    {
      city: "Patos de Minas",
      hospitals: [
        {name: "Hospital São Lucas"}
      ]
    },
    {
      city: "Poços de Caldas",
      hospitals: [
        {name: "Clínica Memorial"},
        {name: "Hospital da Santa Casa de Misericórdia de Poços de Caldas"}
      ]
    },
    {
      city: "Ponte Nova",
      hospitals: [
        {name: "Hospital Nossa Senhora das Dores/Irmandade H. Nossa Senhora das Dores"}
      ]
    },
    {
      city: "Pouso Alegre",
      hospitals: [
        {name: "Hospital das Clínicas Samuel Libânio de Pouso Alegre"}
      ]
    },
    {
      city: "São João Del Rei",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de São João Del Rei"}
      ]
    },
    {
      city: "Sete Lagoas",
      hospitals: [
        {name: "Hospital Nossa Senhora das Graças"}
      ]
    },
    {
      city: "Teófilo Otoni",
      hospitals: [
        {name: "Hospital Bom Samaritano"}
      ]
    },
    {
      city: "Uberaba",
      hospitals: [
        {name: "Hospital Dr. Hélio Angotti/Associação de Combate ao Câncer do Brasil Central"},
        {name: "Hospital Escola da Universidade Federal do Triângulo Mineiro - Universidade Federal do Triângulo Mineiro"}
      ]
    },
    {
      city: "Uberlândia",
      hospitals: [
        {name: "Hospital de Clínicas de Uberlândia/Universidade Federal de Uberlândia"}
      ]
    },
    {
      city: "Varginha",
      hospitals: [
        {name: "Hospital Bom Pastor/Fundação Hospitalar do Município de Varginha"}
      ]
    }
  ];

  rjList = [
    {
      city: "Barra Mansa",
      hospitals: [
        {name: "Santa Casa de Misericórdia de Barra Mansa"}
      ]
    },
    {
      city: "Cabo Frio",
      hospitals: [
        {name: "Hospital Santa Isabel"}
      ]
    },
    {
      city: "Campos de Goytacazes",
      hospitals: [
        {name: "Hospital Universitário Álvaro Alvim"},
        {name: "Instituto de Medicina Nuclear e Endocrinologia Ltda/IMNE"},
        {name: "Sociedade Portuguesa de Beneficência de Campos"}
      ]
    },
    {
      city: "Itaperuna",
      hospitals: [
        {name: "Hospital São José do Avaí/Conferência São José do Avaí"}
      ]
    },
    {
      city: "Niterói",
      hospitals: [
        {name: "Hospital Municipal Orêncio de Freitas"},
        {name: "Hospital Universitário Antônio Pedro - Huap/UFF"}
      ]
    },
    {
      city: "Petrópolis",
      hospitals: [
        {name: "Hospital Alcides Carneiro"},
        {name: "Centro de Terapia Oncológica SC LTDA"}
      ]
    },
    {
      city: "Rio Bonito",
      hospitals: [
        {name: "Hospital Regional Darcy Vargas"}
      ]
    },
    {
      city: "Rio de Janeiro",
      hospitals: [
        {name: "Hospital dos Servidores do Estado"},
        {name: "Hospital Geral do Andaraí"},
        {name: "Hospital Geral de Bonsucesso"},
        {name: "Hospital Geral de Jacarepaguá/Hospital Cardoso Fontes"},
        {name: "Hospital Geral de Ipanema"},
        {name: "Hospital Geral da Lagoa"},
        {name: "Hospital Mário Kroeff"},
        {name: "Hospital Universitário Clementino Fraga Filho/UFRJ"},
        {name: "Hospital Universitário Gaffrée/UniRio"},
        {name: "Hospital Universitário Pedro Ernesto-Hupe/Uerj"},
        {name: "Instituto de Puericultura e Pediatria Martagão Gesteira/UFRJ"},
        {name: "Instituto Estadual de Hematologia Arthur Siqueira Cavalcanti/Hemorio/Fundação Pró-Instituto de Hematologia do Rio de Janeiro"},
        {name: "Instituto Nacional de Câncer/INCA"}
      ]
    },
    {
      city: "Teresópolis",
      hospitals: [
        {name: "Hospital São José/Associação Congregação de Santa Catarina"}
      ]
    },
    {
      city: "Vassouras",
      hospitals: [
        {name: "Hospital Universitário Severino Sombra/Fundação Educacional Severino Sombra"}
      ]
    },
    {
      city: "Volta Redonda",
      hospitals: [
        {name: "Hospital Jardim Amália Ltda - Hinja"}
      ]
    }
  ];

  spList = [
    {
      city: "Araçatuba",
      hospitals: [
        {name: "Hospital Sagrado Coração de Jesus/Santa Casa de Misericórdia de Araçatuba"},
        {name: "Araraquara"},
        {name: "Hospital da Irmandade Santa Casa de Misericórdia de Araraquara"}
      ]
    },
    {
      city: "Araras",
      hospitals: [
        {name: "Hospital São Luiz/Irmandade da Santa Casa de Misericórdia de Araras"}
      ]
    },
    {
      city: "Assis",
      hospitals: [
        {name: "Hospital Regional de Assis"}
      ]
    },
    {
      city: "Avaré",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Avaré"}
      ]
    },
    {
      city: "Barretos",
      hospitals: [
        {name: "Hospital São Judas Tadeu/Fundação Pio XII"}
      ]
    },
    {
      city: "Bauru",
      hospitals: [
        {name: "Hospital Estadual de Bauru"}
      ]
    },
    {
      city: "Botucatu",
      hospitals: [
        {name: "Hospital das Clínicas UNESP/Universidade Estadual Paulista"}
      ]
    },
    {
      city: "Bragança Paulista",
      hospitals: [
        {name: "Hospital Universitário São Francisco Bragança Paulista/Casa de Nossa Senhora da Paz Ação Social Franciscana"}
      ]
    },
    {
      city: "Campinas",
      hospitals: [
        {name: "Centro Infantil de Investigação Hematológica Dr. Domingos A. Boldrini"},
        {name: "Hospital e Maternidade Celso Pierrô/Sociedade Campineira de Educação e Instrução"},
        {name: "Hospital das Clínicas da UNICAMP/Universidade Estadual de Campinas"},
        {name: "Hospital Municipal Dr. Mário Gatti"}
      ]
    },
    {
      city: "Catanduva",
      hospitals: [
        {name: "Hospital Padre Albino – Catanduva/Fundação Padre Albino"}
      ]
    },
    {
      city: "Diadema",
      hospitals: [
        {name: "Hospital Estadual de Diadema – Hospital Serraria"}
      ]
    },
    {
      city: "Franca",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Franca/Fundação Civil Casa de Misericórdia de Franca"}
      ]
    },
    {
      city: "Guaratinguetá",
      hospitals: [
        {name: "Santa Casa de Misericórdia de Guaratinguetá"}
      ]
    },
    {
      city: "Guarujá",
      hospitals: [
        {name: "Hospital Santo Amaro/ Associação Santamarense de Beneficência do Guarujá"}
      ]
    },
    {
      city: "Jacareí",
      hospitals: [
        {name: "Hospital São Francisco de Assis/Associação Casa Fonte da Vida"}
      ]
    },
    {
      city: "Jales",
      hospitals: [
        {name: "Fundação PIO XII - Unicade III"}
      ]
    },
    {
      city: "Jaú",
      hospitals: [
        {name: "Hospital Amaral Carvalho/Fundação Amaral Carvalho"}
      ]
    },
    {
      city: "Jundiaí",
      hospitals: [
        {name: "Hospital São Vicente/Hospital de Caridade São Vicente de Paulo"}
      ]
    },
    {
      city: "Limeira",
      hospitals: [
        {name: "Hospital da Irmandade da Santa Casa de Misericórdia de Limeira"}
      ]
    },
    {
      city: "Marília",
      hospitals: [
        {name: "Hospital das Clínicas Unidade Clínico Cirúrgico/ Fundação de Apoio à Faculdade de Medicina de Marília - Famar"},
        {name: "Hospital da Irmandade da Santa Casa de Misericórdia de Marília"}
      ]
    },
    {
      city: "Mogi das Cruzes",
      hospitals: [
        {name: "Hospital das Clínicas Luzia de Pinho Melo"}
      ]
    },
    {
      city: "Mogi Guaçu",
      hospitals: [
        {name: "Hospital Municipal Dr. Tabajara Ramos"}
      ]
    },
    {
      city: "Pariquera-Açu",
      hospitals: [
        {name: "Hospital Regional Dr. Leopoldo Bevilacqua/Consórcio de Desenvolvimento Intermunicipal do Vale do Ribeira"}
      ]
    },
    {
      city: "Piracicaba",
      hospitals: [
        {name: "Hospital Fornecedores de Cana de Piracicaba Djaldrovandi/Associação dos Fornecedores de Cana de Piracicaba"},
        {name: "Hospital da Irmandade da Santa Casa Misericórdia de Piracicaba"}
      ]
    },
    {
      city: "Presidente Prudente",
      hospitals: [
        {name: "Hospital Dr. Aristóteles Oliveira Martins/Santa Casa de Misericórdia de Presidente Prudente"},
        {name: "Hospital Regional de Presidente Prudente"},
        {name: "Instituto de Radioterapia de Presidente Prudente"}
      ]
    },
    {
      city: "Ribeirão Preto",
      hospitals: [
        {name: "Hospital das Clínicas Faepa/Fundação de Apoio ao Ensino, Pesquisa e Assistência/HCFMRP"},
        {name: "Hospital Imaculada Conceição/Sociedade Portuguesa de Beneficência"},
        {name: "Hospital da Santa Casa de Ribeirão Preto/Sociedade Beneficência Hospitalar Santa Casa de Misericórdia"}
      ]
    },
    {
      city: "Rio Claro",
      hospitals: [
        {name: "Hospital da Irmandade Santa Casa de Misericórdia de Rio Claro"}
      ]
    },
    {
      city: "Santo André",
      hospitals: [
        {name: "Centro Hospitalar do Município de Santo André"},
        {name: "Hospital Estadual Mário Covas de Santo André"},
        {name: "Instituto de Radioterapia do ABC"},
      ]
    },
    {
      city: "Santos",
      hospitals: [
        {name: "Hospital da Irmandade da Santa Casa de Misericórdia de Santos"},
        {name: "Hospital Santo Antônio Santos/Sociedade Portuguesa de Beneficência"},
        {name: "Hospital Guilherme Álvaro"}
      ]
    },
    {
      city: "São Bernardo do Campo",
      hospitals: [
        {name: "Hospital Anchieta São Bernardo do Campo/Fundação ABC"},
        {name: "Hospital Municipal Universitário de São Bernardo do Campo"}
      ]
    },
    {
      city: "São Caetano do Sul",
      hospitals: [
        {name: "Hospital Materno-Infantil Márcia Braido"}
      ]
    },
    {
      city: "São Carlos",
      hospitals: [
        {name: "Hospital da Irmandade da Santa Casa de Misericórdia de São Carlos"}
      ]
    },
    {
      city: "São João da Boa Vista",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia Dona Carolina Malheiros"}
      ]
    },
    {
      city: "São José do Rio Preto",
      hospitals: [
        {name: "Hospital da Irmandade Santa Casa de Misericórdia de São José do Rio Preto"},
        {name: "Hospital de Base de São José do Rio Preto/Fundação Faculdade Regional de Medicina de São José do Rio Preto"}
      ]
    },
    {
      city: "São José dos Campos",
      hospitals: [
        {name: "Centro de Tratamento Fabiana Macedo de Morais"},
        {name: "Hospital e Maternidade Pio XII/ IPMMI - Obra de Ação Social Pio XII"},
        {name: "Hospital Materno Infantil Antoninho da Rocha Marmo/IPMM"}
      ]
    },
    {
      city: "São Paulo",
      hospitals: [
        {name: "Centro de Referência da Saúde da Mulher"},
        {name: "Conjunto Hospitalar do Mandaqui"},
        {name: "Hospital do Câncer A. C Camargo/Fundação Antônio Prudente"},
        {name: "Hospital Central da Santa Casa de São Paulo/Irmandade da Santa Casa de Misericórdia de São Paulo"},
        {name: "Hospital de Clínicas da Faculdade de Medicina da USP/Fundação Faculdade de Medicina"},
        {name: "Hospital Geral de Vila Nova Cachoeirinha"},
        {name: "Hospital Heliópolis"},
        {name: "Hospital Infantil Darcy Vargas"},
        {name: "Hospital Ipiranga/Unidade de Gestão Assistencial II"},
        {name: "Hospital São Joaquim Beneficência Portuguesa/Real e Benemérita Associação Portuguesa de Beneficência"},
        {name: "Hospital Santa Marcelina/Casa de Saúde Santa Marcelina"},
        {name: "Hospital São Paulo Unidade I/Escola Paulista de Medicina/Unifesp"},
        {name: "Hospital de Transplante do Estado de São Paulo Euryclides de Jesus Zerbini/Hospital Brigadeiro"},
        {name: "Instituto Brasileiro de Controle do Câncer - IBCC"},
        {name: "Instituto de Oncologia Pediátrica/Grupo de Apoio ao Adolescente e a Criança com Câncer - GRAAC"},
        {name: "Instituto do Câncer Arnaldo Vieira de Carvalho"},
        {name: "Instituto do Câncer do Estado de São Paulo/SES"}
      ]
    },
    {
      city: "Sorocaba",
      hospitals: [
        {name: "Conjunto Hospitalar de Sorocaba"},
        {name: "Hospital da Irmandade Santa Casa de Misericórdia de Sorocaba"},
        {name: "Hospital Sara Rolin Caracante"}
      ]
    },
    {
      city: "Taboão da Serra",
      hospitals: [
        {name: "Hospital Geral de Pirajussara"}
      ]
    },
    {
      city: "Taubaté",
      hospitals: [
        {name: "Hospital Regional do Vale do Paraíba/Sociedade Beneficente São Camilo"}
      ]
    },
    {
      city: "Tupã",
      hospitals: [
        {name: "Hospital São Francisco de Tupã/Sociedade Beneficente São Francisco de Assis de Tupã"}
      ]
    }
  ];

  prList = [
    {
      city: "Apucarana",
      hospitals: [
        {name: "Hospital da Providência/Província Brasileira da Congregação Irmãs Filhas da Caridade de São Vicente de Paulo"}
      ]
    },
    {
      city: "Campina Grande do Sul",
      hospitals: [
        {name: "Hospital Angelina Caron/Sociedade Hospitalar Angelina Caron"}
      ]
    },
    {
      city: "Campo Mourão",
      hospitals: [
        {name: "Hospital Santa Casa de Misericórdia/Associação Beneficiente Hospitalar Santa Casa de Misericórdia"}
      ]
    },
    {
      city: "Campo Largo",
      hospitals: [
        {name: "Hospital São Lucas"}
      ]
    },
    {
      city: "Cascavel",
      hospitals: [
        {name: "Hospital do Câncer UOPECCAN/União Paranaense de Estudo e Combate ao Câncer"},
        {name: "Hospital do Centro de Oncologia Cascavel Ltda/CEONC"}
      ]
    },
    {
      city: "Curitiba",
      hospitals: [
        {name: "Hospital de Clínicas/Universidade Federal do Paraná"},
        {name: "Hospital Erasto Gaertner/Liga Paranaense de Combate ao Câncer"},
        {name: "Hospital Infantil Pequeno Príncipe/Associação Hospitalar de Proteção à Infância Dr. Raul Carneiro"},
        {name: "Hospital Santa Casa/Irmandade da Santa Casa de Misericórdia de Curitiba"},
        {name: "Hospital São Vicente/Fundação de Estudos das Doenças do Fígado"},
        {name: "Hospital Universitário Evangélico de Curitiba"}
      ]
    },
    {
      city: "Guarapuava",
      hospitals: [
        {name: "Hospital de Caridade São Vicente de Paulo"}
      ]
    },
    {
      city: "Foz do Iguaçu",
      hospitals: [
        {name: "Hospital Ministro Costa Cavalcante/Fundação de Saúde Itaiguapy"}
      ]
    },
    {
      city: "Francisco Beltrão",
      hospitals: [
        {name: "Centro de Oncologia de Cascavel - CEONC de Francisco Beltrão - Francisco Beltrão/PR"}
      ]
    },
    {
      city: "Londrina",
      hospitals: [
        {name: "Hospital Universitário Regional Norte do Paraná/Universidade Estadual de Londrina"},
        {name: "Instituto de Câncer de Londrina"}
      ]
    },
    {
      city: "Maringá",
      hospitals: [
        {name: "Hospital e Maternidade Santa Rita"},
        {name: "Centro de Oncologia e Radioterapia Santana Ltda"},
        {name: "Hospital do Câncer de Maringá/Instituto de  Oncologia e  Hematologia Maringá SC Ltda"}
      ]
    },
    {
      city: "Pato Branco",
      hospitals: [
        {name: "Hospital Policlínica Pato Branco SA"}
      ]
    },
    {
      city: "Ponta Grossa",
      hospitals: [
        {name: "Hospital da Santa Casa de Misericórdia de Ponta Grossa"}
      ]
    }
  ];

  rsList = [
    {
      city: "Bagé",
      hospitals: [
        {name: "Santa Casa de Caridade de Bagé"}
      ]
    },
    {
      city: "Bento Gonçalves",
      hospitals: [
        {name: "Hospital Tacchini/Sociedade Dr. Barholomeu Tacchini"}
      ]
    },
    {
      city: "Cachoeira Sul",
      hospitals: [
        {name: "Hospital Caridade Beneficência Cachoeira do Sul"}
      ]
    },
    {
      city: "Canoas",
      hospitals: [
        {name: "Hospital Nossa Senhora das Graças"}
      ]
    },
    {
      city: "Carazinho",
      hospitals: [
        {name: "Hospital de Caridade e Beneficência"}
      ]
    },
    {
      city: "Caxias do Sul",
      hospitals: [
        {name: "Hospital Geral/Fundação UCS Hospital Geral de Caxias do Sul"},
        {name: "Hospital Pompeia/Pio Sodalício Damas Caridade"}
      ]
    },
    {
      city: "Cruz Alta",
      hospitals: [
        {name: "Hopital São Vicente de Paulo/Associação Damas Caridade"}
      ]
    },
    {
      city: "Erechim",
      hospitals: [
        {name: "Hospital da Fundação Hospitalar Santa Terezinha de Erechim"}
      ]
    },
    {
      city: "Ijuí",
      hospitals: [
        {name: "Hospital da Associação Hospital. de Caridade de Ijuí"}
      ]
    },
    {
      city: "Lajeado",
      hospitals: [
        {name: "Hospital Bruno Born/Sociedade Beneficente de Caridade de Lajeado"}
      ]
    },
    {
      city: "Novo Hamburgo",
      hospitals: [
        {name: "Hospital Regina /Associação Congregação Santa Catarina"}
      ]
    },
    {
      city: "Passo Fundo",
      hospitals: [
        {name: "Hospital São Vicente de Paulo/Associação  Beneficente São Vicente de Paulo"},
        {name: "Hospital da Cidade de Passo Fundo"}
      ]
    },
    {
      city: "Pelotas",
      hospitals: [
        {name: "Hospital Escola da Universidade Federal de Pelotas/Fundação de Apoio Universitário"},
        {name: "Hospital da Santa Casa de Misericórdia de Pelotas"}
      ]
    },
    {
      city: "Porto Alegre",
      hospitals: [
        {name: "Hospital de Clínicas de Porto Alegre"},
        {name: "Hospital São Lucas da PUCRS/União Brasileira de Educação e Assistência"},
        {name: "Hospital Fêmina S/A"},
        {name: "Hospital da Santa Casa de Misericórdia de Porto Alegre"},
        {name: "Hospital Nossa Senhora da Conceição S/A"}
      ]
    },
    {
      city: "Rio Grande",
      hospitals: [
        {name: "Hospital da Associação de Caridade Santa Casa de Caridade do Rio Grande"}
      ]
    },
    {
      city: "Santa Cruz do Sul",
      hospitals: [
        {name: "Hospital Ana Nery"}
      ]
    },
    {
      city: "Santa Rosa",
      hospitals: [
        {name: "Hospital Vida Saúde/Associação Hospital Caridade de Santa Rosa"}
      ]
    },
    {
      city: "São Leopoldo",
      hospitals: [
        {name: "Hospital da Fundação Hospital Centenário"}
      ]
    },
    {
      city: "Santa Maria",
      hospitals: [
        {name: "Hospital Universitário de Santa Maria"}
      ]
    },
    {
      city: "Uruguaiana",
      hospitals: [
        {name: "Hospital da Santa Casa de Caridade de Uruguaiana"}
      ]
    }
  ];

  scList = [
    {
      city: "Blumenau",
      hospitals: [
        {name: "Hospital Santa Isabel/Sociedade Divina Providência"},
        {name: "Hospital Santo Antonio/Fundação Hospitalar de Blumenau"}
      ]
    },
    {
      city: "Chapecó",
      hospitals: [
        {name: "Hospital Regional do Oeste/Associação Hospitalar Lenoir Vargas Ferreira"}
      ]
    },
    {
      city: "Criciúma",
      hospitals: [
        {name: "Hospital São José/Sociedade Caritativa Santo Agostinho"}
      ]
    },
    {
      city: "Florianópolis",
      hospitals: [
        {name: "Centro de Pesquisas Oncológicas/CEPON"},
        {name: "Hospital Governador Celso Ramos"},
        {name: "Hospital Carmela Dutra"},
        {name: "Hospital Infantil Joana de Gusmão"},
        {name: "Hospital Universitário/Universidade Federal de Santa Catarina"}
      ]
    },
    {
      city: "Itajaí",
      hospitals: [
        {name: "Hospital e Maternidade Marieta Konder Bornhausen/Inst. das Pequenas Missionárias Mª Imaculada"}
      ]
    },
    {
      city: "Jaraguá do Sul",
      hospitals: [
        {name: "Hospital São José/ Sociedade Divina Providência"}
      ]
    },
    {
      city: "Joaçaba",
      hospitals: [
        {name: "Hospital Univesitário Santa Terezinha/Fundação Universidade do Oeste de Santa Catarina"}
      ]
    },
    {
      city: "Joinville",
      hospitals: [
        {name: "Hospital Municipal São José"},
        {name: "Hospital Materno Infantil Dr Jesser Amarante Faria"}
      ]
    },
    {
      city: "Lages",
      hospitals: [
        {name: "Hospital Geral e Maternidade Tereza Ramos"}
      ]
    },
    {
      city: "Porto União",
      hospitals: [
        {name: "Hospital de Caridade São Braz de Porto União"}
      ]
    },
    {
      city: "Tubarão",
      hospitals: [
        {name: "Hospital Nossa Senhora da Conceição/Sociedade Divina Providência"}
      ]
    }
  ];

  constructor(public modalCtrl: ModalController) {}

  public toggleModal(estateName, estateUf, ufHospitals) {
    this.modalCtrl.create(HelpMapModalPage, {estateName: estateName, estateUf: estateUf, ufHospitals: ufHospitals}).present();
  }

}
