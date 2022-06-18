declare type PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => void;

export function Inject(key: string): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {};
}
