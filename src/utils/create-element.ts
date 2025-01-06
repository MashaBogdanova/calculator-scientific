interface NewElemParam {
  tag: string;
  styles: string[];
  parent: HTMLElement;
  innerText?: string;
  attribute?: {
    key: string;
    value: string;
  };
}

export function createElement(param: NewElemParam) {
  const element: HTMLElement = document.createElement(param.tag);
  element.classList.add(...param.styles);

  if (param.innerText) {
    element.innerText = param.innerText;
  }

  if (param.attribute) {
    element.setAttribute(param.attribute.key, param.attribute.value);
  }

  if (param.parent) {
    param.parent.append(element);
  }

  return element;
}
