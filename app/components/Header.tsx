interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="text-center font-bold text-3xl mt-32 mb-10 text-[#4999d6]">
      {children}
    </div>
  );
};
export default Header;
