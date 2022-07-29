import {deleteAsync} from "del"
export const reset = () => {
    return deleteAsync(['dist'])
}

/*or npm i -D del@6
import del from "del";
export const reset = () => {
    return del(app.path.clean);
}*/