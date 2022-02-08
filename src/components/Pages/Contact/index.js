function Contact(){
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
    return(
        <h1>Contact</h1>
    );
};
export default Contact; 