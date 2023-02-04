export const ColoredMessage = (props) => {
  // 分割代入
  const { color, children } = props;

  const contentStyle = {
    color: color,
    fontSize: '20px'
  };

  return <p style={contentStyle}>{children}</p>
}
