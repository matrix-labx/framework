export default function Middleware(): ClassDecorator {
  return <TFunction extends Function>(target: TFunction): TFunction | void => {
    console.log(target);
  };
}
