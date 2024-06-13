type titleProps = {
  text: string;
};

const Title = ({text}: titleProps) => {
  return (
    <div style={{ letterSpacing: '0.5px' }}>
      {text}
    </div>
  )
};

export default Title;