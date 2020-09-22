import { SectionID } from './util.types';

export function isNotNullOrUndefined<T>(value: T): value is Exclude<null | undefined, T> {
  return ![null, undefined].includes(value);
}

export function scrollToSection(section: SectionID, position: ScrollLogicalPosition = 'start') {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: 'smooth', block: position });
}
