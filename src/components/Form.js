const Form = () => {
	const template = ` 
        <form id="contact-form" novalidate> 
            <div class="row">
                <div class="col-md-4"><label class="namelabel">Name</label></div>
                <div class="col-md-8">
                    <div>
                        <input type="text" name="name" class="form-control name" placeholder="Enter name ... ">
                    </div>
                    <span class="name_alert_msg">Please enter name</span>
                </div>
            </div>

            <br />
        
            <div class="row">
                <div class="col-sm-12 col-md-4"><label>Gender</label></div>
                <div class="col-sm-12 col-md-8">
                    <div class="gender-row">
                        <label class="outer-radio male">
                            <input class="form-check-input top-radio" type="radio" name="gender" id="male" value=""> 
                            <img class="below-radio" src="http://dev.hoppa.com/images/45/male.svg" alt="">
                            <span>Male</span>
                        </label>
                        <label class="outer-radio-female female">
                            <input class="form-check-input top-radio-female" type="radio" name="gender" id="female" value=""> 
                            <img class="below-radio-female" src="http://dev.hoppa.com/images/45/female.svg" alt="">
                            <span>Female</span>
                        </label>
                    </div> 
                </div>
            </div>

            <br />

            <div class="row">
                <div class="col-md-4"><label>Date of Birth</label></div>
                <div class="col-md-8">
                    <input type="date" id="dob" id="name" class="form-control" placeholder="01/02/1983">
                </div>
            </div>

            <br />

            <div class="row">
                <div class="col-md-4"><label class="emailLabel">Email</label></div>
                <div class="col-md-8">
                    <div>
                        <input type="email" id="email" name="email" class="form-control email" placeholder="Enter email ... ">
                    </div>
                    <span class="email_alert_msg">Please enter email </span>
                    <span class="email_invalid_msg">Invalid email address</span>
                </div>
            </div>

            <br />

            <div class="row">
                <div class="col-md-4"><label>Mobile</label></div>
                <div class="col-md-8">
                    <div class="form-group">
                        <input type="number" id="mobile" name="mobile" class="form-control" placeholder="Enter mobile ... ">
                    </div>
                </div>
            </div>

            <br />

            <div class="row">
                <div class="col-md-4"><label>Customer ID</label></div>
                <div class="col-md-8">
                    <div class="form-group">
                        <input type="number" id="customerID" name="customerID" class="form-control" placeholder="Enter customer ID ... ">
                    </div>
                </div>
            </div>

            <br />

            <div class="row">
                <div class="col-md-4"><label>Membership</label></div>
                <div class="col-md-8">
                    <div class="row membership-wrapper">
                        <div id="classic" class="membership">
                            <div class="row">
                                <span class="membership-tier tier1 active"><img src="http://dev.hoppa.com/images/45/card-white.png"></span>
                                <span class="membership-tier-info">Classic</span>
                            </div>
                        </div>
                        <div id="silver" class="membership">
                            <div class="row">
                                <span class="membership-tier"><img src="http://dev.hoppa.com/images/45/card-grey.png"></span>
                                <span class="membership-tier-info">Silver</span>
                            </div>
                        </div>
                        <div id="gold" class="membership">
                            <div class="row">
                                <span class="membership-tier"><img src="http://dev.hoppa.com/images/45/card-grey.png"></span>
                                <span class="membership-tier-info">Gold</span>
                            </div>
                        </div>
                    </div>                       
                </div>
            </div>

            <br />   
            
            <div class="row buttons-wrapper">
                <div class="col-sm-12 col-md-6"><button id="cancel"> Cancel</button></div>
                <div class="col-sm-12 col-md-6"><button id="save" type="submit"> Save </button>
                </div>              
            </div>                                 
        </form>          
    `;

	return template;
};

export default Form;