/**
 * Name : DynamicElement.jsx
 * jsFidddle : https://jsfiddle.net/x1prmh4c/4/
 * Description:
 *      Intent for this Component is that we can get rid of any of the display level compoent for instance we dont need below component as separate component.
 *      <p>, <h> tags , <span>, <div>
 *      TODO:This comoponent need to be empoverd to get the child as props and inject them inside the parent. so that div makes sense.
 * Example:
 * Expected Props should be in this example format
 * {
 *  content: {
 *      pageHeader : "sampleContent"
 *  },
 *  fieldProps {
 *      headSize : 4 (this will render h4 tag)
 *      headingLabel : "pageHeader" (this value pageHeader is the key which should be present in above content section)
 *  }
 * }
 */

const DynamicElement = (props) => {
    const {fieldProps = {}, content = {sampleContent: 'Try changing the tag name in the fieldProps'}} = props;
    const {tagName = 'span', tagLabel = 'sampleContent'} = fieldProps;
    const DynamicTag = `${tagName}`;
    return (
        <div>
            <DynamicTag>{content[`${tagLabel}`]} - Rendered Tag is {tagName}</DynamicTag>
        </div>
    );
};
export default DynamicElement;
