const btn_validation = document.getElementById('valid_button');
const Region_dropdown = document.getElementById('select_dept');

let Select_DEPT = function () {
    switch (Region_dropdown) {
        case "LegacyCR":
            // code block
            window.location = "../../legacy_cr.html";
            break;
        case "LegacyIT":
            // code block
            window.location = "../../legacy_it.html";
            break;
        case "LegacyAM":
            //code block
             window.location = "../../legacy_am.html";
            break;
        case "LegacyGS":
            //code block
            window.location = "../../legacy_gs.html";
            break;
            
        default:
            Region_dropdown.placeholder = "Select a department";
            // code block
    }
}

btn_validation.addEventListener('change', Select_DEPT);
