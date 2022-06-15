const SectionTitle = (props) => {
  return (
    <div className='row justify-content-center'>
      <div className='col-lg-6 col-12'>
        <div className='wpo-section-title'>
          <h2>{props.Title}</h2>
          <p>
            I can develop different types of web applications. Based on the
            features and technologies here, I have introduced my pricing plans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
