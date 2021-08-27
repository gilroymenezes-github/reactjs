export interface ShowProps {
    value: number;
}
 
const Show = (foo: ShowProps) => {
    return (  
        <div>{foo.value}</div>
    );
}
 
export default Show;