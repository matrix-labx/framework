export function StatusCode(code: number): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}

export function SetHeader(
  key: string | Record<string, any>,
  value: string
): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    let headers: Record<string, any> = {};
    if (value) {
      headers[key as string] = value;
    } else {
      headers = key as Record<string, any>;
    }

    return descriptor;
  };
}

export function Redirect(url: string, code: number = 302): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}

export function ContentType(contentType: string): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}
