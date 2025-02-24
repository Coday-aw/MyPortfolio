interface ConatinerProps {
  children: React.ReactNode;
}

const Conatiner: React.FC<ConatinerProps> = ({ children }) => {
  return <div className="mx-auto max-w-[1000px] p-10 ">{children}</div>;
};
export default Conatiner;
