export function Controller(prefix = '/'): ClassDecorator {
  return <TFunction extends Function>(target: TFunction): TFunction | void => {
    console.log('Controller Decorator =====>');
    console.log(`target: ${target}\n`);
  };
}
