export const svg = (html: string, style: string) => {
	return `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none">
      <foreignObject width="100%" height="100%">
        <body xmlns="http://www.w3.org/1999/xhtml">
          <style>${style}</style>
          <div>${html}</div>
        </body>
      </foreignObject>
    </svg>`;
};

export const sayHi = (theme?: string) => {
	const color = theme === 'dark' ? '#B1BBCC' : '#000';
	const html = `<h1>Hi there</h1>`;
	const style = `
    h1 {
      color: ${color};
      animation: fade-in 2s ease-in-out;
    }
    h1::after {
      content: '👋';
      display: inline-block;
      margin-left:8px;
      animation: wave-hand 1s 2s ease-in-out infinite;
    }
    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: translateX(100px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes wave-hand {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(10deg);
      }
      75% {
        transform: rotate(-10deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `;
	return svg(html, style);
};
