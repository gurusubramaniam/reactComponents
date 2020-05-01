/**
 * Name: CheckBox.jsx
 * jsFiddle : https://jsfiddle.net/znaLj3wr/
 * @param {*} props
 * Description:
 *      Component for rendering checkbox.
 * Example:
 * Takes the props as parameter in the below mentioned format.
 * {
 *  content: {
 *      'checkBoxBtnLabel1': 'asdfasdf',
        'checkBoxBtnLabel2': 'asdfasdf'
 *  },
 *  fieldProps {
 *      checkBoxValues : ['male', 'female'], (make sure number of elements inside the value matches the label)
 *      checkBoxLabels: ["Male", "Female"], (make sure number of elements inside the label matches the value)
 *      namevalues: ["Male", "Female"], (make sure number of elements inside the name matches the value)
 *      customCssClassName: "className" (className will be applied to the container)
 *  }
 * }
 */
const CheckBox = (props) => {
    const {fieldProps = {}, content = {'red': 'Red', 'blue': 'blue'}} = props;
    const {customCssClassName} = fieldProps;
    const renderCheckBox = (config) => {
        const {nameValues = ['red', 'blue'], id = 'defaultcheckBox', checkBoxValues = ['red', 'blue'], checkBoxLabels = ['red', 'blue']} = config;
        return checkBoxLabels.map((checkBoxLabel, index) => ([
            <input type="checkbox" name ={nameValues[index]} id={`${id}${index + 1}`} value={checkBoxValues[index]} key={`checkBox${index + 1}`}/>,
            <label key={`checkBoxLabel${index + 1}`} htmlFor={`${id}${index + 1}`}>{content[`${checkBoxLabel}`]} </label>
        ]
        ));
    };

    return (
        <div className ={customCssClassName}>
            {renderCheckBox(fieldProps)}
        </div>
    );
};
export default CheckBox;
