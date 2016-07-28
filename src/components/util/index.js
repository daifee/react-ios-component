/**
 * @author haw
 */
import config from './config';

const hasOwn = Object.hasOwnProperty;
const {
	namespace
} = config;

export function createClassNames(prename = namespace) {
	return (...args) => {
		let classes = [];

		args.forEach(arg => {
			let type = typeof arg;
			let prop;

			if(!arg || type === 'boolean') {
				return;
			}

			switch(type) {
				case 'string':
				case 'number':
					classes.push(`${prename}${arg}`);
					break;
				case 'object':
					if(Array.isArray(arg)) {
						classes.push(classNames.apply(null, arg));
					} else {
						for(prop in arg) {
							if(!hasOwn.call(arg, prop) || !arg[prop]) {
								continue;
							}
							if(arg[prop] === true) {
								classes.push(`${prename}${prop}`);
							} else {
								classes.push(prop);
							}
						}
					}
					break;
			}
		});

		return classes.join(' ');
	}
}

export const classNames = createClassNames();

export function px2rem(px) {
	const base = 20;

	return px / base;
}

// Options component
export function generateOptions(max, min, unit = '') {
	let results = [];
	let current = min;

	while(current <= max) {
		results.push({
			name: `${current < 10 ? '0' + current : current}${unit}`,
			value: current
		});
		current++;
	}

	return results;
}

export function indexOfOptions(value, options) {
	let len = options.length;

	for(let i = 0; i < len; i++) {
		if(options[i].value === value) {
			return i;
		}
	}

	return len;
}

// time related
export function date2str(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const d = date.getDate();

	return `${year}-${month < 10 ? ('0' + month) : month}-${d < 10 ? ('0' + d) : d}`;
}