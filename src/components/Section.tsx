interface ISection {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section = (props: ISection) => {
  return (
    <section id={props.id} className={`${props.className || ''} bg-lime-400 h-screen flex flex-col`}>
      {props.children}
    </section>
  )
}