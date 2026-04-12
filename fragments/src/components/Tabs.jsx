
export default function Tabs({children,buttons,buttonsContainer="menu"}){
    const ButtonsContainer = buttonsContainer;
    return (<>
      <menu>
        {buttons}
      </menu>
      {children}


    </>);
}