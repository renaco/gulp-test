var getQueryString = location.search;

if ( getQueryString === '' ) {
    withoutParams();
}

var getCip = getQueryString.split('codigo=')[1],
    getDateString = getQueryString.split('fecha=')[1],
    getCipCode = getCip.split('?')[0];

function convertTimestamp() {
  var getDateHour = new Date(getDateString * 1000),
    yyyy = getDateHour.getFullYear(),
    mm = ('0' + (getDateHour.getMonth() + 1 )).slice(-2),
    dd = ('0' + getDateHour.getDate()).slice(-2),
    hh = getDateHour.getHours(),
    h = hh,
    min = ('0' + getDateHour.getMinutes()).slice(-2),
    ampm = 'A.M.',
    time;

    if (hh > 12) {
        h = hh -12;
        ampm = 'P.M.';
      } else if (hh === 12) {
        h = 12;
        ampm = 'P.M.';
      } else if (hh === 0) {
        h = 12;
      }
  formatDateHour = dd + '/' + mm + '/' + yyyy + ' ' +  h + ':' + min + ' ' + ampm;
  document.getElementsByClassName('code_date')[0].innerHTML = (formatDateHour);
}

function withoutParams() {
  var topDashboard = document.getElementsByClassName('dashboard_top')[0];
  topDashboard.style.visibility='hidden';
  topDashboard.style.height='0';
  topDashboard.style.margin='-50px 0 0 0';
  console.info('No hay nada');
}

function errorCip(msg) {
  var tabsContent = document.getElementsByClassName('dashboard_tabs_content')[0];
  tabsContent.style.visibility='hidden';
  tabsContent.style.visibility='visible';
  tabsContent.innerHTML = (msg);
}

var validateCodeCip = function() {

  var regExp = new RegExp(/^[0-9]*$/i);
  var giveCip = document.getElementsByClassName('code_cip');

  if ( getCipCode == 0 ) {
      errorCip('CIP no debe ser cero o vacio.');
  } else {
      for (i in giveCip){
          giveCip[i].innerHTML = ' ' + getCipCode
      }
  }

  if ( regExp.test(getCipCode) == true ) {
  } else {
      errorCip('El CIP debe ser número.');
  }

  if ( getCipCode.length < 6 ) {
      errorCip('Tiene menos caracteres');
  }
}

convertTimestamp();
validateCodeCip();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-28965570-1', 'auto');
ga('send', 'pageview');
