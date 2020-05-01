/**
 * Name: Button.jsx
 * jsFiddle: https://jsfiddle.net/x1prmh4c/
 * @param {*} props
 * Description:
 *      Button component to render button tag.
 * Example:
 * Takes the props as parameter in the below mentioned format.
 * {
 *  content: {
 *      buttonLabel : "sampleContent"
 *  },
 *  fieldProps {
 *      headSize : 4 (this will render h4 tag)
 *      buttonLabel : "buttonLabel" (this value buttonLabel is the key which should be present in above content section),
 *      btnDisabled : disabled, (this will disable the button)
 *      customBtnClassName: "buttonclassname" (buttonclassname will be applied to the button's class name in case you want to override the style)
 *  }
 * }
 */
const Button = (props) => {
    const {content = {DefaultButtonText: 'Default Button Text'}, onClick, fieldProps = {}} = props;
    const {name = 'defaultButton', buttonLabel = 'DefaultButtonText', value, customBtnClassName = '', dataAutomationId = '', btnDisabled} = fieldProps;

    return (
        <div className={customBtnClassName}>
            <button
                name={name}
                id={name}
                value={value}
                className= {customBtnClassName}
                data-automation-id={dataAutomationId}
                disabled={btnDisabled}
                onClick={onClick}
            >
                {content[buttonLabel]}
            </button>
        </div>
    );
};

export default Button;
