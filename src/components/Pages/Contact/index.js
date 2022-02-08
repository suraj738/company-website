function Contact() {
    const fname;
    const lname;
    const email;
    const mobile;
    const subject;
    const comment;
     
   const validate = () => {
        if(fname.value==""){
            return false    
        }else if(lname.value==""){
            return false 
        }else if(email.value==""){
            return false 
        }else if(mobile.value==""){
            return false 
        }else if(subject.value==""){
            return false 
        }else if(comment.value==""){
            return false 
        }else{
        return true
    }
        return false;
      }
    return (
        <>
            <form autoComplete="off">
                <div>
                    <labal htmlfor=""> First Name :</labal>
                    <input type="text" name="" value=""  />
                    <label htmlFor=""> Last Name :</label>
                    <input type="text" name="" value="" />
                </div>
                <div>
                    <labal htmlfor=""> Mobile No :</labal>
                    <input type="text" name="" value="" />
                    <label htmlFor=""> Email :</label>
                    <input type="text" name="" value="" />
                </div>
                <div>
                    <labal htmlfor=""> Subject :</labal>
                    <input type="text" name="" value="" />
                    <label htmlFor=""> Comment :</label>
                    <input type="text" name="" value="" />
                </div>
                <button type="submit"> Sumbit</button>
            </form>
        </>

    );
};
export default Contact; 