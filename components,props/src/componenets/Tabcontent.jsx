export default function Tabcontent({children,onSelect}){
    
    return (
             <li><button onClick={onSelect}>{children}</button></li>
    );
}