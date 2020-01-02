export type Services = {
    [prop: string]: (binPath: string, args: string[]) => string;
};