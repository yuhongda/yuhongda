export const waveText = (text: string, x: number, y: number, fontSize: number) => {
	return `
    <svg class="loading" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="574.558px" height="120px" viewBox="0 0 574.558 120" enable-background="new 0 0 574.558 120" xml:space="preserve">
     <style>
     .loading {
        margin-top: 20px;
      }
      .water-fill {
        -webkit-animation: wave 0.7s infinite linear, fill-up 10s infinite ease-out alternate;
                animation: wave 0.7s infinite linear, fill-up 10s infinite ease-out alternate;
      }
      @-webkit-keyframes wave {
        0% {
          x: -400px;
        }
        100% {
          x: 0;
        }
      }
      @keyframes wave {
        0% {
          x: -400px;
        }
        100% {
          x: 0;
        }
      }
      @-webkit-keyframes fill-up {
        0% {
          height: 0;
          y: 130px;
        }
        100% {
          height: 160px;
          y: -30px;
        }
      }
      @keyframes fill-up {
        0% {
          height: 0;
          y: 130px;
        }
        100% {
          height: 160px;
          y: -30px;
        }
      }
  </style>
  <defs>
    <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
      <path fill="#fff" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
    </pattern>
    
    <text id="text" transform="matrix(1 0 0 1 -8.0684 116.7852)" font-family="'Cabin Condensed'" font-size="161.047">LOADING</text>
    
    <mask id="text_mask">
      <use x="0" y="0" xlink:href="#text" opacity="1" fill="#ffffff"/>
    </mask>
  </defs>
 
	  <!--<use x="0" y="0" xlink:href="#text" fill="#222"/>-->
  
  <rect class="water-fill" mask="url(#text_mask)" fill="url(#water)" x="-400" y="0" width="1600" height="120"/>
  
</svg>`;
};
