const SectionTitle = ({subheading, heading}) => {
  return (
    <div className="text-center space-y-3 mb-20">
      <h6 className="text-[#F50057] font-sans font-bold">{subheading}</h6>
      <h1 className="text-4xl font-bold text-gray-600 uppercase">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
