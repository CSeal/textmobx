import * as React from "react";

interface IButton{
    event: () => void
    title: string
    type?: string
}
class Button extends React.Component<IButton,{}>{
    public render(): React.ReactNode{
        const{
              event,
              title,
              type = 'submit'
            } = this.props;
        return (
            <button onClick={event}
                    type={type}>
                    {title}
            </button>
        )
    }
}
export default Button;