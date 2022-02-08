function Contact() {
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