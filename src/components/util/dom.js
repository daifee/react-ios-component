/**
 * @author haw
 */

export function getContainer(container = document.body) {
  if (typeof container === 'function') {
    container = container();
  }
  return container;
}

export function createPortalEl(container) {
  const portalEl = document.createElement('div');

  container.appendChild(portalEl);
  return portalEl;
}

