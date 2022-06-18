export function Service(): ClassDecorator {
  return <TFunction extends Function>(
    target: TFunction
  ): TFunction | void => {};
}
