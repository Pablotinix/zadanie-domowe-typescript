let button = document.getElementById("button");
button.addEventListener("click", function () {
    let Polenazwy = document.getElementById("nazwa");
    let Poleilosci = document.getElementById("ilosc");
    let Wpisanailosc = Poleilosci.value;
    let Wpisnazwy = Polenazwy.value;
    if (Wpisnazwy.trim() === "" || Wpisanailosc.trim() === "") {
        alert("Prosze wypełnic wartosci do magazynu");
        return;
    }
    let NewElement = document.createElement("div");
    NewElement.textContent = Wpisnazwy + "- sztuki:" + Wpisanailosc;
    let lista = document.getElementById("lista");
    lista.append(NewElement);
    magazyn.push({
        id: Date.now(),
        nazwa: Wpisnazwy,
        ilosc: Number(Wpisanailosc)
    });
    Polenazwy.value = "";
    Poleilosci.value = "";
});
let magazyn = [];
