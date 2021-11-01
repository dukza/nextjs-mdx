import Button from "./../../src/components/Button/Button"
// import Plus from './../../public/icon';

export default function Presenter ({...rest}) {

    return(
        <>
             {/* <img height="300px" src={Plus} /> */}
            <Button {...rest}/>
        </>
    )
}