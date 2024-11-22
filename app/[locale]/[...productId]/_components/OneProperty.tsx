interface OnePropertyProps {
  title: string;
  value: string | boolean;
}

export default function OneProperty({ title, value }: OnePropertyProps) {
  return (
    <div className="flex items-center gap-[8px]">
      <p className="text-[14px] text-[#00000099] font-medium">{title}:</p>
      <p className="text-[14px] text-[#000000] font-medium">{value}</p>
    </div>
  );
}
