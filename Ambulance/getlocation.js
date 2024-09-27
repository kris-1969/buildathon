const getlocation = () =>{
    alert("GETTING LOCATION");
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        });
        a
    }
};