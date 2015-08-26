////////////webapi//////////////////

exports.getReport = (type) => {
    var deferred = new $.Deferred;

    var url = "http://111.211.167.6:8092/api.php/Home/Analyze/getSchReport.html?informid=1";
    switch(type)
    {
        case 0:
            url = "http://111.211.167.6:8092/api.php/Home/Analyze/getSchReport.html?informid=1";
            break;
        case 1:
            url = "http://111.211.167.6:8092/api.php/Home/Analyze/getClassReport.html?informid=1&schid=1";
            break;
        case 2:
            url = "http://111.211.167.6:8092/api.php/Home/Analyze/getStuReport.html?informid=1&schid=1&classid=11";
            break;
    }

    $.ajax({
        url: url,
        dataType: 'json',
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