document.getElementById("removeButton").addEventListener("click", function() {
    let select = document.getElementById("colorSelect");
    select.remove(select.selectedIndex);
});

