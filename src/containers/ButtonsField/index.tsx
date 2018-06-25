import * as React from "react";
import Button from "../../components/Button"

class ButtonsField extends React.Component<{},{}>{
    public render(): React.ReactNode{
        return(
            <Button event={this.testEvent}
            type={'button'}
            title={'fsfsdfsdfsdf'}
            />
        )
    }

    public testEvent = ()=>{
        alert('oko');
    }
}
export default ButtonsField;