export function ErrorHandler(message: string, extraMessages: string[] = []) {
    const error = {
        message,
        module: "@youspace/upload",
        details: extraMessages
    };
    

    throw new Error(JSON.stringify(error));
}

export function InfoLog(message: string) {
    console.info('\x1b[36m%s\x1b[0m', message);
}