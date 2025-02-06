import prompt, { PromptOptions } from "react-native-prompt-android";

interface Options {
    title: string,
    message?: string, 

    buttons?: PromptButton[],
    options?: PromptOptions
}

interface PromptButton {
    text: string;
    onPress: () => void;
    style: 'cancel' | 'default' | 'destructive';
}


export const showPromt = ( { title, message, buttons, options }:Options ) => {
    prompt(
        title,
        message,
        buttons,
        options
    );
}