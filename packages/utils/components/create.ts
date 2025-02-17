// xy-button__element--disabled
// is-checked  is-enabled

import {kebabCase} from "lodash-es";

// const toKebabCase = (str: string) => str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)

const _bem = (
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string,
): string => {
  if (blockSuffix) prefixName += `-${kebabCase(blockSuffix)}`
  if (element) prefixName += `__${element}`
  if (modifier) prefixName += `--${modifier}`
  return prefixName
}

const createBEM = (prefixName: string) => {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')
  const e = (element: string = '') => element ? _bem(prefixName, '', element, '') : ''
  const m = (modifier: string = '') => modifier ? _bem(prefixName, '', '', modifier) : ''

  const be = (blockSuffix: string = '', element: string = '') => blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
  const bm = (blockSuffix: string = '', modifier: string = '') => blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''
  const em = (element: string = '', modifier: string = '') => element && modifier ? _bem(prefixName, '', element, modifier) : ''
  const bem = (
    blockSuffix: string = '',
    element: string = '',
    modifier: string = '',
  ) => blockSuffix && element && modifier ? _bem(prefixName, blockSuffix, element, modifier) : ''

  const is = (name: string, status: string | boolean) => (status ? `is-${name}` : '')
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  }
}

export const createNamespace = (name: string) => {
  const prefixName = `xy-${kebabCase(name)}`
  return createBEM(prefixName)
}

// xy-button__element--disabled
// const bem = createNamespace('icon')
// console.log(bem.is('checked',true))
// console.log(bem.bem('box', 'element', 'modifier'))