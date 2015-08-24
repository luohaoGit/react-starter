////////////webapi//////////////////

exports.getSchReport = () => {
    var deferred = new $.Deferred;

    var url = "http://111.211.167.6:8092/api.php/Home/Analyze/getSchReport.html?informid=1";
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
