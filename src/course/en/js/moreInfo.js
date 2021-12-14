const moreInfoTexts = [
  `La literatura ofrece muchas definiciones diferentes de justicia restaurativa. Esto se debe a la diversidad y la naturaleza cambiante de los enfoques de justicia restaurativa en todo el mundo. Algunas definiciones ponen el foco en el aspecto participativo del proceso y en los encuentros y la participación activa a través del diálogo. Otros enfatizan en los resultados restaurativos como la reparación, la recuperación de la víctima y la reintegración del delincuente. <strong>Sin embargo, la mayoría de las definiciones coinciden en los siguientes elementos:</strong>
  <br/>
  • <strong>Un enfoque en el daño causado</strong> por el comportamiento delictivo.
  <br/>
  • <strong>Participación voluntaria de los más afectados por el daño,</strong> incluida la víctima, el agresor y, en algunos procesos y prácticas, sus partidarios o familiares, miembros de una comunidad de interés y profesionales adecuados.
  <br/>
  • <strong>Preparación de la reunión y facilitación del proceso</strong> por mediadores capacitados.
  <br/>
  • Diálogo entre las partes para llegar a un entendimiento mutuo de lo sucedido y sus consecuencias y un acuerdo sobre lo que se debe hacer.
  <br/>
  • <strong>Los resultados del proceso de restauración varían</strong> y pueden incluir una expresión de remordimiento y el reconocimiento de responsabilidad por parte del perpetrador y el compromiso de hacer alguna acción reparadora para la víctima o para la comunidad.
  <br/>
  • <strong>Una oferta de apoyo a la víctima para ayudar a la recuperación</strong> y al perpetrador para ayudar a la reintegración y desistimiento de nuevos actos dañosos (UNODC, 2011)`,
  `<strong>Determinar qué factores están asociados a los diferentes tipos de delitos</strong> puede dar lugar a la elaboración de una serie de estrategias y programas para cambiar estos factores y prevenir o reducir la incidencia de tales delitos. Estos factores causales o de fondo se denominan a menudo factores de riesgo. Se trata en particular de las alteraciones y tendencias mundiales que afectan las condiciones sociales y económicas de regiones y países, factores que influyen en los distintos países y entornos y comunidades locales, factores relacionados con la familia y los parientes cercanos, y factores que afectan a los individuos (UNODC, 2011).`,
  `<strong>Puede ser social</strong>, como cuando se promueve que los vecinos de un mismo barrio se hagan responsables de alertar a las autoridades acerca de la presencia de sucesos extraños que puedan estar asociados a la comisión de un delito. 
  <br/>
  <strong>También puede ser jurídica</strong>, como cuando se reforman las normas penales. Además puede ser económica, como cuando se crean incentivos para estimular un determinado comportamiento o desincentivos para incrementarles los costos a quienes realicen conductas reprochables. Igualmente puede ser cultural, como cuando se adoptan campañas publicitarias por los medios de comunicación masiva para generar conciencia sobre las bondades o consecuencias nocivas de un determinado comportamiento que causa un grave perjuicio social.
  <br/> 
  <strong>Adicionalmente pueden ser administrativas</strong>, como cuando se aumentan las medidas de seguridad carcelaria. Inclusive pueden ser tecnológicas, como cuando se decide emplear de manera sistemática un nuevo descubrimiento científico para obtener la prueba de un hecho constitutivo de una conducta típica.” (Corte Constitucional, 2001)`,
  `<strong>La pena puede ser considerada como</strong> la justa compensación por el mal causado por un delito, en el sentido de una teoría de la retribución (Ambos, 2003). 
  <br/>
  <strong>Por otro lado</strong>, también es posible atribuir a la pena una significación de anticipación, con la esperanza de que su imposición prevendrá la comisión de delitos similares en el futuro, este es el postulado principal de las teorías preventivas (Ambos, 2003).`,
];

const bibliographySlideNumberFive = `Ambos, K. (2003).  Sobre los fines de la pena al nivel nacional y supranacional. Revista de derecho penal y criminología, 2, 12, pp. 191-211
<br/>
Ariza Higuera, L. J. Torres Gómez, M. (2021). Los retos de la política criminal y penitenciaria en Colombia. En: Iturralde, M. Ariza, L. J. y Tamayo, F. L. Cárcel, derecho y sociedad. Aproximaciones al mundo penitenciario en Colombia. Bogotá: Universidad de los Andes.
<br/>
Comisión Asesora de Política Criminal (2012). Informe final. Bogotá: MinJusticia.
<br/>
Consejo Superior de Política Criminal. Plan Nacional de Política Criminal 2021-2025. Bogotá: MinJusticia.
<br/>
Corte Constitucional de Colombia [CC], junio 20, 2001, M.P.: M. J. Cepeda Espinosa 
<br/>
Gutiérrez Quevedo, M  (2014). Hacia una justicia restaurativa. En: Política Criminal y Libertad. Bogotá: Universidad Externado de Colombia.
<br/>
Roxin, C. (1997). Derecho Penal Parte General Tomo I Fundamentos. La estructura de la teoría del delito. Madrid: Civitas`;

const closeButton = (slideNumber) =>
  `<button class="close-button" onclick="closeSlide(${slideNumber})">x</button> <br/>`;

const bibliographyButton = `<button class="bibliography-button" onclick="openBibliographyCard()">Bibliografía</button> <br/>`;
const bibliographyCloseButton = `<button class="close-button" onclick="closeBibliographyCard()">x</button> <br/>`;

let moreInfoButton;

const showInfo = (slideNumber) => {
  moreInfoButton = document.getElementById(slideNumber);
  if (moreInfoButton.classList.contains("less-info-text")) {
    moreInfoButton.classList.remove("less-info-text");
  }
  moreInfoButton.classList.add("more-info-text");
  moreInfoButton.innerHTML = closeButton(slideNumber);
  moreInfoButton.innerHTML += moreInfoTexts[slideNumber - 1];
  if (slideNumber === 4) {
    moreInfoButton.innerHTML += '<br/>' + bibliographyButton;
  }
};

const closeSlide = (slideNumber) => {
  moreInfoButton = document.getElementById(slideNumber);
  moreInfoButton.classList.add("less-info-text");
};

const openBibliographyCard = () => {
  const bibliography = document.getElementById('bibliography');
  if (bibliography.classList.contains("less-info-text")) {
    bibliography.classList.remove("less-info-text");
  }
  bibliography.classList.add("bibliography-text");
  bibliography.innerHTML = bibliographyCloseButton;
  bibliography.innerHTML += bibliographySlideNumberFive;
};

const closeBibliographyCard = () => {
  const bibliography = document.getElementById('bibliography');
  bibliography.classList.add("less-info-text");
};
