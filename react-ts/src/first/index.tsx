
export interface ButtonProps {
    text: string;
    firstValue: number;
    incrementBy: number;
    handleClick: any;
}
 
const Button = (foo: ButtonProps) => {
    const handleClick = () => foo.handleClick(foo);
    return (  
        <div>
            <button onClick={handleClick} className="btn btn-primary">+ {foo.incrementBy}</button>
        </div>
    );
}
 
export default Button;