var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "pixton-avatar-full-body (3).jpg", "pixton-avatar-full-body (5).jpg" , "pixton-avatar-full-body (2).jpg", "pixton-avatar-full-body (1).png", "IMG_0653 (1).JPG"];
var names = ["Family Book","Sahithi Ranga", "Sruthi Ranga", "Sridevi Ranga", "Sri Bala Kiran Kumar Ranga", "Family picture"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
