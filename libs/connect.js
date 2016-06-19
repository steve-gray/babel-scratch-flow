declare module connect {

  declare type NextHandler = (err? : ?Error) => void;

  declare type ConnectMiddleware =
    (req : any, res : any, next : NextHandler) => void |
    (error: ?Error, req : any, res : any, next : NextHandler) => void;

  declare class ConnectApplication {
    () : Function;
    use(middleware : ConnectMiddleware) : void;
  }

  declare function exports() : ConnectApplication;
}