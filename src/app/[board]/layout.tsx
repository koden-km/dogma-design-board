interface Props {
  children: React.ReactNode;
}

export default function BoardLayout({ children }: Props) {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </div>
  );
}
