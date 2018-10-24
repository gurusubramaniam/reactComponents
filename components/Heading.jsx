/**
 * Name : Heading.jsx
 * jsFiddle: https://jsfiddle.net/pf2xo1va/
 * @param {*} props
 * Description:
 *      Component for rendering h tags which takes props to decide what h tag should be rendered, default value is set to h1.
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

const Heading = (props) => {
    const {fieldProps = {}, content = {DefaultHeading: 'DefaultHeading'}} = props;
    const {headSize = 1, headingLabel = 'DefaultHeading'} = fieldProps;
    const HeadTag = `h${headSize}`;
    return (
        <div>
            <HeadTag>{content[`${headingLabel}`]}</HeadTag>
        </div>
    );
};
export default Heading;
