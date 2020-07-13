//return home page
module.exports.home=function(req,res){
    return res.end('<h1>This is the API project only uses specified URLs, and not have UI.</h1><br><h3> Read <a href="https://github.com/sunilkrbajpai/Hospital-API">Documentation</a> to get started.</h3>')
}