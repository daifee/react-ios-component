/**
 * @author haw
 */
import {render} from 'react-dom';

export function createPortalEl(container = document.body) {
	const portalEl = document.createElement('div');

	container.appendChild(portalEl);
	return portalEl;
}

export function createInstance(Component, wrapper) {
	return render();
}