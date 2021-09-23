import {FC} from "react";
import ReactDOM from 'react-dom';

type PortalProps = {
    id: string;
};

export const Portal: FC<PortalProps> = ({children, id}) => {
    return ReactDOM.createPortal(<div id={id}>{children}</div>, document.body);
};