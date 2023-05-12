function flexiBle() {
    let text_first = document.getElementById("flexible_first");
    let text_second = document.getElementById("flexible_sceond");

    // color change 
    let flex_color_one = document.getElementById("flex_color_one");
    let flex_color_two = document.getElementById("flex_color_two");

     // img change 
     let eye = document.getElementById("eye");
     let billing = document.getElementById("billing");
     let pay = document.getElementById("pay");
     let fee = document.getElementById("fee");
 
     // img text change 
     let hiddden = document.getElementById("hidden");
     let billing_text = document.getElementById("billing_text");
     let pay_text = document.getElementById("pay_text");
     let fee_text = document.getElementById("fee_text");

    //  call to all data 
    text_first.innerHTML = " Such an approach works best for ongoing projects, best suitable for small to mid-sized businesses that require complex tasks such as troubleshooting and debugging, technical maintenance and support." ;
    text_second.innerHTML = " In order to provide you with best work and flexible solutions, we start off Time & Material approach by estimating the cost of specific tasks and agree on the milestones to be set. This helps us to achieve solutions fast and effectively. ";

    flex_color_one.style.color = "red";
    flex_color_two.style.color = "black";


    eye.src = "/image/engagement-type-icons.png";
    billing.src = "/image/engagement-prices.png";
    pay.src = "/image/engagement.png";
    fee.src = "/image/project-types.png";

    hiddden.innerHTML = "No Hidden Cost";
    billing_text.innerHTML = "Monthly Billing";
    pay_text.innerHTML = " Pay Only For Measurable Work";
    fee_text.innerHTML = " No Setup Fee";

}
function Fixed() {
    let text_first = document.getElementById("flexible_first");
    let text_second = document.getElementById("flexible_sceond");

    // color change 
    let flex_color_one = document.getElementById("flex_color_one");
    let flex_color_two = document.getElementById("flex_color_two");

    // img change 
    let eye = document.getElementById("eye");
    let billing = document.getElementById("billing");
    let pay = document.getElementById("pay");
    let fee = document.getElementById("fee");

    // img text change 
    let hiddden = document.getElementById("hidden");
    let billing_text = document.getElementById("billing_text");
    let pay_text = document.getElementById("pay_text");
    let fee_text = document.getElementById("fee_text");

    // call to all Data 
    text_first.innerHTML = "With being a low risk model, it is also better for startups and businesses with clear requirements. We define the budget and time beforehand and work accordingly; along with providing MVP so all the setbacks are resolved before the real launch.";
    text_second.innerHTML = "This approach works best for long-term projects such as developing a website or mobile applications from scratch.";
    
    flex_color_one.style.color = "black";
    flex_color_two.style.color = "red";

    eye.src = "/image/mvp.png";
    billing.src = "/image/time-frame.png";
    pay.src = "/image/no-changes.png";
    fee.src = "/image/upgrade.png";

    hiddden.innerHTML = "We Render MVP";
    billing_text.innerHTML = "Defined Time Frames";
    pay_text.innerHTML = " Require No Change";
    fee_text.innerHTML = " Upgrade Or Cancel Any Time";

}









