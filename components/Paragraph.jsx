/**
 * Name: Paragraph.jsx
 * jsFiddle: https://jsfiddle.net/n32dL9ec/
 * @param {*} props
 * Description:
 *      Component for rendering <p> tag
 *      TODO: This component need to be removed and start using dynamic elementComponent.
 * Example:
 * Takes the props as parameter in the below mentioned format.
 * {
 *  content: {
 *      'terms': 'login <a href="/login">Login</a>'
 *  },
 *  fieldProps {
 *      paragraphText: 'terms'
 *      customCssClassName: "anyClass" (anyClass will be applied to the container)
 *  }
 * }
 */
const Paragraph = (props) => {
    const {fieldProps = {}, content = {sample: 'Default Text for paragraph'}} = props;
    const {paragraphText = 'sample', customCssClassName} = fieldProps;

    return (
        <div className={customCssClassName}>
            <p dangerouslySetInnerHTML={{__html: content[`${paragraphText}`]}} />
        </div>
    );
};

export default Paragraph;