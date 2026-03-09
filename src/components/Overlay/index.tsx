interface OverlayProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string 
}

export const Overlay = ({ children, title, subtitle, className }: OverlayProps) => {
  return (
    <div className={`absolute w-full flex items-center text-center ${className}`}>
      <div className="flex flex-col items-center text-white w-[388px]">
        <h2 className="text-xl font-medium leading-normal tracking-wider mb-2.5">
          {title}
        </h2>
        <h1 className="text-2xl leading-9 tracking-widest mb-10">{subtitle}</h1>

        <div className="flex gap-3.5">{children}</div>
      </div>
    </div>
  );
};
