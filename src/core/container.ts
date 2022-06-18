class Container<T = any> {
  private map = new Map<string | symbol, any>();

  public set(key: string | symbol, value: T): void {
    this.map.set(key, value);
  }

  public get(key: string | symbol): T {
    return this.map.get(key);
  }

  public has(key: string | symbol): boolean {
    return this.map.has(key);
  }
}

export default Container;
