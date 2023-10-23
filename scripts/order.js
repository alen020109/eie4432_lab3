function calculatePrice() {
    drink = document.getElementsByName("drink")[0].value.toString();

    if(document.getElementById('small').checked) {
        size = "small"
    } else if(document.getElementById('medium').checked) {
        size = "medium"
    }else if(document.getElementById('large').checked) {
        size = "large"
    }else {
        size = ""
    }
    price = 0;
    switch(drink) {
        case "bubble-milktea":
            switch(size) {
                case "small":
                    price = 15;
                    break;
                case "medium":
                    price = 20;
                    break;
                case "large":
                    price = 25;
                    break;
                default:
                    price = 0;
            }
            break;
        case "iced-latte":
            switch(size) {
                case "small":
                    price = 21;
                    break;
                case "medium":
                    price = 28;
                    break;
                case "large":
                    price = 33;
                    break;
                default:
                    price = 0;
            }
            break;
            case "caramel-macchiato":
                switch(size) {
                    case "small":
                        price = 22;
                        break;
                    case "medium":
                        price = 29;
                        break;
                    case "large":
                        price = 35;
                        break;
                    default:
                        price = 0;
                }
                break;
        default:
            price = 0;
            alert("Please select a drink first.")
            document.querySelectorAll('input[name="size"]')[0].checked = false;
            document.querySelectorAll('input[name="size"]')[1].checked = false;
            document.querySelectorAll('input[name="size"]')[2].checked = false;
    };
    document.getElementById("price").textContent=price.toString();
}

function validateForm() {
    username = document.getElementsByName("name")[0].value.trim();
    
    drink = document.getElementsByName("drink")[0].value.toString();
    filled = true
    if(document.getElementById('small').checked) {
        size = "small"
    } else if(document.getElementById('medium').checked) {
        size = "medium"
    }else if(document.getElementById('large').checked) {
        size = "large"
    }else {
        size = ""
    }

    if(document.getElementById('normal').checked) {
        ice = "normal"
    } else if(document.getElementById('less').checked) {
        ice = "less"
    }else if(document.getElementById('without').checked) {
        ice = "without"
    }else {
        ice = ""
    }

    if(document.getElementById('100').checked) {
        sweetness = "100"
    } else if(document.getElementById('50').checked) {
        sweetness = "50"
    }else if(document.getElementById('0').checked) {
        sweetness = "0"
    }else {
        sweetness = ""
    }

    if(username == ""){
        alert("Please enter your name.")
        filled = false
    }
    if(drink == "Please Select"){
        alert("Please select a drink first.")
        filled = false
    }
    if(size == ""){
        alert("Please select a size.")
        filled = false
    }
    if(ice == ""){
        alert("Please select a ice preference.")
        filled = false
    }
    if(sweetness == ""){
        alert("Please select a sweetness level.")
        filled = false
    }
    return filled;
}

function placeOrder(event){
    event.preventDefault()
    if(validateForm()){
        username = document.getElementsByName("name")[0].value.trim();
    
        drink = document.getElementsByName("drink")[0].value.toString();

        if(document.getElementById('small').checked) {
            size = "small"
        } else if(document.getElementById('medium').checked) {
            size = "medium"
        }else if(document.getElementById('large').checked) {
            size = "large"
        }else {
            size = ""
        }
    
        if(document.getElementById('normal').checked) {
            ice = "normal"
        } else if(document.getElementById('less').checked) {
            ice = "less"
        }else if(document.getElementById('without').checked) {
            ice = "without"
        }else {
            ice = ""
        }
    
        if(document.getElementById('100').checked) {
            sweetness = "100"
        } else if(document.getElementById('50').checked) {
            sweetness = "50"
        }else if(document.getElementById('0').checked) {
            sweetness = "0"
        }else {
            sweetness = ""
        }

        orderData = [username,drink,size,ice,sweetness]
        localStorage.setItem("orders", orderData)
        $(".message").html("<div>Order placed successfully! Thank you for your order.</div>")
        $(".message > div").addClass("alert alert-success")
        $(".message").fadeIn(500).delay(3000).fadeOut(500, function(){
            $(".message > div").remove();
            document.getElementById("form").reset();
            document.getElementById("price").textContent= "0";
        })
        
    }
}

$(document).ready(function(){
    $("#name").on("input", $(this).val(),function(){
        if ($(this).val().trim()==""){
            $(this).addClass("error").removeClass("error-free");
        } else {
            $(this).addClass("error-free").removeClass("error");
        }
    });
    $("#drink").on("change",function(){
        if ($(this).find(":selected").val()==""){
            $(this).addClass("error").removeClass("error-free");
            $("#drinkimagediv").addClass("d-none");
            $("#drinkimage").attr("src","").attr("alt","");
        } else {
            $(this).addClass("error-free").removeClass("error");
            $("#drinkimagediv").removeClass("d-none");
            if ($(this).find(":selected").val()=="bubble-milktea"){
                $("#drinkimage").attr("src","assets/bubble-milktea.png").attr("alt","Bubble Milktea");
            } else if ($(this).find(":selected").val()=="iced-latte"){
                $("#drinkimage").attr("src","assets/iced-latte.jpg").attr("alt","Bubble Milktea");
            } else if ($(this).find(":selected").val()=="caramel-macchiato"){
                $("#drinkimage").attr("src","assets/caramel-macchiato.jpg").attr("alt","Caramel Macchiato");
            }
        }
    });
    
});