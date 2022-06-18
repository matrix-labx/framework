interface RouterOptions {
  name?: string;
  description?: string;
  middleware?: Array<string>[];
}

export function Get(
  path?: string | RegExp,
  options: RouterOptions = {
    middleware: [],
  }
): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    console.log(target, propertyKey, descriptor);
    return descriptor;
  };
}

export function Post(): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}

export function Put(): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}

export function Del(): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}

export function Patch(): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}

export function Head(): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}

export function Option(): MethodDecorator {
  return <T = Function>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void => {
    return descriptor;
  };
}
