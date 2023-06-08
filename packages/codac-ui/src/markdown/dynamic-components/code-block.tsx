import Highlight, { defaultProps } from "prism-react-renderer";

export const SectionCodeBlock = ({code,codelang})=>{
  return (<Highlight {...defaultProps} code={code} language={codelang}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
// add your custom style by appending your className
      <pre className={className ${your_custom_class}} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>);

