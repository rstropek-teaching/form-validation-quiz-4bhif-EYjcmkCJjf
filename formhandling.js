$(document).ready(function () {
    $("#firstName").change(function () {
        if (hasValue("#firstName")) {
            $("firstNameMandatory").hide();
        }
        else {
            $("firstNameMandatory").show();
        }
    });
    $("#lastName").change(function () {
        if (hasValue("#lastName")) {
            $("lastNameMandatory").hide();
        }
        else {
            $("lastNameMandatory").show();
        }
    });
    $("#email").change(function () {
        if (hasValue("#email") && $("#newsletter").is(":checked")) {
            $("lastNameMandatory").hide();
        }
        else {
            $("lastNameMandatory").show();
        }
    });
    if ($("#mediaChannelSelect").val == "Other") {
        $("otherMediaChannel").show();
    }
    else {
        $("otherMediaChannel").hide();
    }
    function hasValue(elem) {
        return $(elem).filter(function () { return $(this).val(); }).length > 0;
    }
});
