'use client'
import { toast } from "sonner"
export function MakeToastButton() {
    function makeToast() {
        toast("Event has been created.")
    }
    
    return (<button onClick={makeToast}>toast</button>)
}