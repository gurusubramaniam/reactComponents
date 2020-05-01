/**
 * Name: RadioButton.jsx
 * JsFiddle : https://jsfiddle.net/sevn23db/8/
 * @param {*} props
 * Description:
 *      Component  for rendering Radio button.
 * Example:
 * Takes the props as parameter in the below mentioned format.
 * {
 *  content: {
 *      'radioBtnLabel1': 'asdfasdf',
        'radioBtnLabel2': 'asdfasdf'
 *  },
 *  fieldProps {
 *      radioValues : ['male', 'female'], (make sure number of elements inside the value matches the label)
 *      radioLabels: ["Male", "Female"], (make sure number of elements inside the label matches the value)
 *      customCssClassName: "radioClassname" (radioClassname will be applied to the radio button's container)
 *  }
 * }
 */
const RadioButton = (props) => {
    const {fieldProps = {}, content = {male:'Male', female : 'Female'}} = props;
    const {customCssClassName='radioBtn', name = 'defaultRadio', id = 'defaultRadio', radioValues = ['male', 'female'], radioLabels = ['male', 'female']} = fieldProps;
    const renderRadio = () => {
        return radioLabels.map((radioLabel, index) => ([
            <input type="radio" name ={name} id={`${id}${index + 1}`} value={radioValues[index]} key={`radio${index + 1}`}/>,
            <label key={`radioLabel${index + 1}`} htmlFor={`${id}${index + 1}`}>{content[`${radioLabel}`]} </label>
        ]
        ));
    };

    return (
        <div className = {`${customCssClassName}_container`}>
            {renderRadio()}
        </div>
    );
};
export default RadioButton;
