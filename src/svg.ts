import ig from './ig.json';

// object to attributes
const getAttr = (obj: Record<string, any>) => {
	return Object.keys(obj)
		.map((key) => {
			return `${key}="${obj[key]}"`;
		})
		.join(' ');
};

export const svg = (html: string, style: string, attr?: Record<string, any>) => {
	return `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" ${attr ? getAttr(attr) : ''}>
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
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
      font-size: 16px;
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
	return svg(html, style, { height: 50 });
};

export interface InstagramProps {
	theme?: string;
	height?: string | null;
}

export const instagram = ({ theme, height }: InstagramProps) => {
	const color = theme === 'dark' ? '#B1BBCC' : '#000';
	const items = ig
		.map((item: any) => {
			return `<li style="background-image: url(data:image/jpeg;base64,${item.base64})"></li>`;
		})
		.join('');
	const html = `<h1>Follow me on Instagram 🚀</h1><ul>${items}</ul>`;
	const style = `
    h1 {
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
      font-size: 16px;
      color: ${color};
      animation: fade-in 2s ease-in-out;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      margin: -4px;
      width: 500px;
    }
    li {
      list-style: none;
      width: 150px;
      height: 150px;
      margin: 0;
      padding: 0;
      margin: 0 8px 8px 0;
      border-radius: 4px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      animation-fill-mode: forwards;
      transform: scale(1.3);
      opacity: 0;
    }
    li:nth-child(1) {
      animation: drop-in 0.5s cubic-bezier(.17,.67,.6,1.3) forwards;
    }
    li:nth-child(2) {
      animation: drop-in 1s cubic-bezier(.17,.67,.6,1.3) 0.1s forwards;
    }
    li:nth-child(3) {
      animation: drop-in 1s cubic-bezier(.17,.67,.6,1.3) 0.2s forwards;
    }
    li:nth-child(4) {
      animation: drop-in 1s cubic-bezier(.17,.67,.6,1.3) 0.3s forwards;
    }
    li:nth-child(5) {
      animation: drop-in 1s cubic-bezier(.17,.67,.6,1.3) 0.3s forwards;
    }
    li:nth-child(6) {
      animation: drop-in 1s cubic-bezier(.17,.67,.6,1.3) 0.2s forwards;
    }
    li:nth-child(7) {
      animation: drop-in 1s cubic-bezier(.17,.67,.6,1.3) 0.2s forwards;
    }
    li:nth-child(8) {
      animation: drop-in 1s cubic-bezier(.17,.67,.6,1.3) 0.7s forwards;
    }
    li:nth-child(9) {
      animation: drop-in 1s cubic-bezier(.17,.67,.6,1.3) 0.1s forwards;
    }
    @media (max-width: 750px) {
      ul {
        width: 330px;
      }

      li {
        width: 100px;
        height: 100px;
      }
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
    @keyframes drop-in {
      0% {
        opacity: 0;
        transform: scale(1.3);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;
	return svg(html, style, { height: height ?? 514 });
};
