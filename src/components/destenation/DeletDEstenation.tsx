'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import { IDestenation } from '../type/destination';



const DeletDEstenation = ({id}:{id:IDestenation}) => {
const handelclickDelet = async ()=>{
    const res = await fetch(`http://localhost:8000/destination/${id}`,{
      method:'DELETE',
    })
    const data = await res.json();
   redirect('/destination')
    
}

    return (
        <div>
         <AlertDialog>
  <AlertDialogTrigger render={<Button
  variant="outline"
  className="border-red-500 bg-transparent text-red-500 hover:bg-red-50 hover:text-red-600"
>
  <Trash2 className="mr-2 h-4 w-4" />
  Cancel
</Button>}>
    Show Dialog
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handelclickDelet}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>   
        </div>
    );
};

export default DeletDEstenation;