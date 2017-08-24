import { Component, ViewChild } from '@angular/core';
import { NavParams, ToastController, App, Content, LoadingController } from 'ionic-angular';

//Other Plugins
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  @ViewChild(Content) content: Content;

  childColor       = this.navParams.get('childColor');
  tutorialOn       = true;
  hideExam         = false;
  showOrientation  = false;
  showHelpMap      = false;
  showOkResult     = false;
  buttonText       = "Continuar";
  stepTitle        = "Passo 1 - Exame Extraoral";
  actualStep       = 0;
  tookPhoto        = "";
  examPhotos       = [
    [
      //Extraoral
      {
        image: "./assets/images/exam/extraoral/exam-1.jpg",
        description: 'Em frente para o espelho, observe a pele do rosto e do pescoço e examine se há algum sinal que não tenha notado anteriormente.'
      },
      {
        image: "./assets/images/exam/extraoral/exam-2.jpg",
        description: 'Toque suavemente com as pontas dos dedos todo o rosto e procure por sinais e nódulos até então desconhecidos.'
      },
      {
        image: "./assets/images/exam/extraoral/exam-3.jpg",
        description: 'Observe também se o seu rosto está com os dois lados do mesmo tamanho.'
      },
      {
        image: "./assets/images/exam/extraoral/exam-4.jpg",
        description: 'Examine o pescoço. Compare os lados direito e esquerdo e veja se há diferenças entre eles. Depois, apalpe o lado esquerdo do pescoço com a mão direita. Repita o procedimento para o lado direito, palpando com a mão esquerda. Veja se existem caroços ou áreas endurecidas.'
      },
    ],
    [
      //Intraoral
      {
        image: "./assets/images/exam/intraoral/exam-1.jpg",
        description: 'Puxe com os dedos o lábio superior, expondo a sua parte interna (mucosa), procure qualquer mudança de cor ou caroço ou ferida.'
      },
      {
        image: "./assets/images/exam/intraoral/exam-2.jpg",
        description: 'Puxe com os dedos toque na gengiva lábio superior e inferior, expondo a sua parte interna (mucosa), procure qualquer mudança de cor ou caroço ou ferida.'
      },
      {
        image: "./assets/images/exam/intraoral/exam-3.jpg",
        description: 'Com a ponta do dedo indicador, afaste a bochecha do lado direito para examinar a sua parte interna.'
      },
      {
        image: "./assets/images/exam/intraoral/exam-4.jpg",
        description: 'Com a ponta do dedo indicador, afaste a bochecha do lado esquerdo para examinar a sua parte interna.'
      },
      {
        image: "./assets/images/exam/intraoral/exam-5.jpg",
        description: 'Puxe com os dedos o lábio inferior, expondo a sua parte interna (mucosa), procure qualquer mudança de cor ou caroço ou ferida.'
      },
      {
        image: "./assets/images/exam/intraoral/exam-6.jpg",
        description: 'Incline a cabeça para trás e, abrindo a boca o máximo possível, examine atentamente o céu da boca.'
      },
      {
        image: "./assets/images/exam/intraoral/exam-7.jpg",
        description: 'Incline a cabeça para trás e, abrindo a boca o máximo possível, examine atentamente o céu da boca. Palpe com o dedo indicador todo o céu da boca. Em seguida, diga ÁÁÁÁ... e observe o fundo da garganta.'
      },
      {
        image: "./assets/images/exam/intraoral/exam-8.jpg",
        description: 'Introduza o dedo indicador por baixo da língua e o polegar da mesma mão por baixo do queixo e procure palpar todo o assoalho da boca.'
      },
      {
        image: "./assets/images/exam/intraoral/exam-9.jpg",
        description: 'Ponha a língua para fora e observe a parte de cima. Repita a observação com a língua levantada até o céu da boca. Em seguida, puxando a língua para a esquerda, observe o lado esquerdo da mesma. Repita o procedimento para o lado direito.'
      },
    ],
  ];
  questionsKeys    = [
    "questionOne", 
    "questionTwo", 
    "questionThree", 
    "questionFour", 
    "questionFive", 
    "questionSix", 
    "questionSeven", 
    "questionEight"
  ];
  choosedQuestions = {
    questionOne:   "",
    questionTwo:   "",
    questionThree: "",
    questionFour:  "",
    questionFive:  "",
    questionSix:   "",
    questionSeven: "",
    questionEight: ""
  };
  savedQuestions   = [];

  constructor(public navParams: NavParams, public toastCtrl: ToastController,
  public app: App, public loadCtrl: LoadingController, public camera: Camera) {}

  public saveQuestions() {
    let empty        = this._checkFields();
    let choosedClone = Object.assign({}, this.choosedQuestions);

    if(empty) {
      let toastPortal = this.app._appRoot._toastPortal.getActive();

      if(toastPortal){
        toastPortal.dismiss();
      }

      this.toastCtrl.create({
        position: "bottom",
        message:  "Você deve responder todas as perguntas",
        duration: 2000
      }).present();

      return false;
    }

    this.savedQuestions.push(choosedClone);
    this.actualStep++;
    this._uncheckFields();

    if(this.actualStep === 1) {
      this.buttonText = "Finalizar autoexame";
      this.stepTitle  = "Passo 2 - Exame Intraoral"; 
    }

    if(this.actualStep === 2) {
      this._calculateResult();

      return false;
    }

    this.toastCtrl.create({
      position: "bottom",
      message:  "Etapa " + (this.actualStep) + " de 2 concluída",
      duration: 1500
    }).present();

    this._scrollToTop();
  }

  private _calculateResult() {
    let load           = this.loadCtrl.create({content: "Obtendo resultado..."});
    let totalQuestions = 16;
    let yesCount       = 0;
    let calc           = 0;
    let keys           = this.questionsKeys;

    load.present();
    this.savedQuestions.forEach((value, index) => {
      keys.forEach((key, index) => {
        if(value[key] === "1")
          yesCount++;
      });
    });

    calc = (yesCount * 100)/totalQuestions;

    if (calc == 0) {
      this.showOkResult = true;
    }

    if (calc > 0 && calc <= 30) {
      this.showOrientation = true;
    }

    if(calc > 30) {
      this.showHelpMap = true;
    }

    this.hideExam = true;
    load.dismiss();
  }

  private _checkFields() {
    let empty  = false;
    let fields = this.choosedQuestions;

    if(!fields.questionOne || !fields.questionTwo || !fields.questionThree ||
    !fields.questionFour || !fields.questionFive || !fields.questionSix ||
    !fields.questionSeven || !fields.questionEight) {
      empty = true;
    }

    return empty;
  }

  private _uncheckFields() {
    let choosedQuestions = this.choosedQuestions;
    let keys             = this.questionsKeys;

    keys.forEach((key, index) => {
      choosedQuestions[key] = "";
    });

    this.tookPhoto = "";
  }

  public doItAgain() {
    this.savedQuestions.splice(0);
    this.actualStep = 0;
    this.buttonText      = "Continuar";
    this.tookPhoto       = "";
    this.hideExam        = false;
  }

  public choosePhoto() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.tookPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => console.log(err));
  }

  private _scrollToTop() {
    this.content.scrollToTop();
  }
}
