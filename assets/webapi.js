////////////webapi//////////////////

exports.getData = (type, param) => {
    var domain = "http://111.211.167.6:8094"
    var deferred = new $.Deferred;

    var url = domain + "/api.php/Home/Analyze/getSchReport.html?informid=1";
    switch(type)
    {
        case 0:
            url = domain + "/api.php/Home/Analyze/getSchReport.html?informid=1";
            break;
        case 1:
            url = domain + "/api.php/Home/Analyze/getClassReport.html?informid=1&schid=1";
            break;
        case 2:
            url = domain + "/api.php/Home/Analyze/getStuReport.html?informid=1&schid=1&classid=11";
            break;
        case 3:
            url = domain + "/api.php/home/testpaper/getschinfobyareaid?areaid=110206";
            break;
        case 4:
            url = domain + "/api.php/home/inform/getinform";
            break;
        case 5:
            url = domain + "/api.php/Home/Analyze/getSchApKp?informid=58&gradeid=1&subjectid=1";
            break;
    }

    $.ajax({
        url: url,
        dataType: 'json',
        data: param,
        success: function(data) {
            deferred.resolve(data);
        },
        error: function(err) {
            console.log(err);
            deferred.reject();
        }
    });

    return deferred.promise();
};