/**
 * Name : Select.jsx
 * jsFiddle : https://jsfiddle.net/69z2wepo/294618/
 * @param {*} props
 * Description:
 *      Component for rendering dropdown element.
 * Example:
 * Expected Props should be in this example format
 * {
 * content = {
 *           DefaultSelect: {
 *               AF: 'Afghanistan',
 *               AX: 'Aland Islands'
 *           },
 *           placeHolder : 'Country'
 *       }
 *  fieldProps {
 *      hplaceholderKey = 'placeHolder',
 *      fieldId, value,
 *      optionsKey = 'DefaultSelect',
 *      keyAsValue = true,
 *      disablePlaceHolder = true
 *  }
 * } 
 */

const Select = (props) => {
    const {
        fieldProps = {
        },
        content = {
            DefaultSelect: {
                AF: 'Afghanistan',
                AX: 'Aland Islands'
            },
            placeHolder : 'Country'
        }
    } = props;
    const {placeholderKey = 'placeHolder', fieldId, value, optionsKey = 'DefaultSelect', keyAsValue = true, disablePlaceHolder = true} = fieldProps;

    const optionList = () => {
        const list = content[`${optionsKey}`];
        let constructedList = [];
        for (let property in list) {
            constructedList.push(<option key={property} value={keyAsValue ? property : list[`${property}`]} > {list[`${property}`]} </option>);
        }
        return constructedList;
    };
    return (
        <div className='vx_floatingLabel'>
            <label htmlFor={fieldId}>{content[`${placeholderKey}`]}</label>
            <div className="vx_select" data-label-content={content[`${placeholderKey}`]}>
                <select
                    value={value}
                    id={fieldId}
                    name={fieldProps.name}
                    className="form-control vx_form-control"
                >
                    {!(disablePlaceHolder) ? <option>{content[`${placeholderKey}`]}</option> : ''}
                    {optionList()}
                </select>
            </div>
        </div>
    );
};
export default Select;
