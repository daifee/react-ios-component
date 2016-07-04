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