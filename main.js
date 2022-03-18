let molestar = prompt("Introduzca el nombre de la persona que quiere molestar (no pongas Vanesa eh!!!)");

molestar = molestar.toUpperCase().trim();

comenzar(molestar);


function comenzar(molestaAQuien){
while (molestaAQuien == "VANESA"){
    alert("ES HORA DE SUPERAR LA COSAS, YA NO PUEDES MOLESTAR A " +molestaAQuien);
    molestaAQuien = prompt("Introduzca el nombre de la persona que quiere molestar, te dije que no pongas VANESA").toUpperCase();
    molestar = molestaAQuien;

}
};

alert("Bien, el primer paso esta dado, aunque no deberias moletar a nadie mas, incluso a " +molestar);



