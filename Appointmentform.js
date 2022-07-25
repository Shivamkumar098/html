var Appointmentform=document.getElementById("Appointmentform");
Appointmentform.addEventListener("submit", function(e){
    e.preventDefault();
     var First=Appointmentform.elements[`First`].value;
     var Last=Appointmentform.elements[`Last`].value;
     var First2=Appointmentform.elements[`First2`].value;
     var First3=Appointmentform.elements[`First3`].value;
     var First4=Appointmentform.elements[`First4`].value;
     var First5=Appointmentform.elements[`First5`].value;
     var question1 = Appointmentform.elements[`Eligible`].value;
     var question2 = Appointmentform.elements[`Eligible1`].value;
     var question3 = Appointmentform.elements[`Eligible2`].value;

     
    // console.log(loginform.elements[`username`].value)

    /*var name=Appointmentform.elements[`name`];
    // if(username.length<7){
    //     console.log("username must be 7 characters")
    // }*/
    // var Name=Appointmentform.elements[`name`];
    // var Email=Appointmentform.elements[`email`];
    // var Phone=Appointmentform.elements[`phone`];
    // var DateofBirth=Appointmentform.elements[`dateofbirth`];
    // var TimeofAppointment=Appointmentform.elements[`Time`];


    var AppointmentData={
        First,
        Last,
        First2,
        First3,
        First4,
        First5,
        question1,question2,question3
    }

    console.log(JSON.stringify(AppointmentData));
})



