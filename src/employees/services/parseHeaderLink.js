import parse from 'parse-link-header';

export function parseHeaderLink(headerLink) {
  return parse(headerLink);
}
